import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: 'ALVANCE',
    category: 'AI LCA TOOL',
    image: '/assets/projects/ALvance.png',
    year: '2024',
    desc: 'Automates ISO-compliant Lifecycle Analysis and circularity assessment for the metals sector.',
    link: 'https://alvance.vercel.app'
  },
  {
    title: 'HALLUCINATION HUNTER',
    category: 'LLM AUDITOR',
    image: '/assets/projects/Hallucination_Hunter.png',
    year: '2025',
    desc: 'Full-stack hallucination detection system with claim-level validation and citation grounding.',
    link: 'https://hallucination-sol.vercel.app'
  },
  {
    title: 'SENTINEL AI',
    category: 'CV SURVEILLANCE',
    image: '/assets/projects/SentinelAI.png',
    year: '2025',
    desc: 'Multi-camera monitoring system with live stream processing via WebSockets and YOLO detection.',
    link: 'https://sentinel-ai-puce.vercel.app'
  },
  {
    title: 'STOCKINATOR',
    category: 'ML TRADING',
    image: '/assets/projects/Stockinator.png',
    year: '2024',
    desc: 'Autonomous trading system combining technical indicators, sentiment analysis, and ML signals.',
    link: 'https://stockinator-five.vercel.app'
  },
  {
    title: 'ALONI',
    category: 'WEB3 REPUTATION',
    image: '/assets/projects/Aloni.png',
    year: '2025',
    desc: 'Decentralized reputation system converting real work into a verifiable credibility score.',
    link: 'https://aloni-dev.vercel.app'
  },
  {
    title: 'VERITRON AI',
    category: 'FAKE NEWS DETECTOR',
    image: '/assets/projects/VeritronAiI.png',
    year: '2026',
    desc: 'ML-based system to classify news authenticity with emphasis on accuracy and ethical AI.',
    link: 'https://veritron-ai.vercel.app'
  }
];

export default function ProjectShowcase() {
  return (
    <section id='projects' className='container max-w-[90rem] mx-auto px-6 py-24 flex flex-col gap-24 border-t border-white/5'>
      <div className='flex justify-between items-end'>
        <h2 className='text-swiss text-5xl md:text-[8vw] text-card uppercase leading-[0.8]'>
          PROJECTS <br />
          PORTFOLIO <span className='italic text-card/20'>'24-'26</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
        {projects.map((project, idx) => (
          <motion.a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className='group cursor-pointer block'
          >
            <div className='aspect-[16/10] w-full mb-8 overflow-hidden rounded-4xl bg-card/10 border border-white/5 relative'>
               <motion.img 
                  variants={{
                    hover: { scale: 1.15, filter: "grayscale(0%)" }
                  }}
                  whileHover="hover"
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  src={project.image} 
                  alt={project.title}
                  className='h-full w-full object-cover grayscale transition-all'
               />
            </div>
            <div className='flex flex-col gap-2'>
               <div className='flex justify-between items-center text-xs font-black tracking-widest text-card/60 uppercase'>
                  <span>{project.category}</span>
                  <span>{project.year}</span>
               </div>
               <h3 className='text-4xl font-extrabold text-card uppercase tracking-tighter hover:italic transition-all flex items-center gap-2'>
                 {project.title}
                 <span className='text-xl opacity-0 group-hover:opacity-100 transition-opacity'>↗</span>
               </h3>
               <p className='text-sm text-card/40 font-medium uppercase mt-2'>{project.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}