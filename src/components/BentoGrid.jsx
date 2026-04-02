import { motion } from 'framer-motion';

export default function BentoGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1,
        ease: [0.76, 0, 0.24, 1],
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      className='container mx-auto grid min-h-screen grid-cols-1 md:grid-cols-4 md:grid-rows-6 gap-6 p-6 pt-32'
    >
      <motion.div 
        variants={itemVariants}
        className='md:col-span-3 md:row-span-3 bento-card bento-card-beige flex flex-col justify-between'
      >
        <div className='flex justify-between items-start'>
          <p className='text-sm font-bold uppercase tracking-widest text-[#1A1A1A60]'>AI & FULL-STACK DEVELOPER</p>
          <div className='flex gap-2'>
             <span className='px-3 py-1 bg-black/5 rounded-full text-[10px] font-bold border border-black/5 uppercase tracking-tighter'>GEN-AI ENGINE</span>
             <span className='px-3 py-1 bg-black/5 rounded-full text-[10px] font-bold border border-black/5 uppercase tracking-tighter'>ROBUST ARCH</span>
          </div>
        </div>
        <h1 className='text-swiss text-[9vw] md:text-[7vw] font-black uppercase text-[#1A1A1A] leading-[0.8] tracking-[-0.08em]'>
          MANGESH <br />
          WAGH <br />
          <span className='text-[4vw] md:text-[3.5vw] opacity-40 italic lowercase font-medium tracking-tight'>/ m.wagh@geca.ai /</span>
        </h1>
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className='md:col-span-1 md:row-span-4 rounded-4xl overflow-hidden grayscale contrast-125 brightness-75 relative bg-card/10'
      >
        <img 
          src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop' 
          alt='Mangesh Wagh'
          className='h-full w-full object-cover transition-all duration-1000 hover:scale-110 hover:grayscale-0'
        />
        <div className='absolute inset-x-8 bottom-8 text-white font-bold text-2xl uppercase mix-blend-difference italic'>
          M. WAGH — GECA '28
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className='md:col-span-1 md:row-span-3 bento-card bento-card-beige flex flex-col gap-8'
      >
        <div className='h-[200px] w-full overflow-hidden rounded-2xl grayscale transition-all hover:grayscale-0 relative'>
          <img 
            src='https://images.unsplash.com/photo-1614064641935-3bb7518b2c5f?q=80&w=2070&auto=format&fit=crop' 
            alt='Digital Interface'
            className='h-full w-full object-cover'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-20' />
        </div>
        
        <div className='space-y-6'>
          {['ALVance', 'SentinelAI', 'Stockinator'].map((project, idx) => (
            <div key={project} className='flex items-center justify-between border-b border-black/10 pb-4 last:border-0 hover:italic transition-all cursor-pointer group'>
              <span className='text-3xl font-black uppercase tracking-tighter opacity-20 group-hover:opacity-100'>0{idx + 1}</span>
              <span className='text-xl font-bold uppercase'>{project}</span>
              <div className='h-2 w-2 rounded-full bg-black/20 group-hover:bg-black transition-colors' />
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className='md:col-span-2 md:row-span-2 bento-card bento-card-dark flex flex-col justify-between p-12'
      >
        <div className='flex items-center justify-between'>
          <h3 className='text-3xl font-black uppercase text-card tracking-tighter'>CONNECT</h3>
          <div className='w-12 h-[1px] bg-card/20' />
        </div>
        <p className='text-2xl font-medium text-card line-clamp-2 italic uppercase tracking-tighter'>DESIGNING INTELLIGENT EXPERIENCES FOR THE NEXT WAVE OF DIGITAL ENTROPY.</p>
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className='md:col-span-1 md:row-span-1 bento-card border border-white/10 flex items-center justify-center p-0 backdrop-blur-sm'
      >
        <div className='uppercase font-bold text-center'>
           <span className='block text-white/20 text-[10px] uppercase tracking-[0.5em] mb-1'>STATUS</span>
           <span className='text-card text-lg tracking-widest italic'>ACTIVE</span>
        </div>
      </motion.div>
    </motion.section>
  );
}