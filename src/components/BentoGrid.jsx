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
          <div className='h-8 w-8 rounded-full border border-black/10 flex items-center justify-center'>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'><path d='M7 17l9.2-9.2M17 17V7H7'/></svg>
          </div>
        </div>
        <h1 className='text-swiss text-[8vw] md:text-[6.5vw] font-black uppercase text-[#1A1A1A]'>
          MANGESH <br />
          WAGH <br />
          <span className='text-[4vw] md:text-[3vw] opacity-60 italic normal-case'>BUILDING INTELLIGENT EXPERIENCES</span>
        </h1>
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className='md:col-span-1 md:row-span-4 rounded-4xl overflow-hidden grayscale contrast-125 brightness-90 relative bg-card/10'
      >
        <img 
          src='https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=2000&auto=format&fit=crop' 
          alt='Mangesh Wagh'
          className='h-full w-full object-cover transition-transform duration-1000 hover:scale-110'
        />
        <div className='absolute inset-x-8 bottom-8 text-white font-bold text-2xl uppercase mix-blend-difference'>
          M. WAGH — GECA '28
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className='md:col-span-1 md:row-span-3 bento-card bento-card-beige flex flex-col gap-8'
      >
        <div className='h-[200px] w-full overflow-hidden rounded-2xl grayscale transition-all hover:grayscale-0'>
          <img 
            src='https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop' 
            alt='AI Visual'
            className='h-full w-full object-cover'
          />
        </div>
        
        <div className='space-y-6'>
          {['ALVance', 'SentinelAI', 'Stockinator'].map((project, idx) => (
            <div key={project} className='flex items-center justify-between border-b border-black/10 pb-4 last:border-0 hover:translate-x-4 transition-transform cursor-pointer'>
              <span className='text-3xl font-black uppercase tracking-tighter italic'>0{idx + 1}</span>
              <span className='text-xl font-bold uppercase'>{project}</span>
              <svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='3'><path d='M7 17l9.2-9.2M17 17V7H7'/></svg>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className='md:col-span-2 md:row-span-2 bento-card bento-card-dark flex flex-col justify-between'
      >
        <div className='flex items-center justify-between'>
          <h3 className='text-3xl font-black uppercase text-card'>CONTACT</h3>
          <div className='flex gap-4'>
            {['Gh', 'Li', 'De'].map(s => <span key={s} className='text-sm font-bold opacity-60 hover:opacity-100 transition-opacity cursor-pointer uppercase'>{s}</span>)}
          </div>
        </div>
        <p className='text-xl max-w-[80%] font-medium text-card line-clamp-2 italic opacity-90 uppercase'>WMANGESH91@GMAIL.COM — OPEN FOR COLLABORATIONS.</p>
      </motion.div>

      <motion.div 
        variants={itemVariants} 
        className='md:col-span-1 md:row-span-1 bento-card border border-white/10 flex items-center justify-center p-0'
      >
        <div className='uppercase font-bold text-center'>
           <span className='block text-white/20 text-xs uppercase tracking-widest'>SIH '25</span>
           <span className='text-card'>FINALIST</span>
        </div>
      </motion.div>
    </motion.section>
  );
}