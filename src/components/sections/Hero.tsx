import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = [
  'Software Developer',
  'AI/ML Enthusiast',
  'Full-Stack Engineer',
  'Problem Solver',
];

function useTypewriter(texts: string[], speed = 100, pause = 2000) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index % texts.length];
    let timeout: number;

    if (!isDeleting && text === current) {
      timeout = window.setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex((prev) => prev + 1);
    } else {
      timeout = window.setTimeout(
        () => {
          setText((prev) =>
            isDeleting
              ? current.substring(0, prev.length - 1)
              : current.substring(0, prev.length + 1)
          );
        },
        isDeleting ? speed / 2 : speed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, texts, speed, pause]);

  return text;
}

export function Hero() {
  const typedRole = useTypewriter(roles);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const handleScroll = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Floating geometric elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-2xl border border-blue-500/20"
          style={{
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full border border-purple-500/20"
          style={{
            transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`,
          }}
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-lg border border-cyan-500/20 rotate-45"
          animate={{ y: [0, -20, 0], rotate: [45, 90, 45] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Rotating rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
          <div className="absolute inset-0 rounded-full border border-blue-500/10 spin-slow" />
          <div className="absolute inset-8 rounded-full border border-purple-500/10 spin-slow-reverse" />
          <div className="absolute inset-16 rounded-full border border-cyan-500/10 spin-slow" />
          <div className="absolute inset-24 rounded-full border border-emerald-500/10 spin-slow-reverse" />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 glass rounded-full text-sm text-cyan-400 font-['Space_Grotesk'] tracking-wide">
            <Sparkles size={14} />
            <span>Available for opportunities</span>
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 font-['Space_Grotesk'] tracking-tighter"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="gradient-text-blue">Sreyangshu</span>{' '}
          <span className="text-slate-200">Sarkar</span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-3xl text-slate-400 mb-8 h-10 flex items-center justify-center font-['Space_Grotesk']"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-cyan-400">{typedRole}</span>
          <span className="typing-cursor" />
        </motion.div>

        <motion.p
          className="text-base md:text-lg text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Building innovative software applications and AI-powered solutions that solve real-world problems.
          Specializing in React, Node.js, Python, and machine learning technologies.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.button
            onClick={() => handleScroll('#projects')}
            className="px-8 py-3.5 rounded-full font-semibold text-base bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            View Projects
          </motion.button>
          <motion.button
            onClick={() => handleScroll('#contact')}
            className="px-8 py-3.5 rounded-full font-semibold text-base glass text-slate-200 hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[
            { icon: Github, href: 'https://github.com/sreyangshu05' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/sreyangshusarkar/' },
            { icon: Mail, href: 'mailto:sreyangshusarkar@gmail.com' },
          ].map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 glass rounded-full flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="text-slate-600" size={24} />
      </motion.div>
    </section>
  );
}
