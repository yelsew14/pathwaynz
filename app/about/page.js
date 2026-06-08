export default function About() {
  return (
    <div style={{ background: '#fdf6ee', minHeight: '100vh', fontFamily: "'Nunito', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Nunito:wght@400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .pf{font-family:'Playfair Display',Georgia,serif}
        .nu{font-family:'Nunito',sans-serif}
        a{color:#0d7377;text-decoration:none}
        a:hover{text-decoration:underline}
      `}</style>

      {/* Nav */}
      <div style={{ background: '#0f2744', padding: '0 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <div style={{ width: 30, height: 30, background: '#c8922a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🥝</div>
            <div>
              <div className="pf" style={{ color: '#ffffff', fontSize: 16, fontWeight: 800, lineHeight: 1 }}>PathwayNZ</div>
              <div className="nu" style={{ color: '#f0c060', fontSize: 9, letterSpacing: '.1em', textTransform: 'uppercase' }}>Para sa mga Pilipino</div>
            </div>
          </a>
          <div style={{ display: 'flex', gap: 16 }}>
            <a href="/" className="nu" style={{ color: '#94a3b8', fontSize: 13 }}>← Back to Home</a>
            <a href="/privacy" className="nu" style={{ color: '#94a3b8', fontSize: 13 }}>Privacy Policy</a>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '60px 24px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'inline-block', background: '#c8922a18', borderRadius: 20, padding: '4px 14px', marginBottom: 16 }}>
            <span className="nu" style={{ color: '#c8922a', fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase' }}>About</span>
          </div>
          <h1 className="pf" style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 800, color: '#0f2744', marginBottom: 12, lineHeight: 1.1 }}>
            About PathwayNZ 🥝
          </h1>
          <p className="nu" style={{ color: '#5a6a7a', fontSize: 16, lineHeight: 1.8, maxWidth: 580 }}>
            PathwayNZ is a free online resource built specifically for Filipinos planning to migrate to, or already living in, New Zealand.
          </p>
        </div>

        {[
          {
            title: 'What is PathwayNZ?',
            color: '#0d7377',
            content: `PathwayNZ is a free, comprehensive information website for Filipinos in New Zealand. It covers everything from IELTS exam preparation, New Zealand visa guides, the student pathway, settling-in checklists, cost of living comparisons in NZD and PHP, Filipino community resources, a daily Bible devotion in English and Tagalog, and a curated directory of helpful links.

The site is designed to be a single trusted resource — the kind of guide that a newly arrived Filipino migrant, or someone planning to migrate, can rely on for accurate, practical information presented in plain English.`
          },
          {
            title: 'Who is it for?',
            color: '#dc2626',
            content: `PathwayNZ is built for Filipinos at every stage of the New Zealand migration journey:

• Filipinos in the Philippines preparing for IELTS and planning their visa application
• Overseas Filipino Workers (OFWs) who have arrived in New Zealand and are settling in
• Filipino students studying in New Zealand and planning their post-study residency pathway
• Filipino families reuniting in New Zealand
• Established Filipino residents helping newly arrived kababayans find their feet

All content is free. There is no registration required. The site is available to anyone.`
          },
          {
            title: 'What does PathwayNZ cover?',
            color: '#7c3aed',
            content: `PathwayNZ covers seven main areas:

IELTS Preparation — Band score guides for NZ visa requirements, tips for Writing, Speaking, Listening and Reading, and a four-week study plan designed for Filipinos.

NZ Immigration — Plain English explanations of the most common visa types for Filipinos including the Skilled Migrant Category, Accredited Employer Work Visa, and Family Reunification, plus document checklists and common rejection reasons.

Student Pathway — A complete eight-step guide from choosing a course in the Philippines to graduating and applying for NZ residency, covering student visa requirements, top universities and polytechnics, costs, and part-time work rules.

Settling In NZ — A week-by-week 30-day checklist for newly arrived Filipinos, covering IRD number, banking, SIM cards, transport, and cost of living in both NZD and PHP equivalents.

Your Future — The full residency and citizenship pathway, family reunification guides, and free upskilling options in New Zealand.

Daily Devotion — A live Bible Verse of the Day pulled automatically from labs.bible.org, with a daily reflection and prayer written specifically for Filipinos on the migrant journey. Available in English and Tagalog.

Links Directory — A curated directory of official NZ government sites, Filipino community groups, the Philippine Consulate in Auckland, IELTS registration in the Philippines, OFW support groups, NZ job boards, and Bible resources.`
          },
          {
            title: 'Who built PathwayNZ?',
            color: '#c8922a',
            content: `PathwayNZ is operated by wesstech.xyz, a New Zealand-based web design and technology services business. We build websites and digital tools that serve real community needs.

PathwayNZ was created out of a genuine desire to help the Filipino community in New Zealand — one of the fastest-growing and most valued migrant communities in the country. Filipinos represent the largest source of skilled migrants in several key sectors including nursing and healthcare, and yet quality, centralised information written specifically for Filipino migrants has been hard to find.

PathwayNZ fills that gap. It will always be free.`
          },
          {
            title: 'Accuracy and Disclaimer',
            color: '#16a34a',
            content: `PathwayNZ provides general information only. While we work hard to keep content accurate and up to date, immigration rules, visa requirements, and IELTS standards can change.

For immigration advice specific to your situation, always consult a licensed immigration adviser registered with the Immigration Advisers Authority (IAA) of New Zealand.

For the most current visa requirements, always check the official Immigration New Zealand website at immigration.govt.nz.

IELTS requirements listed are indicative — always verify with your specific visa type on the Immigration NZ website.`
          },
          {
            title: 'Contact',
            color: '#0d7377',
            content: `For questions, feedback, or corrections about PathwayNZ content, please contact us through wesstech.xyz.

PathwayNZ is part of the wesstech.xyz web portfolio, which also includes WessTech (wesstech.xyz) — a live AI and technology news site for New Zealand and the world.`
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: 28 }}>
            <div style={{ background: '#ffffff', border: `1px solid #e8dcc8`, borderLeft: `4px solid ${s.color}`, borderRadius: 14, padding: '24px 24px' }}>
              <h2 className="pf" style={{ fontSize: 20, fontWeight: 700, color: '#0f2744', marginBottom: 14 }}>{s.title}</h2>
              {s.content.split('\n\n').map((para, j) => (
                <p key={j} className="nu" style={{ color: '#5a6a7a', fontSize: 14.5, lineHeight: 1.85, marginBottom: j < s.content.split('\n\n').length - 1 ? 12 : 0, whiteSpace: 'pre-line' }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom links */}
        <div style={{ marginTop: 40, background: '#0f2744', borderRadius: 14, padding: '24px 24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <a href="/" className="nu" style={{ color: '#f0c060', fontSize: 14, fontWeight: 600 }}>← Back to PathwayNZ</a>
          <div style={{ display: 'flex', gap: 20 }}>
            <a href="/privacy" className="nu" style={{ color: '#94a3b8', fontSize: 13 }}>Privacy Policy</a>
            <a href="https://wesstech.xyz" target="_blank" rel="noopener noreferrer" className="nu" style={{ color: '#94a3b8', fontSize: 13 }}>wesstech.xyz</a>
          </div>
        </div>

      </div>
    </div>
  )
}
