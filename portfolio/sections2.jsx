// ──────────────────────────────────────────────────────────────────
// Portfolio sections — part 2 (Experience, Projects, Capabilities, Education, Contact)
// ──────────────────────────────────────────────────────────────────

// ── 4. EXPERIENCE TIMELINE ───────────────────────────────────────────

const experiences = [
  {
    id:'ZL',
    range:'Dec 2018 — May 2026', years:'7y 5m',
    company:'ZenLedger, Inc.',
    role:'Senior Full-Stack Software Engineer',
    about:'Crypto-tax & accounting SaaS — Next.js, Rails, Go',
    stack:['Next.js','Rails','Go','Postgres','AWS'],
    bullets:[
      { icon:'server', t:'Architect backend services processing millions of crypto transactions' },
      { icon:'net',    t:'Design REST APIs across 400+ exchange and wallet integrations' },
      { icon:'zap',    t:'Cut long-running job times via indexing, batching, denormalization' },
      { icon:'users',  t:'Mentor engineers through code reviews and best-practice guidelines' },
    ],
    metric:{ big:'400+', small:'integrations'},
    featured:true,
  },
  {
    id:'BT',
    range:'Sep 2014 — May 2018', years:'3y 8m',
    company:'Bajra Technologies Pvt. Ltd.',
    role:'Software Engineer',
    about:'Product engineering studio for global clients',
    stack:['Rails','AngularJS','AWS','Capistrano'],
    bullets:[
      { icon:'star', t:'Built and shipped AirScout Enterprise Cloud for Textron' },
      { icon:'briefcase', t:'Delivered multiple client projects as backend engineer' },
      { icon:'cloud', t:'Owned zero-downtime AWS EC2 deployments via Capistrano' },
      { icon:'layers', t:'Contributed to the company site (AngularJS + API backend)' },
    ],
    metric:{ big:'0', small:'downtime deploys'},
  },
  {
    id:'AK',
    range:'May 2013 — Aug 2014', years:'1y 3m',
    company:'Access-Keys Pvt. Ltd.',
    role:'Web Developer  ·  Trainee → Developer',
    about:'Web studio serving local and overseas clients',
    stack:['PHP','WordPress','CodeIgniter','MySQL'],
    bullets:[
      { icon:'code', t:'Built PHP / WordPress / CodeIgniter websites and CMSs' },
      { icon:'brush', t:'Converted designs to pixel-accurate, responsive frontends' },
    ],
    metric:{ big:'1st', small:'engineering role'},
  },
];

