import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ALVANCE',
    category: 'AI LCA TOOL',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    year: '2024',
    desc: 'ISO-compliant Lifecycle Analysis and circularity assessment automated with ML.'
  },
  {
    title: 'HALLUCINATION HUNTER',
    category: 'LLM AUDITOR',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4628c9757?q=80&w=2070&auto=format&fit=crop',
    year: '2025',
    desc: 'Full-stack claim validation system with citation grounding and evaluation dashboards.'
  },
  {
    title: 'SENTINEL AI',
    category: 'CV SURVEILLANCE',
    image: 'https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&w=1965&auto=format&fit=crop',
    year: '2025',
    desc: 'Multi-camera monitoring with WebSockets and YOLO v26 threat detection.'
  },
  {
    title: 'STOCKINATOR',
    category: 'ML TRADING',
    image: 'https://images.unsplash.com/photo-1611974717535-7c8576d8b031?q=80&w=2070&auto=format&fit=crop',
    year: '2024',
    desc: 'Autonomous multi-agent platform combining sentiment analysis and ML signals.'
  }
];

export default function ProjectShowcase() {
  return (
    <section id='projects' className='container mx-auto px-6 py-24 flex flex-col gap-24 border-t border-white/5'>
      <div className='flex justify-between items-end'>
        <h2 className='text-swiss text-5xl md:text-[8vw] text-card uppercase leading-[0.8]'>
          PROJECTS <br />
          PORTFOLIO <span className='italic italic text-card/20'>'24-'26</span>
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {projects.map((project, idx) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className='group cursor-pointer'
          >
            <div className='h-[400px] w-full mb-8 overflow-hidden rounded-4xl bg-card/5 border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-1000'>
               <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: 'circOut' }}
                  src={project.image} 
                  alt={project.title}
                  className='h-full w-full object-cover brightness-75 group-hover:brightness-100'
               />
            </div>
            <div className='flex flex-col gap-2'>
               <div className='flex justify-between items-center text-xs font-black tracking-widest text-card/60 uppercase'>
                  <span>{project.category}</span>
                  <span>{project.year}</span>
               </div>
               <h3 className='text-4xl font-extrabold text-card uppercase tracking-tighter hover:italic transition-all'>
                 {project.title}
               </h3>
               <p className='text-sm text-card/40 font-medium uppercase mt-2'>{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}