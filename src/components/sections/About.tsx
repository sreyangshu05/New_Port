import { motion } from 'framer-motion';
import { Code2, Lightbulb, Rocket, Target } from 'lucide-react';

const principles = [
  {
    icon: Target,
    title: 'Impact-Driven',
    description: 'Every line of code should solve a real problem and create measurable value.'
  },
  {
    icon: Rocket,
    title: 'Performance First',
    description: 'Build systems that scale effortlessly and deliver lightning-fast experiences.'
  },
  {
    icon: Code2,
    title: 'Clean Architecture',
    description: 'Elegant, maintainable code that stands the test of time and team growth.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation Minded',
    description: 'Constantly exploring new technologies and patterns to stay ahead of the curve.'
  }
];

export function About() {
  return (
    <section id="about" className="relative min-h-screen py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">01 — About</p>
          <h2 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] tracking-tight">
            <span className="gradient-text-blue">About Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-slate-200 mb-6 leading-tight">
              Hi, I'm Sreyangshu — a software developer passionate about building innovative solutions.
            </h3>
            <div className="space-y-4 text-base text-slate-400 leading-relaxed">
              <p>
                I'm a Computer Science graduate from the University of Calcutta with a strong foundation
                in software development, AI/ML, and modern web technologies. Currently pursuing my
                Master's in Computer Science, I continue to deepen my expertise in artificial intelligence,
                machine learning, and advanced computing systems.
              </p>
              <p>
                Through internships at Zi Cloud and CodSoft, I've gained hands-on experience building
                automation tools, dynamic interfaces, and scalable applications. My projects demonstrate
                a focus on real-world problem-solving, from face detection systems with 95%+ accuracy to
                AI-powered tutoring platforms and drone classification systems achieving 98% accuracy.
              </p>
              <p>
                I specialize in software development with expertise in React, Node.js, Python, and AI/ML
                technologies including deep learning, computer vision, and NLP. I approach every project
                with attention to detail and a commitment to excellence.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={principle.title}
                  className="glass-card rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -6 }}
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center mb-4">
                    <Icon className="text-blue-400" size={22} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-200 mb-2 font-['Space_Grotesk']">{principle.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{principle.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-cyan-400 mb-4 font-['Space_Grotesk']">My Philosophy</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              "I believe in writing clean, efficient code that solves real problems. Technology is a powerful
              tool, but the real value comes from understanding user needs, designing intuitive solutions, and
              continuously learning to stay at the forefront of innovation. Every project is an opportunity
              to create something meaningful."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
