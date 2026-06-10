'use client'
import { useState, useEffect, useRef } from 'react'

const ACCENT = { professional:'#0f2744', modern:'#0d7377', minimal:'#333333' }

const DEFAULT_EXPS = [{
  title:'Registered Nurse', company:'Auckland City Hospital', location:'Auckland, NZ',
  from:'Jan 2023', to:'Present',
  duties:'Provide comprehensive nursing care in a 30-bed acute medical ward. Conduct patient assessments, administer medications, and coordinate with multidisciplinary teams.'
}]
const DEFAULT_EDUS = [{
  degree:'Bachelor of Science in Nursing', school:'University of Santo Tomas',
  location:'Manila, Philippines', year:'2018', notes:'Graduated with Honours.'
}]

export default function CVGenerator() {
  const [template, setTemplate] = useState('professional')
  const [tab, setTab] = useState('personal')
  const [exps, setExps] = useState(DEFAULT_EXPS)
  const [edus, setEdus] = useState(DEFAULT_EDUS)
  const [form, setForm] = useState({
    fname:'Maria', lname:'Santos', jobtitle:'Registered Nurse',
    phone:'+64 21 123 4567', email:'maria@email.com', city:'Auckland',
    visa:'Accredited Employer Work Visa', ielts:'', englishTest:'IELTS', linkedin:'',
    summary:'Experienced Registered Nurse with 5+ years in acute care. Passionate about patient-centred care. Currently holding an Accredited Employer Work Visa and available to start immediately.',
    skills:'Patient assessment, IV therapy, Wound care, Electronic health records',
    softskills:'Communication, Teamwork, Adaptability, Attention to detail',
    certs:'Nursing Council of NZ — Registered Nurse, BLS, ACLS',
    langs:'English (IELTS 7.0 — Proficient), Filipino / Tagalog (Native)',
    ref1:'Available on request', ref2:'Available on request',
  })
  const [pdfLoaded, setPdfLoaded] = useState(false)
  const scriptRef = useRef(null)

  const f = (key) => form[key] || ''
  const set = (key, val) => setForm(p => ({...p, [key]: val}))

  useEffect(() => {
    if (typeof window !== 'undefined' && !window.jspdf) {
      const script = document.createElement('script')
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
      script.onload = () => setPdfLoaded(true)
      document.head.appendChild(script)
      scriptRef.current = script
    } else if (window.jspdf) {
      setPdfLoaded(true)
    }
  }, [])

  const accent = ACCENT[template] || ACCENT.professional

  const contactParts = [f('phone'),f('email'),f('city'),f('visa'),
    f('ielts') ? `${f('englishTest')||'IELTS'} ${f('ielts')}` : '', f('linkedin')].filter(Boolean)

  const allSkills = [...f('skills').split(','), ...f('softskills').split(',')]
    .map(s=>s.trim()).filter(Boolean)

  const hex2rgb = h => { const r=parseInt(h.slice(1),16); return [(r>>16)&255,(r>>8)&255,r&255] }

  const downloadPDF = () => {
    if (!window.jspdf) return alert('PDF library loading — please try again.')
    const { jsPDF } = window.jspdf
    const doc = new jsPDF({ unit:'mm', format:'a4' })
    const margin=18, pageW=210, maxW=pageW-margin*2
    let y=22

    const setColor = hex => { const [r,g,b]=hex2rgb(hex); doc.setTextColor(r,g,b) }
    const setLine  = hex => { const [r,g,b]=hex2rgb(hex); doc.setDrawColor(r,g,b) }

    const addLine = (txt, size, color, bold=false, indent=0) => {
      if (!txt) return
      if (y>272){doc.addPage();y=18}
      doc.setFontSize(size); doc.setFont('helvetica', bold?'bold':'normal'); setColor(color)
      const lines = doc.splitTextToSize(txt, maxW-(indent||0))
      doc.text(lines, margin+(indent||0), y)
      y += lines.length*(size*0.38)+1.5
    }

    const sectionHd = title => {
      y+=3
      doc.setFontSize(8.5); doc.setFont('helvetica','bold'); setColor(accent)
      doc.text(title.toUpperCase(), margin, y); y+=3
      setLine(accent); doc.setLineWidth(0.5)
      doc.line(margin, y, pageW-margin, y); y+=4
    }

    const name = `${f('fname')} ${f('lname')}`.trim() || 'Your Name'
    addLine(name, 18, accent, true)
    if(f('jobtitle')) addLine(f('jobtitle'), 10.5, '#555555')
    addLine(contactParts.join(' · '), 8.5, '#777777')
    y+=2

    if(f('summary')){ sectionHd('Professional Summary'); addLine(f('summary'),9.5,'#333333') }

    const validExps = exps.filter(e=>e.title||e.company)
    if(validExps.length){
      sectionHd('Work Experience')
      validExps.forEach(e=>{
        const dateStr=[e.from,e.to].filter(Boolean).join(' – ')
        doc.setFontSize(10); doc.setFont('helvetica','bold'); setColor('#111111')
        doc.text(e.title||'', margin, y)
        if(dateStr){ doc.setFontSize(8.5); doc.setFont('helvetica','normal'); setColor('#777777'); doc.text(dateStr, pageW-margin-doc.getTextWidth(dateStr), y) }
        y+=4.5
        if(e.company||e.location) addLine([e.company,e.location].filter(Boolean).join(' · '),9,'#666666')
        if(e.duties){ y+=0.5; addLine(e.duties,9.5,'#333333',false,2); y+=2 }
      })
    }

    const validEdus = edus.filter(e=>e.degree||e.school)
    if(validEdus.length){
      sectionHd('Education')
      validEdus.forEach(e=>{
        doc.setFontSize(10); doc.setFont('helvetica','bold'); setColor('#111111')
        doc.text(e.degree||'', margin, y)
        if(e.year){ doc.setFontSize(8.5); doc.setFont('helvetica','normal'); setColor('#777777'); doc.text(e.year, pageW-margin-doc.getTextWidth(e.year), y) }
        y+=4.5
        if(e.school||e.location) addLine([e.school,e.location].filter(Boolean).join(' · '),9,'#666666')
        if(e.notes) addLine(e.notes,9,'#555555',false,2)
        y+=2
      })
    }

    if(allSkills.length){ sectionHd('Skills'); addLine(allSkills.join('  ·  '),9.5,'#333333') }
    if(f('certs')){ sectionHd('Certifications & Licences'); addLine(f('certs'),9.5,'#333333') }
    if(f('langs')){ sectionHd('Languages'); addLine(f('langs'),9.5,'#333333') }
    sectionHd('References')
    addLine(f('ref1')||'Available on request',9.5,'#333333')
    if(f('ref2')) addLine(f('ref2'),9.5,'#333333')

    const fname=(f('fname')||'CV').replace(/\s+/g,'_')
    const lname=(f('lname')||'').replace(/\s+/g,'_')
    doc.save(`${fname}_${lname}_CV_NZ.pdf`)
  }

  const addExp = () => setExps(p=>[...p,{title:'',company:'',location:'',from:'',to:'',duties:''}])
  const removeExp = i => setExps(p=>p.filter((_,j)=>j!==i))
  const updateExp = (i,k,v) => setExps(p=>p.map((e,j)=>j===i?{...e,[k]:v}:e))
  const addEdu = () => setEdus(p=>[...p,{degree:'',school:'',location:'',year:'',notes:''}])
  const removeEdu = i => setEdus(p=>p.filter((_,j)=>j!==i))
  const updateEdu = (i,k,v) => setEdus(p=>p.map((e,j)=>j===i?{...e,[k]:v}:e))

  const C = {
    navy:'#0f2744', gold:'#c8922a', teal:'#0d7377',
    border:'#e8dcc8', muted:'#5a6a7a', bg:'#fdf6ee',
    card:'#ffffff', dimmed:'#94a3b8',
  }

  const inputStyle = { width:'100%', fontSize:13, padding:'7px 10px', border:`1px solid ${C.border}`,
    borderRadius:8, background:C.bg, color:C.navy, fontFamily:'inherit', boxSizing:'border-box' }
  const labelStyle = { fontSize:12, color:C.muted, marginBottom:3, display:'block', fontFamily:'Inter,sans-serif' }
  const sectionTitleStyle = { fontSize:11, fontWeight:700, color:C.muted, textTransform:'uppercase',
    letterSpacing:'.1em', margin:'16px 0 8px', fontFamily:'Inter,sans-serif' }

  return (
    <div style={{ background:C.bg, minHeight:'100vh', fontFamily:"'Inter',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Inter:wght@300;400;500;600&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        input,textarea,select{outline:none;transition:border-color .15s}
        input:focus,textarea:focus,select:focus{border-color:#0d7377 !important}
        textarea{resize:vertical}
        .tab-btn{border:none;background:none;cursor:pointer;transition:all .15s}
        .tmpl-btn{cursor:pointer;transition:all .15s}
        .rm-btn{border:none;background:none;cursor:pointer;color:#dc2626;font-size:12px;font-family:inherit}
        @media print{.no-print{display:none}}
      `}</style>

      {/* Nav */}
      <div style={{ background:C.navy, padding:'0 20px' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', height:52, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <a href="/" style={{ display:'flex', alignItems:'center', gap:8, textDecoration:'none' }}>
            <div style={{ width:28, height:28, background:C.gold, borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:14 }}>🥝</div>
            <span style={{ color:'#fff', fontSize:15, fontWeight:700, fontFamily:"'Playfair Display',serif" }}>PathwayNZ</span>
          </a>
          <a href="/" style={{ color:'#94a3b8', fontSize:13 }}>← Back to Home</a>
        </div>
      </div>

      <div style={{ maxWidth:1100, margin:'0 auto', padding:'32px 16px 80px' }}>

        {/* Header */}
        <div style={{ marginBottom:24 }}>
          <div style={{ display:'inline-block', background:'#0d737718', borderRadius:20, padding:'3px 12px', marginBottom:10 }}>
            <span style={{ color:C.teal, fontSize:11, fontWeight:700, letterSpacing:'.1em', textTransform:'uppercase' }}>Free Tool</span>
          </div>
          <h1 style={{ fontSize:'clamp(24px,4vw,36px)', fontWeight:800, color:C.navy, marginBottom:8, fontFamily:"'Playfair Display',serif" }}>
            📄 NZ CV Generator
          </h1>
          <p style={{ fontSize:14, color:C.muted, lineHeight:1.7, maxWidth:560 }}>
            Build a professional CV for New Zealand job applications — tailored for Filipino migrants. Includes optional IELTS or PTE score, visa status, and NZ-specific fields employers look for. Download as PDF for free.
          </p>
        </div>

        {/* Template selector */}
        <div style={{ display:'flex', gap:8, marginBottom:20 }}>
          {[['professional','Professional','#0f2744'],['modern','Modern','#0d7377'],['minimal','Minimal','#555']].map(([id,label,col])=>(
            <button key={id} className="tmpl-btn" onClick={()=>setTemplate(id)}
              style={{ flex:1, padding:'8px 12px', borderRadius:8, fontSize:13, fontWeight:500,
                background: template===id ? col : C.card,
                color: template===id ? '#fff' : C.muted,
                border: `1.5px solid ${template===id ? col : C.border}` }}>
              {label}
            </button>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)', gap:20 }}>

          {/* ── FORM ── */}
          <div className="no-print">
            {/* Tabs */}
            <div style={{ display:'flex', borderBottom:`2px solid ${C.border}`, marginBottom:16, gap:4 }}>
              {[['personal','Personal'],['experience','Experience'],['education','Education'],['skills','Skills']].map(([id,label])=>(
                <button key={id} className="tab-btn" onClick={()=>setTab(id)}
                  style={{ padding:'7px 12px', fontSize:12.5, fontWeight: tab===id?600:400,
                    color: tab===id ? C.navy : C.muted,
                    borderBottom: tab===id ? `2px solid ${C.navy}` : '2px solid transparent',
                    marginBottom:-2, fontFamily:'inherit' }}>
                  {label}
                </button>
              ))}
            </div>

            {/* Personal tab */}
            {tab==='personal' && (
              <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
                  <div><label style={labelStyle}>First name</label><input style={inputStyle} value={f('fname')} onChange={e=>set('fname',e.target.value)} placeholder="Maria"/></div>
                  <div><label style={labelStyle}>Last name</label><input style={inputStyle} value={f('lname')} onChange={e=>set('lname',e.target.value)} placeholder="Santos"/></div>
                </div>
                <div><label style={labelStyle}>Role you're applying for</label><input style={inputStyle} value={f('jobtitle')} onChange={e=>set('jobtitle',e.target.value)} placeholder="Registered Nurse"/></div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
                  <div><label style={labelStyle}>Phone (NZ)</label><input style={inputStyle} value={f('phone')} onChange={e=>set('phone',e.target.value)} placeholder="+64 21 123 4567"/></div>
                  <div><label style={labelStyle}>Email</label><input style={inputStyle} value={f('email')} onChange={e=>set('email',e.target.value)} placeholder="maria@email.com"/></div>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
                  <div><label style={labelStyle}>City, NZ</label><input style={inputStyle} value={f('city')} onChange={e=>set('city',e.target.value)} placeholder="Auckland"/></div>
                  <div><label style={labelStyle}>Visa / Work rights</label>
                    <select style={inputStyle} value={f('visa')} onChange={e=>set('visa',e.target.value)}>
                      {['Accredited Employer Work Visa','Skilled Migrant Visa','Essential Skills Work Visa','Open Work Visa','Post-Study Work Visa','Permanent Resident','NZ Citizen','Student Visa (20 hrs/wk)','No visa yet — applying'].map(v=>(
                        <option key={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
                  <div>
                    <label style={labelStyle}>English test score (optional)</label>
                    <div style={{ display:'flex', gap:6 }}>
                      <select style={{...inputStyle, width:'auto', minWidth:90}} value={f('englishTest')} onChange={e=>set('englishTest',e.target.value)}>
                        <option>IELTS</option>
                        <option>PTE</option>
                        <option>TOEFL</option>
                        <option>Cambridge</option>
                      </select>
                      <input style={{...inputStyle, flex:1}} value={f('ielts')} onChange={e=>set('ielts',e.target.value)} placeholder="Score (e.g. 7.0)"/>
                    </div>
                    <span style={{ fontSize:11, color:'#94a3b8' }}>Leave blank if not applicable</span>
                  </div>
                  <div><label style={labelStyle}>LinkedIn (optional)</label><input style={inputStyle} value={f('linkedin')} onChange={e=>set('linkedin',e.target.value)} placeholder="linkedin.com/in/maria"/></div>
                </div>
                <div><label style={labelStyle}>Professional summary (2–3 sentences)</label>
                  <textarea style={{...inputStyle, minHeight:80}} value={f('summary')} onChange={e=>set('summary',e.target.value)} placeholder="Experienced professional with..."/>
                </div>
              </div>
            )}

            {/* Experience tab */}
            {tab==='experience' && (
              <div>
                {exps.map((e,i)=>(
                  <div key={i} style={{ background:'#f8f4ee', border:`1px solid ${C.border}`, borderRadius:10, padding:'12px 14px', marginBottom:10 }}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
                      <span style={{ fontSize:13, fontWeight:600, color:C.navy }}>Experience {i+1}</span>
                      <button className="rm-btn" onClick={()=>removeExp(i)}>✕ Remove</button>
                    </div>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:8 }}>
                      <div><label style={labelStyle}>Job title</label><input style={inputStyle} value={e.title} onChange={ev=>updateExp(i,'title',ev.target.value)} placeholder="Registered Nurse"/></div>
                      <div><label style={labelStyle}>Company / Hospital</label><input style={inputStyle} value={e.company} onChange={ev=>updateExp(i,'company',ev.target.value)} placeholder="Auckland City Hospital"/></div>
                    </div>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8, marginBottom:8 }}>
                      <div><label style={labelStyle}>Location</label><input style={inputStyle} value={e.location} onChange={ev=>updateExp(i,'location',ev.target.value)} placeholder="Auckland, NZ"/></div>
                      <div><label style={labelStyle}>From</label><input style={inputStyle} value={e.from} onChange={ev=>updateExp(i,'from',ev.target.value)} placeholder="Jan 2023"/></div>
                      <div><label style={labelStyle}>To</label><input style={inputStyle} value={e.to} onChange={ev=>updateExp(i,'to',ev.target.value)} placeholder="Present"/></div>
                    </div>
                    <div><label style={labelStyle}>Duties / Achievements</label>
                      <textarea style={{...inputStyle, minHeight:70}} value={e.duties} onChange={ev=>updateExp(i,'duties',ev.target.value)} placeholder="Describe key responsibilities..."/>
                    </div>
                  </div>
                ))}
                <button onClick={addExp} style={{ width:'100%', padding:'9px', borderRadius:8, border:`1.5px dashed ${C.teal}`, background:'none', color:C.teal, fontSize:13, cursor:'pointer', fontFamily:'inherit' }}>
                  + Add work experience
                </button>
              </div>
            )}

            {/* Education tab */}
            {tab==='education' && (
              <div>
                {edus.map((e,i)=>(
                  <div key={i} style={{ background:'#f8f4ee', border:`1px solid ${C.border}`, borderRadius:10, padding:'12px 14px', marginBottom:10 }}>
                    <div style={{ display:'flex', justifyContent:'space-between', marginBottom:8 }}>
                      <span style={{ fontSize:13, fontWeight:600, color:C.navy }}>Education {i+1}</span>
                      <button className="rm-btn" onClick={()=>removeEdu(i)}>✕ Remove</button>
                    </div>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:8 }}>
                      <div><label style={labelStyle}>Degree / Qualification</label><input style={inputStyle} value={e.degree} onChange={ev=>updateEdu(i,'degree',ev.target.value)} placeholder="BS Nursing"/></div>
                      <div><label style={labelStyle}>Year completed</label><input style={inputStyle} value={e.year} onChange={ev=>updateEdu(i,'year',ev.target.value)} placeholder="2018"/></div>
                    </div>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginBottom:8 }}>
                      <div><label style={labelStyle}>School / University</label><input style={inputStyle} value={e.school} onChange={ev=>updateEdu(i,'school',ev.target.value)} placeholder="University of Santo Tomas"/></div>
                      <div><label style={labelStyle}>Location</label><input style={inputStyle} value={e.location} onChange={ev=>updateEdu(i,'location',ev.target.value)} placeholder="Manila, Philippines"/></div>
                    </div>
                    <div><label style={labelStyle}>Honours / Notes</label><input style={inputStyle} value={e.notes} onChange={ev=>updateEdu(i,'notes',ev.target.value)} placeholder="Graduated with Honours"/></div>
                  </div>
                ))}
                <button onClick={addEdu} style={{ width:'100%', padding:'9px', borderRadius:8, border:`1.5px dashed ${C.teal}`, background:'none', color:C.teal, fontSize:13, cursor:'pointer', fontFamily:'inherit' }}>
                  + Add education
                </button>
              </div>
            )}

            {/* Skills tab */}
            {tab==='skills' && (
              <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                <div><label style={labelStyle}>Technical / Clinical skills (comma separated)</label>
                  <textarea style={{...inputStyle, minHeight:65}} value={f('skills')} onChange={e=>set('skills',e.target.value)} placeholder="Patient assessment, IV therapy..."/></div>
                <div><label style={labelStyle}>Soft skills (comma separated)</label>
                  <textarea style={{...inputStyle, minHeight:55}} value={f('softskills')} onChange={e=>set('softskills',e.target.value)} placeholder="Communication, Teamwork..."/></div>
                <div><label style={labelStyle}>Certifications / Licences</label>
                  <textarea style={{...inputStyle, minHeight:55}} value={f('certs')} onChange={e=>set('certs',e.target.value)} placeholder="Nursing Council NZ, BLS..."/></div>
                <div><label style={labelStyle}>Languages</label>
                  <input style={inputStyle} value={f('langs')} onChange={e=>set('langs',e.target.value)} placeholder="English (IELTS 7.0 / PTE 65), Filipino (Native)"/></div>
                <div><label style={labelStyle}>Reference 1</label>
                  <input style={inputStyle} value={f('ref1')} onChange={e=>set('ref1',e.target.value)} placeholder="Dr. Jane Smith, Ward Manager, Auckland City Hospital"/></div>
                <div><label style={labelStyle}>Reference 2</label>
                  <input style={inputStyle} value={f('ref2')} onChange={e=>set('ref2',e.target.value)} placeholder="Available on request"/></div>
              </div>
            )}

            {/* Download button */}
            <button onClick={downloadPDF}
              style={{ width:'100%', marginTop:20, padding:'12px', background:C.navy, color:'#fff', border:'none', borderRadius:10, fontSize:14, fontWeight:600, cursor:'pointer', fontFamily:'inherit' }}>
              {pdfLoaded ? '⬇️ Download CV as PDF' : '⏳ Loading PDF generator...'}
            </button>
            <p style={{ fontSize:11, color:C.dimmed, textAlign:'center', marginTop:6 }}>Free — no sign-up, no email required. PDF generated in your browser.</p>
          </div>

          {/* ── LIVE PREVIEW ── */}
          <div style={{ background:'#fff', border:`1px solid ${C.border}`, borderRadius:12, padding:'24px 22px', fontSize:12, lineHeight:1.5, color:'#222', fontFamily:'Arial,sans-serif', minHeight:500 }}>
            {/* Name + contact */}
            <div style={{ marginBottom:10 }}>
              <div style={{ fontSize:20, fontWeight:700, color:accent, marginBottom:2 }}>
                {`${f('fname')} ${f('lname')}`.trim() || 'Your Name'}
              </div>
              {f('jobtitle') && <div style={{ fontSize:12, color:'#555', marginBottom:4 }}>{f('jobtitle')}</div>}
              <div style={{ fontSize:10, color:'#777' }}>{contactParts.join(' · ')}</div>
            </div>

            {f('summary') && <>
              <PreviewSection title="Professional Summary" accent={accent} />
              <div style={{ fontSize:11, color:'#333', lineHeight:1.65 }}>{f('summary')}</div>
            </>}

            {exps.some(e=>e.title||e.company) && <>
              <PreviewSection title="Work Experience" accent={accent} />
              {exps.filter(e=>e.title||e.company).map((e,i)=>(
                <div key={i} style={{ marginBottom:8 }}>
                  <div style={{ display:'flex', justifyContent:'space-between' }}>
                    <span style={{ fontSize:11.5, fontWeight:600 }}>{e.title}</span>
                    <span style={{ fontSize:9.5, color:'#777' }}>{[e.from,e.to].filter(Boolean).join(' – ')}</span>
                  </div>
                  <div style={{ fontSize:9.5, color:'#666', marginBottom:2 }}>{[e.company,e.location].filter(Boolean).join(' · ')}</div>
                  {e.duties && <div style={{ fontSize:10.5, color:'#333', lineHeight:1.55 }}>{e.duties}</div>}
                </div>
              ))}
            </>}

            {edus.some(e=>e.degree||e.school) && <>
              <PreviewSection title="Education" accent={accent} />
              {edus.filter(e=>e.degree||e.school).map((e,i)=>(
                <div key={i} style={{ marginBottom:7 }}>
                  <div style={{ display:'flex', justifyContent:'space-between' }}>
                    <span style={{ fontSize:11.5, fontWeight:600 }}>{e.degree}</span>
                    <span style={{ fontSize:9.5, color:'#777' }}>{e.year}</span>
                  </div>
                  <div style={{ fontSize:9.5, color:'#666' }}>{[e.school,e.location].filter(Boolean).join(' · ')}</div>
                  {e.notes && <div style={{ fontSize:10, color:'#555' }}>{e.notes}</div>}
                </div>
              ))}
            </>}

            {allSkills.length>0 && <>
              <PreviewSection title="Skills" accent={accent} />
              <div style={{ marginTop:4 }}>
                {allSkills.map((s,i)=>(
                  <span key={i} style={{ display:'inline-block', background:'#f0f0f0', borderRadius:3, padding:'1px 7px', fontSize:10, margin:'2px', color:'#333' }}>{s}</span>
                ))}
              </div>
            </>}

            {f('certs') && <>
              <PreviewSection title="Certifications & Licences" accent={accent} />
              <div style={{ fontSize:11, color:'#333', lineHeight:1.7 }}>{f('certs')}</div>
            </>}

            {f('langs') && <>
              <PreviewSection title="Languages" accent={accent} />
              <div style={{ fontSize:11, color:'#333' }}>{f('langs')}</div>
            </>}

            <PreviewSection title="References" accent={accent} />
            <div style={{ fontSize:11, color:'#333', lineHeight:1.8 }}>
              {f('ref1') || 'Available on request'}<br/>
              {f('ref2')}
            </div>
          </div>
        </div>

        {/* Tips */}
        <div style={{ marginTop:28, background:'#fff', border:`1px solid ${C.border}`, borderRadius:14, padding:'20px 22px' }}>
          <h3 style={{ fontSize:15, fontWeight:700, color:C.navy, marginBottom:12, fontFamily:"'Playfair Display',serif" }}>
            💡 NZ CV Tips for Filipinos
          </h3>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:10 }}>
            {[
              { tip:'Include your visa status', why:'NZ employers need to know your work rights before interviewing you.' },
              { tip:'IELTS or PTE score (optional)', why:'If you have a score, include it — NZ employers value proof of English proficiency in healthcare, IT, and professional roles.' },
              { tip:'Keep it to 2 pages max', why:'NZ CVs are shorter than Philippine CVs. Remove photo and marital status.' },
              { tip:'Use NZ date format', why:'Write dates as "Jan 2023" not "01/2023" — easier for NZ readers.' },
              { tip:'No photo required', why:"NZ CVs don't include photos. It's not expected and can create bias." },
              { tip:'NZ address matters', why:"Having a NZ address signals you're already here and available to start." },
            ].map((t,i)=>(
              <div key={i} style={{ background:'#fdf6ee', borderRadius:9, padding:'10px 12px', borderLeft:`3px solid ${C.teal}` }}>
                <div style={{ fontSize:12.5, fontWeight:600, color:C.navy, marginBottom:3 }}>{t.tip}</div>
                <div style={{ fontSize:12, color:C.muted, lineHeight:1.5 }}>{t.why}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background:C.navy, padding:'20px 24px', textAlign:'center' }}>
        <p style={{ color:'#475569', fontSize:12, fontFamily:'Inter,sans-serif' }}>
          PathwayNZ · <a href="/" style={{ color:'#f0c060' }}>pathway.wesstech.xyz</a> · Free CV generator for Filipinos in New Zealand
        </p>
      </div>
    </div>
  )
}

function PreviewSection({ title, accent }) {
  return (
    <div style={{ fontSize:9.5, fontWeight:700, textTransform:'uppercase', letterSpacing:'.08em', borderBottom:`1.5px solid ${accent}`, paddingBottom:2, margin:'11px 0 5px', color:accent }}>
      {title}
    </div>
  )
}
