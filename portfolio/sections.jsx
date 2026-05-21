// ──────────────────────────────────────────────────────────────────
// Portfolio sections — infographic-forward, single-page
// ──────────────────────────────────────────────────────────────────

const { useState, useEffect, useMemo } = React;

// ── Shared bits ─────────────────────────────────────────────────────

const Eyebrow = ({ children, n }) => (
  <div className="eyebrow" style={{display:'flex', alignItems:'center', gap:10}}>
    <span className="dot"></span>
    {n != null && <span className="mono" style={{color:'var(--accent)', fontWeight:700, marginRight:6}}>{String(n).padStart(2,'0')}</span>}
    {children}
  </div>
);

const SectionHead = ({ n, eyebrow, title, sub }) => (
  <div style={{display:'grid', gridTemplateColumns:'1fr', gap:12, marginBottom:40}}>
    <Eyebrow n={n}>{eyebrow}</Eyebrow>
    <h2 style={{
      margin:0, fontSize:'clamp(28px, 3.4vw, 44px)', lineHeight:1.05,
      fontWeight:700, letterSpacing:'-0.02em', color:'var(--ink)', maxWidth:780,
    }}>{title}</h2>
    {sub && <p style={{margin:0, color:'var(--muted)', maxWidth:640, fontSize:15}}>{sub}</p>}
  </div>
);

// ── 1. HERO ──────────────────────────────────────────────────────────

