import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id='about' className='container mx-auto px-6 py-24 border-t border-white/5 bg-[#1A1A1A]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24'>
        <div className='flex flex-col justify-between h-full'>
           <h2 className='text-swiss text-5xl md:text-[6vw] text-card uppercase leading-[0.85] mb-12'>
             INTELLIGENT <br />
             SYSTEMS <br />
             <span className='italic italic text-card/40'>ROBUST</span> <br />
             CODE
           </h2>
        </div>

        <div className='flex flex-col gap-12 justify-center'>
           <motion.p 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 1, delay: 0.2 }}
             viewport={{ once: true }}
             className='text-2xl md:text-3xl font-medium leading-relaxed italic text-card uppercase'
           >
             'I AM A MULTIDISCIPLINARY DEVELOPER FOCUSED ON THE INTERSECTION OF PREDICTIVE ML AND SCALABLE WEB INFRASTRUCTURE.'
           </motion.p>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base text-card/60 leading-relaxed font-bold uppercase'>
              <p>
                From building hallucination detection systems for IIT Roorkee to representing GECA at SIH '25 National Finals, I consistently push the boundaries of GenAI integration.
              </p>
              <p>
                As the Technical Head of the C-Cube Coding Club, I lead a team of developers focused on modern open-source contribution and rigorous algorithmic design.
              </p>
           </div>
           
           <div className='flex flex-wrap gap-x-24 gap-y-12 pt-12'>
              <div>
                 <p className='text-xs font-black tracking-widest text-white/20 uppercase mb-4'>EXPERIENCE</p>
                 <ul className='text-sm font-bold text-card space-y-2 uppercase'>
                    <li>FULL STACK INTERN '26</li>
                    <li>SIH '25 NATIONAL FINALIST</li>
                    <li>GSSOC '25 CONTRIBUTOR</li>
                 </ul>
              </div>
              <div>
                 <p className='text-xs font-black tracking-widest text-white/20 uppercase mb-4'>STATUS</p>
                 <p className='text-sm font-bold text-card uppercase'>CHH. SAMBHAJINAGAR, MH</p>
                 <p className='text-sm font-bold text-card opacity-60 italic mt-2 uppercase'>COMMITTED TO THE FUTURE OF AI.</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}