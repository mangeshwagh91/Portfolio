import Navbar from './components/Navbar';
import BentoGrid from './components/BentoGrid';
import GrainyNoise from './components/GrainyNoise';
import ProjectShowcase from './components/ProjectShowcase';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import FluidCursor from './components/FluidCursor';

function App() {
  return (
    <main className='bg-[#1A1A1A] min-h-screen text-[#D2C9B1] relative selection:bg-card selection:text-background'>
      <GrainyNoise />
      <FluidCursor />
      <Navbar />
      
      <div className='flex flex-col'>
        <BentoGrid />
        <ProjectShowcase />
        <Skills />
        <About />
        <Contact />
      </div>

      <footer className='container mx-auto p-12 text-center border-t border-white/5'>
         <p className='font-bold text-xs tracking-[0.5em] text-white/20 uppercase'>
            DESIGNED FOR THE FUTURE - ARX © 2026
         </p>
      </footer>
    </main>
  );
}

export default App;