const Hero = ({ accent }) => {
  return (
    <section data-screen-label="01 Hero" style={{position:'relative', overflow:'hidden'}}>
      {/* Top bar — fake nav */}
      <div className="wrap" style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        paddingTop:24, paddingBottom:24,
      }}>
        <div style={{display:'flex', alignItems:'center', gap:10}}>
          <span style={{
            width:28, height:28, borderRadius:8, background:'var(--ink)', color:'#fff',
            display:'inline-flex', alignItems:'center', justifyContent:'center',
            fontWeight:800, fontSize:14, letterSpacing:'-0.02em',
          }}>S</span>
          <span className="mono" style={{fontSize:12, letterSpacing:'0.08em', textTransform:'uppercase', color:'var(--muted)'}}>shiveshsingh.com.np</span>
        </div>
        <nav style={{display:'flex', gap:24}}>
          {['Work','Stack','Path','About'].map(x =>
            <a key={x} href={`#${x.toLowerCase()}`} className="mono" style={{fontSize:12, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--body)'}}>{x}</a>
          )}
        </nav>
      </div>
      <hr className="rule" />

      <div className="wrap" style={{paddingTop:72, paddingBottom:80}}>
        <div style={{
          display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:64, alignItems:'end',
        }} className="hero-grid">

          {/* LEFT — type */}
          <div>
            <Eyebrow>Senior Full-Stack Engineer</Eyebrow>
            <h1 style={{
              margin:'24px 0 0', fontSize:'clamp(48px, 7vw, 104px)',
              lineHeight:0.95, letterSpacing:'-0.04em', fontWeight:800,
              color:'var(--ink)',
            }}>
              Shivesh<br/>
              <span style={{color: accent}}>Lal Singh</span>
            </h1>

            <p style={{
              marginTop:28, fontSize:'clamp(16px, 1.4vw, 19px)', color:'var(--body)',
              maxWidth:520, lineHeight:1.5,
            }}>
              Thirteen years building production web systems end-to-end — from crypto-tax pipelines to enterprise reporting clouds.
            </p>

            {/* action row */}
            <div style={{display:'flex', flexWrap:'wrap', gap:10, marginTop:32}}>
              <a href="mailto:cvesh.singh@gmail.com" style={{
                display:'inline-flex', alignItems:'center', gap:10,
                background:'var(--ink)', color:'#fff', padding:'14px 22px',
                borderRadius:999, fontWeight:600, fontSize:14,
              }}>
                <I.mail size={16} stroke={1.8} /> cvesh.singh@gmail.com
              </a>
              <a href="/Shivesh_Lal_Singh_CV.pdf" style={{
                display:'inline-flex', alignItems:'center', gap:8,
                border:'1px solid var(--line-strong)', padding:'13px 18px',
                borderRadius:999, fontWeight:600, fontSize:14, color:'var(--ink)',
                background:'var(--surface)',
              }}>
                <I.download size={16} /> CV.pdf
              </a>
              <a href="https://github.com/cvesh" style={{
                display:'inline-flex', alignItems:'center', justifyContent:'center',
                width:46, height:46, borderRadius:999, border:'1px solid var(--line-strong)',
                background:'var(--surface)',
              }}><I.github size={18} /></a>
              <a href="https://linkedin.com/in/singhshivesh" style={{
                display:'inline-flex', alignItems:'center', justifyContent:'center',
                width:46, height:46, borderRadius:999, border:'1px solid var(--line-strong)',
                background:'var(--surface)',
              }}><I.linkedin size={18} /></a>
            </div>
          </div>

          {/* RIGHT — portrait + location card */}
          <div style={{position:'relative'}}>
            <PortraitCard accent={accent} />
          </div>
        </div>

        {/* STAT TILES */}
        <StatRow accent={accent} />
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; align-items: start !important; }
        }
      `}</style>
    </section>
  );
};

const PortraitCard = ({ accent }) => {
  return (
    <div style={{
      position:'relative', aspectRatio:'4/5', maxWidth:380, marginLeft:'auto',
      border:'1px solid var(--line)', background:'var(--surface)',
      borderRadius:8, padding:14,
    }}>
      {/* corner crops */}
      {[
        {top:-5, left:-5}, {top:-5, right:-5},
        {bottom:-5, left:-5}, {bottom:-5, right:-5}
      ].map((p,i) => (
        <span key={i} style={{
          position:'absolute', width:10, height:10, ...p,
          border:`1.5px solid ${accent}`,
          borderTop: (p.top != null) ? `1.5px solid ${accent}` : 'none',
          borderLeft: (p.left != null) ? `1.5px solid ${accent}` : 'none',
          borderRight: (p.right != null) ? `1.5px solid ${accent}` : 'none',
          borderBottom: (p.bottom != null) ? `1.5px solid ${accent}` : 'none',
        }}></span>
      ))}

      {/* photo */}
      <div style={{
        width:'100%', aspectRatio:'1/1', overflow:'hidden', borderRadius:4,
        background:'var(--accent-soft)',
        backgroundImage: 'url(profile.jpg)', backgroundSize:'cover', backgroundPosition:'center',
      }}></div>

      {/* metadata strip */}
      <div className="mono" style={{
        display:'grid', gridTemplateColumns:'auto 1fr auto', gap:8,
        marginTop:12, fontSize:10.5, letterSpacing:'0.06em',
        color:'var(--muted)', textTransform:'uppercase',
      }}>
        <span>27.7172° N</span>
        <span style={{textAlign:'center'}}>· Kathmandu ·</span>
        <span>85.3240° E</span>
      </div>

      {/* mini location tag */}
      <div style={{
        position:'absolute', left:-28, bottom:54, transform:'rotate(-90deg)', transformOrigin:'left bottom',
      }}>
        <div className="mono" style={{
          fontSize:10, letterSpacing:'0.18em', textTransform:'uppercase',
          color:'var(--muted)',
        }}>NP-BAG · GMT+05:45</div>
      </div>
    </div>
  );
};

const StatRow = ({ accent }) => {
  const stats = [
    { n: '13', plus:'+', label:'Years building production systems', sub:'2013 → 2026' },
    { n: '6',  plus:'+', label:'Shipped projects in the wild',         sub:'SaaS · Enterprise · OSS' },
    { n: '400', plus:'+', label:'Exchange & wallet integrations',      sub:'at ZenLedger' },
    { n: '3',  plus:'',  label:'Companies, three roles',                sub:'Trainee → Senior' },
  ];
  return (
    <div style={{
      marginTop:64, display:'grid', gap:1,
      gridTemplateColumns:'repeat(4, 1fr)',
      background:'var(--line)', border:'1px solid var(--line)', borderRadius:12, overflow:'hidden',
    }} className="stat-grid">
      {stats.map((s,i) => (
        <div key={i} style={{
          background:'var(--surface)', padding:'28px 24px',
          display:'flex', flexDirection:'column', gap:6, minHeight:148,
        }}>
          <div className="mono" style={{fontSize:10.5, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--muted)'}}>
            {String(i+1).padStart(2,'0')} / 04
          </div>
          <div style={{display:'flex', alignItems:'baseline', gap:2, marginTop:'auto'}}>
            <span className="tabular" style={{
              fontSize:'clamp(48px, 5.5vw, 72px)', fontWeight:800, lineHeight:1, letterSpacing:'-0.04em',
              color:'var(--ink)',
            }}>{s.n}</span>
            <span className="tabular" style={{
              fontSize:'clamp(24px, 2.5vw, 36px)', fontWeight:700, color:accent, lineHeight:1,
            }}>{s.plus}</span>
          </div>
          <div style={{fontSize:13, color:'var(--body)', fontWeight:500, marginTop:4}}>{s.label}</div>
          <div className="mono" style={{fontSize:11, color:'var(--muted)', letterSpacing:'0.04em'}}>{s.sub}</div>
        </div>
      ))}
      <style>{`
        @media (max-width: 900px) { .stat-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </div>
  );
};

