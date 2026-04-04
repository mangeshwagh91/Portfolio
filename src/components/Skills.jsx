import { motion } from 'framer-motion';

const skills = {
  'AI / ML / GEN-AI': ['Python', 'PyTorch', 'TensorFlow', 'LangChain', 'RAG Pipelines', 'LLM Fine-tuning', 'Computer Vision', 'NLP'],
  'WEB DEVELOPMENT': ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'WebSockets', 'REST APIs'],
  'LANGUAGES & TOOLS': ['C', 'C++', 'Python', 'JavaScript', 'Git', 'GitHub', 'VS Code', 'Jupyter']
};

const SkillItem = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ 
      duration: 1.2, 
      delay: index * 0.05,
      ease: [0.76, 0, 0.24, 1]
    }}
    viewport={{ once: true, margin: "-100px" }}
    className='group relative py-4 border-b border-white/5 cursor-default'
  >
    <div className='flex items-center justify-between'>
      <div className='flex items-baseline gap-6'>
        <span className='text-xs font-mono text-card/30'>{(index + 1).toString().padStart(2, '0')}</span>
        <h4 className='text-3xl md:text-5xl font-bold text-card/80 group-hover:text-card group-hover:italic transition-all duration-500 uppercase tracking-tighter'>
          {skill}
        </h4>
      </div>
      <div className='h-2 w-2 rounded-full bg-card/20 group-hover:bg-card transition-colors duration-500' />
    </div>
    <div className='absolute bottom-0 left-0 h-[1px] w-0 bg-card group-hover:w-full transition-all duration-700 ease-in-out' />
  </motion.div>
);

export default function Skills() {
  return (
    <section id='skills' className='container max-w-7xl mx-auto px-6 py-32 border-t border-white/5'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-16'>
        <div className='lg:col-span-4 sticky top-32 h-fit'>
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1 }}
             viewport={{ once: true }}
           >
             <h2 className='text-swiss text-6xl md:text-[7vw] lg:text-8xl text-card uppercase leading-[0.8] mb-12'>
               SKILLS <br />
               <span className='italic text-card/20 tracking-tighter text-[0.8em] font-light'>EXPERTISE</span>
             </h2>
             <div className='space-y-6 border-l border-white/10 pl-6 py-4'>
               <p className='text-lg text-card/60 uppercase tracking-tight leading-relaxed'>
                 Crafting intelligent systems through statistical rigour and modern web architecture.
               </p>
               <div className='flex gap-2 items-center text-xs font-black tracking-widest text-card/40'>
                 <span className='h-1.5 w-1.5 rounded-full bg-green-500/50 animate-pulse' />
                 ALWAYS LEARNING
               </div>
             </div>
           </motion.div>
        </div>
        
        <div className='lg:col-span-8 flex flex-col gap-24'>
          {Object.entries(skills).map(([category, items], catIdx) => (
            <div key={category} className='space-y-8'>
              <div className='flex items-end justify-between border-b border-white/10 pb-4'>
                <h3 className='text-xs font-black tracking-[0.4em] text-white/30 uppercase'>
                  {category}
                </h3>
                <span className='text-[10px] font-mono text-white/20 uppercase'>
                  {items.length} Techs
                </span>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-1'>
                {items.map((skill, skillIdx) => (
                  <SkillItem key={skill} skill={skill} index={skillIdx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}