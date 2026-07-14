import { motion } from 'framer-motion';
import { Brain, Database, Globe, Server, Settings, Zap } from 'lucide-react';
import { useState } from 'react';

const skillCategories = [
  {
    icon: Globe,
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'React', level: 88 },
      { name: 'Next.js', level: 80 },
      { name: 'TypeScript', level: 82 },
      { name: 'Bootstrap', level: 85 },
      { name: 'TailwindCSS', level: 90 },
      { name: 'WordPress', level: 75 },
    ],
  },
  {
    icon: Server,
    title: 'Backend',
    color: 'from-purple-500 to-indigo-500',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Django', level: 78 },
      { name: 'Flask', level: 82 },
      { name: 'Express.js', level: 85 },
      { name: 'RESTful APIs', level: 88 },
      { name: 'GraphQL', level: 75 },
      { name: 'Redis', level: 72 },
      { name: 'Socket.IO', level: 78 },
      { name: 'Supabase', level: 80 },
      { name: 'PrismaORM', level: 75 },
    ],
  },
  {
    icon: Database,
    title: 'Databases',
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 82 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'SQLite', level: 85 },
      { name: 'Vector DB', level: 75 },
      { name: 'Redis', level: 72 },
    ],
  },
  {
    icon: Settings,
    title: 'DevOps & Tools',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 92 },
      { name: 'Docker', level: 75 },
      { name: 'Kubernetes', level: 68 },
      { name: 'CI/CD', level: 72 },
      { name: 'Postman', level: 88 },
      { name: 'VS Code', level: 95 },
      { name: 'Playwright', level: 72 },
    ],
  },
  {
    icon: Brain,
    title: 'AI / ML',
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'TensorFlow', level: 80 },
      { name: 'PyTorch', level: 82 },
      { name: 'Scikit-learn', level: 85 },
      { name: 'Keras', level: 78 },
      { name: 'OpenCV', level: 85 },
      { name: 'NumPy', level: 90 },
      { name: 'Pandas', level: 88 },
      { name: 'Deep Learning', level: 82 },
      { name: 'Computer Vision', level: 85 },
      { name: 'NLP', level: 78 },
      { name: 'CNN', level: 82 },
      { name: 'Transfer Learning', level: 80 },
      { name: 'OpenAI API', level: 85 },
      { name: 'LangChain', level: 75 },
      { name: 'FAISS', level: 72 },
      { name: 'Prompt Engineering', level: 88 },
      { name: 'LLM Integration', level: 82 },
    ],
  },
  {
    icon: Zap,
    title: 'Languages',
    color: 'from-amber-500 to-orange-500',
    skills: [
      { name: 'Python', level: 92 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 82 },
      { name: 'Java', level: 75 },
      { name: 'C++', level: 80 },
      { name: 'C', level: 78 },
      { name: 'SQL', level: 85 },
      { name: 'MATLAB', level: 70 },
    ],
  },
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="relative min-h-screen py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">05 — Skills</p>
          <h2 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] tracking-tight">
            <span className="gradient-text-blue">Skills & Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const isActive = activeCategory === categoryIndex;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
                onMouseEnter={() => setActiveCategory(categoryIndex)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className={`glass-card rounded-2xl p-6 h-full ${isActive ? 'border-blue-500/30' : ''}`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <Icon className="text-white" size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-200 font-['Space_Grotesk']">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        className="group relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.05 + skillIndex * 0.03 }}
                      >
                        <span className="tech-tag cursor-default inline-block">
                          {skill.name}
                        </span>
                        <motion.div
                          className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        >
                          <span className="text-xs text-cyan-400 font-['Space_Grotesk'] bg-slate-900/90 px-2 py-1 rounded-md border border-cyan-500/20 whitespace-nowrap">
                            {skill.level}%
                          </span>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech marquee */}
        <div className="mt-16 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10" />
          <div className="marquee-track gap-4 py-4">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex gap-4">
                {['Python', 'React', 'TypeScript', 'Node.js', 'PyTorch', 'TensorFlow', 'OpenCV', 'Flask', 'PostgreSQL', 'MongoDB', 'Docker', 'GraphQL', 'FastAPI', 'Redis', 'LangChain', 'FAISS'].map((tech) => (
                  <span key={tech} className="tech-tag whitespace-nowrap text-base px-5 py-2.5">{tech}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
