/* ============================================================================
   CREDENTIALS DATA — Rob Soukup career portfolio
   ----------------------------------------------------------------------------
   HOW TO ADD A NEW CREDENTIAL
   1. Copy one of the records below and paste it at the end of the array.
   2. Give it a unique "id" (lowercase, hyphens, e.g. "crestron-301").
   3. Fill in: title, issuer, category, type ("Certification" | "Course Completion" | "Webinar"),
      date ("YYYY-MM-DD", or "YYYY-MM" / "YYYY" when only part is known, or null).
   4. "validThrough": set only if the certificate states an end date; otherwise null.
      Status is derived automatically: Expired (validThrough in the past),
      Current (validThrough in the future), else "No expiration stated".
   5. Write a 1-2 sentence "description" using ONLY facts from the certificate
      (issuer, title, date, topic). Never invent scores, hours, RUs, or expiry.
   6. Add 3-6 searchable "tags".
   7. Put the certificate files in /assets/credentials/ and list them in "docs":
        { file: "Name-of-file.pdf",
          label: "Certificate (PDF)",
          kind: "certificate" | "badge" | "imagery" | "banner",
          alt: "Meaningful description of the image for screen readers" }
      The first doc is the primary document shown on the card.
      kind "badge" = logo/badge image used as the card badge, not the certificate.
   8. If anything about the record is uncertain, set "needs_review": true and
      explain in "review_note" (visitors never see these two fields).
   9. Thumbnails are generated automatically from /assets/thumbs/ using the
      same file name with a .jpg extension (or .png for transparent badges).
   ========================================================================== */

