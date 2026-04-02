import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id='contact' className='container mx-auto px-6 py-24 mb-24 flex flex-col items-center justify-center min-h-[80vh] bg-[#1A1A1A]'>
      <div className='text-center space-y-12'>
        <h2 className='text-swiss text-6xl md:text-[14vw] text-card uppercase leading-[0.8] tracking-tighter hover:italic transition-all duration-1000'>
          GET IN <br />
          TOUCH
        </h2>
        <div className='flex flex-col md:flex-row items-center justify-center gap-12 pt-12'>
          <motion.a 
            href='mailto:wmangesh91@gmail.com'
            whileHover={{ scale: 1.1, rotate: -2 }}
            className='text-3xl md:text-5xl font-black text-white hover:text-card transition-colors italic border-b-4 border-card uppercase'
          >
            WMANGESH91@GMAIL.COM
          </motion.a>
        </div>
        
        <div className='flex flex-wrap justify-center gap-x-12 gap-y-6 pt-12'>
           {[
             { name: 'GITHUB', url: 'https://github.com/mangeshwagh91' },
             { name: 'LINKEDIN', url: 'https://linkedin.com/in/mangesh-wagh-' },
             { name: 'DEVSPACE', url: 'https://mydevspace.vercel.app' },
             { name: '7588676106', url: 'tel:+917588676106' }
           ].map(platform => (
             <motion.a 
               key={platform.name}
               href={platform.url}
               target='_blank'
               whileHover={{ y: -5 }}
               className='text-xs font-black tracking-widest text-[#D2C9B160] hover:text-card transition-colors uppercase'
             >
               {platform.name}
             </motion.a>
           ))}
        </div>

        <div className='pt-24 max-w-lg mx-auto'>
           <form className='flex flex-col gap-6 text-left'>
              <input type='text' placeholder='NAME' className='bg-transparent border-b border-[#D2C9B140] py-4 font-bold text-card uppercase px-2 focus:outline-none focus:border-card transition-colors placeholder:text-[#D2C9B120]' />
              <input type='email' placeholder='EMAIL' className='bg-transparent border-b border-[#D2C9B140] py-4 font-bold text-card uppercase px-2 focus:outline-none focus:border-card transition-colors placeholder:text-[#D2C9B120]' />
              <button className='bg-card text-background py-6 mt-8 rounded-full font-black text-xl hover:bg-white transition-all uppercase px-12'>
                 SEND INQUIRY
              </button>
           </form>
        </div>
      </div>
    </section>
  );
}