// ── 2. CAREER BAR / "AT A GLANCE" ────────────────────────────────────

const CareerBar = ({ accent }) => {
  // years 2013 → 2026 (14 columns)
  const startYear = 2013;
  const endYear = 2026;
  const totalYears = endYear - startYear; // 13

  // role spans, in months from startYear
  const spans = [
    { id:'AK', label:'Access-Keys', role:'Web Developer', start:{y:2013,m:5}, end:{y:2014,m:8}, color:'#9CA3AF' },
    { id:'BT', label:'Bajra Tech.',  role:'Software Engineer', start:{y:2014,m:9}, end:{y:2018,m:5}, color:'#6B7280' },
    { id:'ZL', label:'ZenLedger',    role:'Senior FS Engineer', start:{y:2018,m:12}, end:{y:2026,m:5}, color: accent, featured:true },
  ];

  const toPct = (y, m) => {
    const months = (y - startYear) * 12 + (m - 1);
    return (months / (totalYears * 12)) * 100;
  };

  return (
    <section id="path" data-screen-label="02 At a glance" style={{background:'var(--surface)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
      <div className="wrap" style={{padding:'80px 32px'}}>
        <SectionHead n={2} eyebrow="At a glance" title="Thirteen years, three companies, one trajectory." />

        {/* THE BAR */}
        <div style={{position:'relative', marginTop:24}}>
          {/* year axis */}
          <div className="mono" style={{
            display:'grid', gridTemplateColumns:`repeat(${totalYears+1}, 1fr)`,
            fontSize:11, color:'var(--muted)', letterSpacing:'0.04em',
            marginBottom:14, paddingLeft:0,
          }}>
            {Array.from({length: totalYears+1}, (_,i) => {
              const y = startYear + i;
              const show = i % 2 === 0;
              return <span key={y} style={{textAlign:'center', opacity: show ? 1 : 0.45, fontWeight: show ? 600 : 400}}>{show ? `'${String(y).slice(2)}` : '·'}</span>;
            })}
          </div>

          {/* track */}
          <div style={{
            position:'relative', height:96, borderRadius:12, background:'var(--bg)',
            border:'1px solid var(--line)', padding:12,
          }}>
            {/* grid lines */}
            <div style={{position:'absolute', inset:12, display:'grid', gridTemplateColumns:`repeat(${totalYears}, 1fr)`, pointerEvents:'none'}}>
              {Array.from({length: totalYears}).map((_, i) => (
                <span key={i} style={{borderRight: i < totalYears-1 ? '1px dashed var(--line)' : 'none'}}></span>
              ))}
            </div>

            {/* spans */}
            <div style={{position:'relative', height:'100%'}}>
              {spans.map((s, i) => {
                const left = toPct(s.start.y, s.start.m);
                const right = toPct(s.end.y, s.end.m);
                const w = right - left;
                const top = 8 + i * 22;
                return (
                  <div key={s.id} style={{
                    position:'absolute', left:`${left}%`, width:`${w}%`, top, height:18,
                    background: s.color, borderRadius:4, opacity: s.featured ? 1 : 0.85,
                    display:'flex', alignItems:'center', paddingLeft:8, paddingRight:8, gap:8,
                    color:'#fff', overflow:'hidden', whiteSpace:'nowrap',
                  }}>
                    <span className="mono" style={{fontSize:10, fontWeight:700, letterSpacing:'0.08em'}}>
                      {s.id}
                    </span>
                    <span style={{fontSize:11, fontWeight:500, opacity:0.95}}>
                      {s.label} · {s.role}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* legend / spans */}
          <div style={{
            display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:1,
            marginTop:24, background:'var(--line)', border:'1px solid var(--line)', borderRadius:10, overflow:'hidden',
          }} className="career-legend">
            {spans.slice().reverse().map(s => {
              const months = (s.end.y - s.start.y) * 12 + (s.end.m - s.start.m);
              const years = Math.floor(months/12);
              const remM = months % 12;
              return (
                <div key={s.id} style={{background:'var(--surface)', padding:'20px 22px'}}>
                  <div style={{display:'flex', alignItems:'center', gap:10}}>
                    <span style={{width:14, height:14, background:s.color, borderRadius:3}}></span>
                    <span className="mono" style={{fontSize:11, color:'var(--muted)', letterSpacing:'0.1em', textTransform:'uppercase'}}>
                      {s.start.y}–{s.end.y}
                    </span>
                  </div>
                  <div style={{marginTop:10, fontSize:16, fontWeight:700, color:'var(--ink)'}}>{s.label}</div>
                  <div style={{fontSize:13, color:'var(--muted)'}}>{s.role}</div>
                  <div className="mono tabular" style={{marginTop:8, fontSize:11, color:'var(--accent)', letterSpacing:'0.04em'}}>
                    {years}y{remM ? ` ${remM}m` : ''} · {months} months
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .career-legend { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
};

// ── 3. TECH STACK MATRIX ─────────────────────────────────────────────

const skillGroups = [
  { key:'lang',  title:'Languages', icon: I.code,
    items:[
      { mono:'JS',  name:'JavaScript', years:13 },
      { mono:'TS',  name:'TypeScript', years:8 },
      { mono:'Rb',  name:'Ruby',       years:10 },
      { mono:'PHP', name:'PHP',        years:6 },
      { mono:'Go',  name:'Go',         years:4 },
    ] },
  { key:'fe',    title:'Frontend', icon: I.layers,
    items:[
      { mono:'Re',  name:'React',        years:9 },
      { mono:'Nx',  name:'Next.js',      years:6 },
      { mono:'Ng',  name:'Angular',      years:4 },
      { mono:'Tw',  name:'Tailwind',     years:4 },
      { mono:'</>', name:'HTML / CSS',   years:13 },
    ] },
  { key:'be',    title:'Backend', icon: I.server,
    items:[
      { mono:'RoR', name:'Rails',        years:10 },
      { mono:'API', name:'REST / GraphQL', years:11 },
      { mono:'SK',  name:'Sidekiq',      years:7 },
      { mono:'WP',  name:'WordPress',    years:6 },
    ] },
  { key:'db',    title:'Databases', icon: I.database,
    items:[
      { mono:'Pg',  name:'PostgreSQL',   years:9 },
      { mono:'My',  name:'MySQL',        years:11 },
      { mono:'Mo',  name:'MongoDB',      years:4 },
      { mono:'Rd',  name:'Redis',        years:7 },
    ] },
  { key:'cloud', title:'Cloud / Ops', icon: I.cloud,
    items:[
      { mono:'AWS', name:'AWS',          years:8 },
      { mono:'Az',  name:'Azure',        years:3 },
      { mono:'Dk',  name:'Docker',       years:6 },
      { mono:'Git', name:'Git',          years:13 },
      { mono:'CI',  name:'CI / CD',      years:8 },
    ] },
];

const SkillTile = ({ mono, name, years, accent }) => (
  <div style={{
    border:'1px solid var(--line)', borderRadius:10, padding:'12px 14px',
    background:'var(--surface)', display:'flex', alignItems:'center', gap:12,
    transition:'all .15s ease', cursor:'default',
  }}
  onMouseEnter={(e)=>{ e.currentTarget.style.borderColor = accent; e.currentTarget.style.transform = 'translateY(-2px)'; }}
  onMouseLeave={(e)=>{ e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'translateY(0)'; }}
  >
    <div style={{
      width:34, height:34, borderRadius:8, background:'var(--accent-soft)',
      color:accent, display:'flex', alignItems:'center', justifyContent:'center',
      fontFamily:'var(--font-mono)', fontWeight:700, fontSize:11, letterSpacing:'0.04em',
    }}>{mono}</div>
    <div style={{display:'flex', flexDirection:'column', flex:1, minWidth:0}}>
      <span style={{fontSize:13, fontWeight:600, color:'var(--ink)'}}>{name}</span>
      <span className="mono tabular" style={{fontSize:10.5, color:'var(--muted)', letterSpacing:'0.04em'}}>{years}y</span>
    </div>
  </div>
);

const TechStack = ({ accent }) => (
  <section id="stack" data-screen-label="03 Tech Stack">
    <div className="wrap" style={{padding:'96px 32px'}}>
      <SectionHead n={3} eyebrow="Tech Stack" title="The toolkit, by category." sub="Years experience shown per item. No bars, no self-ratings — just time on the tools." />

      <div style={{
        display:'grid', gap:1, background:'var(--line)',
        gridTemplateColumns:'repeat(5, 1fr)',
        border:'1px solid var(--line)', borderRadius:14, overflow:'hidden',
      }} className="stack-grid">
        {skillGroups.map((g, gi) => (
          <div key={g.key} style={{
            background:'var(--surface)', padding:24, display:'flex', flexDirection:'column', gap:14,
          }}>
            <div style={{display:'flex', alignItems:'center', gap:10}}>
              <span style={{
                width:30, height:30, borderRadius:8, background:'var(--accent-soft)', color:accent,
                display:'inline-flex', alignItems:'center', justifyContent:'center',
              }}>{g.icon({size:16, stroke:1.8})}</span>
              <div style={{display:'flex', flexDirection:'column'}}>
                <span className="mono" style={{fontSize:10, color:'var(--muted)', letterSpacing:'0.14em', textTransform:'uppercase'}}>
                  {String(gi+1).padStart(2,'0')}
                </span>
                <span style={{fontSize:14, fontWeight:700, color:'var(--ink)'}}>{g.title}</span>
              </div>
            </div>

            <div style={{display:'flex', flexDirection:'column', gap:8}}>
              {g.items.map(it => <SkillTile key={it.name} {...it} accent={accent} />)}
            </div>
          </div>
        ))}
        <style>{`
          @media (max-width: 1100px) {
            .stack-grid { grid-template-columns: repeat(3, 1fr) !important; }
          }
          @media (max-width: 720px) {
            .stack-grid { grid-template-columns: repeat(1, 1fr) !important; }
          }
        `}</style>
      </div>
    </div>
  </section>
);

window.Hero = Hero;
window.CareerBar = CareerBar;
window.TechStack = TechStack;
window.Eyebrow = Eyebrow;
window.SectionHead = SectionHead;