const ExperienceCard = ({ exp, accent, side }) => {
  const reverse = side === 'left';
  return (
    <article style={{
      position:'relative',
      border:'1px solid var(--line)', background:'var(--surface)', borderRadius:14,
      padding:24, display:'grid', gridTemplateColumns:'1fr auto', gap:24,
      boxShadow: exp.featured ? `0 1px 0 ${accent}1f, 0 18px 40px -28px rgba(31,78,121,.35)` : 'none',
    }}>
      {exp.featured && (
        <span className="mono" style={{
          position:'absolute', top:-10, left:24,
          background: accent, color:'#fff', fontSize:10, fontWeight:700,
          padding:'4px 10px', borderRadius:999, letterSpacing:'0.14em', textTransform:'uppercase',
        }}>Current</span>
      )}

      <div>
        <div style={{display:'flex', flexWrap:'wrap', alignItems:'center', gap:10}}>
          <span style={{
            width:42, height:42, borderRadius:10, background:'var(--ink)', color:'#fff',
            display:'inline-flex', alignItems:'center', justifyContent:'center',
            fontFamily:'var(--font-mono)', fontWeight:700, fontSize:13, letterSpacing:'0.02em',
          }}>{exp.id}</span>
          <div>
            <div style={{fontSize:17, fontWeight:700, color:'var(--ink)'}}>{exp.company}</div>
            <div className="mono" style={{fontSize:11, color:'var(--muted)', letterSpacing:'0.08em', textTransform:'uppercase'}}>
              {exp.range}  ·  {exp.years}
            </div>
          </div>
        </div>

        <div style={{marginTop:16, fontSize:15, color:'var(--body)', fontWeight:600}}>{exp.role}</div>
        <div style={{fontSize:13, color:'var(--muted)', marginTop:2}}>{exp.about}</div>

        <ul style={{listStyle:'none', padding:0, margin:'18px 0 0', display:'flex', flexDirection:'column', gap:10}}>
          {exp.bullets.map((b,i) => (
            <li key={i} style={{display:'flex', alignItems:'flex-start', gap:10}}>
              <span style={{
                width:24, height:24, borderRadius:6, background:'var(--accent-soft)', color:accent,
                display:'inline-flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1,
              }}>{I[b.icon]({size:13, stroke:1.8})}</span>
              <span style={{fontSize:13.5, color:'var(--body)', lineHeight:1.45}}>{b.t}</span>
            </li>
          ))}
        </ul>

        <div style={{marginTop:18, display:'flex', flexWrap:'wrap', gap:6}}>
          {exp.stack.map(t => (
            <span key={t} className="mono" style={{
              fontSize:10.5, padding:'4px 8px', borderRadius:999,
              border:'1px solid var(--line)', color:'var(--muted)', background:'var(--tag)',
              letterSpacing:'0.04em',
            }}>{t}</span>
          ))}
        </div>
      </div>

      {/* metric block */}
      <div style={{
        width:120, display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-end',
        borderLeft:'1px dashed var(--line)', paddingLeft:18,
      }} className="exp-metric">
        <div className="tabular" style={{fontSize:36, fontWeight:800, color:accent, lineHeight:1, letterSpacing:'-0.03em'}}>{exp.metric.big}</div>
        <div className="mono" style={{fontSize:10, color:'var(--muted)', letterSpacing:'0.1em', textTransform:'uppercase', marginTop:4, textAlign:'right'}}>
          {exp.metric.small}
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .exp-metric { display: none !important; }
        }
      `}</style>
    </article>
  );
};

const Experience = ({ accent }) => {
  return (
    <section data-screen-label="04 Experience" style={{background:'var(--bg)'}}>
      <div className="wrap" style={{padding:'96px 32px'}}>
        <SectionHead n={4} eyebrow="Experience" title="Where I've built things." />

        <div style={{position:'relative'}}>
          {/* vertical spine */}
          <span aria-hidden="true" style={{
            position:'absolute', top:8, bottom:8, left:21, width:2, background:'var(--line)',
          }} className="spine"></span>

          <ol style={{listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:24}}>
            {experiences.map((e, i) => (
              <li key={e.id} style={{position:'relative', paddingLeft:64}} className="exp-row">
                {/* node */}
                <span aria-hidden="true" style={{
                  position:'absolute', left:14, top:24, width:16, height:16, borderRadius:999,
                  background: e.featured ? accent : 'var(--surface)',
                  border: `2px solid ${accent}`,
                  boxShadow:'0 0 0 5px var(--bg)',
                }}></span>
                {/* year tag on spine */}
                <span className="mono" style={{
                  position:'absolute', left:-6, top:46, fontSize:10, color:'var(--muted)',
                  letterSpacing:'0.08em', fontWeight:600,
                }}>{e.range.split(' — ')[0].split(' ').pop()}</span>

                <ExperienceCard exp={e} accent={accent} />
              </li>
            ))}
          </ol>
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) {
          .exp-row { padding-left: 48px !important; }
          .spine { left: 13px !important; }
        }
      `}</style>
    </section>
  );
};

// ── 5. SELECTED WORK ─────────────────────────────────────────────────

const projects = [
  {
    name:'ZenLedger', url:'https://www.zenledger.io/', featured:true, mono:'ZL',
    desc:'SaaS platform for crypto tax and accounting; large-scale data import, reconciliation, and tax-form generation.',
    role:'Senior FS Engineer', period:'2018 → 26',
    tags:['Next.js','React','Rails','Go','Postgres','AWS'],
    metric:[{n:'400+', l:'integrations'}, {n:'M+', l:'tx / mo'}],
  },
  {
    name:'AirScout Enterprise Cloud', url:'https://airscoutenterprise.textron.com/', mono:'AS',
    desc:'Cloud API for signal-heatmap processing and automated PDF reporting for Textron field teams.',
    role:'Backend Engineer', period:'2016 → 18',
    tags:['Rails','Postgres','AWS'],
    metric:[{n:'PDF', l:'auto reports'}],
  },
  {
    name:'TwitchScrape', url:'https://github.com/cvesh/twitchscrape', mono:'TS',
    desc:'Open-source app that scrapes and visualizes public Twitch data via an API backend and React frontend.',
    role:'Solo · OSS', period:'2017',
    tags:['React','Rails'],
    metric:[{n:'OSS', l:'github'}],
  },
  {
    name:'Bajra Technologies', url:'https://bajratechnologies.com/home', mono:'BT',
    desc:'Company marketing site with an AngularJS frontend backed by an API service.',
    role:'Engineering', period:'2017',
    tags:['AngularJS','Rails'],
    metric:[{n:'SPA', l:'angular 1.x'}],
  },
  {
    name:'Yatri Kathmandu Suite', url:'http://www.yatrikathmandusuite.com/', mono:'YK',
    desc:'Hotel website with booking enquiry flows.',
    role:'Web Developer', period:'2014',
    tags:['PHP','CodeIgniter','MySQL'],
    metric:[{n:'★', l:'hospitality'}],
  },
  {
    name:'Propak', url:'https://www.propak.com/', mono:'PP',
    desc:'Corporate website built and customized on WordPress with theme customization and content management.',
    role:'Web Developer', period:'2013',
    tags:['WordPress','PHP','MySQL'],
    metric:[{n:'CMS', l:'wordpress'}],
  },
];

