import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Mail, Menu, X, ArrowRight, ExternalLink, Code, Cpu, Database, Layout, Globe, Server, Smartphone, Terminal, MoveRight } from 'lucide-react';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './components/SEO';
import { cn } from './lib/utils';

// --- Shared Components ---

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-display font-bold mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-400 max-w-2xl text-lg"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: 80 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mt-6"
    />
  </div>
);

// --- Sections ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-[#05070A]/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20 transition-transform group-hover:scale-110">YT</div>
          <span className="font-display text-xl font-bold tracking-tight text-white">Yamin Thuzar</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="w-px h-4 bg-white/10" />
          <div className="text-xs bg-white/5 border border-white/10 px-3 py-1 rounded-full text-slate-400">
            Based in Japan
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-6 space-y-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="block text-lg font-medium text-slate-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary w-full block text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let's Talk
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-600/20 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6 border border-cyan-500/20"
          >
            Available for new opportunities
          </motion.span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] mb-6">
            Full Stack<br/>
            <span className="text-gradient">Developer.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-medium mb-10 max-w-lg leading-relaxed">
            Based in Japan, originally from Myanmar. Specializing in Web Development, IoT, and AI Systems to build scalable digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View Projects 
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 glass-card p-8 aspect-square flex flex-col justify-center items-center text-center">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
               className="absolute inset-0 border border-dashed border-white/20 rounded-full"
             />
             <Cpu size={80} className="text-cyan-400 mb-6" />
             <h3 className="text-2xl mb-2 italic">Building the Future</h3>
             <p className="text-slate-400">IoT & AI Systems Specialist</p>
             
             {/* Floating UI Elements */}
             <motion.div 
               animate={{ y: [0, -15, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
               className="absolute -top-4 -right-4 glass-card px-4 py-2 border-cyan-500/30"
             >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-xs font-mono">System Active</span>
                </div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
               className="absolute -bottom-6 -left-6 glass-card px-4 py-2 border-blue-500/30"
             >
                <div className="flex items-center gap-2 text-blue-400">
                  <Database size={14} />
                  <span className="text-xs font-mono">Data Processed</span>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-600 mb-2">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-cyan-500 to-transparent"
        />
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="A developer's journey from Myanmar to the heart of technological innovation in Japan.">
          About Me
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <p className="text-slate-400 text-lg leading-relaxed">
              Based in Japan, I bridge the gap between complex hardware systems and elegant software interfaces. My journey began in Myanmar, fueled by an insatiable curiosity for how things work. Today, I'm dedicated to building software that solves real-world problems.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              I specialize in developing full-stack applications with a particular focus on IoT integration and AI systems. I believe that technology should be intuitive, scalable, and impactful.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                { title: 'Web Development', desc: 'Modern Web Apps', icon: <Globe size={16} className="text-cyan-400" />, color: 'cyan' },
                { title: 'IoT Systems', desc: 'Hardware Integration', icon: <Cpu size={16} className="text-blue-400" />, color: 'blue' },
                { title: 'AI Systems', desc: 'Automation & ML', icon: <Terminal size={16} className="text-purple-400" />, color: 'purple' },
                { title: 'Fast Learner', desc: 'Tech Adaptability', icon: <Smartphone size={16} className="text-emerald-400" />, color: 'emerald' },
              ].map((item) => (
                <div key={item.title} className="glass-card-inner p-4 flex items-center gap-4">
                   <div className={cn(
                     "w-10 h-10 rounded-lg flex items-center justify-center",
                     item.color === 'cyan' && "bg-cyan-500/10 text-cyan-400",
                     item.color === 'blue' && "bg-blue-500/10 text-blue-400",
                     item.color === 'purple' && "bg-purple-500/10 text-purple-400",
                     item.color === 'emerald' && "bg-emerald-500/10 text-emerald-400",
                   )}>
                     {item.icon}
                   </div>
                   <div>
                     <h4 className="text-white font-bold text-sm">{item.title}</h4>
                     <p className="text-slate-500 text-[10px] uppercase tracking-wider font-bold">{item.desc}</p>
                   </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
             <div className="glass-card p-1 relative overflow-hidden group">
               <img 
                 src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800" 
                 alt="Workspace" 
                 className="rounded-xl grayscale group-hover:grayscale-0 transition-all duration-700"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
               <div className="absolute bottom-6 left-6">
                 <p className="text-cyan-400 font-mono text-sm mb-1">// LOCATION</p>
                 <p className="text-white font-display text-2xl font-bold">Tokyo, Japan</p>
               </div>
             </div>
             
             {/* Stats Overlay */}
             <div className="absolute -bottom-10 -right-4 glass-card p-6 border-cyan-500/30">
                <div className="text-4xl font-display font-bold text-gradient mb-1">MT → JP</div>
                <p className="text-xs uppercase tracking-widest text-slate-500">Cross-border Journey</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout className="text-cyan-400" />,
      skills: ['React', 'Vue', 'Angular', 'Tailwind CSS', 'TypeScript']
    },
    {
      title: 'Backend',
      icon: <Server className="text-blue-400" />,
      skills: ['Laravel', 'Java Servlet/JSP', 'Node.js', 'Express']
    },
    {
      title: 'Database & Tools',
      icon: <Database className="text-emerald-400" />,
      skills: ['MySQL', 'PostgreSQL', 'Git', 'Docker', 'REST API']
    },
    {
      title: 'Specialized',
      icon: <Cpu className="text-purple-400" />,
      skills: ['IoT Systems', 'Stripe API', 'AI Integration', 'Unit Testing']
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="A comprehensive toolkit for modern software development.">
          Technical Skills
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 hover:bg-white/10 transition-colors group"
            >
              <div className="mb-6 p-3 rounded-xl bg-white/5 inline-block group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-slate-400 font-medium">
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
};

const Projects = () => {
  const projects = [
    {
      title: "Admin Dashboard System",
      description: "A professional management dashboard featuring MVC architecture, role-based authentication, and business analytics with CSV reporting.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Authentication", "CRUD", "CSV Export", "Analytics"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Premium Shopping System",
      description: "A high-performance e-commerce platform with a mobile-first UI and secure financial transactions powered by modern fintech APIs.",
      tech: ["React", "Laravel", "Stripe", "MySQL"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
      features: ["Cart Logic", "Stripe Pay", "User Auth", "History"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Order Management Engine",
      description: "An enterprise-grade internal tool for tracking B2B inventory and supply chain operations using standard enterprise frameworks.",
      tech: ["Java", "Servlet/JSP", "MySQL"],
      image: "https://images.unsplash.com/photo-1586769852044-692d6e3703a0?auto=format&fit=crop&q=80&w=800",
      features: ["Inventory", "Reporting", "User Roles", "CRM"],
      github: "https://github.com",
      demo: "https://demo.com"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Selected works that demonstrate expertise in full-stack architecture and UI/UX design.">
          Featured Projects
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group glass-card overflow-hidden flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-bold backdrop-blur-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors uppercase tracking-tight">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.features.map(f => (
                      <div key={f} className="flex items-center gap-1 text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                        <div className="w-1 h-1 rounded-full bg-cyan-500" />
                        {f}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-2">
                    <a href={project.demo} className="text-xs font-bold uppercase tracking-widest flex items-center gap-1 text-cyan-400 hover:text-white transition-colors">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a href={project.github} className="text-xs font-bold uppercase tracking-widest flex items-center gap-1 text-slate-400 hover:text-white transition-colors">
                      <Github size={14} /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      company: "Freelance",
      role: "Full Stack Developer",
      period: "2023 - Present",
      desc: "Helping businesses improve workflow systems by building custom management platforms and modern web applications with a focus on performance and local scalability."
    },
    {
      company: "Collaborative Projects",
      role: "System Architect",
      period: "2022 - 2023",
      desc: "Designing IoT-ready architectures for small-scale monitoring tools. Integrated AI models for predictive data analysis in trial projects."
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="A history of professional growth and digital transformation.">
          Experience
        </SectionTitle>

        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-10 border-l border-white/5"
            >
              <div className="absolute left-[-13px] top-1.5 w-6 h-6 bg-[#05070A] border-2 border-cyan-500 rounded-full flex items-center justify-center">
                 <div className={cn("w-2 h-2 rounded-full", idx === 0 ? "bg-cyan-500" : "bg-white/10")} />
              </div>
              <div className="mb-2">
                <span className="text-cyan-400 font-mono text-[10px] font-bold tracking-widest uppercase">{exp.period}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-0.5">{exp.role}</h3>
              <p className="text-slate-500 text-sm font-medium mb-3">@ {exp.company}</p>
              <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <SectionTitle subtitle="Have a project in mind? Let's discuss how we can build something amazing together.">
              Connect With Me
            </SectionTitle>

            <div className="space-y-10 mt-12">
              <div className="flex items-center gap-6">
                 <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-400 border border-white/10">
                   <Mail size={24} />
                 </div>
                 <div>
                   <p className="text-xs uppercase tracking-widest text-slate-500 mb-1 font-bold">Email</p>
                   <p className="text-xl font-medium text-white">hello@yamint.dev</p>
                 </div>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: <Github size={20} />, href: '#' },
                  { icon: <Linkedin size={20} />, href: '#' },
                  { icon: <Twitter size={20} />, href: '#' },
                ].map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href}
                    className="w-12 h-12 rounded-xl glass-card border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all active:scale-95"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
              
              <div className="bg-cyan-500 text-black rounded-3xl p-8 mt-12 shadow-2xl shadow-cyan-500/20">
                <h3 className="text-xs uppercase tracking-widest font-bold mb-4 opacity-70">Collaboration</h3>
                <p className="text-xl font-bold mb-6 leading-tight">Interested in building something innovative? Let's talk about your project.</p>
                <div className="grid grid-cols-2 gap-2">
                   {['Resume', 'LinkedIn', 'Book a Call', 'GitHub'].map(label => (
                     <div key={label} className="bg-black/10 p-3 rounded-xl text-center text-[10px] font-bold uppercase tracking-wider hover:bg-black/20 transition-colors cursor-pointer">
                       {label}
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-slate-900 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-slate-900 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500">Message</label>
                <textarea 
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-900 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                  placeholder="How can I help you?"
                />
              </div>
              <button 
                type="submit" 
                disabled={status !== 'idle'}
                className={cn(
                  "btn-primary w-full flex items-center justify-center gap-2 py-4",
                  status !== 'idle' && "opacity-70 cursor-not-allowed"
                )}
              >
                {status === 'idle' && <>Send Message <MoveRight size={20} /></>}
                {status === 'sending' && "Sending..."}
                {status === 'success' && "Message Sent!"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm italic font-mono uppercase tracking-widest">
           &copy; {new Date().getFullYear()} Yamin Thuzar
        </div>
        <div className="text-slate-500 text-sm">
          Built with <span className="text-white font-medium">React</span> & <span className="text-white font-medium">Tailwind CSS</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">Privacy</a>
          <a href="#" className="text-slate-500 hover:text-white transition-colors text-xs font-bold tracking-widest uppercase">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <HelmetProvider>
      <div className="relative">
        <SEO />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        
        {/* Fixed Noise Overlay for Texture */}
        <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] overflow-hidden">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>
      </div>
    </HelmetProvider>
  );
}
