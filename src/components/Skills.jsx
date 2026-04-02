import { motion } from 'framer-motion';

const skills = {
  'AI / ML / GEN-AI': ['Python', 'PyTorch', 'TensorFlow', 'LangChain', 'RAG Pipelines', 'LLM Fine-tuning', 'Computer Vision', 'NLP'],
  'WEB DEVELOPMENT': ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'PostgreSQL', 'MongoDB', 'WebSockets', 'REST APIs'],
  'LANGUAGES & TOOLS': ['C', 'C++', 'Python', 'JavaScript', 'Git', 'GitHub', 'VS Code', 'Jupyter']
};

export default function Skills() {
  return (
    <section id='skills' className='container mx-auto px-6 py-24 border-t border-white/5'>
      <div className='flex flex-col md:flex-row justify-between gap-12'>
        <div className='md:w-1/3'>
           <h2 className='text-swiss text-6xl md:text-8xl text-card uppercase mb-8'>SKILLS</h2>
           <p className='text-xl italic max-w-sm text-card/60 uppercase'>
             Crafting intelligent systems through statistical rigour and modern web architecture.
           </p>
        </div>
        
        <div className='md:w-2/3 grid grid-cols-1 md:grid-cols-1 gap-12'>
          {Object.entries(skills).map(([category, items], idx) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className='space-y-6'
            >
              <h3 className='text-xs font-black tracking-[0.3em] text-white/40 uppercase border-b border-white/10 pb-4'>
                {category}
              </h3>
              <div className='flex flex-wrap gap-x-8 gap-y-4'>
                {items.map(skill => (
                  <span key={skill} className='text-2xl md:text-4xl font-bold text-card hover:italic transition-all cursor-default uppercase'>
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}