const ProjectCard = ({ p, accent }) => (
  <a href={p.url} target="_blank" rel="noopener noreferrer" style={{
    display:'flex', flexDirection:'column', height:'100%',
    border:'1px solid var(--line)', borderRadius:14, background:'var(--surface)', overflow:'hidden',
    transition:'all .2s ease', position:'relative',
  }}
  onMouseEnter={(e)=>{ e.currentTarget.style.borderColor = accent; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 22px 50px -28px rgba(31,78,121,.5)';}}
  onMouseLeave={(e)=>{ e.currentTarget.style.borderColor = 'var(--line)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none';}}
  >
    {/* visual block — striped placeholder */}
    <div className={p.featured ? '' : 'stripes'} style={{
      position:'relative', aspectRatio:'16/9', overflow:'hidden',
      background: p.featured ? `linear-gradient(135deg, ${accent} 0%, #14334f 100%)` : undefined,
      borderBottom:'1px solid var(--line)',
      display:'flex', alignItems:'center', justifyContent:'center',
    }}>
      <span className="mono" style={{
        fontSize:72, fontWeight:800, letterSpacing:'-0.05em',
        color: p.featured ? 'rgba(255,255,255,0.95)' : accent, opacity: p.featured ? 1 : 0.6,
      }}>{p.mono}</span>

      {/* corner ticks */}
      <span className="mono" style={{
        position:'absolute', top:14, left:14, fontSize:10, letterSpacing:'0.1em',
        color: p.featured ? 'rgba(255,255,255,0.7)' : 'var(--muted)', textTransform:'uppercase',
      }}>· {p.period}</span>
      <span className="mono" style={{
        position:'absolute', top:14, right:14, fontSize:10, letterSpacing:'0.1em',
        color: p.featured ? 'rgba(255,255,255,0.7)' : 'var(--muted)', textTransform:'uppercase',
      }}>{p.role}</span>

      {p.featured && (
        <span className="mono" style={{
          position:'absolute', bottom:14, left:14, fontSize:10, fontWeight:700,
          background:'#fff', color:accent, padding:'4px 10px', borderRadius:999,
          letterSpacing:'0.14em', textTransform:'uppercase',
        }}>★ Featured</span>
      )}
    </div>

    <div style={{padding:'20px 22px', display:'flex', flexDirection:'column', flex:1, gap:10}}>
      <div style={{display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:12}}>
        <h3 style={{margin:0, fontSize:18, fontWeight:700, color:'var(--ink)', letterSpacing:'-0.01em'}}>{p.name}</h3>
        <span style={{
          width:30, height:30, borderRadius:8, background:'var(--bg)', color:'var(--body)',
          display:'inline-flex', alignItems:'center', justifyContent:'center', flexShrink:0,
        }}><I.ext size={13} /></span>
      </div>
      <p style={{margin:0, fontSize:13.5, color:'var(--muted)', lineHeight:1.5}}>{p.desc}</p>

      <div style={{display:'flex', flexWrap:'wrap', gap:5, marginTop:'auto'}}>
        {p.tags.map(t => (
          <span key={t} className="mono" style={{
            fontSize:10.5, padding:'3px 8px', borderRadius:999,
            border:'1px solid var(--line)', color:'var(--muted)', background:'var(--tag)',
            letterSpacing:'0.04em',
          }}>{t}</span>
        ))}
      </div>

      <hr className="rule" style={{margin:'4px 0 0'}} />

      <div style={{display:'flex', gap:18}}>
        {p.metric.map(m => (
          <div key={m.l}>
            <div className="mono tabular" style={{fontSize:15, fontWeight:700, color:accent, letterSpacing:'-0.01em'}}>{m.n}</div>
            <div className="mono" style={{fontSize:10, color:'var(--muted)', letterSpacing:'0.08em', textTransform:'uppercase'}}>{m.l}</div>
          </div>
        ))}
      </div>
    </div>
  </a>
);

const Work = ({ accent }) => (
  <section id="work" data-screen-label="05 Selected Work" style={{background:'var(--surface)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
    <div className="wrap" style={{padding:'96px 32px'}}>
      <SectionHead n={5} eyebrow="Selected work" title="Six projects across SaaS, enterprise, and open source." />

      <div style={{
        display:'grid', gap:18,
        gridTemplateColumns:'repeat(3, 1fr)',
      }} className="work-grid">
        {projects.map(p => <ProjectCard key={p.name} p={p} accent={accent} />)}
      </div>

      <style>{`
        @media (max-width: 1024px) { .work-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 720px)  { .work-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  </section>
);

// ── 6. CAPABILITIES (radar + bars) ───────────────────────────────────

const capabilities = [
  { icon:'server',    label:'Backend & API design',    level:5 },
  { icon:'layers',    label:'Frontend frameworks',     level:4 },
  { icon:'database',  label:'Database design',         level:4 },
  { icon:'wrench',    label:'DevOps & deployment',     level:4 },
  { icon:'net',       label:'System architecture',     level:4 },
  { icon:'users',     label:'Mentoring & reviews',     level:4 },
];

// Radar chart SVG — 6 axes
const RadarChart = ({ data, accent }) => {
  const size = 320;
  const cx = size/2, cy = size/2;
  const R = 120;
  const N = data.length;
  const MAX = 5;

  const angle = (i) => -Math.PI/2 + (i * (2*Math.PI/N));
  const point = (i, lvl) => {
    const r = (lvl / MAX) * R;
    return [cx + Math.cos(angle(i))*r, cy + Math.sin(angle(i))*r];
  };

  // grid rings
  const rings = [1,2,3,4,5];

  const dataPath = data.map((d,i) => {
    const [x,y] = point(i, d.level);
    return `${i===0 ? 'M' : 'L'}${x},${y}`;
  }).join(' ') + ' Z';

  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" style={{maxWidth:380, display:'block'}}>
      {/* rings */}
      {rings.map(r => {
        const pts = data.map((_, i) => point(i, r).join(',')).join(' ');
        return <polygon key={r} points={pts} fill="none" stroke="var(--line)" strokeWidth="1" />;
      })}
      {/* axes */}
      {data.map((_, i) => {
        const [x,y] = point(i, MAX);
        return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="var(--line)" strokeWidth="1" strokeDasharray="2 3" />;
      })}
      {/* data shape */}
      <path d={dataPath} fill={accent} fillOpacity="0.15" stroke={accent} strokeWidth="2" strokeLinejoin="round" />
      {/* data points */}
      {data.map((d, i) => {
        const [x,y] = point(i, d.level);
        return <circle key={i} cx={x} cy={y} r="4" fill="#fff" stroke={accent} strokeWidth="2" />;
      })}
      {/* labels */}
      {data.map((d, i) => {
        const [x,y] = point(i, MAX+0.7);
        const w = 96;
        const anchor = Math.abs(x - cx) < 4 ? 'middle' : (x < cx ? 'end' : 'start');
        return (
          <text key={i} x={x} y={y} fontFamily="JetBrains Mono" fontSize="9" fill="var(--muted)"
                textAnchor={anchor} dominantBaseline="middle"
                style={{letterSpacing:'0.06em', textTransform:'uppercase', fontWeight:600}}>
            {d.label.toUpperCase()}
          </text>
        );
      })}
      {/* center dot */}
      <circle cx={cx} cy={cy} r="2.5" fill={accent} />
    </svg>
  );
};

const Capabilities = ({ accent }) => (
  <section id="about" data-screen-label="06 Capabilities">
    <div className="wrap" style={{padding:'96px 32px'}}>
      <SectionHead n={6} eyebrow="Capabilities" title="Where I focus." sub="Self-assessment based on years on the tools and depth of work delivered." />

      <div style={{
        display:'grid', gridTemplateColumns:'1.1fr 1fr', gap:48, alignItems:'center',
      }} className="cap-grid">
        {/* LEFT — radar */}
        <div style={{
          border:'1px solid var(--line)', background:'var(--surface)', borderRadius:14, padding:'32px',
          display:'flex', alignItems:'center', justifyContent:'center', position:'relative',
        }}>
          <RadarChart data={capabilities} accent={accent} />
          <span className="mono" style={{
            position:'absolute', top:14, left:14, fontSize:10, color:'var(--muted)',
            letterSpacing:'0.1em', textTransform:'uppercase',
          }}>fig.01 · skills surface</span>
          <span className="mono" style={{
            position:'absolute', bottom:14, right:14, fontSize:10, color:'var(--muted)',
            letterSpacing:'0.1em', textTransform:'uppercase',
          }}>scale 0—5</span>
        </div>

        {/* RIGHT — bar rows */}
        <div style={{display:'flex', flexDirection:'column', gap:14}}>
          {capabilities.map((c, i) => (
            <div key={c.label} style={{
              display:'grid', gridTemplateColumns:'auto 1fr auto', alignItems:'center', gap:14,
            }}>
              <span style={{
                width:32, height:32, borderRadius:8, background:'var(--accent-soft)', color:accent,
                display:'inline-flex', alignItems:'center', justifyContent:'center',
              }}>{I[c.icon]({size:15, stroke:1.8})}</span>

              <div style={{display:'flex', flexDirection:'column', gap:6, minWidth:0}}>
                <div style={{display:'flex', justifyContent:'space-between', alignItems:'baseline'}}>
                  <span style={{fontSize:13, fontWeight:600, color:'var(--ink)'}}>{c.label}</span>
                  <span className="mono tabular" style={{fontSize:10.5, color:'var(--muted)', letterSpacing:'0.04em'}}>
                    {c.level}/5
                  </span>
                </div>
                <div style={{display:'flex', gap:3}}>
                  {Array.from({length:5}).map((_, k) => (
                    <span key={k} style={{
                      flex:1, height:6, borderRadius:2,
                      background: k < c.level ? accent : 'var(--line)',
                    }}></span>
                  ))}
                </div>
              </div>

              <span className="mono" style={{
                fontSize:10, color:'var(--muted)', letterSpacing:'0.1em', textTransform:'uppercase',
                width:30, textAlign:'right',
              }}>{String(i+1).padStart(2,'0')}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cap-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  </section>
);

// ── 7. EDUCATION ─────────────────────────────────────────────────────

const Education = ({ accent }) => {
  const items = [
    {
      ico:'cap', tag:'2009 — 2013',
      title:'Bachelor in Information Management',
      meta:'CGPA 3.68', sub:'NCCS College · Paknajol, Kathmandu',
    },
    {
      ico:'brush', tag:'Cert.',
      title:'Graphic Design — Adobe Photoshop & Illustrator',
      meta:'Arena Multimedia', sub:'Kantipath, Kathmandu',
    },
  ];
  return (
    <section data-screen-label="07 Education" style={{background:'var(--surface)', borderTop:'1px solid var(--line)', borderBottom:'1px solid var(--line)'}}>
      <div className="wrap" style={{padding:'80px 32px'}}>
        <SectionHead n={7} eyebrow="Education" title="Foundations." />
        <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:18}} className="edu-grid">
          {items.map(it => (
            <article key={it.title} style={{
              border:'1px solid var(--line)', borderRadius:14, padding:24,
              display:'grid', gridTemplateColumns:'auto 1fr', gap:18, background:'var(--bg)',
            }}>
              <span style={{
                width:48, height:48, borderRadius:10, background:'var(--accent-soft)', color:accent,
                display:'inline-flex', alignItems:'center', justifyContent:'center',
              }}>{I[it.ico]({size:22, stroke:1.6})}</span>
              <div>
                <span className="mono" style={{fontSize:10, color:'var(--muted)', letterSpacing:'0.14em', textTransform:'uppercase'}}>
                  {it.tag}
                </span>
                <h3 style={{margin:'4px 0 4px', fontSize:16, fontWeight:700, color:'var(--ink)'}}>{it.title}</h3>
                <div className="mono" style={{fontSize:11, color:accent, fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase'}}>
                  {it.meta}
                </div>
                <div style={{fontSize:13, color:'var(--muted)', marginTop:6}}>{it.sub}</div>
              </div>
            </article>
          ))}
        </div>
        <style>{`
          @media (max-width: 720px) { .edu-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </div>
    </section>
  );
};

// ── 8. CONTACT ───────────────────────────────────────────────────────

const Contact = ({ accent }) => {
  const [copied, setCopied] = useState(false);
  const email = 'cvesh.singh@gmail.com';
  const copy = (e) => {
    e.preventDefault();
    navigator.clipboard?.writeText(email);
    setCopied(true);
    setTimeout(()=> setCopied(false), 1800);
  };
  return (
    <section id="contact" data-screen-label="08 Contact">
      <div className="wrap" style={{padding:'120px 32px 80px', position:'relative'}}>
        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center',
        }} className="contact-grid">
          <div>
            <Eyebrow n={8}>Get in touch</Eyebrow>
            <h2 style={{
              margin:'24px 0 0', fontSize:'clamp(36px, 5vw, 64px)', lineHeight:1.0,
              letterSpacing:'-0.03em', fontWeight:800, color:'var(--ink)',
            }}>
              Open to senior <br />full-stack roles.
            </h2>
            <p style={{fontSize:16, color:'var(--muted)', marginTop:16, maxWidth:480}}>
              Remote-friendly · Based in Kathmandu, GMT+05:45.
            </p>
          </div>

          <div style={{
            border:'1px solid var(--line)', background:'var(--surface)', borderRadius:16,
            padding:'8px',
          }}>
            <div style={{padding:'24px 24px 16px'}}>
              <div className="mono" style={{fontSize:10, color:'var(--muted)', letterSpacing:'0.14em', textTransform:'uppercase'}}>
                Primary
              </div>
              <a href={`mailto:${email}`} onClick={()=>{}} style={{
                marginTop:8, display:'flex', alignItems:'center', justifyContent:'space-between', gap:14,
              }}>
                <span style={{fontSize:'clamp(18px,2.2vw,24px)', fontWeight:700, color:'var(--ink)', letterSpacing:'-0.01em'}}>
                  {email}
                </span>
                <button onClick={copy} title="Copy" style={{
                  width:38, height:38, borderRadius:10, border:'1px solid var(--line)',
                  background:'var(--bg)', display:'inline-flex', alignItems:'center', justifyContent:'center',
                  cursor:'pointer', color: copied ? '#16A34A' : 'var(--ink)', transition:'color .2s',
                }}>
                  {copied ? <I.check size={16} /> : <I.copy size={15} />}
                </button>
              </a>
            </div>
            <hr className="rule" />
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:1, background:'var(--line)'}}>
              <a href="https://github.com/cvesh" target="_blank" rel="noopener noreferrer" style={contactTile}>
                <I.github size={18} />
                <span>github.com/cvesh</span>
                <I.ext size={13} />
              </a>
              <a href="https://linkedin.com/in/singhshivesh" target="_blank" rel="noopener noreferrer" style={contactTile}>
                <I.linkedin size={18} />
                <span>linkedin · shiveshsingh</span>
                <I.ext size={13} />
              </a>
              <a href="/Shivesh_Lal_Singh_CV.pdf" style={contactTile}>
                <I.download size={18} />
                <span>Shivesh_Lal_Singh_CV.pdf</span>
                <span className="mono" style={{fontSize:10, color:'var(--muted)'}}>PDF</span>
              </a>
              <a href="https://shiveshsingh.com.np" style={contactTile}>
                <I.pin size={18} />
                <span>shiveshsingh.com.np</span>
                <span className="mono" style={{fontSize:10, color:'var(--muted)'}}>NP</span>
              </a>
            </div>
          </div>
        </div>

        <hr className="rule" style={{marginTop:96}} />
        <div style={{
          display:'flex', flexWrap:'wrap', justifyContent:'space-between', gap:12,
          paddingTop:24, color:'var(--muted)',
        }}>
          <div className="mono" style={{fontSize:11, letterSpacing:'0.08em'}}>
            © 2026 Shivesh Singh
          </div>
          <div className="mono" style={{fontSize:11, letterSpacing:'0.08em'}}>
            Built deliberately · Kathmandu, NP
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </div>
    </section>
  );
};

const contactTile = {
  display:'grid', gridTemplateColumns:'auto 1fr auto', alignItems:'center', gap:12,
  padding:'16px 22px', background:'var(--surface)',
  fontSize:13, color:'var(--body)', fontWeight:500,
};

window.Experience = Experience;
window.Work = Work;
window.Capabilities = Capabilities;
window.Education = Education;
window.Contact = Contact;
