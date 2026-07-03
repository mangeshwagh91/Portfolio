import { useState, useEffect, useRef, useCallback } from 'react';
import '../terminal.css';

/* ══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */

const ME = {
  name:    'Mangesh Wagh',
  user:    'mangesh',
  host:    '10.88.114.130',
  path:    '~/portfolio',
  college: 'GECA \'28',
  handle:  'm.wagh@geca.ai',
  role:    'AI & Full-Stack Developer',
  now:     'Full Stack Intern · Building intelligent systems',
  loc:     'Chh. Sambhajinagar, MH',
  past:    'SIH \'25 National Finalist · GSSoC \'25 · Tech Head C-Cube',
  version: 'v1.0.0',
};

const THEMES = {
  tokyonight: {
    label: 'tokyonight',
    swatches: ['#7aa2f7','#9ece6a','#7dcfff','#e0af68','#f7768e','#bb9af7'],
  },
  gruvbox: {
    label: 'gruvbox',
    swatches: ['#fe8019','#b8bb26','#8ec07c','#fabd2f','#fb4934','#d3869b'],
  },
  dracula: {
    label: 'dracula',
    swatches: ['#bd93f9','#50fa7b','#8be9fd','#f1fa8c','#ff5555','#ff79c6'],
  },
  matrix: {
    label: 'matrix',
    swatches: ['#00ff41','#00cc33','#00ffaa','#aaff00','#ff0040','#00ff99'],
  },
  amber: {
    label: 'amber',
    swatches: ['#ffb000','#ffcc00','#ffd700','#ffaa00','#ff4400','#ffdd66'],
  },
  paper: {
    label: 'paper',
    swatches: ['#1a4a8a','#3a7a2a','#1a6a7a','#8a5a00','#8a1a1a','#6a1a6a'],
  },
};

/* ══════════════════════════════════════════════════════════
   ASCII BANNER
══════════════════════════════════════════════════════════ */

const ASCII_LOGO = `
 ███╗   ███╗██╗    ██╗
 ████╗ ████║██║    ██║
 ██╔████╔██║██║ █╗ ██║
 ██║╚██╔╝██║██║███╗██║
 ██║ ╚═╝ ██║╚███╔███╔╝
 ╚═╝     ╚═╝ ╚══╝╚══╝ `.trim();

/* ══════════════════════════════════════════════════════════
   OUTPUT RENDERERS
══════════════════════════════════════════════════════════ */

function Banner() {
  return (
    <div className="output-block">
      <div className="banner-wrap">
        <pre className="ascii-art">{ASCII_LOGO}</pre>
        <div className="banner-info">
          <div className="banner-name">{ME.name} <span className="c-dim">· building intelligent systems</span></div>
          <div className="banner-row">
            <span className="banner-key c-dim">user</span>
            <span className="banner-sep">|</span>
            <span className="banner-val c-cyan">{ME.user}@{ME.host}</span>
          </div>
          <div className="banner-row">
            <span className="banner-key c-dim">role</span>
            <span className="banner-sep">|</span>
            <span className="banner-val">{ME.role}</span>
          </div>
          <div className="banner-row">
            <span className="banner-key c-dim">now</span>
            <span className="banner-sep">|</span>
            <span className="banner-val c-green">{ME.now}</span>
          </div>
          <div className="banner-row">
            <span className="banner-key c-dim">past</span>
            <span className="banner-sep">|</span>
            <span className="banner-val c-dim">{ME.past}</span>
          </div>
          <div className="banner-row">
            <span className="banner-key c-dim">loc</span>
            <span className="banner-sep">|</span>
            <span className="banner-val">{ME.loc}</span>
          </div>
          <div className="color-chips">
            {['var(--red)','var(--yellow)','var(--green)','var(--cyan)','var(--blue)','var(--magenta)','var(--fg-dim)'].map((c,i)=>(
              <div key={i} className="color-chip" style={{background:c}} title={c} />
            ))}
          </div>
        </div>
      </div>
      <div className="c-dim" style={{marginTop:'12px',fontSize:'12px'}}>
        welcome. type <span className="c-green c-bold">help</span> · <span className="c-accent">theme dracula</span> · <span className="c-yellow">snake</span> · click a chip.
      </div>
    </div>
  );
}

