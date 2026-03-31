import { motion } from 'framer-motion';
import { Instagram, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('HOME');

  const renderContent = () => {
    switch (activeTab) {
      case 'HOME':
        return <Home />;
      case 'PROJECTS':
        return <Projects />;
      case 'ABOUT':
        return <About />;
      case 'CONTACT':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] font-sans text-stone-900 selection:bg-[#3E92CC]/20 overflow-x-hidden">
      <div className="scale-[0.8] origin-top-right w-[125%] ml-[-25%] min-h-[125%] p-2 md:p-4">
        {/* Top Navigation Bar */}
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-[1700px] mx-auto mb-8 bg-[#D2C9B6] rounded-[24px] p-6 flex justify-between items-center border-b-2 border-[#4A483F]/20 shadow-lg sticky top-8 z-50 backdrop-blur-md"
        >
          <div className="text-2xl font-bold tracking-tighter uppercase text-[#1A1A1A]">
            HULI XYNPI
          </div>
          <div className="hidden md:flex gap-10 text-[14px] font-bold tracking-[0.1em] uppercase text-[#1A1A1A]">
            {['HOME', 'PROJECTS', 'ABOUT', 'CONTACT'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`hover:opacity-100 transition-opacity relative group ${activeTab === item ? 'opacity-100 underline decoration-2 underline-offset-8' : 'opacity-40'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </motion.nav>

        <main className="max-w-[1700px] mx-auto min-h-fit">
          <motion.div
             key={activeTab}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, ease: "easeOut" }}
             className="pb-0"
          >
            {renderContent()}
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="max-w-7xl mx-auto mt-0 mb-0 py-1 text-center">
          <div className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">
            DESIGNED BY MANGESH // 2026
          </div>
        </footer>
      </div>
    </div>
  );
}

const Home = () => (
  <div className="flex flex-col gap-4">
    <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-min gap-4">
      {/* The Main Project Showcase (Top-Left Large Card) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.005 }}
        className="md:col-span-8 bg-[#D2C9B6] rounded-[24px] p-8 md:p-12 relative overflow-hidden border-[4px] border-[#3E92CC] shadow-2xl min-h-[500px] flex flex-col justify-center"
      >
        <div className="relative z-10 max-w-2xl text-left">
          <h1 className="text-5xl md:text-[56px] font-bold leading-[1.1] tracking-tighter mb-8 text-[#1A1A1A]">
            Pioneer <br />
            <span className="text-[#3E92CC]">Revolutionizing</span> <br />
            Design with <br /> 
            AI-Enhanced <br />
            Architecture
          </h1>
          <button className="bg-[#1A1A1A] w-fit text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-[#3E92CC] transition-all flex items-center gap-3 group shadow-xl hover:shadow-[#3E92CC]/20">
            See the Revolution <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
          </button>
        </div>
        
        <div className="absolute top-12 right-12 w-64 h-64 opacity-10 rotate-[15deg]">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#1A1A1A] fill-none stroke-[0.2]">
            {[...Array(36)].map((_, i) => (
              <ellipse key={i} cx="50" cy="50" rx="45" ry="10" transform={`rotate(${i * 5} 50 50)`} />
            ))}
          </svg>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="md:col-span-4 bg-[#D2C9B6] rounded-[24px] overflow-hidden relative border border-[#1A1A1A]/5 h-[500px] shadow-xl"
      >
        <img 
          src="https://images.unsplash.com/photo-1540567705191-4df163d81b3f?q=80&w=2070&auto=format&fit=crop" 
          alt="Huli Xynpi"
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
        />
        <div className="absolute bottom-10 left-10 bg-black/40 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10 text-white text-[14px] font-bold tracking-[0.2em] uppercase z-20">
          PORTRAIT
        </div>
      </motion.div>
    </div>

    {/* Secondary Section to encourage scrolling */}
    <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-min gap-4">
      {/* The Contact and "About Me" Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        whileHover={{ scale: 1.005 }}
        className="md:col-span-6 bg-[#4A483F] rounded-[24px] p-12 flex flex-col justify-between text-[#F5F5F0] shadow-2xl min-h-[400px]"
      >
        <div>
          <span className="text-[#3E92CC] font-bold text-[16px] tracking-[0.2em] uppercase block mb-8">Have a Question??</span>
          <h2 className="text-6xl md:text-[60px] font-bold tracking-tighter uppercase text-white/95 leading-none">
            Let's <br /> Connect
          </h2>
        </div>
        
        <div className="flex justify-between items-end">
           <button className="w-24 h-24 bg-[#D2C9B6] text-[#1A1A1A] rounded-full flex items-center justify-center hover:bg-[#3E92CC] hover:text-white transition-all group shadow-2xl">
              <ArrowUpRight className="w-10 h-10 group-hover:rotate-45 transition-transform" />
           </button>
           <div className="flex flex-col gap-4 text-right">
              {['INSTAGRAM', 'TWITTER', 'LINKEDIN'].map(social => (
                <a key={social} href="#" className="text-[14px] font-bold tracking-[0.3em] opacity-40 hover:opacity-100 transition-all hover:text-[#3E92CC]">{social}</a>
              ))}
           </div>
        </div>
      </motion.div>

      {/* The Middle Bio Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="md:col-span-6 bg-[#D2C9B6] rounded-[24px] p-16 flex flex-col justify-center items-center shadow-xl text-center relative overflow-hidden"
      >
        <div className="relative z-10">
          <p className="text-2xl md:text-3xl leading-snug text-[#1A1A1A]/90 font-medium italic mb-10 max-w-md">
            "We craft personalized digital and architectural soundtracks for the modern world."
          </p>
          <div className="h-[3px] w-24 bg-[#3E92CC] mx-auto"></div>
        </div>
        {/* Background Decorative Text */}
        <div className="absolute -bottom-10 -right-10 text-[180px] font-black opacity-[0.03] pointer-events-none uppercase tracking-tighter">
          BIO
        </div>
      </motion.div>
    </div>
  </div>
);
const Projects = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
    {[
      { title: 'ACKINO', category: 'Architecture', img: 'https://images.unsplash.com/photo-1540567705191-4df163d81b3f' },
      { title: 'MANUS', category: 'Robotics', img: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9' },
      { title: 'XZPIU', category: 'Digital Art', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f' },
      { title: 'QUATRZ', category: 'Product Design', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa' },
      { title: 'PTROBO', category: 'Automotive', img: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7' },
      { title: 'VIXEN', category: 'Fashion', img: 'https://images.unsplash.com/photo-1539109132332-3cf0889f81cc' }
    ].map((project, i) => (
      <motion.div
        key={i}
        whileHover={{ y: -10 }}
        className="bg-[#D2C9B6] rounded-[24px] overflow-hidden group shadow-lg"
      >
        <div className="h-[400px] overflow-hidden relative">
          <img src={project.img} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
          <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md px-4 py-2 rounded-xl text-white text-[12px] font-bold uppercase tracking-widest">{project.category}</div>
        </div>
        <div className="p-8 flex justify-between items-center bg-[#D2C9B6]">
          <h3 className="text-2xl font-bold tracking-tighter uppercase">{project.title}</h3>
          <ArrowUpRight className="w-6 h-6 group-hover:text-[#3E92CC] transition-colors" />
        </div>
      </motion.div>
    ))}
  </div>
);

const About = () => (
  <div className="flex flex-col gap-24">
    <motion.div className="bg-[#D2C9B6] rounded-[24px] p-16 shadow-2xl relative overflow-hidden">
      <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-12 leading-none relative z-10">
        Multi-Disciplinary <br /><span className="text-[#3E92CC]">Creative Lab</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-16 relative z-10">
        <p className="text-xl md:text-2xl leading-relaxed text-[#1A1A1A]/80 font-medium">
          HULI XYNPI is a design powerhouse founded on the intersection of biological patterns and machine intelligence. Based at the edge of the digital frontier, we craft environments that breathe and objects that think.
        </p>
        <div className="space-y-8">
          {['Global Architectural Awards 2024', 'AI Design Innovation Prize', 'Sustainable Future Medal'].map(item => (
            <div key={item} className="flex items-center gap-6 border-b border-[#1A1A1A]/10 pb-4">
              <div className="w-3 h-3 bg-[#3E92CC] rounded-full"></div>
              <span className="text-lg font-bold uppercase tracking-tight">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>
);

const Contact = () => (
  <div className="bg-[#4A483F] rounded-[24px] p-16 md:p-24 shadow-2xl min-h-[700px] flex flex-col justify-center relative overflow-hidden">
    <div className="max-w-4xl mx-auto w-full relative z-10">
      <h2 className="text-7xl md:text-9xl font-black tracking-tighter uppercase text-white mb-20 leading-none">
        Let's <br /> Create <br /> <span className="text-[#3E92CC]">Together</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-20">
        <div className="space-y-12">
          <div className="space-y-2">
             <label className="text-[14px] font-bold text-white/40 uppercase tracking-widest">Email us at</label>
             <div className="text-2xl md:text-4xl font-bold text-white border-b-4 border-[#3E92CC] pb-2 w-fit">hello@hulixynpi.lab</div>
          </div>
          <div className="flex gap-8">
             {['IG', 'TW', 'LI'].map(s => (
               <a key={s} href="#" className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-white font-bold hover:bg-[#3E92CC] hover:border-[#3E92CC] transition-all">{s}</a>
             ))}
          </div>
        </div>
        <form className="space-y-8">
          <input type="text" placeholder="YOUR NAME" className="w-full bg-transparent border-b-2 border-white/10 p-4 text-white font-bold uppercase tracking-widest placeholder:text-white/20 focus:border-[#3E92CC] outline-none transition-all" />
          <input type="email" placeholder="YOUR EMAIL" className="w-full bg-transparent border-b-2 border-white/10 p-4 text-white font-bold uppercase tracking-widest placeholder:text-white/20 focus:border-[#3E92CC] outline-none transition-all" />
          <button className="bg-white text-[#1A1A1A] px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] hover:bg-[#3E92CC] hover:text-white transition-all shadow-2xl">Send Inquiry</button>
        </form>
      </div>
    </div>
  </div>
);
