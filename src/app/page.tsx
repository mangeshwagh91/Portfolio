'use client';

import FluidCursor from '@/components/FluidCursor';
import { Button } from '@/components/ui/button';
import WelcomeModal from '@/components/welcome-modal';
import { motion } from 'framer-motion';
import img from '@/img/921002.png';
import html from '@/img/html-1.png';
import css from '@/img/css.svg';
import js from '@/img/javascript_edit-removebg-preview.png';
import taiwind from '@/img/Tailwind_CSS_Logo.svg.png';
import react from '@/img/React-icon.svg.png';
import node from '@/img/Node.js_logo.svg.png';
import mysql from '@/img/mysql.png';
import git from '@/img/github.png';
import bootstrap from '@/img/Bootstrap_logo.svg.png';
import figma from '@/img/figma-logo-512.webp';
import docker from '@/img/docker.png';
import kubernets from '@/img/kubernates.png';
import Typewriter from '@/components/typewriter/typewriter';

import {
  ArrowRight,
  BriefcaseBusiness,
  Laugh,
  Layers,
  PartyPopper,
  UserRoundSearch,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { link } from 'fs';

<link rel="stylesheet" href="page.css" />

/* ---------- quick-question data ---------- */
const questions = {
  Me: 'Who are you? I want to know more about you.',
  Projects: 'What are your projects? What are you working on right now?',
  Skills: 'What are your skills? Give me a list of your soft and hard skills.',
  Fun: 'What’s the craziest thing you’ve ever done? What are your hobbies?',
  Contact: 'How can I contact you?',
} as const;

const questionConfig = [
  { key: 'Me', color: '#329696', icon: Laugh },
  { key: 'Projects', color: '#3E9858', icon: BriefcaseBusiness },
  { key: 'Skills', color: '#856ED9', icon: Layers },
  { key: 'Fun', color: '#B95F9D', icon: PartyPopper },
  { key: 'Contact', color: '#C19433', icon: UserRoundSearch },
] as const;

/* ---------- component ---------- */
export default function Home() {
  const [input, setInput] = useState('');
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const goToChat = (query: string) =>
    router.push(`/chat?query=${encodeURIComponent(query)}`);



  /* hero animations (unchanged) */
  const topElementVariants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8 },
    },
  };
  const bottomElementVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'ease', duration: 0.8, delay: 0.2 },
    },
  };

  useEffect(() => {
    // Précharger les assets du chat en arrière-plan
    const img = new window.Image();
    img.src = '';

    // Précharger les vidéos aussi
    const linkWebm = document.createElement('link');
    linkWebm.rel = 'preload'; // Note: prefetch au lieu de preload
    linkWebm.as = 'video';
    linkWebm.href = '/final_memojis.webm';
    document.head.appendChild(linkWebm);

    const linkMp4 = document.createElement('link');
    linkMp4.rel = 'prefetch';
    linkMp4.as = 'video';
    linkMp4.href = '/final_memojis_ios.mp4';
    document.head.appendChild(linkMp4);
  }, []);




  return (
    <div className="relative flex min flex-col px-4 pb-10 md:pb-20">

      {/* big blurred footer word */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden">
        <div
          className="hidden bg-gradient-to-b from-neutral-500/20 to-neutral-500/0 bg-clip-text text-[10rem] leading-none font-black text-transparent select-none sm:block lg:text-[18rem]"
          style={{ marginBottom: '-2.5rem' }}
        >
          Mangesh
        </div>
      </div>



      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/60 dark:bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center  h-16">
            <div className="flex-shrink-0 text-xl font-bold text-black hover:cursor-pointer">
              <a href="#">
                MyPortfolio
              </a>
            </div>
            <div className="hidden md:flex space-x-6 justify-between align-middle text-black font-medium ml-180  ">
              <a href="#" className="hover:bg-black hover:text-white transition duration-300 ease-in-out m-10 px-4 py-2 rounded-full">Home</a>
              <a href="#" className="hover:bg-black hover:text-white transition duration-300 ease-in-out m-10 px-4 py-2 rounded-full">About</a>
              <a href="#" className="hover:bg-black hover:text-white transition duration-300 ease-in-out m-10 px-4 py-2 rounded-full">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      <FluidCursor />

      <div className="hero-sec flex justify-start align-middle ">
        <div className="hero-sec-left relative top-35 left-30 bg-white/60 dark:bg-black/50 backdrop-blur-xl w-160 h-70 p-5 mr-50 rounded-4xl hover:scale-102 transform transition-transform duration-300">
          <div className="intro text-5xl font-extrabold text-black drop-shadow-[0_2px_6px_rgba(255,255,255,0.9)]">
            I'm Mangesh
          </div>

          {/* TYPEWRITER */}

          <div className="text-3xl font-semibold text-black mt-2 mb-2">
            I am <span id="typewriter"></span>
          </div>

          <Typewriter
            elementId="typewriter"
            texts={["a web developer.", "a Full-stack devloper.", "a dedicated Learner."]}
            typingSpeed={70}
            erasingSpeed={30}
            delayBetweenTexts={1100}
          />


          <div className="disc">
            I’m a dedicated Computer Science Engineering student with a strong passion for solving
            real-world problems through innovation and creativity. I enjoy working on meaningful projects,
            learning from hands-on experiences, and participating in hackathons to challenge myself.
            My approach blends logical thinking with a desire for impact. I aim to gain valuable experience, grow continuously,
            and eventually lead my own entrepreneurial venture in the future.
          </div>
        </div>
      </div>
      <div className="hero-sec-right rounded-full left-80 h-100% w-90 transform transition-transform duration-300 ">
        <img className='img-sec relative top-15 left-250 h-100% w-80 mt-10 hover:scale-105 transform transition-transform duration-300 bg-white/60 dark:bg-black/50 backdrop-blur-xl flex-col rounded-full pt-5 border-b-gray-950' src={img.src} alt="" />
      </div>

      {/* SKILLS */}

      <div className="skills-sec flex justify-evenly align-middle ">
        <div className="skills relative top-50 left-25 bg-white/5 backdrop-blur-xl w-330 h-130 p-5 mr-50 rounded-4xl hover:scale-101 transform transition-transform duration-300 shadow-2xl mb-50">
          <div className="heading flex justify-center align-middle text-4xl font-bold mb-5">
            My Digital Toolbox
          </div>
          <div className="small-disc ml-20 mr-20 text-center text-gray-600 mb-13 ">
            Based in Chh. Sambhajinagar, India, currently pursuing a B.Tech in Computer Science Engineering
            and set to graduate in 2028. Focused on growing skills in full-stack web development,
            data structures & algorithms, and exploring DevOps tools like Docker and Kubernetes.
          </div>
          <div className="line-1 flex justify-evenly align-middle mt-2 mb-7" >
            <div className="sk-1  bg-white/60 dark:bg-black/50 backdrop-blur-xl w-35 h-35 p-5 pl-10 rounded-2xl hover:scale-115 transform transition-transform duration-300 shadow-2xl  hover:shadow-[0_0_25px_rgba(0,200,255,0.6)] ">
              <picture>
                <img className='html-img h-17 flex justify-center align-middle' src={html.src} alt="" />
              </picture>
              <p className='txt flex align-middle justify-center pr-4 mt-3'>HTML</p>
            </div>

            <div className="sk-1  bg-white/60 dark:bg-black/50 backdrop-blur-xl w-35 h-35 p-5 pl-9  rounded-2xl hover:scale-115 transform transition-transform duration-300 shadow-2xl  hover:shadow-[0_0_25px_rgba(0,200,255,0.6)]">
              <picture>
                <img className='css-img h-17 flex justify-center align-middle ' src={css.src} alt="" />
              </picture>
              <p className='txt flex align-middle justify-center pr-4 mt-3'>CSS</p>
            </div>
            <div className="sk-1 bg-white/60 dark:bg-black/50 backdrop-blur-xl w-35 h-35 p-5 pl-10 rounded-2xl hover:scale-115 transform transition-transform duration-300 shadow-2xl  hover:shadow-[0_0_25px_rgba(0,200,255,0.6)]">
              <picture>
                <img className='js-img h-17 flex justify-center align-middle' src={js.src} alt="" />
              </picture>
              <p className='txt flex align-middle justify-center pr-4 mt-3'>JAVASCRIPT</p>
            </div>
            <div className="sk-1  bg-white/60 dark:bg-black/50 backdrop-blur-xl w-35 h-35 p-7 pl-6 rounded-2xl hover:scale-115 transform transition-transform duration-300 shadow-2xl  hover:shadow-[0_0_25px_rgba(0,200,255,0.6)]">
              <picture>
                <img className='tailwind-img h-14 flex justify-center align-middle' src={taiwind.src} alt="" />
              </picture>
              <p className='txt flex align-middle justify-center mt-4'>TAILWINDCSS</p>
            </div>
            <div className="sk-1  bg-white/60 dark:bg-black/50 backdrop-blur-xl w-35 h-35 p-5 pl-9 pt-7 rounded-2xl hover:scale-115 transform transition-transform duration-300 shadow-2xl  hover:shadow-[0_0_25px_rgba(0,200,255,0.6)]">
              <picture>
                <img className='react-img h-15 flex justify-center align-middle' src={react.src} alt="" />
              </picture>
              <p className='txt flex align-middle justify-center mt-3  pr-4'>REACT JS</p>
            </div>
            <div className="sk-1  bg-white/60 dark:bg-black/50 backdrop-blur-xl w-35 h-35 p-5 pl-8 pt-10 rounded-2xl hover:scale-115 transform transition-transform duration-300 shadow-2xl  hover:shadow-[0_0_25px_rgba(0,200,255,0.6)]">
              <picture>
                <img className='node-img h-12 flex justify-center align-middle' src={node.src} alt="" />
              </picture>
              <p className='txt flex align-middle justify-center mt-3 pr-3'>NODE JS</p>
            </div>
          </div>

          <div className="line-2 flex justify-evenly align-middle mt-4 mb-5">

            <div className="sk-1  bg-white/60 dark:bg-black/50 backdrop-blur-xl w-35 h-35 p-5 pt-6 rounded-2xl hover:scale-115 transform transition-transform duration-300 shadow-2xl  hover:shadow-[0_0_25px_rgba(0,200,255,0.6)]">
              <picture>
                <img className='mysql-img h-14 flex justify-center align-middle' src={mysql.src} alt="" />
              </picture>
              <p className='txt flex align-middle justify-center mt-5.5'>MYSQL</p>
            </div>
            <div className="sk-1  bg-white/60 dark:bg-black/50 backdrop-blur-xl w-35 h-35 p-8 pl-10.5 rounded-2xl hover:scale-115 transform transition-transform duration-300 shadow-2xl  hover:shadow-[0_0_25px_rgba(0,200,255,0.6)]">
              <picture>
                <img className='git-img h-14 flex justify-center align-middle' src={git.src} alt="" />
              </picture>
              <p className='txt flex align-middle justify-center mt-4 pr-2'>GITHUB</p>
            </div>
            <div className="sk-1  bg-white/60 dark:bg-black/50 backdrop-blur-xl w-35 h-35 p-6 pl-10 pt-9 rounded-2xl hover:scale-115 transform transition-transform duration-300 shadow-2xl  hover:shadow-[0_0_25px_rgba(0,200,255,0.6)]">
              <picture>
                <img className='docker-img h-13 flex justify-center align-middle' src={docker.src} alt="" />
              </picture>
              <p className='txt flex align-midle justify-center mt-4 pr-3'>DOCKER</p>
            </div>
            <div className="sk-1  bg-white/60 dark:bg-black/50 backdrop-blur-xl w-35 h-35 p-8 pl-10 rounded-2xl hover:scale-115 transform transition-transform duration-300 shadow-2xl  hover:shadow-[0_0_25px_rgba(0,200,255,0.6)]">
              <picture>
                <img className='kubernet-img h-15 flex justify-center align-middle' src={kubernets.src} alt="" />
              </picture>
              <p className='txt flex align-midle justify-center mt-3'>KUBERNETES</p>
            </div>
            <div className="sk-1  bg-white/60 dark:bg-black/50 backdrop-blur-xl w-35 h-35 p-8 pl-8.5 pt-9 rounded-2xl hover:scale-115 transform transition-transform duration-300 shadow-2xl  hover:shadow-[0_0_25px_rgba(0,200,255,0.6)]">
              <picture>
                <img className='bootstrap-img h-14 flex justify-center align-middle' src={bootstrap.src} alt="" />
              </picture>
              <p className='txt flex align-midle justify-center mt-3'>BOOTSTRAP</p>
            </div>
            <div className="sk-1  bg-white/60 dark:bg-black/50 backdrop-blur-xl w-35 h-35 p-8 pt-9 pl-11 rounded-2xl hover:scale-115 transform transition-transform duration-300 shadow-2xl  hover:shadow-[0_0_25px_rgba(0,200,255,0.6)]">
              <picture>
                <img className='figma-img h-14 flex justify-center align-middle' src={figma.src} alt="" />
              </picture>
              <p className='txt flex align-midle justify-center mt-3'>FIGMA</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center bg-white/60 dark:bg-black/50 backdrop-blur-xl border-t border-white/20 shadow-lg rounded-t-2xl mt-10 bottom-0">
        <div className="container mx-auto text-gray-300 py-6 bottom-0">
          {/* <!-- Links --> */}
          <ul className="flex justify-center space-x-6 mb-4">
            <li>
              <a href="#about" className="transition hover:text-black hover:drop-shadow-[0_0_8px_rgba(0,195,255,0.7)]">
                About Us
              </a>
            </li>
            <li>
              <a href="#events" className="transition hover:text-black hover:drop-shadow-[0_0_8px_rgba(0,195,255,0.7)]">
                Initiatives
              </a>
            </li>
            <li>
              <a href="mailto:wmangesh91@gmail.com" className="transition hover:text-black hover:drop-shadow-[0_0_8px_rgba(0,195,255,0.7)]">
                Partner with Us
              </a>
            </li>
          </ul>

          {/* <!-- Social Icons --> */}
          <ul className="flex justify-center space-x-6 mb-4">
            <li>
              <a href="https://www.linkedin.com/company/c-cube-geca/" target="_blank" className="text-gray-400 text-2xl transition hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(0,195,255,0.9)] hover:scale-110">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/mangeshwagh91" target="_blank" className="text-gray-400 text-2xl transition hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(0,195,255,0.9)] hover:scale-110">
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" className="text-gray-400 text-2xl transition hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(0,195,255,0.9)] hover:scale-110">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ccube_community" target="_blank" className="text-gray-400 text-2xl transition hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(0,195,255,0.9)] hover:scale-110">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://discord.com/invite/BhXNWdT3Fx" target="_blank" className="text-gray-400 text-2xl transition hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(0,195,255,0.9)] hover:scale-110">
                <i className="bi bi-discord"></i>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCPQIu6FXWE623QatJjXaWxg" target="_blank" className="text-gray-400 text-2xl transition hover:text-cyan-400 hover:drop-shadow-[0_0_10px_rgba(0,195,255,0.9)] hover:scale-110">
                <i className="bi bi-youtube"></i>
              </a>
            </li>
          </ul>
          {/* 
    <!-- Copyright --> */}
          <p className="text-sm text-gray-400">
            © 2025 Mangesh's Portfolio. All rights reserved.
          </p>
        </div>
      </footer>


    </div>
  );
}