function WhoAmI() {
  return (
    <div className="output-block">
      <div className="c-fg">
        {ME.name} — AI & Full-Stack Developer at GECA '28.<br/>
        <span className="c-dim">SIH '25 National Finalist · GSSoC '25 Contributor · Tech Head @ C-Cube Coding Club.</span>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="output-block">
      <div className="output-block-title">ABOUT</div>
      <div style={{display:'flex',flexDirection:'column',gap:'10px',maxWidth:'700px'}}>
        <p className="c-fg">
          Hi, I'm Mangesh — an AI & Full-Stack Developer who obsesses over the intersection of{' '}
          <span className="c-cyan">predictive ML</span> and <span className="c-blue">scalable web infrastructure</span>.
        </p>
        <p className="c-fg">
          From building hallucination detection systems commissioned for IIT Roorkee, to representing GECA at the{' '}
          <span className="c-yellow">SIH '25 National Finals</span>, I consistently push the boundaries of GenAI integration.
        </p>
        <p className="c-fg">
          As the <span className="c-green">Technical Head of the C-Cube Coding Club</span>, I lead a team of developers
          focused on modern open-source contribution and rigorous algorithmic design.
        </p>
        <p className="c-fg">
          Currently interning as a <span className="c-magenta">Full Stack Developer</span>, building production-grade systems
          from first principles. Committed to the future of AI.
        </p>
        <p className="c-dim" style={{fontSize:'12px',marginTop:'4px'}}>
          Try <span className="c-green">experience</span>, <span className="c-green">projects</span>, <span className="c-green">skills</span>, or <span className="c-green">achievements</span>. <span className="c-green">contact</span> to reach me.
        </p>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="output-block">
      <div className="output-block-title">EDUCATION</div>
      <div className="exp-entry">
        <div className="exp-title">Government College of Engineering, Aurangabad (GECA)
          <span className="exp-date">· 2024 – 2028</span>
        </div>
        <div className="exp-role">B.Tech — Computer Science & Engineering</div>
        <div className="exp-desc">
          Active member and <span className="c-green">Technical Head</span> of C-Cube Coding Club.<br/>
          Represented the college at Smart India Hackathon '25 National Finals.
        </div>
      </div>
    </div>
  );
}

