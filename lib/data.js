export const COLORS = {
  bg: "#f8fafc",
  navy: "#0f2744",
  navyLight: "#1a3a5c",
  gold: "#c8922a",
  goldLight: "#f0c060",
  goldSoft: "#c8922a18",
  red: "#dc2626",
  redSoft: "#dc262612",
  teal: "#0d7377",
  tealSoft: "#0d737712",
  green: "#16a34a",
  greenSoft: "#16a34a12",
  violet: "#7c3aed",
  violetSoft: "#7c3aed12",
  blue: "#2563eb",
  blueSoft: "#2563eb12",
  text: "#1a1a2e",
  muted: "#5a6a7a",
  dimmed: "#94a3b8",
  white: "#ffffff",
  cardBg: "#ffffff",
  border: "#e2e8f0",
}

export const NAV_ITEMS = [
  { id: "home",        label: "Home",        icon: "🏠" },
  { id: "ielts",       label: "IELTS",       icon: "🎓" },
  { id: "immigration", label: "Immigration", icon: "🛂" },
  { id: "settling",    label: "Settling In", icon: "🏡" },
  { id: "future",      label: "Your Future", icon: "🌱" },
  { id: "devotion",    label: "Devotion",    icon: "🙏" },
  { id: "links",       label: "Links",       icon: "🔗" },
]

export const COMMUNITIES = [
  { flag: "🇵🇭", name: "Filipino",        desc: "Largest Asian migrant group in NZ — strong community networks nationwide" },
  { flag: "🇮🇳", name: "Indian",          desc: "Fast-growing community — strong in IT, healthcare, and business sectors" },
  { flag: "🇿🇦", name: "South African",   desc: "Well-established community — strong in trades, engineering, and finance" },
  { flag: "🌏", name: "Pacific Islander", desc: "Tongan, Samoan, Fijian and more — deep cultural roots across NZ" },
  { flag: "🌍", name: "All Others",       desc: "UK, Europe, Latin America, Middle East, Africa — all welcome here" },
]

