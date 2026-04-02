import { motion } from 'framer-motion';

export default function Navbar() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    
    // Use global Lenis instance for smooth programmatic scroll
    if (window.lenis) {
      window.lenis.scrollTo(element, {
        offset: -100,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      // Fallback
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className='fixed top-6 left-1/2 flex h-20 w-[90%] -translate-x-1/2 items-center justify-between rounded-full bg-card/10 px-8 backdrop-blur-xl border border-white/5 z-[60]'>
      <div className='text-2xl font-black text-card tracking-tighter uppercase cursor-pointer' onClick={() => window.lenis?.scrollTo(0)}>ARX</div>
      
      <ul className='flex items-center gap-12 font-medium text-card/60'>
        {['Skills', 'Projects', 'About', 'Contact'].map((item) => (
          <li key={item} className='cursor-pointer transition-colors hover:text-card'>
            <a 
              href={'#' + item.toLowerCase()} 
              onClick={(e) => handleScroll(e, item.toLowerCase())}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => handleScroll(e, 'contact')}
        className='hidden md:block rounded-full bg-card px-6 py-3 text-sm font-bold text-background uppercase'
      >
        LET'S TALK
      </motion.button>
    </nav>
  );
}