function Experience() {
  const items = [
    {
      title: 'Full Stack Developer Intern',
      org: 'Industry',
      date: '2026 (ongoing)',
      role: 'Full Stack Intern',
      desc: 'Building production-grade full-stack applications. Working on scalable backend systems, REST APIs, and modern React UIs.',
      tags: ['React.js', 'Node.js', 'PostgreSQL', 'FastAPI'],
      tagColor: 'tag-blue',
    },
    {
      title: 'Smart India Hackathon \'25 — National Finalist',
      org: 'Ministry of Education, Govt. of India',
      date: 'Dec 2025',
      role: 'Team Lead · SIH Problem Statement',
      desc: 'Represented GECA at the national finals. Built an AI-powered solution addressing a real government problem statement, competing against 1000+ teams nationwide.',
      tags: ['GenAI', 'FastAPI', 'React', 'LangChain'],
      tagColor: 'tag-yellow',
    },
    {
      title: 'GSSoC \'25 — Open Source Contributor',
      org: 'GirlScript Summer of Code',
      date: 'Summer 2025',
      role: 'Open Source Contributor',
      desc: 'Contributed to open-source projects during GirlScript Summer of Code. Focused on AI/ML tooling and full-stack features.',
      tags: ['Python', 'JavaScript', 'Open Source'],
      tagColor: 'tag-green',
    },
    {
      title: 'Technical Head — C-Cube Coding Club',
      org: 'GECA',
      date: '2024 – Present',
      role: 'Technical Lead',
      desc: 'Lead a team of developers. Organize hackathons, coding contests, workshops on DSA, Web Dev, and AI/ML. Mentor juniors on modern open-source contribution.',
      tags: ['Leadership', 'Mentoring', 'DSA', 'Web Dev'],
      tagColor: 'tag-magenta',
    },
  ];

  return (
    <div className="output-block">
      <div className="output-block-title">EXPERIENCE</div>
      {items.map((item, i) => (
        <div className="exp-entry" key={i}>
          <div>
            <span className="exp-title">{item.title}</span>
            <span className="exp-date">· {item.date}</span>
          </div>
          <div className="exp-role">{item.org} — {item.role}</div>
          <div className="exp-desc">{item.desc}</div>
          <div className="exp-tags">
            {item.tags.map(t => (
              <span key={t} className={`tag ${item.tagColor}`}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Projects({ filter }) {
  const items = [
    {
      title: 'ALVANCE',
      cat: 'AI LCA TOOL',
      year: '2024',
      link: 'https://alvance.vercel.app',
      desc: 'Automates ISO-compliant Lifecycle Analysis and circularity assessment for the metals sector. Reduces LCA time from weeks to minutes.',
      tags: ['Python', 'FastAPI', 'React', 'LangChain', 'AI'],
    },
    {
      title: 'HALLUCINATION HUNTER',
      cat: 'LLM AUDITOR',
      year: '2025',
      link: 'https://hallucination-sol.vercel.app',
      desc: 'Full-stack hallucination detection system with claim-level validation and citation grounding. Built for IIT Roorkee research validation.',
      tags: ['Python', 'RAG', 'LangChain', 'React', 'FastAPI'],
    },
    {
      title: 'SENTINEL AI',
      cat: 'CV SURVEILLANCE',
      year: '2025',
      link: 'https://sentinel-ai-puce.vercel.app',
      desc: 'Multi-camera monitoring system with live stream processing via WebSockets and real-time YOLO object detection.',
      tags: ['Python', 'YOLO', 'WebSockets', 'React', 'OpenCV'],
    },
    {
      title: 'STOCKINATOR',
      cat: 'ML TRADING',
      year: '2024',
      link: 'https://stockinator-five.vercel.app',
      desc: 'Autonomous trading system combining technical indicators, sentiment analysis, and ML signals for predictive stock decisions.',
      tags: ['Python', 'ML', 'NLP', 'PyTorch', 'React'],
    },
    {
      title: 'ALONI',
      cat: 'WEB3 REPUTATION',
      year: '2025',
      link: 'https://aloni-dev.vercel.app',
      desc: 'Decentralized reputation system converting real work into a verifiable credibility score on-chain.',
      tags: ['Web3', 'Solidity', 'React', 'Node.js'],
    },
    {
      title: 'VERITRON AI',
      cat: 'FAKE NEWS DETECTOR',
      year: '2026',
      link: 'https://veritron-ai.vercel.app',
      desc: 'ML-based system to classify news authenticity with emphasis on accuracy, ethical AI and explainability.',
      tags: ['Python', 'ML', 'NLP', 'FastAPI', 'React'],
    },
  ];

  const filtered = filter
    ? items.filter(p =>
        p.title.toLowerCase().includes(filter) ||
        p.desc.toLowerCase().includes(filter) ||
        p.tags.some(t => t.toLowerCase().includes(filter))
      )
    : items;

  return (
    <div className="output-block">
      <div className="output-block-title">PROJECTS</div>
      {filtered.length === 0 && (
        <div className="c-dim">no projects matching "{filter}"</div>
      )}
      {filtered.map((p, i) => (
        <div className="proj-entry" key={i}>
          <div>
            <span className="proj-title">{p.title}</span>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="proj-link">[src]</a>
            <span className="proj-year">· {p.year}</span>
          </div>
          <div className="proj-cat">{p.cat}</div>
          <div className="proj-desc">{p.desc}</div>
          <div className="proj-tags">
            {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      ))}
      {!filter && (
        <div className="c-dim" style={{fontSize:'12px',marginTop:'4px'}}>
          more at <a href="https://mydevspace.vercel.app" target="_blank" rel="noopener noreferrer" className="term-link">mydevspace.vercel.app</a>
        </div>
      )}
    </div>
  );
}

function Skills({ filter }) {
  const cats = [
    {
      name: 'Programming',
      tags: ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Shell'],
      color: 'tag-blue',
    },
    {
      name: 'AI / ML / Gen-AI',
      tags: ['PyTorch', 'TensorFlow', 'LangChain', 'RAG Pipelines', 'LLM Fine-tuning', 'HuggingFace', 'Computer Vision', 'NLP', 'NumPy'],
      color: 'tag-magenta',
    },
    {
      name: 'Web Development',
      tags: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'WebSockets', 'Next.js', 'Vite'],
      color: 'tag-cyan',
    },
    {
      name: 'Databases',
      tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis'],
      color: 'tag-green',
    },
    {
      name: 'Tools & DevOps',
      tags: ['Git', 'GitHub', 'Docker', 'VS Code', 'Jupyter', 'Vercel', 'Linux'],
      color: 'tag-yellow',
    },
    {
      name: 'CS Fundamentals',
      tags: ['Data Structures', 'Algorithms', 'OOP', 'Computer Networks', 'Operating Systems'],
      color: 'tag-orange',
    },
  ];

  const filteredCats = filter
    ? cats.map(c => ({
        ...c,
        tags: c.tags.filter(t => t.toLowerCase().includes(filter)),
      })).filter(c => c.tags.length > 0 || c.name.toLowerCase().includes(filter))
    : cats;

  return (
    <div className="output-block">
      <div className="output-block-title">SKILLS</div>
      <div className="skills-table">
        {filteredCats.map((cat) => (
          <div className="skills-row" key={cat.name}>
            <span className="skills-cat">{cat.name}</span>
            <span className="skills-sep">|</span>
            <div className="skills-tags">
              {cat.tags.map(t => (
                <span key={t} className={`tag ${cat.color}`}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Achievements() {
  const items = [
    {
      title: 'SIH \'25 National Finalist',
      sub: 'Smart India Hackathon — represented GECA at the national finals (Dec 2025)',
      color: 'c-yellow',
    },
    {
      title: 'GSSoC \'25 Open Source Contributor',
      sub: 'GirlScript Summer of Code — contributed AI/ML & web features across open-source projects',
      color: 'c-green',
    },
    {
      title: 'Technical Head — C-Cube Coding Club',
      sub: 'GECA — lead team of developers, mentor juniors, organize hackathons & workshops',
      color: 'c-cyan',
    },
    {
      title: 'Full Stack Internship \'26',
      sub: 'Production-grade full-stack development internship',
      color: 'c-blue',
    },
    {
      title: 'IIT Roorkee Research Collaboration',
      sub: 'Built hallucination detection system commissioned for IIT Roorkee research validation',
      color: 'c-magenta',
    },
    {
      title: '6 Production Projects Deployed',
      sub: 'All 6 projects live — ALVANCE, Hallucination Hunter, Sentinel AI, Stockinator, Aloni, Veritron AI',
      color: 'c-orange',
    },
  ];

  return (
    <div className="output-block">
      <div className="output-block-title">ACHIEVEMENTS</div>
      {items.map((a, i) => (
        <div className="ach-entry" key={i}>
          <span className={`ach-bullet ${a.color}`}>▸</span>
          <div>
            <div className={`ach-text ${a.color} c-bold`}>{a.title}</div>
            <div className="ach-sub">{a.sub}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Contact() {
  return (
    <div className="output-block">
      <div className="output-block-title">CONTACT</div>
      <div className="contact-grid">
        <div className="contact-row">
          <span className="contact-key c-dim">email</span>
          <span className="contact-val">
            <a href="mailto:wmangesh91@gmail.com" className="term-link">wmangesh91@gmail.com</a>
          </span>
        </div>
        <div className="contact-row">
          <span className="contact-key c-dim">phone</span>
          <span className="contact-val">
            <a href="tel:+917588676106" className="term-link">+91 7588676106</a>
          </span>
        </div>
        <div className="contact-row">
          <span className="contact-key c-dim">location</span>
          <span className="contact-val c-fg">Chh. Sambhajinagar, Maharashtra, India</span>
        </div>
        <div className="contact-row">
          <span className="contact-key c-dim">handle</span>
          <span className="contact-val c-cyan">{ME.handle}</span>
        </div>
      </div>
    </div>
  );
}

function Socials() {
  const links = [
    { key: 'GitHub',    url: 'https://github.com/mangeshwagh91',        label: 'mangeshwagh91' },
    { key: 'LinkedIn',  url: 'https://linkedin.com/in/mangesh-wagh-',   label: 'mangesh-wagh-' },
    { key: 'DevSpace',  url: 'https://mydevspace.vercel.app',           label: 'mydevspace.vercel.app' },
    { key: 'Email',     url: 'mailto:wmangesh91@gmail.com',             label: 'wmangesh91@gmail.com' },
  ];

  return (
    <div className="output-block">
      <div className="output-block-title">SOCIALS</div>
      <div className="contact-grid">
        {links.map(l => (
          <div className="contact-row" key={l.key}>
            <span className="contact-key c-dim">{l.key.toLowerCase()}</span>
            <a href={l.url} target="_blank" rel="noopener noreferrer" className="term-link">{l.label}</a>
          </div>
        ))}
      </div>
    </div>
  );
}

function HelpOutput() {
  const groups = [
    {
      title: 'profile',
      cmds: [
        ['about',       'who I am'],
        ['whoami',      'the short version'],
        ['experience',  'work history'],
        ['education',   'where I studied'],
        ['skills',      'languages & tools'],
        ['achievements','awards & highlights'],
      ],
    },
    {
      title: 'work',
      cmds: [
        ['projects',    'things I built'],
        ['socials',     'find me online'],
        ['contact',     'how to reach me'],
      ],
    },
    {
      title: 'system',
      cmds: [
        ['theme <name>','switch color theme'],
        ['themes',      'list color themes'],
        ['banner',      'identity card'],
        ['man <cmd>',   'manual for a command'],
        ['clear',       'clear the screen'],
        ['help',        'show this help'],
      ],
    },
    {
      title: 'play',
      cmds: [
        ['snake',       'play snake 🐍'],
        ['htop',        'system monitor'],
        ['coffee',      'essential utility ☕'],
        ['sudo',        'try it'],
      ],
    },
  ];

  return (
    <div className="output-block">
      <div className="output-block-title">HELP</div>
      <div className="c-dim" style={{fontSize:'12px',marginBottom:'10px'}}>
        type a command + ↵ &nbsp;·&nbsp; ⇥ tab menu &nbsp;·&nbsp; ↑↓ history &nbsp;·&nbsp; ^R search &nbsp;·&nbsp; pipe with | grep
      </div>
      {groups.map(g => (
        <div key={g.title} style={{marginBottom:'10px'}}>
          <div className="c-dim" style={{fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',marginBottom:'4px'}}>{g.title}</div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px 24px'}}>
            {g.cmds.map(([cmd, desc]) => (
              <div key={cmd} style={{display:'flex',gap:'8px',padding:'1px 0'}}>
                <span className="c-green c-bold" style={{minWidth:'120px'}}>{cmd}</span>
                <span className="c-dim">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="c-dim" style={{fontSize:'11px',marginTop:'8px'}}>
        try: <span className="c-fg">`skills | grep python`</span> · <span className="c-fg">`projects | grep ai`</span> · <span className="c-fg">`ls`</span> · <span className="c-fg">`coffee`</span>
      </div>
    </div>
  );
}

function ThemeList({ current, onTheme }) {
  return (
    <div className="output-block">
      <div className="output-block-title">THEMES</div>
      <div className="c-dim" style={{fontSize:'12px',marginBottom:'8px'}}>
        run <span className="c-fg">theme &lt;name&gt;</span> to switch · current: <span className="c-accent">{current}</span>
      </div>
      <div className="theme-list">
        {Object.entries(THEMES).map(([key, t]) => (
          <div className="theme-row" key={key}>
            <span className="theme-indicator">{key === current ? '●' : '○'}</span>
            <span
              className="theme-name"
              onClick={() => onTheme(key)}
              style={key === current ? {color:'var(--accent)'} : {}}
            >
              {t.label}
            </span>
            <div className="theme-swatches">
              {t.swatches.map((s, i) => (
                <div key={i} className="theme-swatch" style={{background:s}} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Ls() {
  return (
    <div className="output-block">
      <div style={{display:'flex',flexWrap:'wrap',gap:'16px'}}>
        {['about','experience','projects','skills','achievements','contact','socials'].map(s => (
          <span key={s} className="c-blue c-bold">{s}/</span>
        ))}
        <span className="c-fg">resume.pdf</span>
        <span className="c-fg">README.md</span>
      </div>
    </div>
  );
}

function Sudo() {
  return (
    <div className="output-block">
      <div className="c-red c-bold">Permission denied.</div>
      <div className="c-dim">This incident will be reported. (just kidding 😄)</div>
    </div>
  );
}

function Coffee() {
  return (
    <div className="output-block">
      <pre className="c-yellow" style={{lineHeight:'1.3'}}>
{`       )  (
      (   ) )
       ) ( (
     _______)_
  .-'---------|
 ( C|/\\/\\/\\/\\/|
  '-./\\/\\/\\/\\/|
    '_________'
     '-------'

  ☕ Brewing ideas...
  ${ME.name} — fueled by coffee.`}
      </pre>
    </div>
  );
}

function HtopOutput() {
  const [cpu] = useState(() => Math.floor(Math.random() * 40 + 15));
  const [mem] = useState(() => Math.floor(Math.random() * 30 + 40));
  const [projects] = useState(6);

  return (
    <div className="output-block">
      <div className="output-block-title">HTOP — MANGESH.OS</div>
      <div className="htop-wrap">
        <div className="htop-header">Mangesh Wagh's System Monitor · PID 2028 · {new Date().toLocaleTimeString()}</div>
        {[
          { label: 'CPU', val: cpu, color: 'var(--green)' },
          { label: 'MEM', val: mem, color: 'var(--blue)' },
          { label: 'Ambition', val: 99, color: 'var(--magenta)' },
          { label: 'Coffee', val: 87, color: 'var(--yellow)' },
        ].map(b => (
          <div className="htop-bar-wrap" key={b.label}>
            <span className="htop-bar-label">{b.label}</span>
            <div className="htop-bar-track">
              <div className="htop-bar-fill" style={{width:`${b.val}%`,background:b.color}} />
            </div>
            <span className="htop-bar-val">{b.val}%</span>
          </div>
        ))}
        <div style={{marginTop:'8px',fontSize:'11px',color:'var(--fg-dim)'}}>
          Projects deployed: <span className="c-green">{projects}</span> &nbsp;|&nbsp;
          Commits this week: <span className="c-cyan">42</span> &nbsp;|&nbsp;
          Coffee cups today: <span className="c-yellow">∞</span>
        </div>
      </div>
    </div>
  );
}

function SnakeGame({ onDone }) {
  const canvasRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const S = 16;
    const W = 28, H = 20;
    canvas.width  = W * S;
    canvas.height = H * S;

    let snake = [{x:10,y:10},{x:9,y:10},{x:8,y:10}];
    let dir = {x:1,y:0};
    let nextDir = {x:1,y:0};
    let food = {x:20,y:10};
    let score = 0;
    let running = true;
    let interval = null;

    function randFood() {
      food = {
        x: Math.floor(Math.random()*(W-2))+1,
        y: Math.floor(Math.random()*(H-2))+1,
      };
    }

    function draw() {
      const bg    = getComputedStyle(canvas).getPropertyValue('--bg2').trim() || '#16161e';
      const green = getComputedStyle(document.documentElement).getPropertyValue('--green').trim() || '#9ece6a';
      const red   = getComputedStyle(document.documentElement).getPropertyValue('--red').trim()   || '#f7768e';
      const dim   = getComputedStyle(document.documentElement).getPropertyValue('--fg-dim').trim() || '#565f89';

      ctx.fillStyle = '#16161e';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = red;
      ctx.beginPath();
      ctx.arc((food.x+0.5)*S, (food.y+0.5)*S, S/2-2, 0, Math.PI*2);
      ctx.fill();

      snake.forEach((seg, i) => {
        ctx.fillStyle = i === 0 ? green : `${green}aa`;
        ctx.fillRect(seg.x*S+1, seg.y*S+1, S-2, S-2);
      });

      ctx.fillStyle = dim;
      ctx.font = '10px monospace';
      ctx.fillText(`score: ${score}`, 4, H*S - 4);
    }

    function step() {
      dir = {...nextDir};
      const head = {x: snake[0].x + dir.x, y: snake[0].y + dir.y};
      if (head.x < 0 || head.x >= W || head.y < 0 || head.y >= H ||
          snake.some(s => s.x === head.x && s.y === head.y)) {
        running = false;
        clearInterval(interval);
        ctx.fillStyle = 'rgba(0,0,0,0.65)';
        ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--red').trim();
        ctx.font = 'bold 16px monospace';
        ctx.textAlign = 'center';
        ctx.fillText('GAME OVER', canvas.width/2, canvas.height/2 - 10);
        ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--fg').trim();
        ctx.font = '12px monospace';
        ctx.fillText(`score: ${score}`, canvas.width/2, canvas.height/2 + 10);
        ctx.textAlign = 'left';
        return;
      }
      snake.unshift(head);
      if (head.x === food.x && head.y === food.y) {
        score++;
        randFood();
      } else {
        snake.pop();
      }
      draw();
    }

    const handleKey = (e) => {
      const map = {
        ArrowUp:    {x:0,y:-1}, ArrowDown:  {x:0,y:1},
        ArrowLeft:  {x:-1,y:0}, ArrowRight: {x:1,y:0},
        w:{x:0,y:-1}, s:{x:0,y:1}, a:{x:-1,y:0}, d:{x:1,y:0},
      };
      const nd = map[e.key];
      if (nd && !(nd.x === -dir.x && nd.y === -dir.y)) {
        nextDir = nd;
        e.preventDefault();
      }
      if (e.key === 'q' || e.key === 'Escape') {
        running = false;
        clearInterval(interval);
        if (onDone) onDone();
      }
    };

    draw();
    interval = setInterval(step, 130);
    window.addEventListener('keydown', handleKey);
    gameRef.current = interval;

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <div className="output-block">
      <div className="output-block-title">SNAKE — press Q or ESC to quit</div>
      <div className="snake-wrap">
        <canvas ref={canvasRef} id="snake-canvas" />
      </div>
      <div className="snake-info">arrow keys / wasd to move · Q to quit</div>
    </div>
  );
}

function NotFound({ cmd }) {
  return (
    <div className="output-block">
      <span className="c-red">bash: {cmd}: command not found</span>
      <span className="c-dim"> — type <span className="c-green">help</span> to see available commands.</span>
    </div>
  );
}

function GrepResult({ content, filter }) {
  const lines = content.split('\n').filter(l => l.toLowerCase().includes(filter.toLowerCase()));
  if (lines.length === 0) return (
    <div className="output-block">
      <span className="c-dim">grep: no match for "{filter}"</span>
    </div>
  );
  return (
    <div className="output-block">
      {lines.map((line, i) => {
        const idx = line.toLowerCase().indexOf(filter.toLowerCase());
        return (
          <div key={i}>
            {line.substring(0, idx)}
            <span className="grep-highlight">{line.substring(idx, idx + filter.length)}</span>
            {line.substring(idx + filter.length)}
          </div>
        );
      })}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   BOOT SEQUENCE
══════════════════════════════════════════════════════════ */

const BOOT_LINES = [
  { ok: true,  msg: `mount /home/mangesh/portfolio` },
  { ok: true,  msg: `load profile · 6 projects · 5 skill groups` },
  { ok: false, msg: `net resume · socials · devspace` },
];

function BootScreen({ onDone }) {
  const [lines, setLines]   = useState([]);
  const [showSkip, setSkip] = useState(false);

  useEffect(() => {
    setLines([<div key="title" className="c-blue c-bold">MW//OS v1.0.0 :: boot sequence</div>]);
    let i = 0;
    const tick = () => {
      if (i < BOOT_LINES.length) {
        const bl = BOOT_LINES[i];
        setLines(prev => [...prev,
          <div key={i} className="boot-line">
            <span className={bl.ok ? 'boot-ok' : 'boot-dimok'}>{bl.ok ? ' ok ' : ' ok '}</span>
            <span className="boot-msg">{bl.msg}</span>
          </div>
        ]);
        i++;
        setTimeout(tick, 420);
      } else {
        setSkip(true);
        setTimeout(onDone, 600);
      }
    };
    setTimeout(tick, 200);

    const skip = () => onDone();
    window.addEventListener('keydown', skip, {once: true});
    return () => window.removeEventListener('keydown', skip);
  }, []);

  return (
    <div style={{padding:'16px',display:'flex',flexDirection:'column',gap:'4px'}}>
      {lines}
      {showSkip && <div className="boot-skip" style={{marginTop:'8px'}}>press any key to skip…</div>}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   COMMAND PROCESSOR
══════════════════════════════════════════════════════════ */

const COMMANDS = [
  'about','whoami','experience','education','projects','skills',
  'achievements','contact','socials','help','theme','themes',
  'banner','clear','ls','snake','htop','sudo','coffee','man',
];

function parseAndRun(rawInput, currentTheme, setTheme) {
  const input = rawInput.trim();
  if (!input) return null;

  // Handle grep pipe: cmd | grep pattern
  const pipeMatch = input.match(/^(\w+)\s*\|\s*grep\s+(.+)$/i);
  if (pipeMatch) {
    const [, cmd, pattern] = pipeMatch;
    let textContent = '';
    // We'll render the piped command first and grep its text
    return { type: 'grep', cmd: cmd.toLowerCase(), pattern: pattern.trim() };
  }

  const parts = input.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1).join(' ');

  switch (cmd) {
    case 'about':       return { type: 'component', el: <About /> };
    case 'whoami':      return { type: 'component', el: <WhoAmI /> };
    case 'experience':  return { type: 'component', el: <Experience /> };
    case 'education':   return { type: 'component', el: <Education /> };
    case 'projects':    return { type: 'component', el: <Projects /> };
    case 'skills':      return { type: 'component', el: <Skills /> };
    case 'achievements':return { type: 'component', el: <Achievements /> };
    case 'contact':     return { type: 'component', el: <Contact /> };
    case 'socials':     return { type: 'component', el: <Socials /> };
    case 'help':        return { type: 'component', el: <HelpOutput /> };
    case 'banner':      return { type: 'component', el: <Banner /> };
    case 'ls':          return { type: 'component', el: <Ls /> };
    case 'sudo':        return { type: 'component', el: <Sudo /> };
    case 'coffee':      return { type: 'component', el: <Coffee /> };
    case 'htop':        return { type: 'component', el: <HtopOutput /> };
    case 'snake':       return { type: 'snake' };
    case 'clear':       return { type: 'clear' };
    case 'themes':      return { type: 'themes' };

    case 'theme': {
      const t = args.toLowerCase().trim();
      if (!t) return { type: 'component', el: <ThemeList current={currentTheme} onTheme={setTheme} /> };
      if (THEMES[t]) {
        setTheme(t);
        return { type: 'component', el:
          <div className="output-block">
            <span className="c-green">theme switched to <span className="c-accent">{t}</span> ✓</span>
          </div>
        };
      }
      return { type: 'component', el:
        <div className="output-block">
          <span className="c-red">theme "{t}" not found.</span>
          <span className="c-dim"> Available: {Object.keys(THEMES).join(', ')}</span>
        </div>
      };
    }

    case 'man': {
      if (!args) return { type: 'component', el:
        <div className="output-block"><span className="c-red">What manual page do you want?</span></div>
      };
      const manCmd = args.toLowerCase();
      const descriptions = {
        about: 'Display personal biography and background.',
        experience: 'Show work history, internships, and roles.',
        projects: 'List all deployed projects with links and tags.',
        skills: 'Show technical skills organized by category.',
        contact: 'Display contact information.',
        theme: 'Switch color theme. Usage: theme <name>',
        snake: 'Launch the classic snake game. Arrow keys to play, Q to quit.',
        htop: 'Display a (very accurate) system resource monitor.',
      };
      const desc = descriptions[manCmd];
      return { type: 'component', el:
        <div className="output-block">
          <div className="output-block-title">MAN — {manCmd.toUpperCase()}</div>
          {desc
            ? <div className="c-fg">{desc}</div>
            : <div className="c-dim">No manual entry for {manCmd}. Try <span className="c-green">help</span>.</div>
          }
        </div>
      };
    }

    default:
      return { type: 'notfound', cmd };
  }
}

/* ══════════════════════════════════════════════════════════
   MAIN TERMINAL COMPONENT
══════════════════════════════════════════════════════════ */

let outputIdCounter = 0;
const nextId = () => ++outputIdCounter;

export default function Terminal() {
  const [theme, setTheme]       = useState('tokyonight');
  const [booted, setBooted]     = useState(false);
  const [entries, setEntries]   = useState([]);   // [{id, cmd, el}]
  const [input, setInput]       = useState('');
  const [history, setHistory]   = useState([]);
  const [histIdx, setHistIdx]   = useState(-1);
  const [snakeActive, setSnake] = useState(false);
  const [clock, setClock]       = useState('');
  const [searching, setSearching] = useState(false);
  const [searchQ, setSearchQ]   = useState('');

  const bodyRef  = useRef(null);
  const inputRef = useRef(null);

  // Live clock
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setClock(now.toLocaleTimeString('en-GB', {hour:'2-digit',minute:'2-digit',second:'2-digit'}));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Scroll to bottom on new entries
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [entries, booted, snakeActive]);

  // Focus input on click anywhere
  const focusInput = useCallback(() => {
    if (inputRef.current && !snakeActive) inputRef.current.focus();
  }, [snakeActive]);

  // After boot, show banner
  const handleBooted = useCallback(() => {
    setBooted(true);
    addEntry(null, <Banner />, '__banner__');
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);

  function addEntry(cmd, el, id) {
    setEntries(prev => [...prev, { id: id || nextId(), cmd, el }]);
  }

  function runCommand(rawInput) {
    const input = rawInput.trim();
    if (!input) return;

    // Add to history
    setHistory(prev => {
      const deduped = prev.filter(h => h !== input);
      return [input, ...deduped].slice(0, 100);
    });
    setHistIdx(-1);

    const result = parseAndRun(input, theme, setTheme);
    if (!result) return;

    if (result.type === 'clear') {
      setEntries([]);
      return;
    }

    if (result.type === 'snake') {
      setSnake(true);
      addEntry(input, null, nextId());
      return;
    }

    if (result.type === 'themes') {
      addEntry(input, <ThemeList current={theme} onTheme={setTheme} />, nextId());
      return;
    }

    if (result.type === 'grep') {
      // Determine what to grep
      const { cmd, pattern } = result;
      let el;
      if (cmd === 'skills') el = <Skills filter={pattern} />;
      else if (cmd === 'projects') el = <Projects filter={pattern} />;
      else el = <GrepResult content={getTextForCmd(cmd)} filter={pattern} />;
      addEntry(rawInput.trim(), el, nextId());
      return;
    }

    if (result.type === 'notfound') {
      addEntry(input, <NotFound cmd={result.cmd} />, nextId());
      return;
    }

    if (result.type === 'component') {
      addEntry(input, result.el, nextId());
    }
  }

  function getTextForCmd(cmd) {
    // Simple text extraction for grep on non-component outputs
    const map = {
      about:       `Mangesh Wagh AI Full-Stack Developer GECA SIH GSSoC hallucination detection C-Cube Coding Club Chh. Sambhajinagar Maharashtra open source GenAI`,
      experience:  `Full Stack Developer Intern 2026 SIH National Finalist Dec 2025 GSSoC 2025 Technical Head C-Cube Coding Club GECA React Node Python FastAPI LangChain`,
      contact:     `wmangesh91@gmail.com 7588676106 Chh. Sambhajinagar Maharashtra GitHub LinkedIn mangeshwagh91 mangesh-wagh-`,
    };
    return map[cmd] || '';
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      const val = input.trim();
      setInput('');
      runCommand(val);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHistIdx(prev => {
        const next = Math.min(prev + 1, history.length - 1);
        setInput(history[next] || '');
        return next;
      });
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHistIdx(prev => {
        const next = Math.max(prev - 1, -1);
        setInput(next === -1 ? '' : (history[next] || ''));
        return next;
      });
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const q = input.trim().toLowerCase();
      if (!q) return;
      const match = COMMANDS.find(c => c.startsWith(q));
      if (match) setInput(match);
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setEntries([]);
    } else if (e.key === 'r' && e.ctrlKey) {
      e.preventDefault();
      setSearching(s => !s);
    }
  }

  const Prompt = () => (
    <div className="terminal-prompt">
      <span className="prompt-user">{ME.user}</span>
      <span className="prompt-at">@</span>
      <span className="prompt-host">{ME.host}</span>
      <span className="prompt-space" />
      <span className="prompt-tilde">~</span>
      <span className="prompt-sep"> </span>
      <span className="prompt-arrow">›</span>
    </div>
  );

  const jumpCmds = ['about','experience','projects','skills','achievements','contact'];

  return (
    <div className="terminal-wrapper" onClick={focusInput}>
      {/* TOP BAR */}
      <div className="terminal-topbar">
        <div className="topbar-left">
          <span className="host">{ME.user}@{ME.host}</span>
          <span className="sep">·</span>
          <span className="path">{ME.path}</span>
        </div>
        <div className="topbar-right">
          <span className="version">{ME.version}</span>
          <span>theme:<span className="theme-label">{theme}</span></span>
          <span className="clock">{clock}</span>
        </div>
      </div>

      {/* BODY */}
      <div className="terminal-body" ref={bodyRef}>
        {!booted ? (
          <BootScreen onDone={handleBooted} />
        ) : (
          <div className="terminal-output">
            {entries.map(entry => (
              <div key={entry.id}>
                {entry.cmd && entry.cmd !== '__banner__' && (
                  <div className="cmd-echo">
                    <span className="prompt-user">{ME.user}</span>
                    <span style={{color:'var(--fg-dim)'}}>@</span>
                    <span className="prompt-host">{ME.host}</span>
                    <span style={{color:'var(--fg-dim)',margin:'0 4px'}}>~</span>
                    <span style={{color:'var(--prompt-arrow)',marginRight:'6px'}}>›</span>
                    <span className="cmd-text">{entry.cmd}</span>
                  </div>
                )}
                {entry.id === entries.find(e => e.cmd === null)?.id && snakeActive
                  ? null
                  : entry.el}
              </div>
            ))}

            {/* Snake game renders inline */}
            {snakeActive && (
              <div>
                <div className="cmd-echo">
                  <span className="prompt-user">{ME.user}</span>
                  <span style={{color:'var(--fg-dim)'}}>@</span>
                  <span className="prompt-host">{ME.host}</span>
                  <span style={{color:'var(--fg-dim)',margin:'0 4px'}}>~</span>
                  <span style={{color:'var(--prompt-arrow)',marginRight:'6px'}}>›</span>
                  <span className="cmd-text">snake</span>
                </div>
                <SnakeGame onDone={() => {
                  setSnake(false);
                  setTimeout(() => inputRef.current?.focus(), 100);
                }} />
              </div>
            )}

            {/* INPUT LINE */}
            {!snakeActive && (
              <div className="terminal-input-row">
                <Prompt />
                <input
                  ref={inputRef}
                  className="terminal-input"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck={false}
                  placeholder=""
                  aria-label="terminal input"
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* JUMP BAR */}
      <div className="terminal-jumpbar">
        <span className="jumpbar-label">jump:</span>
        {jumpCmds.map(cmd => (
          <span
            key={cmd}
            className="jump-chip"
            onClick={e => { e.stopPropagation(); setInput(''); runCommand(cmd); }}
          >
            [{cmd}]
          </span>
        ))}
      </div>

      {/* MODE BAR */}
      <div className="terminal-modebar">
        <span className="mode-badge">NORMAL</span>
        <div className="mode-hints">
          <span><span className="key">⇥</span> menu</span>
          <span><span className="key">↑↓</span> history</span>
          <span><span className="key">^R</span> search</span>
          <span><span className="key">|</span> grep</span>
          <span><span className="key">^L</span> clear</span>
        </div>
        <span style={{color:'var(--fg-dim)',fontSize:'11px'}}>cmds:{entries.filter(e=>e.cmd&&e.cmd!=='__banner__').length} &nbsp; type <span style={{color:'var(--fg)'}}>help</span></span>
      </div>
    </div>
  );
}