const CREDENTIALS = [
{
  id: "cts-i",
  title: "AVIXA CTS-I: Certified Technology Specialist, Installation",
  issuer: "AVIXA",
  category: "AVIXA & Industry",
  type: "Certification",
  date: "2020-10-22",
  validThrough: "2029-10-31",
  flagship: true,
  credentialId: "402320",
  description: "AVIXA's installation-focused specialty credential under the Certified Technology Specialist program, effective October 22, 2020 and renewed through October 31, 2029. AVIXA, the Audiovisual and Integrated Experience Association, develops ANSI-accredited standards for the professional AV industry.",
  tags: ["CTS-I", "AVIXA", "installation", "AV standards", "commissioning"],
  rus: null,
  docs: [
    { file: "CTS-I-Rob-Soukup.pdf", label: "CTS-I certificate (PDF)", kind: "certificate", alt: "AVIXA CTS-I certificate for Robert Soukup, effective October 22, 2020, expiring October 31, 2029" },
    { file: "CTS-I-Black.png", label: "CTS-I badge", kind: "badge", alt: "Official AVIXA CTS-I digital badge, black and red" }
  ]
},
{
  id: "cts",
  title: "AVIXA CTS: Certified Technology Specialist",
  issuer: "AVIXA (formerly InfoComm)",
  category: "AVIXA & Industry",
  type: "Certification",
  date: null,
  validThrough: null,
  description: "The foundational AVIXA credential for AV professionals. Earlier course certificates list \u201cCTS\u201d after the name, and InfoComm became AVIXA in 2017.",
  tags: ["CTS", "AVIXA", "InfoComm", "AV fundamentals"],
  rus: null,
  needs_review: true,
  review_note: "Original CTS date not supplied; no certificate document on file. The PNG matched to the old blog post turned out to be a Legrand IGMP certificate and is now its own record.",
  docs: [
    { file: "AVIXA_CTS_Color_RGB.png", label: "CTS badge", kind: "badge", alt: "Official AVIXA CTS digital badge, red and charcoal" },
    { file: "CTS-General_Logo-FIN.jpg", label: "CTS badge (InfoComm era)", kind: "badge", alt: "InfoComm-era CTS General badge, black and red" }
  ]
},
{
  id: "anp",
  title: "AVIXA Audiovisual Network Professional (ANP)",
  issuer: "AVIXA",
  category: "AVIXA & Industry",
  type: "Certification",
  date: "2026-02",
  validThrough: "2029-02-28",
  description: "AVIXA credential covering networking for AV systems. The certificate shows an effective date of February 17, 2026 and an expiration date of February 28, 2029.",
  tags: ["ANP", "AVIXA", "networking", "AV over IP", "VLAN"],
  rus: null,
  docs: [
    { file: "AudiovisualNetworkProfessional.jpg", label: "ANP certificate (image)", kind: "certificate", alt: "AVIXA Audiovisual Network Professional certificate for Robert Soukup, effective February 17, 2026" }
  ]
},
{
  id: "anp-prep",
  title: "ANP Exam Preparation Course",
  issuer: "AVIXA",
  category: "AVIXA & Industry",
  type: "Course Completion",
  date: "2026-02-13",
  validThrough: null,
  description: "Preparation course for the AVIXA Audiovisual Network Professional exam, completed February 13, 2026.",
  tags: ["ANP", "AVIXA", "exam prep", "networking"],
  rus: null,
  docs: [
    { file: "ANP-Prep-cert-2026-02.jpg", label: "Course certificate (image)", kind: "certificate", alt: "AVIXA course certificate for Audiovisual Network Professional (ANP) Prep, Robert Soukup, February 13, 2026" }
  ]
},
{
  id: "essentials-av",
  title: "AVIXA/InfoComm: Essentials of AV Technology",
  issuer: "AVIXA (InfoComm)",
  category: "AV Fundamentals & Design",
  type: "Course Completion",
  date: "2015-05-28",
  validThrough: null,
  description: "Online fundamentals course covering core AV technology concepts, completed May 28, 2015. The certificate lists \u201cCTS\u201d after the name.",
  tags: ["AV fundamentals", "InfoComm", "AVIXA", "online course"],
  rus: null,
  docs: [
    { file: "Essentials-of-AV-Technology.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Certificate of completion for Essentials of AV Technology, Robert Soukup, May 28, 2015" }
  ]
},
{
  id: "av-math",
  title: "AVIXA/InfoComm: AV Math",
  issuer: "AVIXA (InfoComm)",
  category: "AV Fundamentals & Design",
  type: "Course Completion",
  date: "2015-06-17",
  validThrough: null,
  description: "Online course on the calculations used in AV system design, completed June 17, 2015.",
  tags: ["AV math", "InfoComm", "AVIXA", "system design"],
  rus: null,
  docs: [
    { file: "AV-Math-Online.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Certificate of completion for AV Math Online, Robert Soukup, June 17, 2015" }
  ]
},
{
  id: "quick-start",
  title: "AVIXA/InfoComm: Quick Start to the AV Industry",
  issuer: "AVIXA (InfoComm)",
  category: "AV Fundamentals & Design",
  type: "Course Completion",
  date: "2015-09-21",
  validThrough: null,
  description: "Introductory course on the AV industry, completed September 21, 2015.",
  tags: ["AV industry", "InfoComm", "AVIXA", "introductory"],
  rus: null,
  docs: [
    { file: "Quick-Start-to-the-AV-Industry.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Certificate of completion for Quick Start to the AV Industry, Robert Soukup, September 21, 2015" }
  ]
},
{
  id: "av-design-l1",
  title: "AVIXA/InfoComm: AV Design Level 1, Environment",
  issuer: "AVIXA (InfoComm)",
  category: "AV Fundamentals & Design",
  type: "Course Completion",
  date: "2015-11-02",
  validThrough: null,
  description: "Online AV design course focused on the room environment, completed November 2, 2015.",
  tags: ["AV design", "InfoComm", "AVIXA", "room environment"],
  rus: null,
  docs: [
    { file: "AV-Design-Level-1.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Certificate of completion for AV Design Level 1 Environment, Robert Soukup, November 2, 2015" }
  ]
},
{
  id: "intro-install",
  title: "AVIXA: Introduction to Installation",
  issuer: "AVIXA",
  category: "AV Fundamentals & Design",
  type: "Course Completion",
  date: "2020-05-01",
  validThrough: null,
  description: "Online course introducing AV installation practices, completed May 1, 2020, shortly before earning CTS-I.",
  tags: ["installation", "AVIXA", "online course"],
  rus: null,
  docs: [
    { file: "RSoukup - Avixa - Intro to Install 050120.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Course certificate for AVIXA Introduction to Installation, Robert Soukup, May 1, 2020" }
  ]
},
{
  id: "extron-ave",
  title: "Extron AV Associate",
  issuer: "Extron",
  category: "AV Fundamentals & Design",
  type: "Certification",
  date: "2016-06-09",
  validThrough: null,
  description: "Extron\u2019s AV Associate certification. The file on record is an \u201cExtron Certified AV Associate\u201d banner image; no standalone certificate document was provided.",
  tags: ["Extron", "AV Associate", "certified"],
  rus: null,
  needs_review: true,
  review_note: "Verify the banner image is acceptable as the document of record; no separate certificate was provided.",
  docs: [
    { file: "banner-extron-a.jpg", label: "Extron Certified AV Associate banner", kind: "badge", alt: "Extron Certified AV Associate banner showing AV products and the Extron logo" }
  ]
},
{
  id: "webinar-image-size",
  title: "AVIXA/InfoComm Webinar: Displayed Image Size for 2D Content",
  issuer: "AVIXA (InfoComm)",
  category: "Displays, Video & Projection",
  type: "Webinar",
  date: "2015-07-09",
  validThrough: null,
  description: "Webinar on how large displayed 2D content needs to be for viewers \u2014 \u201cHow Big is Big Enough?\u201d \u2014 completed July 9, 2015.",
  tags: ["webinar", "projection", "image size", "InfoComm"],
  rus: null,
  docs: [
    { file: "Webinare Display Image Size for 2D.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Certificate of completion for Display Image Size for 2D Content webinar, Robert Soukup, July 9, 2015" }
  ]
},
{
  id: "webinar-video-formats",
  title: "AVIXA/InfoComm Webinar: Understanding Digital Video Formats",
  issuer: "AVIXA (InfoComm)",
  category: "Displays, Video & Projection",
  type: "Webinar",
  date: "2015-08-05",
  validThrough: null,
  description: "Webinar on digital video formats, \u201cFrom TMDS to ThunderBolt\u201d, completed August 5, 2015.",
  tags: ["webinar", "video formats", "DVI", "Thunderbolt", "InfoComm"],
  rus: null,
  needs_review: true,
  review_note: "Date taken from the certificate itself (August 5, 2015); other sources showed August 27, 2015.",
  docs: [
    { file: "Webinare Understanding Digital Video Formats.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Certificate of completion for Understanding Digital Video Formats webinar, Robert Soukup, August 5, 2015" }
  ]
},
{
  id: "webinar-4k",
  title: "4K: No Myths, No Exaggerations, Just the Facts (Webinar)",
  issuer: "AVIXA (InfoComm)",
  category: "Displays, Video & Projection",
  type: "Webinar",
  date: "2019-09-30",
  validThrough: null,
  description: "Webinar on 4K video offered by rAVe [PUBS], completed September 30, 2019. Approved for 1.5 CTS, CTS-I and CTS-D renewal units.",
  tags: ["webinar", "4K", "video", "renewal units"],
  rus: "1.5 CTS / CTS-I / CTS-D",
  docs: [
    { file: "4K webinar CTS RU-Certificate.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Certificate of completion for the 4K webinar, Rob Soukup, September 30, 2019" }
  ]
},
{
  id: "webinar-enterprise-it",
  title: "Enterprise IT Webinar: How to Get Kicked Off a Corporate Network Without Even Trying",
  issuer: "AVIXA",
  category: "AV over IP & Networking",
  type: "Webinar",
  date: "2026-01-29",
  validThrough: null,
  description: "Webinar on AV devices and corporate network security, completed January 29, 2026.",
  tags: ["webinar", "network security", "Enterprise IT", "AVIXA"],
  rus: null,
  needs_review: true,
  review_note: "The webinar announcement graphic shows CTS/ANP RU badges, but no RU count is stated anywhere, so none is claimed.",
  docs: [
    { file: "Enterprise-IT.jpg", label: "Course certificate (image)", kind: "certificate", alt: "AVIXA course certificate for Enterprise IT Power Hour: How to Get Kicked off a Corporate Network Without Even Trying, Robert Soukup, January 29, 2026" },
    { file: "AVIXIA-NETWORK-KICKED-OFF.jpg", label: "Webinar announcement", kind: "imagery", alt: "Webinar announcement graphic for Enterprise IT Power Hour, January 28, 2026" }
  ]
},
{
  id: "biamp-tesiraforte",
  title: "Biamp TesiraFORT\u00c9 Certification",
  issuer: "Biamp",
  category: "Audio & DSP",
  type: "Course Completion",
  date: "2015-08-03",
  validThrough: null,
  description: "Biamp\u2019s TesiraFORT\u00c9 DSP training, completed 3 August 2015.",
  tags: ["Biamp", "Tesira", "DSP", "audio processing"],
  rus: null,
  needs_review: true,
  review_note: "Biamp-Certification-cropped.pdf is titled \u201cTESIRA TRAINING COURSE\u201d (not TesiraFORT\u00c9) with no visible date, so it was kept rather than treated as a duplicate. Confirm it belongs here.",
  docs: [
    { file: "RSoukup - Biamp TesiraFORTE Certificate 080315.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Biamp TesiraFORTE certificate for Rob Soukup, August 3, 2015" },
    { file: "Biamp-Certification-cropped.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Biamp TesiraFORTE certificate, cropped copy" },
    { file: "biamp.jpg", label: "Biamp logo", kind: "badge", alt: "Biamp Systems logo" }
  ]
},
{
  id: "biamp-voip",
  title: "Biamp Tesira VoIP Level 1",
  issuer: "Biamp",
  category: "Audio & DSP",
  type: "Course Completion",
  date: "2015-10-05",
  validThrough: null,
  description: "Biamp training on VoIP functionality in Tesira, completed 5 October 2015.",
  tags: ["Biamp", "Tesira", "VoIP", "telephony"],
  rus: null,
  docs: [
    { file: "RSoukup - BIAMP VoIP Level 1 100515.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Biamp Tesira VoIP Level 1 certificate for Rob Soukup, October 5, 2015" },
    { file: "Biamp-VoIP_Certified_Logo.jpeg", label: "VoIP Certified badge", kind: "badge", alt: "Biamp Education Experience VoIP Certified badge" }
  ]
},
{
  id: "biamp-tesiraserver-io",
  title: "Biamp TesiraSERVER-IO Certification",
  issuer: "Biamp",
  category: "Audio & DSP",
  type: "Course Completion",
  date: "2018-04-09",
  validThrough: null,
  description: "Biamp training on the TesiraSERVER-IO platform, completed 9 April 2018.",
  tags: ["Biamp", "Tesira", "TesiraSERVER-IO", "DSP"],
  rus: null,
  docs: [
    { file: "Tesira-SERVERSERVER-IO_Tesira-SERVERSERVER-IO-Certificate.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Biamp TesiraSERVER-IO certificate for Rob Soukup, April 9, 2018" }
  ]
},
{
  id: "biamp-process-l1",
  title: "Biamp Tesira Process Level 1",
  issuer: "Biamp",
  category: "Audio & DSP",
  type: "Course Completion",
  date: "2026-09-24",
  validThrough: null,
  description: "Biamp Tesira audio-processing training, Level 1.",
  tags: ["Biamp", "Tesira", "DSP", "audio processing"],
  rus: null,
  needs_review: true,
  review_note: "Date taken from the filename (092426); the old blog post dated this 2015.",
  docs: [
    { file: "RSoukup - Biamp Process L1 092426.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Biamp Tesira Process Level 1 certificate for Rob Soukup" }
  ]
},
{
  id: "biamp-process-l2",
  title: "Biamp Tesira Process Level 2",
  issuer: "Biamp",
  category: "Audio & DSP",
  type: "Course Completion",
  date: "2026-09-25",
  validThrough: null,
  description: "Biamp Tesira audio-processing training, Level 2.",
  tags: ["Biamp", "Tesira", "DSP", "audio processing"],
  rus: null,
  needs_review: true,
  review_note: "Date taken from the filename (092526).",
  docs: [
    { file: "RSoukup - Biamp Process L2 092526.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Biamp Tesira Process Level 2 certificate for Rob Soukup" }
  ]
},
{
  id: "qsys-l1",
  title: "Q-SYS Level 1 Certification",
  issuer: "QSC",
  category: "Audio & DSP",
  type: "Certification",
  date: "2016-02-26",
  validThrough: null,
  description: "QSC\u2019s Q-SYS Level 1 training (online), completed February 26, 2016.",
  tags: ["QSC", "Q-SYS", "DSP", "audio processing"],
  rus: null,
  docs: [
    { file: "RSoukup - Q Sys Level 1 022616.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Q-SYS Level 1 certificate for Rob Soukup, February 26, 2016" }
  ]
},
{
  id: "qsys-l2",
  title: "Q-SYS Level 2 Certification",
  issuer: "QSC",
  category: "Audio & DSP",
  type: "Certification",
  date: "2019-02-11",
  validThrough: null,
  description: "QSC\u2019s Q-SYS Level 2 training (classroom), effective 11 February 2019.",
  tags: ["QSC", "Q-SYS", "DSP", "audio processing"],
  rus: null,
  docs: [
    { file: "RSoukup - Q-SYS Level 2 021119.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Q-SYS Level 2 certificate for Rob Soukup, February 11, 2019" }
  ]
},
{
  id: "qsys-quantum-l1",
  title: "Q-SYS Quantum Level 1",
  issuer: "QSC",
  category: "Audio & DSP",
  type: "Certification",
  date: "2026-10-12",
  validThrough: null,
  description: "QSC\u2019s Q-SYS Quantum Level 1 training (online), effective 12 October 2026.",
  tags: ["QSC", "Q-SYS", "Quantum", "DSP"],
  rus: null,
  docs: [
    { file: "RSoukup - Q Sys Quantum Level 1 101226.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Q-SYS Quantum Level 1 certificate for Rob Soukup, October 12, 2026" }
  ]
},
{
  id: "qsc-how",
  title: "QSC House of Worship Audio Training",
  issuer: "QSC",
  category: "Audio & DSP",
  type: "Course Completion",
  date: "2023-01-20",
  validThrough: null,
  description: "QSC training on audio systems for houses of worship, completed January 20, 2023.",
  tags: ["QSC", "house of worship", "audio", "training"],
  rus: null,
  docs: [
    { file: "RSoukup - QSC House of Worship Audio Training 012023.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "QSC House of Worship Audio Training certificate for Rob Soukup, January 20, 2023" }
  ]
},
{
  id: "qsc-seervision",
  title: "Q-SYS VisionSuite Seervision, Commissioning Level 2",
  issuer: "QSC",
  category: "Displays, Video & Projection",
  type: "Certification",
  date: "2026-10-22",
  validThrough: null,
  description: "QSC certification for commissioning Q-SYS VisionSuite Seervision, completed October 22, 2026. This certification does not expire.",
  tags: ["QSC", "Q-SYS", "Seervision", "commissioning", "video"],
  rus: null,
  docs: [
    { file: "RSoukup - QSC VisionSuite Seervision L2 102226.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Q-SYS VisionSuite Seervision Commissioning Level 2 certificate for Rob Soukup, October 22, 2026" }
  ]
},
{
  id: "qsc-video-101",
  title: "Q-SYS Video 101 Training",
  issuer: "QSC",
  category: "Displays, Video & Projection",
  type: "Certification",
  date: "2026-10-22",
  validThrough: "2029-10-22",
  description: "QSC training certification for Q-SYS Video 101, completed October 22, 2026 and valid through October 22, 2029.",
  tags: ["QSC", "Q-SYS", "video", "training"],
  rus: null,
  docs: [
    { file: "RSoukup - QSC Video 101 102226.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Q-SYS Video 101 Training certificate for Rob Soukup, October 22, 2026, valid through October 22, 2029" }
  ]
},
{
  id: "shure-isc-l1",
  title: "Shure Integrated Systems Certification, Level 1",
  issuer: "Shure",
  category: "Audio & DSP",
  type: "Certification",
  date: "2020-04-01",
  validThrough: "2022-04-01",
  description: "Shure Integrated Systems Level 1. The certificate shows validity from April 1, 2020 to April 1, 2022.",
  tags: ["Shure", "integrated systems", "microphones", "audio"],
  rus: null,
  docs: [
    { file: "RSoukup - Shure Integrated Systems Certification Level 1 040120.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Shure Integrated Systems Certification Level 1 for Rob Soukup, valid April 1, 2020 to April 1, 2022" }
  ]
},
{
  id: "shure-isc-l2",
  title: "Shure Integrated Systems Certification, Level 2",
  issuer: "Shure",
  category: "Audio & DSP",
  type: "Certification",
  date: "2020-04-08",
  validThrough: "2022-04-08",
  description: "Shure Integrated Systems Level 2. The certificate shows validity from April 8, 2020 to April 8, 2022.",
  tags: ["Shure", "integrated systems", "microphones", "audio"],
  rus: null,
  docs: [
    { file: "RSoukup - Shure Integrated Systems Certification Level 2 040820.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Shure Integrated Systems Certification Level 2 for Rob Soukup, valid April 8, 2020 to April 8, 2022" }
  ]
},
{
  id: "shure-intellimix",
  title: "Shure IntelliMix P300 and ANIUSB-MATRIX Technical Enablement Training",
  issuer: "Shure",
  category: "Audio & DSP",
  type: "Course Completion",
  date: "2026-10-13",
  validThrough: "2029-10-13",
  description: "Shure technical enablement on the IntelliMix P300 audio conferencing processor and ANIUSB-MATRIX. The certificate shows validity from October 13, 2026 to October 13, 2029.",
  tags: ["Shure", "IntelliMix", "P300", "conferencing", "DSP"],
  rus: null,
  docs: [
    { file: "RSoukup - Shure IntelliMix-P300 101326.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Shure IntelliMix P300 and ANIUSB-MATRIX technical enablement certificate for Rob Soukup, October 13, 2026" }
  ]
},
{
  id: "synaudcon-100",
  title: "SynAudCon Course 100: Principles of Audio",
  issuer: "SynAudCon",
  category: "Audio & DSP",
  type: "Course Completion",
  date: "2019-10-21",
  validThrough: null,
  description: "Online course on sound-system fundamentals, terms, interfaces and practices. A passing score of 80% is required.",
  tags: ["SynAudCon", "audio", "sound systems", "fundamentals"],
  rus: null,
  docs: [
    { file: "RSoukup-SynAudCon-100-102119.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "SynAudCon Course 100 Principles of Audio certificate for Rob Soukup, October 21, 2019" }
  ]
},
{
  id: "synaudcon-hsw",
  title: "SynAudCon: How Sound Systems Work",
  issuer: "SynAudCon",
  category: "Audio & DSP",
  type: "Course Completion",
  date: "2016-02-17",
  validThrough: null,
  description: "Web-based course on the basic setup, interconnection and operation of a sound reinforcement system. A passing score of 80% is required.",
  tags: ["SynAudCon", "sound systems", "audio", "fundamentals"],
  rus: null,
  docs: [
    { file: "RSoukup - SynAudCon HSSW 021716.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "SynAudCon How Sound Systems Work certificate for Rob Soukup, February 17, 2016" }
  ]
},
{
  id: "synaudcon-110",
  title: "SynAudCon Course 110: Transformer-Distributed Loudspeaker Systems",
  issuer: "SynAudCon",
  category: "Audio & DSP",
  type: "Course Completion",
  date: "2020-02-13",
  validThrough: null,
  description: "Online course on the theory, design and troubleshooting of transformer-distributed (70V/100V) loudspeaker systems.",
  tags: ["SynAudCon", "loudspeakers", "70V", "audio design"],
  rus: null,
  docs: [
    { file: "SynAudCon-Transformer-RobSoukup-02-13-20.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "SynAudCon Course 110 Transformer-Distributed Loudspeaker Systems certificate for Rob Soukup, February 13, 2020" }
  ]
},
{
  id: "synaudcon-sst",
  title: "SynAudCon Sound System Technology (In Person)",
  issuer: "SynAudCon",
  category: "Audio & DSP",
  type: "Course Completion",
  date: "2019-10-11",
  validThrough: null,
  description: "In-person SynAudCon course on sound system technology, completed October 11, 2019.",
  tags: ["SynAudCon", "sound systems", "in-person", "audio"],
  rus: null,
  docs: [
    { file: "rsoukup-SynAudCon-Sound-System-Tech-101119.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "SynAudCon Sound System Technology in-person certificate for Rob Soukup, October 11, 2019" }
  ]
},
{
  id: "crestron-101",
  title: "Crestron Programming 101 (Online)",
  issuer: "Crestron",
  category: "Control Systems",
  type: "Course Completion",
  date: "2015-09-11",
  validThrough: null,
  description: "Introductory Crestron programming course. Date taken from the certificate filename.",
  tags: ["Crestron", "programming", "control systems"],
  rus: null,
  docs: [
    { file: "RSoukup - Crestron 101 091115.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Crestron Programming 101 certificate for Rob Soukup, September 11, 2015" }
  ]
},
{
  id: "crestron-foundations",
  title: "Foundations of Crestron Programming",
  issuer: "Crestron",
  category: "Control Systems",
  type: "Course Completion",
  date: "2015-12-03",
  validThrough: null,
  description: "Crestron programming foundations course (CTI-P101), completed December 3, 2015.",
  tags: ["Crestron", "programming", "control systems", "CTI-P101"],
  rus: null,
  docs: [
    { file: "RSoukup - Crestron Foundations of Crestron programming 120315.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Foundations of Crestron Programming certificate for Rob Soukup, December 3, 2015" }
  ]
},
{
  id: "crestron-201",
  title: "Crestron Programming 201",
  issuer: "Crestron",
  category: "Control Systems",
  type: "Course Completion",
  date: "2016-04-22",
  validThrough: null,
  description: "Second-level Crestron programming course (CTI-P201 Core System Programming), completed April 22, 2016.",
  tags: ["Crestron", "programming", "control systems", "CTI-P201"],
  rus: null,
  docs: [
    { file: "Crestron-Programming-201.jpg", label: "Certificate photo", kind: "certificate", alt: "Photograph of the Crestron CTI-P201 Core System Programming certificate for Rob Soukup, April 22, 2016" }
  ]
},
{
  id: "amx-essentials",
  title: "Harman AMX Essentials Series (6 courses)",
  issuer: "Harman AMX",
  category: "Control Systems",
  type: "Course Completion",
  date: "2016-02-29",
  validThrough: null,
  description: "Six Harman AMX essentials courses completed February 29, 2016: Audio, Cabling, Control, Network, PC, and Video.",
  tags: ["AMX", "Harman", "control systems", "essentials"],
  rus: null,
  needs_review: true,
  review_note: "The resume also lists ACE-D (AMX Design); no ACE-D certificate was provided.",
  docs: [
    { file: "Harman AMX Audio_Essentials.pdf", label: "Audio Essentials (PDF)", kind: "certificate", alt: "Harman AMX Audio Essentials certificate for Rob Soukup, February 29, 2016" },
    { file: "Harman AMX Cabling_Essentials.pdf", label: "Cabling Essentials (PDF)", kind: "certificate", alt: "Harman AMX Cabling Essentials certificate for Rob Soukup, February 29, 2016" },
    { file: "Harman AMX Control_Essentials.pdf", label: "Control Essentials (PDF)", kind: "certificate", alt: "Harman AMX Control Essentials certificate for Rob Soukup, February 29, 2016" },
    { file: "Harman AMX Network_Essentials.pdf", label: "Network Essentials (PDF)", kind: "certificate", alt: "Harman AMX Network Essentials certificate for Rob Soukup, February 29, 2016" },
    { file: "Harman AMX PC_Essentials.pdf", label: "PC Essentials (PDF)", kind: "certificate", alt: "Harman AMX PC Essentials certificate for Rob Soukup, February 29, 2016" },
    { file: "Harman AMX PVideo_Essentials.pdf", label: "Video Essentials (PDF)", kind: "certificate", alt: "Harman AMX Video Essentials certificate for Rob Soukup, February 29, 2016" }
  ]
},
{
  id: "crestron-dmc-d",
  title: "Crestron DigitalMedia Certified Designer 4K (DMC-D)",
  issuer: "Crestron",
  category: "AV over IP & Networking",
  type: "Certification",
  date: "2015-11-04",
  validThrough: null,
  description: "Crestron DigitalMedia design certification (4K), issued 4 November 2015.",
  tags: ["Crestron", "DigitalMedia", "DMC-D", "4K", "design"],
  rus: null,
  docs: [
    { file: "RSoukup - Crestron DMC-D 4K 110415.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Crestron DigitalMedia Certified Designer 4K certificate for Rob Soukup, November 4, 2015" }
  ]
},
{
  id: "crestron-nvx",
  title: "Crestron DM NVX Certification",
  issuer: "Crestron",
  category: "AV over IP & Networking",
  type: "Certification",
  date: "2018-03-22",
  validThrough: null,
  description: "Crestron training on DM NVX AV-over-IP encoders and decoders; the design certificate is dated March 22, 2018.",
  tags: ["Crestron", "DM NVX", "AV over IP", "encoders"],
  rus: null,
  docs: [
    { file: "NVX-Design.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Crestron NVX Design and Application certificate for Rob Soukup, March 22, 2018" },
    { file: "NVX-box.jpg", label: "DM NVX product image", kind: "imagery", alt: "Crestron DigitalMedia NVX Series encoder/decoder product image" },
    { file: "NVX-chip.jpg", label: "DM NVX product image", kind: "imagery", alt: "Crestron DM NVX marketing image showing a chip on a circuit board" }
  ]
},
{
  id: "crestron-nvx-networking",
  title: "Crestron DM NVX Networking Certification",
  issuer: "Crestron",
  category: "AV over IP & Networking",
  type: "Certification",
  date: "2018-03-20",
  validThrough: null,
  description: "Crestron training on network design for DM NVX systems, completed March 20, 2018.",
  tags: ["Crestron", "DM NVX", "networking", "AV over IP"],
  rus: null,
  docs: [
    { file: "NVX-Networking.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Crestron DM NVX Networking certificate for Rob Soukup, March 20, 2018" }
  ]
},
{
  id: "crestron-ivc-d",
  title: "Crestron Intelligent Video Certification: Design (IVC-D)",
  issuer: "Crestron",
  category: "AV over IP & Networking",
  type: "Certification",
  date: "2025-10-17",
  validThrough: null,
  description: "Crestron Intelligent Video design certification, issued 17 October 2025.",
  tags: ["Crestron", "intelligent video", "IVC-D", "design"],
  rus: null,
  docs: [
    { file: "RSoukup - Crestron IVC-D 101425.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Crestron Intelligent Video Certification Design certificate for Rob Soukup, October 17, 2025" }
  ]
},
{
  id: "crestron-cti-cf",
  title: "Crestron Fundamentals (CTI-CF) Test-Out",
  issuer: "Crestron",
  category: "Control Systems",
  type: "Course Completion",
  date: "2026-10-21",
  validThrough: null,
  description: "Crestron Technical Institute test-out examination for the Crestron Fundamentals (CTI-CF) course, completed October 21, 2026.",
  tags: ["Crestron", "control systems", "fundamentals", "CTI", "test-out"],
  rus: null,
  docs: [
    { file: "RSoukup - Crestron CTI-CF Test-Out 102126.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Crestron Fundamentals CTI-CF Test-Out certificate of completion for Rob Soukup, October 21, 2026" }
  ]
},
{
  id: "dante-l1",
  title: "Dante Certification Level 1",
  issuer: "Audinate",
  category: "AV over IP & Networking",
  type: "Certification",
  date: "2017-02-17",
  validThrough: null,
  description: "Audinate\u2019s Dante audio-over-IP Level 1 certification, issued February 17, 2017. Approved for 2.0 CTS renewal units.",
  tags: ["Dante", "Audinate", "audio over IP", "networking"],
  rus: "2.0 CTS",
  docs: [
    { file: "Dante-Level-1.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Dante Certification Level 1 for Rob Soukup, issued February 17, 2017" },
    { file: "Dante-Certification.png", label: "Dante Certified Level 1 badge", kind: "badge", alt: "Dante Certified Level 1 badge" }
  ]
},
{
  id: "dante-l2",
  title: "Dante Certification Level 2",
  issuer: "Audinate",
  category: "AV over IP & Networking",
  type: "Certification",
  date: "2017-04-10",
  validThrough: null,
  description: "Audinate\u2019s Dante Level 2 certification, including a skills test, issued April 10, 2017. Approved for 2.0 CTS or CTS-D renewal units.",
  tags: ["Dante", "Audinate", "audio over IP", "networking"],
  rus: "2.0 CTS or CTS-D",
  docs: [
    { file: "Dante-Level-2.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Dante Certification Level 2 for Rob Soukup, issued April 10, 2017" },
    { file: "Dante-Cert-2.jpg", label: "Dante Certified Level 2 badge", kind: "badge", alt: "Dante Certified Level 2 badge" }
  ]
},
{
  id: "dante-l3",
  title: "Dante Certification Level 3",
  issuer: "Audinate",
  category: "AV over IP & Networking",
  type: "Certification",
  date: "2018-08-16",
  validThrough: null,
  description: "Audinate\u2019s Dante Level 3 certification, issued August 16, 2018. Approved for 4.0 CTS or CTS-D renewal units.",
  tags: ["Dante", "Audinate", "audio over IP", "networking"],
  rus: "4.0 CTS or CTS-D",
  docs: [
    { file: "RSoukup - Dante Level3 081618.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Dante Certification Level 3 for Rob Soukup, issued August 16, 2018" }
  ]
},
{
  id: "sdvoe-design",
  title: "SDVoE Design Partner Certification",
  issuer: "SDVoE Alliance",
  category: "AV over IP & Networking",
  type: "Certification",
  date: "2022-11-11",
  validThrough: null,
  description: "SDVoE Alliance certification for designing SDVoE (software-defined video over Ethernet) systems, completed November 11, 2022.",
  tags: ["SDVoE", "AV over IP", "video over Ethernet", "design"],
  rus: null,
  docs: [
    { file: "Rob Soukup SDVoE Design Partner Certification 111122.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "SDVoE Design Partner Certification for Rob Soukup, November 11, 2022" }
  ]
},
{
  id: "sdvoe-dev-l1",
  title: "SDVoE Developer Certification, Level 1",
  issuer: "SDVoE Alliance",
  category: "AV over IP & Networking",
  type: "Certification",
  date: "2023-07-07",
  validThrough: null,
  description: "SDVoE Alliance Level 1 developer certification, completed July 7, 2023.",
  tags: ["SDVoE", "AV over IP", "developer", "video over Ethernet"],
  rus: null,
  docs: [
    { file: "RSoukup - SDVoE Developer Certification 070723.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "SDVoE Developer Certification Level 1 for Rob Soukup, July 7, 2023" }
  ]
},
{
  id: "networking-tech",
  title: "AVIXA/InfoComm: Networking Technology",
  issuer: "AVIXA (InfoComm)",
  category: "AV over IP & Networking",
  type: "Course Completion",
  date: "2015-08-27",
  validThrough: null,
  description: "Online course on networking for AV, completed August 27, 2015.",
  tags: ["networking", "InfoComm", "AVIXA", "online course"],
  rus: null,
  needs_review: true,
  review_note: "One of the files is an AVIXA certificate for the same course dated 9/25/2023 \u2014 possibly a re-take. Confirm whether the record date should change.",
  docs: [
    { file: "Networking-Techology-Online.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Networking Technology Online course certificate, August 27, 2015" },
    { file: "Networking-Tech.jpg", label: "Course certificate 2023 (image)", kind: "certificate", alt: "AVIXA course certificate for Networking Technology Online, Robert Soukup, September 25, 2023" }
  ]
},
{
  id: "aurora-avoip",
  title: "AV over IP Fundamentals",
  issuer: "Aurora Multimedia",
  category: "AV over IP & Networking",
  type: "Course Completion",
  date: "2024-09-19",
  validThrough: null,
  description: "Aurora Multimedia Training Academy fundamentals course on AV over IP, awarded September 19, 2024. Earned 1 AVIXA RU credit.",
  tags: ["AV over IP", "Aurora", "networking", "fundamentals"],
  rus: "1 AVIXA RU",
  docs: [
    { file: "Aurora-AV-over-IP.png", label: "Certificate (image)", kind: "certificate", alt: "Aurora Training Academy certificate for AV over IP Fundamentals, Rob Soukup, September 19, 2024" }
  ]
},
{
  id: "igmp-avoip",
  title: "Intermediate IGMP for AV over IP: Switch Bandwidth, Groups, Querier Status",
  issuer: "Legrand|AV",
  category: "AV over IP & Networking",
  type: "Course Completion",
  date: "2023-03-14",
  validThrough: null,
  description: "Legrand|AV training certificate for \u201cIntermediate IGMP for AV over IP\u201d, covering switch bandwidth, multicast groups, and querier status. Completed March 14, 2023; registered for 1.5 CTS, CTS-I and CTS-D RUs.",
  tags: ["IGMP", "AV over IP", "multicast", "Legrand", "networking"],
  rus: "1.5 CTS / CTS-I / CTS-D",
  needs_review: true,
  review_note: "This PNG was matched to the old blog post \u2018InfoComm is now AVIXA\u2019; it is in fact a Legrand IGMP certificate, so it is filed as its own record rather than with the base CTS.",
  docs: [
    { file: "Legrand-IGMP-AV-over-IP.png", label: "Certificate (image)", kind: "certificate", alt: "Legrand AV certificate for Intermediate IGMP for AV over IP, Rob Soukup, March 14, 2023" }
  ]
},
{
  id: "teams-rooms",
  title: "Microsoft Teams Rooms Technical Assessment",
  issuer: "Microsoft",
  category: "Collaboration & Conferencing",
  type: "Certification",
  date: "2021-02-16",
  validThrough: null,
  description: "Microsoft Worldwide Learning assessment (course 18862) on Teams Rooms technology, achieved February 16, 2021.",
  tags: ["Microsoft", "Teams Rooms", "unified communications", "assessment"],
  rus: null,
  docs: [
    { file: "RSoukup - Microsoft Teams Rooms Technical Assessment 021621.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Microsoft Teams Rooms Technical Assessment certificate for Rob Soukup, February 16, 2021" }
  ]
},
{
  id: "surface-hub",
  title: "Microsoft Surface Hub Installation and Configuration",
  issuer: "Microsoft",
  category: "Collaboration & Conferencing",
  type: "Course Completion",
  date: "2015-11-08",
  validThrough: null,
  description: "Microsoft Surface Hub curriculum on installing and configuring Surface Hub, completed November 8, 2015.",
  tags: ["Microsoft", "Surface Hub", "installation", "conferencing"],
  rus: null,
  docs: [
    { file: "Surface-Hub-Installation-Configuration.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Microsoft Surface Hub Installation and Configuration certificate for Rob Soukup, November 8, 2015" }
  ]
},
{
  id: "zoom-rooms",
  title: "Zoom Rooms Implementation & Integration",
  issuer: "Zoom",
  category: "Collaboration & Conferencing",
  type: "Course Completion",
  date: "2019-12-26",
  validThrough: null,
  description: "Zoom Video Communications course on Zoom Rooms implementation and integration, completed December 26, 2019. Carries 5 renewal units.",
  tags: ["Zoom", "Zoom Rooms", "unified communications", "integration"],
  rus: "5",
  needs_review: true,
  review_note: "The old blog post dated this 2021-08-01; the certificate itself is dated 12/26/2019. Type set to Course Completion based on the document, which is an RU certificate rather than a \u201ccertified\u201d credential.",
  docs: [
    { file: "Zoom-Certification.jpg", label: "Course certificate (image)", kind: "certificate", alt: "Zoom Rooms Implementation and Integration certificate for Rob Soukup, December 26, 2019, 5 renewal units" }
  ]
},
{
  id: "zoom-partner",
  title: "Zoom Partner Technical Training Series (4 modules)",
  issuer: "Zoom",
  category: "Collaboration & Conferencing",
  type: "Course Completion",
  date: "2020-11",
  validThrough: null,
  description: "Four Zoom partner technical training modules completed in November 2020: Zoom Story, Meetings Associate, Webinar Associate, and Admin Associate.",
  tags: ["Zoom", "partner training", "meetings", "webinar"],
  rus: null,
  docs: [
    { file: "Z1 Partner - Zoom Story.pdf", label: "Zoom Story (PDF)", kind: "certificate", alt: "Zoom Partner Technical Training Zoom Story certificate for Rob Soukup, November 2020" },
    { file: "Z2 Partner-Technical-Training---Zoom-Meetings---Associate-robsoukup.pdf", label: "Meetings Associate (PDF)", kind: "certificate", alt: "Zoom Partner Technical Training Meetings Associate certificate, November 2020" },
    { file: "Z3 Partner-Technical-Training---Zoom-Webinar---Associate-robsoukup.pdf", label: "Webinar Associate (PDF)", kind: "certificate", alt: "Zoom Partner Technical Training Webinar Associate certificate, November 2020" },
    { file: "Z4 Partner-Technical-Training---Zoom-Admin---Associate-robsoukup.pdf", label: "Admin Associate (PDF)", kind: "certificate", alt: "Zoom Partner Technical Training Admin Associate certificate, November 2020" }
  ]
},
{
  id: "poly-hands-on",
  title: "HP Poly Hands-On Technical Training",
  issuer: "HP Poly",
  category: "Collaboration & Conferencing",
  type: "Course Completion",
  date: "2025-03-19",
  validThrough: null,
  description: "HP Poly hands-on technical training on Studio video products. The certificate states 2.5 CTS/CTS-D renewal credits.",
  tags: ["Poly", "HP", "video conferencing", "hands-on"],
  rus: "2.5 CTS/CTS-D",
  needs_review: true,
  review_note: "The certificate shows \u2018February\u2019 with no year; the filename suggests 2024 and the blog post 2025-03-19. Date kept as 2025-03-19 pending confirmation.",
  docs: [
    { file: "Poly-Training-CHI-2024.png", label: "Certificate (image)", kind: "certificate", alt: "HP Poly Advance AV Video Training Course certificate for HP Poly Studio Video Products Training, Rob Soukup" }
  ]
},
{
  id: "poly-l200",
  title: "HP Poly Advanced Hands-On Technical Training, Level 200",
  issuer: "HP Poly",
  category: "Collaboration & Conferencing",
  type: "Course Completion",
  date: "2025-03-19",
  validThrough: null,
  description: "HP Poly Level 200 hands-on training, completed March 19, 2025. Approved for 3.5 CTS/CTS-D renewal units.",
  tags: ["Poly", "HP", "video conferencing", "hands-on"],
  rus: "3.5 CTS/CTS-D",
  docs: [
    { file: "HP Poly Advance Hands On Technical Training Level 200.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "HP Poly Advance Hands On Technical Training Level 200 certificate for Rob Soukup, March 19, 2025" }
  ]
},
{
  id: "neat-specialist",
  title: "Neat Certified Collaboration Specialist",
  issuer: "Neat",
  category: "Collaboration & Conferencing",
  type: "Certification",
  date: "2026-03-02",
  validThrough: null,
  description: "Neat\u2019s collaboration specialist certification, completed March 2, 2026. Approved for 6 CTS, CTS-I and CTS-D renewal units.",
  tags: ["Neat", "collaboration", "video conferencing", "certified"],
  rus: "6 CTS / CTS-I / CTS-D",
  docs: [
    { file: "RSoukup - Neat Collab Specialist Certificate 020326.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Neat Certified Collaboration Specialist certificate for Rob Soukup, March 2, 2026" }
  ]
},
{
  id: "barco-unisee",
  title: "Barco Certified Specialist: Unisee Installation",
  issuer: "Barco",
  category: "Displays, Video & Projection",
  type: "Certification",
  date: "2018-06-09",
  validThrough: "2020-06-09",
  description: "Barco certification for installing Unisee video wall systems, completed June 9, 2018. The certificate states it is valid for 2 years while with the same employer.",
  tags: ["Barco", "Unisee", "video wall", "installation"],
  rus: null,
  docs: [
    { file: "RSoukup - Barco Certified Specialist - Unisee Installation 060918.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Barco Certified Specialist Unisee Installation certificate for Rob Soukup, June 9, 2018" }
  ]
},
{
  id: "draper-projection",
  title: "Draper: Projection Performance Basics",
  issuer: "Draper",
  category: "Displays, Video & Projection",
  type: "Course Completion",
  date: "2024-09-19",
  validThrough: null,
  description: "Draper training on projection performance fundamentals, completed September 19, 2024. Earned 1.25 CTS/CTS-D renewal units.",
  tags: ["Draper", "projection", "video", "renewal units"],
  rus: "1.25 CTS / CTS-D",
  docs: [
    { file: "Draper-Projection.png", label: "Certificate (image)", kind: "certificate", alt: "Draper Projection Performance Basics certificate for Rob Soukup, September 19, 2024, 1.25 renewal units" }
  ]
},
{
  id: "dvled",
  title: "Project Lifecycle of a dvLED Installation",
  issuer: "AVIXA",
  category: "Displays, Video & Projection",
  type: "Course Completion",
  date: "2023-11-13",
  validThrough: null,
  description: "AVIXA course on the project lifecycle of direct-view LED installations, completed November 13, 2023.",
  tags: ["dvLED", "AVIXA", "LED", "installation"],
  rus: null,
  docs: [
    { file: "DVLED.png", label: "Certificate (image)", kind: "certificate", alt: "AVIXA course certificate for The Project Life Cycle of a dvLED Installation, Robert Soukup, November 13, 2023" }
  ]
},
{
  id: "ux-image-size",
  title: "The User Experience: Proper Image Size and Contrast",
  issuer: "Brawn Consulting",
  category: "Displays, Video & Projection",
  type: "Webinar",
  date: "2016-12-08",
  validThrough: null,
  description: "Webinar on proper image size and contrast for the viewing experience, offered by Brawn Consulting. Carries 1 renewal unit.",
  tags: ["webinar", "image size", "contrast", "user experience"],
  rus: "1",
  needs_review: true,
  review_note: "The certificate date reads 12/8/16, taken as December 8, 2016 (consistent with the December 2016 blog post); it could be August 12, 2016.",
  docs: [
    { file: "RU-Certificate-Rob-Soukup.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Brawn Consulting certificate for The User Experience: Proper Image Size and Contrast, Rob Soukup, 1 renewal unit" }
  ]
},
{
  id: "lutron-radiora2",
  title: "Lutron RadioRA 2 Level 1 (LP 620)",
  issuer: "Lutron",
  category: "Building Systems & Lighting",
  type: "Course Completion",
  date: "2018-11-28",
  validThrough: null,
  description: "Lutron\u2019s online RadioRA 2 Level 1 training (course LP 620), completed November 28, 2018.",
  tags: ["Lutron", "RadioRA", "lighting", "building systems"],
  rus: null,
  docs: [
    { file: "RSoukup - Lutron Radio RA 2 Level 1 112818.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "Lutron RadioRA 2 Level 1 certificate for Rob Soukup, November 28, 2018" }
  ]
},
{
  id: "osha-30",
  title: "OSHA 30-Hour Construction Safety",
  issuer: "ClickSafety",
  category: "Safety, Codes & Compliance",
  type: "Course Completion",
  date: "2015-10-16",
  validThrough: null,
  description: "OSHA 30-hour construction course delivered by ClickSafety, completed October 16, 2015. Earned 3 IACET CEUs and 30.3 contact hours.",
  tags: ["OSHA", "safety", "construction", "ClickSafety"],
  rus: null,
  docs: [
    { file: "RSoukup - ClickSafety OSHA 30 101615.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "ClickSafety OSHA 30-Hour Construction certificate for Rob Soukup, October 16, 2015" }
  ]
},
{
  id: "aia-ada",
  title: "AIA CEU: ADA Compliant Spaces",
  issuer: "AIA (continuing education)",
  category: "Safety, Codes & Compliance",
  type: "Course Completion",
  date: "2024-09-23",
  validThrough: null,
  description: "AIA continuing-education credit for \u201cDesigning Turnkey, Productive and ADA Compliant Meeting Spaces\u201d, presented by Salamander Designs. Worth 0.5 AIA/CES learning units.",
  tags: ["AIA", "ADA", "accessibility", "continuing education"],
  rus: null,
  docs: [
    { file: "AIA-CEU-ADA-Certificate.jpg", label: "AIA CEU certificate (image)", kind: "certificate", alt: "AIA CEU certificate for Designing Turnkey, Productive and ADA Compliant Meeting Spaces, Rob Soukup, September 23, 2024" }
  ]
},
{
  id: "listen-ada",
  title: "Assistive Listening and ADA & CBC Compliance",
  issuer: "Listen Technologies",
  category: "Safety, Codes & Compliance",
  type: "Course Completion",
  date: "2023-06-29",
  validThrough: null,
  description: "Listen Technologies Corporation course on assistive listening and ADA & CBC compliance, completed June 29, 2023. Carries 1 renewal unit.",
  tags: ["assistive listening", "ADA", "accessibility", "Listen Technologies"],
  rus: "1",
  docs: [
    { file: "ADA-LISTENING-CERTIFICATE.jpg", label: "Certificate (image)", kind: "certificate", alt: "Listen Technologies certificate for Assistive Listening and ADA and CBC Compliance, Rob Soukup, June 29, 2023, 1 renewal unit" }
  ]
},
{
  id: "driving-course",
  title: "AVI-SPL Driver Safety Policy & Quiz (FleetDefense)",
  issuer: "FleetDefense",
  category: "Safety, Codes & Compliance",
  type: "Course Completion",
  date: "2025-09-18",
  validThrough: null,
  pinLast: true,
  description: "FleetDefense web-based driver safety training for AVI-SPL, completed September 18, 2025.",
  tags: ["driver safety", "FleetDefense", "safety"],
  rus: null,
  docs: [
    { file: "Driving-Course_Completion_Certificate.jpg", label: "Certificate (image)", kind: "certificate", alt: "FleetDefense driver safety certificate for Robert Soukup, September 18, 2025" }
  ]
},
{
  id: "avispl-project-engineer-1",
  title: "AVI-SPL Project Engineer 1 \u2014 Career Progression Learning Plan",
  issuer: "AVI-SPL",
  category: "Career Development",
  type: "Employer Training",
  date: "2026-10-22",
  validThrough: null,
  description: "AVI-SPL certificate of completion for the Project Engineer 1 Career Progression Learning Plan, issued October 22, 2026 by the AVI-SPL L&D Department. It certifies completion of the training requirements for the AVI-SPL Project Engineer 1 position.",
  tags: ["AVI-SPL", "Project Engineer", "career progression", "training"],
  rus: null,
  docs: [
    { file: "RSoukup_AVI-SPL_Project_Engineer_1.pdf", label: "Certificate (PDF)", kind: "certificate", alt: "AVI-SPL Project Engineer 1 Career Progression Learning Plan certificate of completion for Rob Soukup, issued October 22, 2026" }
  ]
}
];
