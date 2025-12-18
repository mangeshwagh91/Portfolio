import FluidCursor from '@/components/FluidCursor';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Star, Phone, MapPin, Code2 } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const techStack = {
    frontend: [
      { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
      { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
      { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    ],
    backend: [
      { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
      { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg' },
      { name: 'PHP', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
      { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    ],
    database: [
      { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
      { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
      { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
      { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
      { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    ],
    tools: [
      { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
      { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
      { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
      { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    ],
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with payment integration, admin dashboard, and real-time inventory management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, team chat, and progress tracking.',
      tech: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind'],
      github: '#',
      live: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms with data visualization.',
      tech: ['React', 'Python', 'PostgreSQL', 'Chart.js'],
      github: '#',
      live: '#',
    },
    {
      title: 'Real Estate Website',
      description: 'Modern real estate platform with property listings, search filters, and interactive maps.',
      tech: ['Next.js', 'Express', 'MySQL', 'Google Maps'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <div className="relative bg-white">
      <FluidCursor />
      
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: 0 }} 
        className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              className="text-xl font-semibold text-gray-900"
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-blue-600">&lt;</span>
              Portfolio
              <span className="text-blue-600">/&gt;</span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-1">
              {['Home', 'Skills', 'Projects', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Available for new opportunities
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Mangesh Wagh</span>
              <br />
              Full Stack Developer
            </h1>
            
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              I build scalable web applications with modern technologies. 
              Passionate about creating seamless user experiences and clean code.
            </p>
            
            <div className="flex gap-4 justify-center mb-8">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors"
              >
                View Projects
              </motion.a>
            </div>
            
            <div className="flex gap-4 justify-center">
              {[
                { icon: <Github className="w-5 h-5" />, href: '#', bg: 'hover:bg-gray-100' },
                { icon: <Linkedin className="w-5 h-5" />, href: '#', bg: 'hover:bg-blue-50' },
                { icon: <Mail className="w-5 h-5" />, href: '#', bg: 'hover:bg-gray-100' },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3 }}
                  className={`p-3 border border-gray-200 rounded-lg text-gray-600 ${social.bg} transition-colors`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="skills" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tech Stack
            </h2>
            <p className="text-lg text-gray-600">Technologies I work with</p>
          </motion.div>
          
          {Object.entries(techStack).map(([category, technologies], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 capitalize">
                  {category}
                </h3>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {technologies.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all text-center"
                  >
                    <img
                      src={tech.logo}
                      alt={tech.name}
                      className="w-12 h-12 mx-auto mb-3"
                    />
                    <p className="text-sm font-medium text-gray-700">{tech.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">Some of my recent work</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                </div>
                
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-5 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-lg text-gray-600">Get to know me better</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="p-6 bg-white rounded-xl border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Journey</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm a Full Stack Developer passionate about creating seamless web experiences. 
                  With expertise in modern technologies like React, Node.js, and cloud platforms, 
                  I build scalable applications that solve real-world problems.
                </p>
              </div>
              
              <div className="p-6 bg-blue-600 text-white rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="w-6 h-6" />
                  <h3 className="text-2xl font-semibold">What I Do</h3>
                </div>
                <ul className="space-y-2">
                  <li> Full Stack Web Development</li>
                  <li> Cloud Architecture & Deployment</li>
                  <li> Database Design & Optimization</li>
                  <li> API Development & Integration</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: '50+', label: 'Projects' },
                { number: '30+', label: 'Clients' },
                { number: '3+', label: 'Years' },
                { number: '100%', label: 'Satisfaction' },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="p-8 bg-white rounded-xl border border-gray-200 text-center"
                >
                  <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-gray-600">Have a project in mind? Get in touch</p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email</p>
                  <p className="text-lg font-semibold text-gray-900">mangeshwagh91@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Phone</p>
                  <p className="text-lg font-semibold text-gray-900">+91 XXXXX XXXXX</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Location</p>
                  <p className="text-lg font-semibold text-gray-900">Mumbai, India</p>
                </div>
              </div>
              
              <div className="pt-6">
                <p className="text-sm text-gray-500 font-medium mb-4">Connect with me</p>
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
          
          <div className="mt-24 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500"> 2025 Mangesh Wagh. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#home" className="text-gray-500 hover:text-gray-900 transition-colors">Home</a>
              <a href="#skills" className="text-gray-500 hover:text-gray-900 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-500 hover:text-gray-900 transition-colors">Projects</a>
              <a href="#about" className="text-gray-500 hover:text-gray-900 transition-colors">About</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
