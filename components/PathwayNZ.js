'use client'
import { useState, useEffect } from 'react'
import { COLORS, NAV_ITEMS, LINKS, IELTS_SECTIONS, BAND_GUIDE, VISA_TYPES, COST_OF_LIVING, REFLECTIONS, FILIPINO_STATS, UNIVERSITIES, STUDENT_COSTS, STUDENT_PATHWAY_STEPS, WORK_RULES } from '../lib/data'

export default function PathwayNZ() {
  const [page, setPage]             = useState('home')
  const [activeIelts, setActiveIelts] = useState(null)
  const [devotionLang, setDevotionLang] = useState('en')
  const [votd, setVotd]             = useState(null)
  const [votdLoading, setVotdLoading] = useState(false)
  const [votdError, setVotdError]   = useState(false)
  const [activeLink, setActiveLink] = useState(null)

  // Use day of month (1–31) so reflection changes every calendar day
  const dayOfMonth = new Date().getDate() // 1–31
  const todayReflection = REFLECTIONS[(dayOfMonth - 1) % REFLECTIONS.length]

  useEffect(() => {
    if (page === 'devotion' && !votd && !votdLoading) {
      setVotdLoading(true)
      fetch('https://labs.bible.org/api/?passage=votd&type=json')
        .then(r => r.json())
        .then(data => { setVotd(data[0]); setVotdLoading(false) })
        .catch(() => { setVotdError(true); setVotdLoading(false) })
    }
  }, [page])

  const nav = (id) => { setPage(id); window.scrollTo(0, 0) }

  return (
    <div style={{ background: COLORS.bg, minHeight: '100vh', color: COLORS.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Inter:wght@300;400;500;600;700&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .pf{font-family:'Playfair Display',Georgia,serif}
        .it{font-family:'Inter',sans-serif}
        .tag{display:inline-block;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:4px 12px;border-radius:20px;font-family:'Inter',sans-serif}
        .ch{transition:transform .18s,box-shadow .18s;cursor:pointer}
        .ch:hover{transform:translateY(-3px);box-shadow:0 8px 28px rgba(0,0,0,.09)}
        .nb{cursor:pointer;transition:all .18s;border:none;background:none}
        .nb:hover{opacity:.75}
        .fi{animation:fadeIn .45s ease forwards}
        .gp{background-image:radial-gradient(circle at 1px 1px,#00000008 1px,transparent 0);background-size:20px 20px}
        .sx{overflow-x:auto;-webkit-overflow-scrolling:touch}
        .sx::-webkit-scrollbar{height:4px}
        .sx::-webkit-scrollbar-track{background:#f1f5f9}
        .sx::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:2px}
        @keyframes fadeIn{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        a{color:inherit;text-decoration:none}
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ background: COLORS.navy, position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 16px rgba(0,0,0,.25)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 56, gap: 8, overflowX: 'auto' }}>
          <button className="nb" onClick={() => nav('home')} style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            <div style={{ width: 32, height: 32, background: COLORS.gold, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🥝</div>
            <div>
              <div className="pf" style={{ color: COLORS.white, fontSize: 16, fontWeight: 800, lineHeight: 1 }}>PathwayNZ</div>
              <div className="it" style={{ color: COLORS.goldLight, fontSize: 9, letterSpacing: '.12em', textTransform: 'uppercase' }}>Para sa mga Pilipino sa NZ</div>
            </div>
          </button>
          <div style={{ display: 'flex', gap: 2, flexShrink: 0 }}>
            {NAV_ITEMS.filter(n => n.id !== 'home').map(n => (
              <button key={n.id} className="nb it" onClick={() => nav(n.id)}
                style={{ padding: '5px 10px', borderRadius: 7, fontSize: 12, fontWeight: 600, color: page === n.id ? COLORS.navy : '#94a3b8', background: page === n.id ? COLORS.goldLight : 'transparent', whiteSpace: 'nowrap' }}>
                {n.icon} {n.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 16px 80px' }}>

        {/* ══ HOME ══ */}
        {page === 'home' && (
          <div className="fi">
            {/* Hero */}
            <div style={{ position: 'relative', padding: '60px 0 40px', overflow: 'hidden' }} className="gp">
              <div style={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, background: '#c8922a0a', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', bottom: -40, left: -40, width: 200, height: 200, background: '#0d73770a', borderRadius: '50%' }} />
              <div style={{ position: 'relative', maxWidth: 640 }}>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 18 }}>
                  <div className="tag" style={{ background: '#c8922a18', color: COLORS.gold }}>pathway.wesstech.xyz</div>
                  <div className="tag" style={{ background: '#dc262618', color: COLORS.red }}>🇵🇭 Para sa mga Pilipino</div>
                </div>
                <h1 className="pf" style={{ fontSize: 'clamp(30px,5.5vw,54px)', fontWeight: 800, lineHeight: 1.1, marginBottom: 16, color: COLORS.navy }}>
                  Ang Iyong Gabay sa<br /><span style={{ color: COLORS.gold }}>Bagong Buhay sa New Zealand</span>
                </h1>
                <p className="it" style={{ fontSize: 16, color: COLORS.muted, maxWidth: 520, lineHeight: 1.8, marginBottom: 12 }}>
                  Everything a Filipino needs to start a new life in New Zealand — IELTS preparation, visa guides, settling-in tips, daily devotion, and Filipino community resources. Free, always.
                </p>
                <div style={{ background: COLORS.goldSoft, borderRadius: 10, padding: '10px 16px', marginBottom: 20, display: 'inline-block' }}>
                  <span className="it" style={{ fontSize: 13, color: COLORS.gold }}>💡 Tagalog toggle available on the Devotion page</span>
                </div>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 8 }}>
                  <button onClick={() => nav('ielts')} className="it" style={{ background: COLORS.navy, color: COLORS.white, border: 'none', borderRadius: 9, padding: '11px 22px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Start IELTS Prep →</button>
                  <button onClick={() => nav('immigration')} className="it" style={{ background: COLORS.teal, color: COLORS.white, border: 'none', borderRadius: 9, padding: '11px 22px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Visa Guide →</button>
                  <button onClick={() => nav('devotion')} className="it" style={{ background: '#c8922a18', color: COLORS.gold, border: `1.5px solid ${COLORS.gold}`, borderRadius: 9, padding: '11px 22px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Today's Devotion 🙏</button>
                </div>
              </div>
            </div>

            {/* Filipino stats strip */}
            <div style={{ background: `linear-gradient(135deg,#0f2744,#1a3a5c)`, borderRadius: 16, padding: '20px 24px', marginBottom: 24, display: 'flex', gap: 0, flexWrap: 'wrap' }}>
              <div style={{ flex: '0 0 100%', marginBottom: 14 }}>
                <div className="tag" style={{ background: '#dc262620', color: '#fca5a5', marginBottom: 4 }}>🇵🇭 Filipinos in New Zealand</div>
              </div>
              {FILIPINO_STATS.map((s, i) => (
                <div key={i} style={{ flex: '1 1 120px', textAlign: 'center', padding: '8px 12px', borderRight: i < FILIPINO_STATS.length - 1 ? '1px solid #1e3a5c' : 'none' }}>
                  <div className="pf" style={{ fontSize: 22, fontWeight: 800, color: COLORS.goldLight }}>{s.value}</div>
                  <div className="it" style={{ fontSize: 11, color: '#64748b', marginTop: 3, lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Section cards */}
            <Sec title="Lahat ng Kailangan Mo — Everything You Need">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12 }}>
                {[
                  { id:'ielts',       icon:'🎓', title:'IELTS Prep',         desc:'Band guides, tips for all 4 skills, 4-week study plan',              color: COLORS.teal   },
                  { id:'immigration', icon:'🛂', title:'NZ Immigration',     desc:'Visa types, step-by-step guides, document checklists',               color: COLORS.red    },
                  { id:'student',     icon:'🎒', title:'Student Pathway',    desc:'Study in NZ, student visa, post-study work, path to residency',      color: COLORS.blue   },
                  { id:'settling',    icon:'🏡', title:'Settling In NZ',     desc:'IRD, banking, cost of living in NZD & PHP, Filipino communities',    color: COLORS.gold   },
                  { id:'future',      icon:'🌱', title:'Your Future in NZ',  desc:'Residency pathway, citizenship, bringing family to NZ',              color: COLORS.green  },
                  { id:'devotion',    icon:'🙏', title:'Daily Devotion',     desc:'Live Bible verse + reflection in English & Tagalog — for Filipinos', color: COLORS.violet },
                  { id:'links',       icon:'🔗', title:'Filipino Links',     desc:'PH Consulate, OFW groups, IELTS PH, remittance, job boards',        color: COLORS.navy   },
                ].map(c => (
                  <div key={c.id} className="ch" onClick={() => nav(c.id)}
                    style={{ background: COLORS.cardBg, border: `1.5px solid ${COLORS.border}`, borderRadius: 16, padding: '20px 16px', borderTop: `3px solid ${c.color}` }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
                    <h3 className="pf" style={{ fontSize: 17, fontWeight: 700, color: COLORS.navy, marginBottom: 5 }}>{c.title}</h3>
                    <p className="it" style={{ fontSize: 12.5, color: COLORS.muted, lineHeight: 1.6 }}>{c.desc}</p>
                    <div className="it" style={{ fontSize: 11, color: c.color, marginTop: 10, fontWeight: 600 }}>Explore →</div>
                  </div>
                ))}
              </div>
            </Sec>

            {/* Live verse teaser */}
            <LiveVersTeaser onReadMore={() => nav('devotion')} />
          </div>
        )}

        {/* ══ IELTS ══ */}
        {page === 'ielts' && (
          <div className="fi" style={{ paddingTop: 40 }}>
            <PageHeader icon="🎓" tag="IELTS Preparation" title="I-Pass ang IELTS Mo" subtitle="Practical tips for all four skills — written specifically for Filipino test-takers heading to New Zealand." color={COLORS.teal} />

            <Sec title="Band Score Guide for NZ Visas">
              <div className="sx">
                <table style={{ width:'100%', borderCollapse:'collapse', minWidth: 480 }}>
                  <thead><tr style={{ background: COLORS.navy }}>
                    {['Band','Level','NZ Visa Eligibility'].map(h => <th key={h} className="it" style={{ padding:'11px 16px', color: COLORS.white, textAlign:'left', fontSize:13, fontWeight:600 }}>{h}</th>)}
                  </tr></thead>
                  <tbody>
                    {BAND_GUIDE.map((b,i) => (
                      <tr key={i} style={{ background: i%2===0 ? COLORS.cardBg : '#f8fafc', borderBottom:`1px solid ${COLORS.border}` }}>
                        <td style={{ padding:'11px 16px' }}><span className="it" style={{ background:b.color, color:'#fff', borderRadius:7, padding:'3px 12px', fontWeight:800, fontSize:15 }}>{b.band}</span></td>
                        <td className="it" style={{ padding:'11px 16px', fontSize:13.5, color: COLORS.muted }}>{b.level}</td>
                        <td className="it" style={{ padding:'11px 16px', fontSize:13.5, color: COLORS.text, fontWeight:500 }}>{b.visa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Sec>

            <Sec title="Tips by Skill — Click to Expand">
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:12 }}>
                {IELTS_SECTIONS.map((s,i) => (
                  <div key={i} className="ch" onClick={() => setActiveIelts(activeIelts===i ? null : i)}
                    style={{ background: COLORS.cardBg, border:`1.5px solid ${activeIelts===i ? s.color : COLORS.border}`, borderRadius:14, padding:'20px 18px', borderLeft:`4px solid ${s.color}` }}>
                    <div style={{ fontSize:26, marginBottom:8 }}>{s.icon}</div>
                    <h3 className="pf" style={{ fontSize:19, fontWeight:700, color: COLORS.navy }}>{s.title}</h3>
                    <div className="tag" style={{ background:s.color+'18', color:s.color, marginTop:6, marginBottom: activeIelts===i ? 14:0 }}>{s.band}</div>
                    {activeIelts===i && (
                      <ul style={{ listStyle:'none', paddingLeft:0, marginTop:10 }}>
                        {s.tips.map((t,j) => (
                          <li key={j} className="it" style={{ fontSize:13.5, color: COLORS.muted, marginBottom:9, paddingLeft:18, position:'relative', lineHeight:1.6 }}>
                            <span style={{ position:'absolute', left:0, color:s.color, fontWeight:700 }}>✓</span>{t}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="it" style={{ fontSize:11, color: COLORS.dimmed, marginTop:10 }}>{activeIelts===i ? '▲ collapse':'▼ show tips'}</div>
                  </div>
                ))}
              </div>
            </Sec>

            <Sec title="4-Week Study Plan (1 hour/day)">
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))', gap:10 }}>
                {[
                  { week:'Week 1', focus:'Listening + Reading', color:COLORS.teal,   tasks:['Daily: 1 listening section','Daily: 1 reading passage','Learn 10 new vocab words/day','Watch NZ news or BBC in English'] },
                  { week:'Week 2', focus:'Writing Task 1 & 2',  color:COLORS.gold,   tasks:['Write 1 Task 1 daily','Write 1 Task 2 every 2 days','Study linking words list','Read model answers online'] },
                  { week:'Week 3', focus:'Speaking Practice',   color:COLORS.red,    tasks:['Record yourself daily','Practice Part 2 cue cards','Study common Part 3 topics','Listen back and self-assess'] },
                  { week:'Week 4', focus:'Full Mock Tests',     color:COLORS.violet, tasks:['1 full mock test per day','Time yourself strictly','Review all wrong answers','Rest the day before the exam'] },
                ].map((w,i) => (
                  <div key={i} style={{ background: COLORS.cardBg, border:`1px solid ${COLORS.border}`, borderRadius:12, padding:'18px 16px' }}>
                    <div className="tag" style={{ background:w.color+'18', color:w.color, marginBottom:8 }}>{w.week}</div>
                    <h4 className="pf" style={{ fontSize:15, fontWeight:700, color: COLORS.navy, marginBottom:10 }}>{w.focus}</h4>
                    {w.tasks.map((t,j) => (
                      <div key={j} className="it" style={{ fontSize:12.5, color: COLORS.muted, marginBottom:6, display:'flex', gap:7 }}>
                        <span style={{ color:w.color, flexShrink:0 }}>→</span>{t}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Sec>

            <Sec title="Free IELTS Practice Resources">
              <LinkGrid items={LINKS.find(l=>l.category.includes('IELTS')).items} color={COLORS.teal} />
            </Sec>
          </div>
        )}

        {/* ══ IMMIGRATION ══ */}
        {page === 'immigration' && (
          <div className="fi" style={{ paddingTop:40 }}>
            <PageHeader icon="🛂" tag="NZ Immigration Guide" title="Paano Makakuha ng Visa sa NZ" subtitle="Plain English guides written for Filipinos — walang jargon, walang kalituhan." color={COLORS.red} />

            <Sec title="Common Visa Types">
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:12 }}>
                {VISA_TYPES.map((v,i) => (
                  <a key={i} href={v.url} target="_blank" rel="noopener noreferrer">
                    <div className="ch" style={{ background: COLORS.cardBg, border:`1.5px solid ${COLORS.border}`, borderRadius:14, padding:'20px 18px', height:'100%' }}>
                      <div style={{ fontSize:30, marginBottom:10 }}>{v.icon}</div>
                      <h3 className="pf" style={{ fontSize:17, fontWeight:700, color: COLORS.navy, marginBottom:8 }}>{v.name}</h3>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:6, marginBottom:10 }}>
                        <span className="tag" style={{ background:v.color+'18', color:v.color }}>IELTS: {v.ielts}</span>
                        <span className="tag" style={{ background:'#c8922a18', color: COLORS.gold }}>{v.duration}</span>
                      </div>
                      <p className="it" style={{ fontSize:12.5, color: COLORS.muted, lineHeight:1.5 }}>Best for: {v.best}</p>
                      <div className="it" style={{ fontSize:11.5, color:v.color, marginTop:10, fontWeight:600 }}>View on Immigration NZ →</div>
                    </div>
                  </a>
                ))}
              </div>
            </Sec>

            <Sec title="Document Checklist (Most Visa Types)">
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(230px,1fr))', gap:10 }}>
                {[
                  { cat:'Identity',            color:COLORS.red,   docs:['Valid passport (6+ months validity)','Birth certificate','National ID / NBI Clearance','Police clearance from home country'] },
                  { cat:'Work & Qualifications',color:COLORS.teal,  docs:['IELTS certificate (valid 2 years)','University diploma and transcripts','Professional licence from home country','Employment records / contracts'] },
                  { cat:'Health & Character',  color:COLORS.green, docs:['Medical exam (INZ-approved clinic)','Chest X-ray','Vaccination records','Character reference letters'] },
                  { cat:'Financial',           color:COLORS.gold,  docs:['Bank statements (3–6 months)','Proof of employment / job offer','Sponsor letter (if applicable)','Visa application fee payment'] },
                ].map((c,i) => (
                  <div key={i} style={{ background: COLORS.cardBg, border:`1px solid ${COLORS.border}`, borderRadius:12, padding:'16px 15px' }}>
                    <div className="tag" style={{ background:c.color+'18', color:c.color, marginBottom:10 }}>{c.cat}</div>
                    {c.docs.map((d,j) => (
                      <div key={j} className="it" style={{ fontSize:12.5, color: COLORS.muted, marginBottom:7, display:'flex', gap:8 }}>
                        <span style={{ color:c.color, flexShrink:0 }}>☐</span>{d}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Sec>

            <Sec title="Common Rejection Reasons — and How to Avoid Them">
              {[
                { r:'Insufficient IELTS score',    f:'Check the exact band required for your visa type. General Training vs Academic matters — most work visas accept General Training.' },
                { r:'Incomplete documents',         f:'Use the INZ checklist for your specific visa. Even one missing document causes delays or outright rejection.' },
                { r:'Gaps in employment history',  f:'Explain all gaps in a cover letter. Unexplained gaps raise red flags for visa officers.' },
                { r:'Wrong medical clinic',         f:'Only use INZ-approved panel physicians. Check the INZ website for approved clinics in your country.' },
                { r:'Inconsistent information',    f:'Dates, names, and addresses must match exactly across all documents. Even small errors raise suspicion.' },
              ].map((r,i) => (
                <div key={i} style={{ background: COLORS.cardBg, border:`1px solid ${COLORS.border}`, borderRadius:11, padding:'14px 18px', marginBottom:9, display:'flex', gap:14 }}>
                  <span style={{ fontSize:18, flexShrink:0 }}>⚠️</span>
                  <div>
                    <div className="it" style={{ fontWeight:700, color: COLORS.red, fontSize:13.5, marginBottom:3 }}>{r.r}</div>
                    <div className="it" style={{ fontSize:13, color: COLORS.muted, lineHeight:1.6 }}>{r.f}</div>
                  </div>
                </div>
              ))}
            </Sec>

            <Sec title="Official Immigration Links">
              <LinkGrid items={LINKS.find(l=>l.category.includes('NZ Immigration')).items} color={COLORS.red} />
            </Sec>

            {/* Student pathway callout */}
            <div style={{ background:`linear-gradient(135deg,#1e3a8a,#1d4ed8)`, borderRadius:16, padding:'24px 24px', marginTop:8 }}>
              <div className="tag" style={{ background:'#ffffff18', color:'#bfdbfe', marginBottom:10 }}>🎒 Student Pathway</div>
              <h3 className="pf" style={{ fontSize:19, fontWeight:700, color:COLORS.white, marginBottom:8 }}>Planning to Study in NZ First?</h3>
              <p className="it" style={{ color:'#93c5fd', fontSize:13.5, lineHeight:1.7, marginBottom:16 }}>
                Studying in NZ is one of the strongest pathways to residency. A NZ degree adds 50 points to your Skilled Migrant application. We have a full guide covering student visas, top universities, costs, part-time work rules, and the step-by-step path from student to resident.
              </p>
              <button onClick={() => nav('student')} className="it" style={{ background:COLORS.white, color:'#1d4ed8', border:'none', borderRadius:8, padding:'9px 18px', fontSize:12.5, fontWeight:700, cursor:'pointer' }}>
                View Full Student Pathway Guide →
              </button>
            </div>
          </div>
        )}

        {/* ══ STUDENT PATHWAY ══ */}
        {page === 'student' && (
          <div className="fi" style={{ paddingTop:40 }}>
            <PageHeader icon="🎒" tag="Student Pathway" title="Mag-aral sa New Zealand" subtitle="Your complete guide — from choosing a course in the Philippines to graduating and getting NZ residency." color={COLORS.blue} />

            {/* Key facts strip */}
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))', gap:10, marginBottom:32 }}>
              {[
                { value:'IELTS 5.5+', label:'Minimum for most institutions' },
                { value:'20 hrs/wk',  label:'Part-time work allowed during study' },
                { value:'1–3 years',  label:'Post-study work visa after graduation' },
                { value:'+50 pts',    label:'NZ degree adds to SMC residency points' },
              ].map((s,i) => (
                <div key={i} style={{ background:COLORS.cardBg, border:`1px solid ${COLORS.border}`, borderRadius:12, padding:'14px 14px', textAlign:'center', borderTop:`3px solid ${COLORS.blue}` }}>
                  <div className="pf" style={{ fontSize:20, fontWeight:800, color:COLORS.blue }}>{s.value}</div>
                  <div className="it" style={{ fontSize:11, color:COLORS.muted, marginTop:4, lineHeight:1.4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* 8-step pathway */}
            <Sec title="Step-by-Step: From Philippines to NZ Residency via Study">
              {STUDENT_PATHWAY_STEPS.map((s,i) => (
                <div key={i} style={{ display:'flex', gap:16, marginBottom:12, alignItems:'flex-start' }}>
                  <div style={{ width:42, height:42, borderRadius:'50%', background:s.color, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>{s.icon}</div>
                  <div style={{ background:COLORS.cardBg, border:`1px solid ${COLORS.border}`, borderRadius:12, padding:'14px 18px', flex:1, borderLeft:`4px solid ${s.color}` }}>
                    <div className="tag" style={{ background:s.color+'18', color:s.color, marginBottom:5 }}>Step {s.step}</div>
                    <h4 className="pf" style={{ fontSize:16, fontWeight:700, color:COLORS.navy, marginBottom:5 }}>{s.title}</h4>
                    <p className="it" style={{ fontSize:13, color:COLORS.muted, lineHeight:1.65, marginBottom:8 }}>{s.desc}</p>
                    <div style={{ background:s.color+'12', borderRadius:8, padding:'8px 12px', display:'flex', gap:8 }}>
                      <span style={{ color:s.color, flexShrink:0 }}>💡</span>
                      <span className="it" style={{ fontSize:12, color:COLORS.muted, lineHeight:1.5 }}>{s.tip}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Sec>

            {/* Universities */}
            <Sec title="Top NZ Universities & Polytechnics for Filipinos">
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(270px,1fr))', gap:12 }}>
                {UNIVERSITIES.map((u,i) => (
                  <a key={i} href={u.url} target="_blank" rel="noopener noreferrer">
                    <div className="ch" style={{ background:COLORS.cardBg, border:`1px solid ${COLORS.border}`, borderRadius:14, padding:'18px 18px', height:'100%', borderTop:`3px solid ${u.color}` }}>
                      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:8 }}>
                        <div>
                          <span className="tag" style={{ background: u.type==='University' ? '#dbeafe':'#dcfce7', color: u.type==='University' ? '#1d4ed8':'#15803d', marginBottom:6 }}>{u.type}</span>
                          <span className="tag" style={{ background:'#f3f4f6', color:'#6b7280', marginLeft:6 }}>{u.location}</span>
                        </div>
                        <span className="it" style={{ fontSize:11, color:COLORS.dimmed }}>{u.ranking}</span>
                      </div>
                      <h3 className="pf" style={{ fontSize:16, fontWeight:700, color:COLORS.navy, marginBottom:10 }}>{u.name}</h3>
                      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:6, marginBottom:10 }}>
                        <div style={{ background:'#f8fafc', borderRadius:8, padding:'8px 10px' }}>
                          <div className="it" style={{ fontSize:10, color:COLORS.dimmed, marginBottom:2 }}>IELTS Min.</div>
                          <div className="it" style={{ fontSize:13, fontWeight:700, color:COLORS.teal }}>{u.ielts}</div>
                        </div>
                        <div style={{ background:'#f8fafc', borderRadius:8, padding:'8px 10px' }}>
                          <div className="it" style={{ fontSize:10, color:COLORS.dimmed, marginBottom:2 }}>Fees/year</div>
                          <div className="it" style={{ fontSize:12, fontWeight:700, color:COLORS.red }}>{u.fees}</div>
                        </div>
                      </div>
                      <div className="it" style={{ fontSize:11.5, color:COLORS.muted, marginBottom:8 }}>
                        <strong>Popular courses:</strong> {u.popular.join(', ')}
                      </div>
                      <div className="it" style={{ fontSize:11, color:COLORS.blue, fontWeight:600 }}>Visit website ↗</div>
                    </div>
                  </a>
                ))}
              </div>
            </Sec>

            {/* Work rules */}
            <Sec title="How Many Hours Can You Work as a Student?">
              <div className="sx">
                <table style={{ width:'100%', borderCollapse:'collapse', minWidth:460 }}>
                  <thead><tr style={{ background:COLORS.navy }}>
                    {['Situation','Hours Allowed','Notes'].map(h => <th key={h} className="it" style={{ padding:'11px 16px', color:COLORS.white, textAlign:'left', fontSize:12.5, fontWeight:600 }}>{h}</th>)}
                  </tr></thead>
                  <tbody>
                    {WORK_RULES.map((r,i) => (
                      <tr key={i} style={{ background: i%2===0 ? COLORS.cardBg : '#fdf6ee', borderBottom:`1px solid ${COLORS.border}` }}>
                        <td className="it" style={{ padding:'11px 16px', fontSize:13 }}>{r.rule}</td>
                        <td className="it" style={{ padding:'11px 16px', fontSize:13, fontWeight:700, color:COLORS.teal }}>{r.hours}</td>
                        <td className="it" style={{ padding:'11px 16px', fontSize:12, color:COLORS.muted }}>{r.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ background:'#fef3c7', border:'1px solid #fbbf24', borderRadius:10, padding:'12px 16px', marginTop:12 }}>
                <span className="it" style={{ fontSize:13, color:'#92400e' }}>💰 At NZ minimum wage (~$23/hr) × 20 hrs/week = approx. <strong>$460/week</strong> to help cover living costs during term time.</span>
              </div>
            </Sec>

            {/* Costs */}
            <Sec title="Cost of Studying in NZ — What to Budget">
              <div className="sx">
                <table style={{ width:'100%', borderCollapse:'collapse', minWidth:500 }}>
                  <thead><tr style={{ background:COLORS.navy }}>
                    {['Expense','Low Estimate','High Estimate','Notes'].map(h => <th key={h} className="it" style={{ padding:'11px 16px', color:COLORS.white, textAlign:'left', fontSize:12.5, fontWeight:600 }}>{h}</th>)}
                  </tr></thead>
                  <tbody>
                    {STUDENT_COSTS.map((c,i) => (
                      <tr key={i} style={{ background: i%2===0 ? COLORS.cardBg : '#fdf6ee', borderBottom:`1px solid ${COLORS.border}` }}>
                        <td className="it" style={{ padding:'11px 16px', fontSize:13 }}>{c.item}</td>
                        <td className="it" style={{ padding:'11px 16px', fontSize:13, fontWeight:600, color:COLORS.green }}>{c.low}</td>
                        <td className="it" style={{ padding:'11px 16px', fontSize:13, fontWeight:600, color:COLORS.red }}>{c.high}</td>
                        <td className="it" style={{ padding:'11px 16px', fontSize:12, color:COLORS.muted }}>{c.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ background:'#f0fdf4', border:'1px solid #86efac', borderRadius:10, padding:'12px 16px', marginTop:12 }}>
                <span className="it" style={{ fontSize:13, color:'#14532d' }}>💡 <strong>Tip for Filipinos:</strong> Southern Institute of Technology (SIT) in Invercargill offers some of the most affordable tuition in NZ and has a growing Filipino student community.</span>
              </div>
            </Sec>

            {/* Post-study to residency */}
            <Sec title="From Graduate to Resident — The Points">
              <div style={{ background:`linear-gradient(135deg,#0f2744,#1a3a5c)`, borderRadius:16, padding:'24px 24px' }}>
                <div className="tag" style={{ background:'#ffffff18', color:COLORS.goldLight, marginBottom:14 }}>Skilled Migrant Category — Points from Study</div>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:10 }}>
                  {[
                    { pts:'+50', label:'NZ Bachelor degree or higher', color:'#34d399' },
                    { pts:'+10', label:'NZ diploma or trade qualification', color:'#60a5fa' },
                    { pts:'+50', label:'Skilled job offer in NZ', color:'#f59e0b' },
                    { pts:'+30', label:'2+ years NZ work experience', color:'#c084fc' },
                    { pts:'+20', label:'NZ job offer outside Auckland', color:'#fb7185' },
                    { pts:'160', label:'Points threshold to be invited', color:'#fbbf24' },
                  ].map((p,i) => (
                    <div key={i} style={{ background:'#ffffff0d', borderRadius:10, padding:'12px 14px', display:'flex', gap:10, alignItems:'center' }}>
                      <div className="pf" style={{ fontSize:20, fontWeight:800, color:p.color, flexShrink:0, minWidth:50 }}>{p.pts}</div>
                      <div className="it" style={{ fontSize:12.5, color:'#94a3b8', lineHeight:1.4 }}>{p.label}</div>
                    </div>
                  ))}
                </div>
                <p className="it" style={{ color:'#64748b', fontSize:12, marginTop:16 }}>* Points simplified for illustration. Full criteria at immigration.govt.nz. Subject to change.</p>
              </div>
            </Sec>

            <Sec title="Student Pathway Links">
              <LinkGrid items={LINKS.find(l=>l.category.includes('Student')).items} color={COLORS.blue} />
            </Sec>
          </div>
        )}

        {/* ══ SETTLING IN ══ */}
        {page === 'settling' && (
          <div className="fi" style={{ paddingTop:40 }}>
            <PageHeader icon="🏡" tag="Settling In NZ" title="Ang Unang 30 Araw sa New Zealand" subtitle="A week-by-week checklist para sa mga bagong dating na Pilipino — with NZD to PHP cost comparisons." color={COLORS.gold} />

            {[
              { week:'Week 1 — Do These First', color:COLORS.red, tasks:['Apply for IRD number at ird.govt.nz','Open a bank account (ANZ, ASB, BNZ, or Kiwibank)','Get a local SIM card (Skinny or 2degrees — cheapest)','Register with a GP (doctor) — free for work/resident visa holders','Find a migrant support service or community group near you'] },
              { week:'Week 2 — Get Set Up', color:COLORS.gold, tasks:["Convert your home country driver's licence to NZ",'Set up remittance — compare Wise vs bank transfer','Find your nearest supermarket (Pak\'nSave is cheapest)','Download the public transport app (AT or Metlink)','Join a community Facebook group for your nationality'] },
              { week:'Week 3–4 — Settle In', color:COLORS.teal, tasks:['Enrol children in school (free for residents/work visa holders)','Apply for Community Services Card if eligible','Explore free upskilling at local polytechnic','Connect with your professional body (if applicable)','Set up a NZD budget — costs are different from home'] },
            ].map((w,i) => (
              <Sec key={i} title={w.week}>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))', gap:9 }}>
                  {w.tasks.map((t,j) => (
                    <div key={j} style={{ background: COLORS.cardBg, border:`1px solid ${COLORS.border}`, borderRadius:11, padding:'13px 15px', display:'flex', gap:10 }}>
                      <span style={{ color:w.color, fontSize:16, flexShrink:0 }}>◆</span>
                      <span className="it" style={{ fontSize:13, color: COLORS.muted, lineHeight:1.6 }}>{t}</span>
                    </div>
                  ))}
                </div>
              </Sec>
            ))}

            <Sec title="Cost of Living — NZD at PHP">
              <div className="sx">
                <table style={{ width:'100%', borderCollapse:'collapse', minWidth:500 }}>
                  <thead><tr style={{ background: COLORS.navy }}>
                    {['Expense','NZD Cost','PHP Equivalent'].map(h => <th key={h} className="it" style={{ padding:'11px 16px', color: COLORS.white, textAlign:'left', fontSize:12.5, fontWeight:600 }}>{h}</th>)}
                  </tr></thead>
                  <tbody>
                    {COST_OF_LIVING.map((c,i) => (
                      <tr key={i} style={{ background: i%2===0 ? COLORS.cardBg : '#fdf6ee', borderBottom:`1px solid ${COLORS.border}` }}>
                        <td className="it" style={{ padding:'11px 16px', fontSize:13 }}>{c.item}</td>
                        <td className="it" style={{ padding:'11px 16px', fontSize:13, fontWeight:700, color: COLORS.teal }}>{c.nzd}</td>
                        <td className="it" style={{ padding:'11px 16px', fontSize:13, color: COLORS.muted }}>{c.php}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="it" style={{ fontSize:12, color: COLORS.dimmed, marginTop:8 }}>* Approx: 1 NZD ≈ ₱30.7 PHP. Rates change — check Wise for today's rate.</p>
            </Sec>

            {/* Filipino community callout */}
            <div style={{ background:`linear-gradient(135deg,#0f2744,#1a3a5c)`, borderRadius:16, padding:'24px 24px', marginBottom:32 }}>
              <div className="tag" style={{ background:'#dc262620', color:'#fca5a5', marginBottom:10 }}>🇵🇭 Filipino Community in NZ</div>
              <p className="it" style={{ color:'#94a3b8', fontSize:13.5, lineHeight:1.7, marginBottom:14 }}>
                Filipinos are one of the most established migrant communities in NZ with strong networks in Auckland, Wellington, and Christchurch. Philippine Consulate offices are in all three cities. Many government agencies have Filipino-speaking staff — always ask.
              </p>
              <button onClick={() => nav('links')} className="it" style={{ background: COLORS.gold, color: COLORS.navy, border:'none', borderRadius:8, padding:'9px 18px', fontSize:12.5, fontWeight:700, cursor:'pointer' }}>
                See Filipino Community Links →
              </button>
            </div>

            <Sec title="Helpful Links for New Arrivals">
              <LinkGrid items={LINKS.find(l=>l.category.includes('Settling')).items} color={COLORS.gold} />
            </Sec>
          </div>
        )}

        {/* ══ FUTURE ══ */}
        {page === 'future' && (
          <div className="fi" style={{ paddingTop:40 }}>
            <PageHeader icon="🌱" tag="Building Your Future" title="Mula Work Visa Hanggang Citizenship" subtitle="The full pathway from your first NZ visa to becoming a New Zealander — para sa mga Pilipino." color={COLORS.green} />

            <Sec title="The Residency Pathway">
              {[
                { step:'1', title:'Work Visa',            icon:'✈️', color:COLORS.teal,   desc:'Get your initial work visa and start building your life in NZ. Start collecting points for residency from day one.' },
                { step:'2', title:'Build Points',         icon:'📊', color:COLORS.gold,   desc:'Earn points through skilled work, NZ qualifications, job offers, and partner skills. Target 160+ points.' },
                { step:'3', title:'Residence Application',icon:'📋', color:COLORS.green,  desc:'Apply under Skilled Migrant Category. Minimum Band 6.5 IELTS usually required. Process takes 6–18 months.' },
                { step:'4', title:'Permanent Residency',  icon:'🏠', color:COLORS.violet, desc:'After 2 years on a resident visa, apply for permanent residency — the right to stay in NZ indefinitely.' },
                { step:'5', title:'NZ Citizenship',       icon:'🥝', color:COLORS.red,    desc:'After 5 years as a resident, apply for NZ citizenship — one of the most respected passports in the world.' },
              ].map((s,i) => (
                <div key={i} style={{ display:'flex', gap:18, marginBottom:12, alignItems:'flex-start' }}>
                  <div style={{ width:44, height:44, borderRadius:'50%', background:s.color, display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, flexShrink:0 }}>{s.icon}</div>
                  <div style={{ background: COLORS.cardBg, border:`1px solid ${COLORS.border}`, borderRadius:12, padding:'14px 18px', flex:1, borderLeft:`4px solid ${s.color}` }}>
                    <div className="tag" style={{ background:s.color+'18', color:s.color, marginBottom:5 }}>Step {s.step}</div>
                    <h4 className="pf" style={{ fontSize:16, fontWeight:700, color: COLORS.navy, marginBottom:5 }}>{s.title}</h4>
                    <p className="it" style={{ fontSize:13, color: COLORS.muted, lineHeight:1.6 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </Sec>

            <Sec title="Bringing Your Family to NZ">
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))', gap:10 }}>
                {[
                  { who:'Spouse / Partner', icon:'💑', desc:'Can apply for a work visa while you hold a resident visa. Must show genuine relationship with documentation.' },
                  { who:'Dependent Children', icon:'👧', desc:'Children under 24 can apply as dependants on your residence application.' },
                  { who:'Parents', icon:'👴', desc:'Parent Resident Visa available but has long wait times. Consider Parent Retirement Visa as an alternative.' },
                ].map((f,i) => (
                  <div key={i} style={{ background: COLORS.cardBg, border:`1px solid ${COLORS.border}`, borderRadius:12, padding:'16px 15px' }}>
                    <div style={{ fontSize:26, marginBottom:8 }}>{f.icon}</div>
                    <h4 className="pf" style={{ fontSize:15, fontWeight:700, color: COLORS.navy, marginBottom:7 }}>{f.who}</h4>
                    <p className="it" style={{ fontSize:12.5, color: COLORS.muted, lineHeight:1.6 }}>{f.desc}</p>
                  </div>
                ))}
              </div>
            </Sec>

            <Sec title="Jobs & Upskilling">
              <LinkGrid items={LINKS.find(l=>l.category.includes('Jobs')).items} color={COLORS.green} />
            </Sec>
          </div>
        )}

        {/* ══ DEVOTION ══ */}
        {page === 'devotion' && (
          <div className="fi" style={{ paddingTop:40 }}>
            <PageHeader icon="🙏" tag="Daily Devotion" title="Pananampalataya para sa Paglalakbay" subtitle="Isang araw-araw na talata at pagninilay para sa mga Pilipinong nagtatayo ng bagong buhay sa New Zealand." color={COLORS.violet} />

            {/* Verse card */}
            <div style={{ background:`linear-gradient(160deg,${COLORS.navy} 0%,#1a3a5c 100%)`, borderRadius:22, padding:'36px 30px', position:'relative', overflow:'hidden', marginBottom:18 }}>
              <div style={{ position:'absolute', right:-30, bottom:-30, fontSize:160, opacity:.04 }}>✝</div>

              {votdLoading && (
                <div style={{ textAlign:'center', padding:'40px 0' }}>
                  <div className="it" style={{ color: COLORS.goldLight, fontSize:14 }}>Loading today's verse...</div>
                </div>
              )}

              {(votdError || (!votd && !votdLoading)) && (
                <div>
                  <div className="tag" style={{ background:'#ffffff18', color: COLORS.goldLight, marginBottom:14 }}>Today's Verse</div>
                  <div style={{ background:'#ffffff0d', borderRadius:14, padding:'22px 20px', marginBottom:22, borderLeft:`4px solid ${COLORS.gold}` }}>
                    <p className="pf" style={{ fontSize:'clamp(15px,2.5vw,19px)', fontStyle:'italic', color: COLORS.white, lineHeight:1.8 }}>
                      "For I know the plans I have for you — plans to prosper you and not to harm you, plans to give you hope and a future."
                    </p>
                    <p className="it" style={{ color: COLORS.goldLight, fontSize:13, fontWeight:600, marginTop:10 }}>— Jeremiah 29:11</p>
                  </div>
                </div>
              )}

              {votd && !votdLoading && (
                <div>
                  <div className="tag" style={{ background:'#ffffff18', color: COLORS.goldLight, marginBottom:14 }}>
                    Verse of the Day · {new Date().toLocaleDateString('en-NZ',{weekday:'long',year:'numeric',month:'long',day:'numeric'})}
                  </div>
                  <div style={{ background:'#ffffff0d', borderRadius:14, padding:'22px 20px', marginBottom:22, borderLeft:`4px solid ${COLORS.gold}` }}>
                    <p className="it" style={{ color: COLORS.goldLight, fontSize:12, fontWeight:600, marginBottom:8, letterSpacing:'.08em', textTransform:'uppercase' }}>
                      {votd.bookname} {votd.chapter}:{votd.verse}
                    </p>
                    <p className="pf" style={{ fontSize:'clamp(15px,2.5vw,19px)', fontStyle:'italic', color: COLORS.white, lineHeight:1.8 }}>"{votd.text}"</p>
                    <a href="https://labs.bible.org" target="_blank" rel="noopener noreferrer" className="it" style={{ color:'#475569', fontSize:11, marginTop:8, display:'block' }}>Source: NET Bible · labs.bible.org ↗</a>
                  </div>
                </div>
              )}

              {!votdLoading && (
                <>
                  <div style={{ marginBottom:22 }}>
                    <div className="tag" style={{ background:'#c8922a18', color: COLORS.goldLight, marginBottom:12 }}>Reflection for Today</div>
                    <p className="it" style={{ color:'#cbd5e1', fontSize:14.5, lineHeight:1.9 }}>{todayReflection.text}</p>
                  </div>
                  <div style={{ background:'#ffffff0a', borderRadius:12, padding:'18px 18px', borderTop:`2px solid ${COLORS.gold}33` }}>
                    <div className="tag" style={{ background:'#7c3aed18', color:'#c4b5fd', marginBottom:10 }}>A Prayer for Migrants</div>
                    <p className="it" style={{ color:'#e2e8f0', fontSize:13.5, lineHeight:1.9, fontStyle:'italic' }}>
                      Panginoon, salamat sa salitang ito ngayon. Habang itinatayo ko ang aking buhay sa New Zealand, paalaala Mo sa akin na kasama Mo ako sa bawat hakbang — sa bawat papel na pinupunan ko, bawat trabaho, bawat gabing namimiss ko ang aking pamilya sa Pilipinas. Bigyan Mo ako ng lakas ngayon at pag-asa bukas. Pagpalain ang aking pamilya saan man sila naroroon. Amen. / Lord, thank You for this word today. As I build my life in New Zealand, remind me that You walk with me in every step — every form I fill, every shift I work, every night I miss my family in the Philippines. Give me strength for today and hope for tomorrow. Bless my family wherever they are. Amen.
                    </p>
                  </div>
                </>
              )}
            </div>

            <div style={{ background: COLORS.cardBg, border:`1px solid ${COLORS.border}`, borderRadius:14, padding:'18px 22px', textAlign:'center', marginBottom:32 }}>
              <p className="it" style={{ fontSize:13, color: COLORS.muted, marginBottom:3 }}>Share today's devotion with someone on the same journey</p>
              <p className="it" style={{ fontSize:11, color: COLORS.dimmed }}>pathway.wesstech.xyz · Daily Devotion · Verse from labs.bible.org (NET Bible)</p>
            </div>

            <Sec title="Bible & Devotion Resources">
              <LinkGrid items={LINKS.find(l=>l.category.includes('Devotion')).items} color={COLORS.violet} />
            </Sec>
          </div>
        )}

        {/* ══ LINKS ══ */}
        {page === 'links' && (
          <div className="fi" style={{ paddingTop:40 }}>
            <PageHeader icon="🔗" tag="Mga Kapaki-pakinabang na Links" title="Lahat ng Links na Kailangan Mo" subtitle="Official NZ sites, Philippine Consulate, OFW groups, IELTS registration in the Philippines, job boards, and more." color={COLORS.navy} />

            {/* Category filter tabs */}
            <div style={{ display:'flex', gap:8, flexWrap:'wrap', marginBottom:28 }}>
              <button className="it nb" onClick={() => setActiveLink(null)}
                style={{ padding:'6px 16px', borderRadius:20, fontSize:12, fontWeight:600, background: activeLink===null ? COLORS.navy : COLORS.cardBg, color: activeLink===null ? COLORS.white : COLORS.muted, border:`1.5px solid ${activeLink===null ? COLORS.navy : COLORS.border}` }}>
                All Categories
              </button>
              {LINKS.map((cat,i) => (
                <button key={i} className="it nb" onClick={() => setActiveLink(activeLink===i ? null : i)}
                  style={{ padding:'6px 16px', borderRadius:20, fontSize:12, fontWeight:600, background: activeLink===i ? cat.color : COLORS.cardBg, color: activeLink===i ? COLORS.white : COLORS.muted, border:`1.5px solid ${activeLink===i ? cat.color : COLORS.border}` }}>
                  {cat.icon} {cat.category}
                </button>
              ))}
            </div>

            {LINKS.filter((cat,i) => activeLink === null || activeLink === i).map((cat,i) => (
              <Sec key={i} title={`${cat.icon} ${cat.category}`}>
                <LinkGrid items={cat.items} color={cat.color} />
              </Sec>
            ))}
          </div>
        )}

      </div>

      {/* ── FOOTER ── */}
      <div style={{ background: COLORS.navy, padding:'32px 24px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:24, marginBottom:24 }}>
            <div>
              <div className="pf" style={{ color: COLORS.goldLight, fontSize:20, fontWeight:700, marginBottom:6 }}>PathwayNZ</div>
              <p className="it" style={{ color:'#475569', fontSize:12, maxWidth:300, lineHeight:1.7 }}>
                A free guide for Filipinos building a new life in New Zealand — IELTS, immigration, community, and daily devotion. Para sa mga Pilipino, libre palagi.
              </p>
            </div>
            <div style={{ display:'flex', gap:8, flexWrap:'wrap', alignContent:'flex-start' }}>
              {NAV_ITEMS.map(n => (
                <button key={n.id} className="nb it" onClick={() => nav(n.id)}
                  style={{ color:'#475569', fontSize:12, padding:'4px 10px', borderRadius:6, border:'1px solid #1e3a5c' }}>
                  {n.icon} {n.label}
                </button>
              ))}
            </div>
          </div>
          <div style={{ borderTop:'1px solid #1e3a5c', paddingTop:16 }}>
            <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:8, marginBottom:10 }}>
              <p className="it" style={{ color:'#334155', fontSize:11 }}>
                Built with ❤️ by{' '}
                <a href="https://wesstech.xyz" target="_blank" rel="noopener noreferrer" style={{ color: COLORS.goldLight }}>wesstech.xyz</a>
                {' '}· pathway.wesstech.xyz
              </p>
              <p className="it" style={{ color:'#334155', fontSize:11 }}>
                For visa advice consult a{' '}
                <a href="https://www.iaa.govt.nz/for-migrants/how-to-find-an-adviser/" target="_blank" rel="noopener noreferrer" style={{ color:'#475569', textDecoration:'underline' }}>
                  licensed immigration adviser
                </a>
              </p>
            </div>
            {/* Privacy & legal links — required for Google AdSense */}
            <div style={{ display:'flex', gap:16, flexWrap:'wrap', paddingTop:8, borderTop:'1px solid #0f1f35' }}>
              <a href="/privacy" className="it" style={{ color:'#6b7280', fontSize:12, textDecoration:'none' }}>
                🔒 Privacy Policy
              </a>
              <a href="/about" className="it" style={{ color:'#6b7280', fontSize:12, textDecoration:'none' }}>
                ℹ️ About PathwayNZ
              </a>
              <a href="https://wesstech.xyz" target="_blank" rel="noopener noreferrer" className="it" style={{ color:'#6b7280', fontSize:12, textDecoration:'none' }}>
                🌐 WessTech
              </a>
              <span className="it" style={{ color:'#334155', fontSize:12 }}>
                © {new Date().getFullYear()} PathwayNZ · Free for all Filipinos
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Sub-components ──────────────────────────────────────

function LiveVersTeaser({ onReadMore }) {
  const [verse, setVerse] = useState(null)
  useEffect(() => {
    fetch('https://labs.bible.org/api/?passage=votd&type=json')
      .then(r => r.json())
      .then(data => { if (data && data[0]) setVerse(data[0]) })
      .catch(() => {})
  }, [])
  return (
    <div style={{ background:`linear-gradient(135deg,${COLORS.navy},#1a3a5c)`, borderRadius:18, padding:'28px 26px', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', right:-20, top:-20, fontSize:90, opacity:.05 }}>✝</div>
      <div className="tag" style={{ background:'#ffffff18', color: COLORS.goldLight, marginBottom:10 }}>
        Today's Verse · {new Date().toLocaleDateString('en-NZ',{month:'long',day:'numeric',year:'numeric'})}
      </div>
      {verse
        ? <>
            <p className="it" style={{ color: COLORS.goldLight, fontSize:12, fontWeight:600, marginBottom:6 }}>{verse.bookname} {verse.chapter}:{verse.verse}</p>
            <p className="pf" style={{ fontSize:16, fontStyle:'italic', color: COLORS.white, lineHeight:1.75, maxWidth:580, marginBottom:18 }}>"{verse.text}"</p>
          </>
        : <p className="it" style={{ color:'#64748b', fontSize:13, marginBottom:18 }}>Loading today's verse...</p>
      }
      <button onClick={onReadMore} className="it" style={{ background: COLORS.gold, color: COLORS.navy, border:'none', borderRadius:9, padding:'9px 20px', fontSize:12.5, fontWeight:700, cursor:'pointer' }}>
        Read Full Devotion →
      </button>
    </div>
  )
}

function LinkGrid({ items, color }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap:9 }}>
      {items.map((item,i) => (
        <a key={i} href={item.url} target="_blank" rel="noopener noreferrer">
          <div className="ch" style={{ background: COLORS.cardBg, border:`1px solid ${COLORS.border}`, borderRadius:12, padding:'14px 16px', height:'100%', borderLeft:`3px solid ${color}` }}>
            <div className="it" style={{ fontWeight:600, color: COLORS.navy, fontSize:13.5, marginBottom:3 }}>{item.name}</div>
            <div className="it" style={{ fontSize:12, color: COLORS.muted, lineHeight:1.5, marginBottom:7 }}>{item.desc}</div>
            <div className="it" style={{ fontSize:11, color, fontWeight:600 }}>
              {item.url.replace('https://','').replace('www.','').split('/')[0]} ↗
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}

function PageHeader({ icon, tag, title, subtitle, color }) {
  return (
    <div style={{ paddingBottom:28, borderBottom:`1px solid ${COLORS.border}`, marginBottom:28 }}>
      <div className="tag" style={{ background:color+'18', color, marginBottom:12 }}>{tag}</div>
      <h1 className="pf" style={{ fontSize:'clamp(26px,5vw,42px)', fontWeight:800, color: COLORS.navy, marginBottom:10, lineHeight:1.15 }}>{icon} {title}</h1>
      <p className="it" style={{ fontSize:15, color: COLORS.muted, lineHeight:1.7, maxWidth:540 }}>{subtitle}</p>
    </div>
  )
}

function Sec({ title, children }) {
  return (
    <div style={{ marginBottom:36 }}>
      <h2 className="pf" style={{ fontSize:'clamp(17px,2.5vw,22px)', fontWeight:700, color: COLORS.navy, marginBottom:16, paddingBottom:9, borderBottom:`2px solid ${COLORS.border}` }}>{title}</h2>
      {children}
    </div>
  )
}
