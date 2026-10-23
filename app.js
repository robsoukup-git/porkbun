/* Rob Soukup credentials portfolio — explorer logic (client-side only) */
(function () {
  "use strict";

  var ASSETS = "assets/credentials/";
  var THUMBS = "assets/thumbs/";

  /* ---------- helpers ---------- */
  function $(id) { return document.getElementById(id); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  var TODAY = new Date().toISOString().slice(0, 10);
  function statusOf(c) {
    if (c.validThrough) {
      return c.validThrough < TODAY ? "Expired" : "Current";
    }
    return "No expiration stated";
  }
  function yearOf(c) { return c.date ? c.date.slice(0, 4) : null; }
  function fmtDate(d) {
    if (!d) return "Date not stated";
    var parts = d.split("-");
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    if (parts.length === 3) return months[+parts[1] - 1] + " " + (+parts[2]) + ", " + parts[0];
    if (parts.length === 2) return months[+parts[1] - 1] + " " + parts[0];
    return parts[0];
  }
  function thumbImg(doc, alt) {
    var base = doc.file.replace(/\.[^.]+$/, "");
    var jpg = THUMBS + base + ".jpg", png = THUMBS + base + ".png";
    return '<img src="' + esc(doc.file.toLowerCase().slice(-4) === ".png" ? png : jpg) +
      '" onerror="this.onerror=null;this.src=\'' + esc(doc.file.toLowerCase().slice(-4) === ".png" ? jpg : png) + '\'"' +
      ' alt="' + esc(alt) + '" loading="lazy">';
  }
  function hasCertDoc(c) { return c.docs.some(function (d) { return d.kind === "certificate"; }); }
  function statusClass(s) {
    return s === "Current" ? "status-current" : s === "Expired" ? "status-expired" : "status-none";
  }

  /* ---------- search ---------- */
  function haystack(c) {
    return [c.title, c.issuer, c.category, c.type, c.description, yearOf(c) || "", c.tags.join(" ")]
      .join(" ").toLowerCase();
  }
  // token matches if it appears as a substring, or as a fuzzy subsequence (1 typo tolerance)
  function tokenMatch(token, text) {
    if (text.indexOf(token) !== -1) return true;
    if (token.length < 4) return false;
    var ti = 0, misses = 0;
    for (var i = 0; i < text.length && ti < token.length; i++) {
      if (text[i] === token[ti]) ti++;
      else if (ti > 0) { misses++; if (misses > 1) return false; }
    }
    return ti === token.length;
  }
  function matchesSearch(c, q) {
    if (!q) return true;
    var text = haystack(c);
    return q.toLowerCase().split(/\s+/).filter(Boolean).every(function (t) { return tokenMatch(t, text); });
  }

  /* ---------- state ---------- */
  var state = {
    q: "", iss: [], cat: [], type: [], year: [], status: [],
    cert: [], rus: [], sort: "newest", view: "grid"
  };
  function readURL() {
    var p = new URLSearchParams(location.search);
    function multi(k) { return p.get(k) ? p.get(k).split("|") : []; }
    state.q = p.get("q") || "";
    state.iss = multi("iss"); state.cat = multi("cat"); state.type = multi("type");
    state.year = multi("year"); state.status = multi("status");
    state.cert = multi("cert"); state.rus = multi("rus");
    state.sort = p.get("sort") || "newest";
    state.view = p.get("view") || "grid";
  }
  function writeURL() {
    var p = new URLSearchParams();
    function multi(k, v) { if (v.length) p.set(k, v.join("|")); }
    if (state.q) p.set("q", state.q);
    multi("iss", state.iss); multi("cat", state.cat); multi("type", state.type);
    multi("year", state.year); multi("status", state.status);
    multi("cert", state.cert); multi("rus", state.rus);
    if (state.sort !== "newest") p.set("sort", state.sort);
    if (state.view !== "grid") p.set("view", state.view);
    var s = p.toString();
    var hash = currentModal ? "#credential=" + currentModal : "";
    history.replaceState(null, "", location.pathname + (s ? "?" + s : "") + hash);
  }

  /* ---------- filtering ---------- */
  function groupMatch(value, selected) { return !selected.length || selected.indexOf(value) !== -1; }
  function passFacets(c, skip) {
    if (skip !== "iss" && !groupMatch(c.issuer, state.iss)) return false;
    if (skip !== "cat" && !groupMatch(c.category, state.cat)) return false;
    if (skip !== "type" && !groupMatch(c.type, state.type)) return false;
    if (skip !== "year" && !groupMatch(yearOf(c) || "Unknown", state.year)) return false;
    if (skip !== "status" && !groupMatch(statusOf(c), state.status)) return false;
    if (skip !== "cert" && !groupMatch(hasCertDoc(c) ? "yes" : "no", state.cert)) return false;
    if (skip !== "rus" && !groupMatch(c.rus ? "yes" : "no", state.rus)) return false;
    return true;
  }
  function filtered(skip, includeFlagship) {
    return CREDENTIALS.filter(function (c) {
      if (!includeFlagship && c.flagship) return false;
      return matchesSearch(c, state.q) && passFacets(c, skip);
    });
  }
  function sortCreds(list) {
    var arr = list.slice();
    function dateKey(c) { return c.date || ""; }
    arr.sort(function (a, b) {
      if (a.pinLast && !b.pinLast) return 1;
      if (b.pinLast && !a.pinLast) return -1;
      switch (state.sort) {
        case "oldest": return (dateKey(a) || "zzzz").localeCompare(dateKey(b) || "zzzz");
        case "title": return a.title.localeCompare(b.title);
        case "issuer": return a.issuer.localeCompare(b.issuer) || dateKey(b).localeCompare(dateKey(a));
        case "category": return a.category.localeCompare(b.category) || dateKey(b).localeCompare(dateKey(a));
        default: return (dateKey(b) || "").localeCompare(dateKey(a) || ""); // newest
      }
    });
    return arr;
  }

  /* ---------- facets ---------- */
  var FACETS = [
    { key: "iss", label: "Issuer / Manufacturer", get: function (c) { return c.issuer; } },
    { key: "cat", label: "Category", get: function (c) { return c.category; } },
    { key: "type", label: "Type", get: function (c) { return c.type; } },
    { key: "year", label: "Year", get: function (c) { return yearOf(c) || "Unknown"; }, desc: true },
    { key: "status", label: "Status", get: function (c) { return statusOf(c); } },
    { key: "cert", label: "Certificate on file", get: function (c) { return hasCertDoc(c) ? "yes" : "no"; } },
    { key: "rus", label: "Carries CTS renewal units", get: function (c) { return c.rus ? "yes" : "no"; } }
  ];
  function facetValues(f) {
    var counts = {}, order = [];
    filtered(f.key, false).forEach(function (c) {
      var v = f.get(c);
      if (!(v in counts)) { counts[v] = 0; order.push(v); }
      counts[v]++;
    });
    // keep zero-count values that are selected so they can be unchecked
    state[f.key].forEach(function (v) { if (!(v in counts)) { counts[v] = 0; order.push(v); } });
    order.sort(function (a, b) {
      if (f.desc) return String(b).localeCompare(String(a));
      if (f.key === "status") { var o = { "Current": 0, "No expiration stated": 1, "Expired": 2 }; return (o[a] - o[b]) || a.localeCompare(b); }
      return a.localeCompare(b);
    });
    return order.map(function (v) { return { value: v, count: counts[v] }; });
  }
  function renderFacets() {
    var root = $("facet-root");
    root.innerHTML = "";
    FACETS.forEach(function (f) {
      var wrap = document.createElement("div");
      wrap.className = "facet";
      var h = document.createElement("h4");
      h.textContent = f.label;
      h.id = "facet-" + f.key;
      wrap.appendChild(h);
      var group = document.createElement("div");
      group.setAttribute("role", "group");
      group.setAttribute("aria-labelledby", h.id);
      facetValues(f).forEach(function (o) {
        var lab = document.createElement("label");
        var cb = document.createElement("input");
        cb.type = "checkbox";
        cb.checked = state[f.key].indexOf(o.value) !== -1;
        cb.setAttribute("aria-label", f.label + ": " + o.value + " (" + o.count + ")");
        cb.addEventListener("change", function () {
          toggle(state[f.key], o.value);
          render();
        });
        var span = document.createElement("span");
        span.textContent = o.value;
        var count = document.createElement("span");
        count.className = "count";
        count.textContent = o.count;
        lab.appendChild(cb); lab.appendChild(span); lab.appendChild(count);
        group.appendChild(lab);
      });
      wrap.appendChild(group);
      root.appendChild(wrap);
    });
  }
  function toggle(arr, v) {
    var i = arr.indexOf(v);
    if (i === -1) arr.push(v); else arr.splice(i, 1);
  }

  /* ---------- chips ---------- */
  var CHIP_LABELS = { iss: "Issuer", cat: "Category", type: "Type", year: "Year", status: "Status", cert: "Certificate", rus: "RUs" };
  function renderChips() {
    var box = $("chips");
    box.innerHTML = "";
    Object.keys(CHIP_LABELS).forEach(function (k) {
      state[k].forEach(function (v) {
        var chip = document.createElement("span");
        chip.className = "chip";
        chip.appendChild(document.createTextNode(CHIP_LABELS[k] + ": " + v + " "));
        var x = document.createElement("button");
        x.type = "button";
        x.textContent = "×";
        x.setAttribute("aria-label", "Remove filter " + CHIP_LABELS[k] + " " + v);
        x.addEventListener("click", function () { toggle(state[k], v); render(); });
        chip.appendChild(x);
        box.appendChild(chip);
      });
    });
    if (state.q) {
      var chip = document.createElement("span");
      chip.className = "chip";
      chip.appendChild(document.createTextNode('Search: "' + state.q + '" '));
      var x = document.createElement("button");
      x.type = "button"; x.textContent = "×";
      x.setAttribute("aria-label", "Clear search");
      x.addEventListener("click", function () { state.q = ""; $("search").value = ""; render(); });
      chip.appendChild(x);
      box.appendChild(chip);
    }
  }

  /* ---------- results ---------- */
  function cardHTML(c) {
    var doc = c.docs[0];
    var st = statusOf(c);
    var isPdf = /\.pdf$/i.test(doc.file);
    return '<button type="button" class="card" data-id="' + esc(c.id) + '" aria-label="View details: ' + esc(c.title) + '">' +
      '<span class="card-thumb">' + thumbImg(doc, "") +
      (isPdf ? '<span class="pdf-tag">PDF</span>' : '') +
      (c.docs.length > 1 ? '<span class="doc-count">' + c.docs.length + ' docs</span>' : '') +
      "</span>" +
      '<span class="card-body">' +
      '<span class="card-cat">' + esc(c.category) + '</span>' +
      '<span class="card-title">' + esc(c.title) + "</span>" +
      '<span class="card-meta"><span>' + esc(c.issuer) + "</span><span>" + esc(fmtDate(c.date)) + "</span>" +
      '<span class="status ' + statusClass(st) + '">' + esc(st) + "</span>" +
      (c.rus ? '<span class="ru-tag">' + esc(c.rus) + ' RUs</span>' : "") +
      "</span></span></button>";
  }
  function renderResults(list) {
    var box = $("results");
    var pinned = $("pinned-slot");
    var flagship = CREDENTIALS.find(function (c) { return c.flagship; });
    if (state.view === "grid") {
      box.className = "grid";
      box.innerHTML = list.map(cardHTML).join("");
      pinned.hidden = false;
      pinned.innerHTML = '<p class="pinned-note">Flagship credential</p>' + cardHTML(flagship);
      pinned.querySelector(".card").style.maxWidth = "340px";
    } else {
      box.className = "";
      pinned.hidden = false;
      pinned.innerHTML = '<p class="pinned-note">Flagship credential</p>' + cardHTML(flagship);
      pinned.querySelector(".card").style.maxWidth = "340px";
      var rows = list.map(function (c) {
        var st = statusOf(c);
        return "<tr data-id=\"" + esc(c.id) + "\" tabindex=\"0\" role=\"button\" aria-label=\"View details: " + esc(c.title) + "\">" +
          '<td class="lthumb">' + thumbImg(c.docs[0], "") + '</td>' +
          '<td class="ltitle">' + esc(c.title) + "</td><td>" + esc(c.issuer) + "</td>" +
          "<td>" + esc(fmtDate(c.date)) + "</td><td>" + esc(c.category) + "</td>" +
          '<td><span class="status ' + statusClass(st) + '">' + esc(st) + "</span></td></tr>";
      }).join("");
      var arrow = function (k) { return ""; };
      box.innerHTML = '<table class="list-table"><thead><tr>' +
        '<th scope="col"></th>' +
        '<th scope="col"><button type="button" data-sort="title">Title</button></th>' +
        '<th scope="col"><button type="button" data-sort="issuer">Issuer</button></th>' +
        '<th scope="col"><button type="button" data-sort="newest">Date</button></th>' +
        '<th scope="col"><button type="button" data-sort="category">Category</button></th>' +
        "<th scope=\"col\">Status</th></tr></thead><tbody>" + rows + "</tbody></table>";
      box.querySelectorAll("th button").forEach(function (b) {
        b.addEventListener("click", function () { state.sort = b.getAttribute("data-sort"); render(); });
      });
    }
    box.querySelectorAll("[data-id]").forEach(function (el) {
      var open = function () { openModal(el.getAttribute("data-id")); };
      el.addEventListener("click", open);
      el.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
    });
    pinned.querySelectorAll("[data-id]").forEach(function (el) {
      el.addEventListener("click", function () { openModal(el.getAttribute("data-id")); });
    });
    var n = list.length + 1;
    $("result-count").textContent = n + " of " + CREDENTIALS.length + " credentials";
    $("empty-state").hidden = list.length !== 0;
  }

  /* ---------- modal ---------- */
  var currentModal = null, lastFocus = null;
  function openModal(id) {
    var c = CREDENTIALS.find(function (x) { return x.id === id; });
    if (!c) return;
    currentModal = id;
    lastFocus = document.activeElement;
    var st = statusOf(c);
    var facts = '<div class="modal-facts">' +
      "<span><strong>Issuer:</strong> " + esc(c.issuer) + "</span>" +
      "<span><strong>Date:</strong> " + esc(fmtDate(c.date)) + "</span>" +
      (c.validThrough ? "<span><strong>Valid through:</strong> " + esc(fmtDate(c.validThrough)) + "</span>" : "") +
      '<span><strong>Status:</strong> <span class="status ' + statusClass(st) + '">' + esc(st) + "</span></span>" +
      "<span><strong>Type:</strong> " + esc(c.type) + "</span>" +
      (c.rus ? "<span><strong>Renewal units:</strong> " + esc(c.rus) + "</span>" : "") +
      (c.credentialId ? "<span><strong>Certificate no.:</strong> " + esc(c.credentialId) + " <em>(as printed on certificate)</em></span>" : "") +
      "</div>";
    var docs = c.docs.map(function (d, i) {
      var isPdf = /\.pdf$/i.test(d.file);
      var isImg = !isPdf;
      return '<li class="doc"><button type="button" data-doc="' + i + '" aria-label="Open ' + esc(d.label) + '">' +
        thumbImg(d, d.alt) +
        '<span class="doc-label">' + esc(d.label) + (isPdf ? " · PDF" : "") + "</span></button></li>";
    }).join("");
    var verify = c.flagship
      ? '<p class="modal-verify"><a href="https://www.avixa.org/certification" target="_blank" rel="noopener">Verify this credential at AVIXA.org →</a></p>'
      : "";
    $("modal-body").innerHTML =
      (c.flagship ? '<p class="modal-flag">Flagship credential</p>' : "") +
      '<h2 id="modal-title">' + esc(c.title) + "</h2>" +
      '<p class="modal-issuer">' + esc(c.issuer) + " · " + esc(c.category) + "</p>" +
      facts +
      '<p class="modal-desc">' + esc(c.description) + "</p>" +
      '<ul class="modal-tags">' + c.tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>" +
      verify +
      "<h3>Documents (" + c.docs.length + ")</h3>" +
      '<ul class="doc-list">' + docs + "</ul>" +
      '<div class="pdf-viewer" id="pdf-viewer" hidden></div>';
    $("modal-body").querySelectorAll("[data-doc]").forEach(function (b) {
      b.addEventListener("click", function () { openDoc(c, +b.getAttribute("data-doc")); });
    });
    $("modal-root").hidden = false;
    document.body.style.overflow = "hidden";
    $("modal-root").querySelector(".modal-close").focus();
    writeURL();
  }
  function openDoc(c, i) {
    var d = c.docs[i];
    var url = ASSETS + encodeURI(d.file);
    if (/\.pdf$/i.test(d.file)) {
      var v = $("pdf-viewer");
      v.hidden = false;
      v.innerHTML = '<div class="pdf-actions"><strong>' + esc(d.label) + "</strong>" +
        '<a href="' + url + '" download>Download PDF</a>' +
        '<a href="' + url + '" target="_blank" rel="noopener">Open in new tab</a></div>' +
        '<embed src="' + url + '" type="application/pdf" title="' + esc(d.alt) + '">';
      v.scrollIntoView({ behavior: "smooth", block: "nearest" });
    } else {
      $("lightbox-img").src = url;
      $("lightbox-img").alt = d.alt;
      $("lightbox-img").classList.remove("zoomed");
      $("lightbox-cap").textContent = d.label + " — " + c.title;
      $("lightbox-root").hidden = false;
      $("lightbox-root").querySelector(".modal-close").focus();
    }
  }
  function closeModal() {
    $("modal-root").hidden = true;
    document.body.style.overflow = "";
    currentModal = null;
    writeURL();
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  function closeLightbox() {
    $("lightbox-root").hidden = true;
    $("lightbox-img").src = "";
    var dlg = $("modal-root");
    if (!dlg.hidden) dlg.querySelector(".modal-close").focus();
  }

  /* focus trap for modal */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (!$("lightbox-root").hidden) closeLightbox();
      else if (!$("modal-root").hidden) closeModal();
      else if ($("filters").classList.contains("open")) { $("filters").classList.remove("open"); $("filters-toggle").setAttribute("aria-expanded", "false"); }
      return;
    }
    if (e.key === "/" && !/^(input|textarea|select)$/i.test(document.activeElement.tagName)) {
      e.preventDefault();
      $("search").focus();
      return;
    }
    if (e.key === "Tab" && !$("modal-root").hidden && $("lightbox-root").hidden) {
      var f = $("modal-root").querySelectorAll("button, a[href], input, select, [tabindex]");
      f = Array.prototype.filter.call(f, function (el) { return el.offsetParent !== null; });
      if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  $("modal-root").addEventListener("click", function (e) { if (e.target.hasAttribute("data-close")) closeModal(); });
  $("lightbox-root").addEventListener("click", function (e) { if (e.target.hasAttribute("data-close-lb")) closeLightbox(); });
  $("lightbox-img").addEventListener("click", function () { $("lightbox-img").classList.toggle("zoomed"); });

  /* ---------- stats ---------- */
  function renderStats() {
    var issuers = {};
    var minD = null, maxD = null, withDocs = 0;
    CREDENTIALS.forEach(function (c) {
      issuers[c.issuer] = 1;
      if (c.docs.length) withDocs++;
      if (c.date) {
        if (!minD || c.date < minD) minD = c.date;
        if (!maxD || c.date > maxD) maxD = c.date;
      }
    });
    var span = minD.slice(0, 4) + "–" + maxD.slice(0, 4);
    $("stats").innerHTML =
      "<div><dt>Credentials</dt><dd>" + CREDENTIALS.length + "</dd></div>" +
      "<div><dt>Issuers</dt><dd>" + Object.keys(issuers).length + "</dd></div>" +
      "<div><dt>Training span</dt><dd>" + span + "</dd></div>" +
      "<div><dt>With documents</dt><dd>" + withDocs + "</dd></div>";
  }

  /* ---------- theme ---------- */
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    $("theme-toggle").setAttribute("aria-pressed", t === "dark" ? "true" : "false");
    try { localStorage.setItem("rs-theme", t); } catch (e) {}
  }
  (function initTheme() {
    var t = "auto";
    try { t = localStorage.getItem("rs-theme") || "auto"; } catch (e) {}
    applyTheme(t);
    $("theme-toggle").addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      applyTheme(cur === "dark" ? "light" : cur === "light" ? "auto" : "dark");
    });
  })();

  /* ---------- render ---------- */
  function render() {
    renderFacets();
    renderChips();
    renderResults(sortCreds(filtered(null, false)));
    $("sort").value = state.sort;
    $("view-grid").setAttribute("aria-pressed", state.view === "grid" ? "true" : "false");
    $("view-list").setAttribute("aria-pressed", state.view === "list" ? "true" : "false");
    writeURL();
  }
  function clearAll() {
    state.q = ""; $("search").value = "";
    ["iss", "cat", "type", "year", "status", "cert", "rus"].forEach(function (k) { state[k] = []; });
    render();
  }

  /* ---------- wire up ---------- */
  var searchTimer = null;
  $("search").addEventListener("input", function (e) {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () { state.q = e.target.value.trim(); render(); }, 120);
  });
  $("sort").addEventListener("change", function (e) { state.sort = e.target.value; render(); });
  $("view-grid").addEventListener("click", function () { state.view = "grid"; render(); });
  $("view-list").addEventListener("click", function () { state.view = "list"; render(); });
  $("clear-all").addEventListener("click", clearAll);
  $("empty-clear").addEventListener("click", clearAll);
  $("filters-toggle").addEventListener("click", function () {
    var f = $("filters");
    var open = f.classList.toggle("open");
    $("filters-toggle").setAttribute("aria-expanded", open ? "true" : "false");
  });
  $("year").textContent = new Date().getFullYear();

  window.addEventListener("hashchange", function () {
    var m = location.hash.match(/#credential=([\w-]+)/);
    if (m) openModal(m[1]);
    else if (!$("modal-root").hidden) closeModal();
  });

  /* header badge + hero link use hash */
  document.querySelectorAll('a[href="#credential=cts-i"]').forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); openModal("cts-i"); });
  });

  /* ---------- init ---------- */
  renderStats();
  readURL();
  $("search").value = state.q;
  render();
  var hm = location.hash.match(/#credential=([\w-]+)/);
  if (hm) openModal(hm[1]);
})();