export const LINKS = [
  {
    category: "IELTS & English Practice",
    color: "#0d7377",
    icon: "🎓",
    items: [
      { name: "British Council – IELTS", url: "https://www.britishcouncil.org/exam/ielts", desc: "Official IELTS registration worldwide" },
      { name: "IDP IELTS", url: "https://www.idp.com/ielts/", desc: "Book your IELTS test with IDP globally" },
      { name: "IELTS.org – Free Practice", url: "https://www.ielts.org/about-ielts/ielts-for-test-takers/ielts-practice-test", desc: "Official free practice materials from the test makers" },
      { name: "IELTS Liz", url: "https://ieltsliz.com", desc: "Free tips and lessons for all four skills — very popular" },
      { name: "BBC Learning English", url: "https://www.bbc.co.uk/learningenglish", desc: "Free English listening, vocabulary and grammar" },
      { name: "E2 Language – YouTube", url: "https://www.youtube.com/@E2IELTS", desc: "Free IELTS prep video lessons on YouTube" },
    ]
  },
  {
    category: "NZ Immigration (Official)",
    color: "#dc2626",
    icon: "🛂",
    items: [
      { name: "Immigration New Zealand", url: "https://www.immigration.govt.nz", desc: "Official NZ immigration — visa applications, guides, status checks" },
      { name: "Apply for a NZ Visa Online", url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa", desc: "Start your visa application here" },
      { name: "Skilled Migrant Category", url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/skilled-migrant-category-resident-visa", desc: "Main residency pathway for skilled workers" },
      { name: "Accredited Employer Work Visa", url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/accredited-employer-work-visa", desc: "Work visa if you have a NZ job offer" },
      { name: "NZQA – Assess Your Qualifications", url: "https://www.nzqa.govt.nz/qualifications-standards/international-qualifications/", desc: "Get your overseas qualifications assessed for NZ" },
      { name: "Find a Licensed Immigration Adviser", url: "https://www.iaa.govt.nz/for-migrants/how-to-find-an-adviser/", desc: "Official directory of legal immigration advisers in NZ" },
    ]
  },
  {
    category: "Settling in NZ",
    color: "#c8922a",
    icon: "🏡",
    items: [
      { name: "IRD – Apply for IRD Number", url: "https://www.ird.govt.nz/topics/ird-numbers/apply-for-an-ird-number", desc: "Get your NZ tax number — do this in your first week" },
      { name: "Wise – Send Money Home", url: "https://wise.com/nz/", desc: "Best exchange rates for international money transfers" },
      { name: "Skinny Mobile – Cheapest NZ SIM", url: "https://www.skinny.co.nz", desc: "Most affordable prepay SIM for new arrivals" },
      { name: "Trade Me – Find a Rental", url: "https://www.trademe.co.nz/a/property/rentals", desc: "NZ's main property rental listing site" },
      { name: "Work and Income NZ", url: "https://www.workandincome.govt.nz", desc: "Government support services and community assistance" },
      { name: "Citizens Advice Bureau NZ", url: "https://www.cab.org.nz", desc: "Free legal and community advice in many languages" },
      { name: "Settling In – Govt Guide", url: "https://www.settlingin.govt.nz", desc: "Official NZ government guide for new migrants" },
    ]
  },
  {
    category: "Filipino Community in NZ 🇵🇭",
    color: "#dc2626",
    icon: "🇵🇭",
    items: [
      { name: "Philippine Consulate – Auckland", url: "https://aucklandpcg.dfa.gov.ph", desc: "Official PH government office — passports, authentication, documents" },
      { name: "Filipinos in NZ – Facebook", url: "https://www.facebook.com/groups/filipinosinNZ", desc: "National Filipino community group on Facebook" },
      { name: "Filipinos in Auckland – Facebook", url: "https://www.facebook.com/groups/filipinosinAuckland", desc: "Largest Auckland-based Filipino group" },
      { name: "OFW Support New Zealand", url: "https://www.facebook.com/groups/ofwnz", desc: "Support and advice for Overseas Filipino Workers in NZ" },
      { name: "IDP IELTS Philippines", url: "https://www.idp.com/philippines/ielts/", desc: "Book IELTS in the Philippines with IDP" },
      { name: "British Council Philippines", url: "https://www.britishcouncil.ph/exam/ielts", desc: "Official IELTS registration in the Philippines" },
    ]
  },
  {
    category: "Indian Community in NZ 🇮🇳",
    color: "#f97316",
    icon: "🇮🇳",
    items: [
      { name: "Indian Newslink NZ", url: "https://indiannewslink.co.nz", desc: "News and community information for Indians in NZ" },
      { name: "Federation of Indian Associations NZ", url: "https://www.fianz.co.nz", desc: "National body representing Indian communities in NZ" },
      { name: "IDP IELTS India", url: "https://www.idp.com/india/ielts/", desc: "Book IELTS in India with IDP" },
      { name: "British Council India – IELTS", url: "https://www.britishcouncil.in/exam/ielts", desc: "Official IELTS registration in India" },
    ]
  },
  {
    category: "Pacific & Other Communities",
    color: "#0d7377",
    icon: "🌏",
    items: [
      { name: "Pacific NZ – Govt Resource", url: "https://www.mpp.govt.nz", desc: "NZ Ministry for Pacific Peoples" },
      { name: "South African Club NZ", url: "https://www.saclubwellington.org.nz", desc: "South African community in Wellington" },
      { name: "Multicultural NZ", url: "https://www.multicultural.net.nz", desc: "Supporting all migrant communities in NZ" },
      { name: "Refugee and Migrant Service NZ", url: "https://rms.org.nz", desc: "Support for refugees and migrants settling in NZ" },
    ]
  },
  {
    category: "Jobs in New Zealand",
    color: "#16a34a",
    icon: "💼",
    items: [
      { name: "Seek NZ", url: "https://www.seek.co.nz", desc: "New Zealand's biggest job board — all industries" },
      { name: "Trade Me Jobs", url: "https://www.trademe.co.nz/a/jobs", desc: "Wide range of NZ job listings" },
      { name: "Indeed NZ", url: "https://nz.indeed.com", desc: "Search jobs across all industries in NZ" },
      { name: "Healthcare NZ Jobs", url: "https://www.healthcarenz.co.nz/jobs/", desc: "Nursing and healthcare roles — high demand for migrants" },
      { name: "NZ Nurses Organisation", url: "https://www.nzno.org.nz", desc: "Professional body for nurses in NZ" },
      { name: "Engineers NZ", url: "https://www.engineeringnz.org", desc: "Professional registration for engineers in NZ" },
    ]
  },
  {
    category: "Education & Upskilling",
    color: "#7c3aed",
    icon: "📚",
    items: [
      { name: "TEC – Fees Free First Year", url: "https://www.tec.govt.nz/funding/funding-and-performance/funding/fees-free/", desc: "Free first year of tertiary education in NZ" },
      { name: "NZQA – NZ Qualifications", url: "https://www.nzqa.govt.nz", desc: "All NZ qualifications, levels, and frameworks" },
      { name: "Coursera (Free Courses)", url: "https://www.coursera.org", desc: "Free online courses from top universities" },
      { name: "OpenLearn – Free University", url: "https://www.open.edu/openlearn/", desc: "100% free university-level courses online" },
    ]
  },
  {
    category: "Daily Devotion & Bible",
    color: "#7c3aed",
    icon: "🙏",
    items: [
      { name: "YouVersion Bible App", url: "https://www.bible.com", desc: "Free Bible app — available in 100+ languages" },
      { name: "Our Daily Bread", url: "https://odb.org", desc: "Daily devotional readings in many languages" },
      { name: "labs.bible.org – Verse API", url: "https://labs.bible.org", desc: "Free Bible API powering this site's daily verse" },
      { name: "GodVine – Devotions", url: "https://www.godvine.com/devotions", desc: "Daily devotional content and inspirational stories" },
    ]
  },
]

export const IELTS_SECTIONS = [
  { icon: "✍️", color: "#0d7377", title: "Writing", band: "Task 1 & 2",
    tips: [
      "Task 1: Spend exactly 20 mins. Describe trends clearly. Write 150+ words.",
      "Task 2: Spend exactly 40 mins. State your opinion clearly in paragraph 1.",
      "Use linking words: Furthermore, However, In contrast, Therefore.",
      "Mix sentence lengths — short and long shows grammatical range.",
      "Check tense consistency in your last 2 minutes.",
    ]
  },
  { icon: "🎙️", color: "#dc2626", title: "Speaking", band: "Parts 1, 2 & 3",
    tips: [
      "Don't memorise answers — examiners can tell. Be natural.",
      "Extend answers — never give one-word replies.",
      "It's OK to think aloud: 'That's an interesting question...'",
      "Record yourself daily on your phone and listen back.",
      "Pronunciation matters more than accent — speak clearly.",
    ]
  },
  { icon: "👂", color: "#7c3aed", title: "Listening", band: "4 Sections",
    tips: [
      "Read questions BEFORE the audio — you get 30 seconds.",
      "Answer as you listen — don't wait until the end.",
      "Spelling counts — wrong spelling = wrong answer.",
      "Section 3 & 4 are hardest — stay focused, don't panic.",
      "Practice with BBC, TED Talks, NZ news podcasts daily.",
    ]
  },
  { icon: "📖", color: "#c8922a", title: "Reading", band: "3 Passages",
    tips: [
      "Don't read everything — skim first, scan for specific answers.",
      "True/False/Not Given: 'Not Given' means it's simply not mentioned.",
      "Matching headings: read first and last sentence of each paragraph.",
      "Strict timing — 20 minutes per passage maximum.",
      "Guess vocabulary from context — don't panic at unknown words.",
    ]
  },
]

export const BAND_GUIDE = [
  { band: "5.0", level: "Modest",     visa: "Some student visas",          color: "#ef4444" },
  { band: "6.0", level: "Competent",  visa: "Essential Skills Work Visa",  color: "#f97316" },
  { band: "6.5", level: "Competent+", visa: "Most skilled worker visas",   color: "#eab308" },
  { band: "7.0", level: "Good",       visa: "Skilled Migrant Category",    color: "#22c55e" },
  { band: "7.5+",level: "Very Good",  visa: "Fast-track residency",        color: "#14b8a6" },
]

export const VISA_TYPES = [
  { name: "Essential Skills Work Visa",    icon: "🔧", ielts: "Band 6.0",     duration: "Up to 5 years",      best: "Healthcare, construction, hospitality, trades",   color: "#0d7377", url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/essential-skills-work-visa" },
  { name: "Skilled Migrant Category",      icon: "⭐", ielts: "Band 6.5–7.0", duration: "Permanent Residency", best: "Skilled professionals with NZ job offer",         color: "#c8922a", url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/skilled-migrant-category-resident-visa" },
  { name: "Accredited Employer Work Visa", icon: "🏢", ielts: "Band 5.0–6.5", duration: "Up to 3 years",       best: "Any worker with an accredited NZ employer",      color: "#16a34a", url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/accredited-employer-work-visa" },
  { name: "Family Reunification",          icon: "👨‍👩‍👧", ielts: "Sometimes not required", duration: "Varies",  best: "Spouse, partner or children of NZ residents",   color: "#7c3aed", url: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/about-visa/partnership-based-temporary-visa" },
]

export const COST_OF_LIVING = [
  { item: "Rent (1 bedroom, Auckland)",      nzd: "$2,200–2,800/mo",  note: "Most expensive city" },
  { item: "Rent (1 bedroom, Christchurch)",  nzd: "$1,400–1,800/mo",  note: "Most affordable main city" },
  { item: "Rent (1 bedroom, Wellington)",    nzd: "$1,800–2,400/mo",  note: "Capital city" },
  { item: "Groceries (1 person)",            nzd: "$300–450/mo",      note: "Pak'nSave is cheapest supermarket" },
  { item: "Public transport (monthly)",      nzd: "$150–200/mo",      note: "AT HOP card saves money in Auckland" },
  { item: "Phone plan",                      nzd: "$20–35/mo",        note: "Skinny or 2degrees — best for new arrivals" },
  { item: "Power & internet",                nzd: "$150–200/mo",      note: "Compare at powerswitch.org.nz" },
  { item: "Send money home (Wise fee)",      nzd: "~$3–5/transfer",   note: "Much cheaper than banks" },
]

export const REFLECTIONS = [
  { text: "Leaving your homeland takes tremendous courage. There are moments when the paperwork feels endless, the new country feels cold, and you wonder if you made the right choice. But consider this — you were not moved by accident. Every difficult journey has a reason bigger than what we can see in the moment. Trust the path you are on." },
  { text: "Loneliness in a new country is real. It is not weakness — it is love. It means you have people worth missing and a home worth remembering. Carry that love into your day today, and let it fuel you rather than drain you. You brought something beautiful with you when you moved here." },
  { text: "Every document you file, every exam you sit, every shift you work far from home — it is an act of love for your family. The people watching you from back home see your sacrifice even on the days it feels invisible. Keep going." },
  { text: "Starting over is never easy. But you did not come this far to only come this far. The strength that carried you through the application, the flight, the first cold morning in a new city — that same strength is still in you today." },
  { text: "Patience is one of the hardest things when you are waiting for a visa decision, a job offer, or a residency approval. But even seeds planted in good soil take time before anything appears above the surface. What is growing beneath cannot always be seen yet." },
  { text: "You are not just building a career or chasing a visa. You are building a life — for yourself, for your children, for the family watching proudly from home. On the hard days, remember what the good days are for." },
  { text: "Rest is not giving up. Homesickness is not failure. Missing your family is not weakness. You are a human being doing something extraordinarily hard. Be kind to yourself today. The journey continues tomorrow." },
]

export const FILIPINO_SPOTLIGHT = {
  title: "A Note for Filipinos 🇵🇭",
  subtitle: "Filipinos are one of the fastest-growing and most valued migrant communities in New Zealand.",
  stats: [
    { value: "70,000+", label: "Filipinos currently living in NZ" },
    { value: "#1", label: "Source country for NZ nurses" },
    { value: "Band 6.5", label: "Typical IELTS target for skilled migration" },
    { value: "3 cities", label: "Philippine Consulate offices — Auckland, Wellington, Christchurch" },
  ],
  tip: "Tagalog speakers: many NZ government services have Filipino staff or Tagalog interpreters available. Always ask."
}
