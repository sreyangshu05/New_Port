import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Full-Stack Developer Intern',
    company: 'Zi Cloud',
    period: 'Sept 2024 – Nov 2024',
    location: 'Remote',
    achievements: [
      'Engineered 2 automation tools using Node.js for task management, boosting operational efficiency by 40%',
      'Structured dynamic guide and homepage interfaces using WordPress, improving overall user navigation flow by 35%',
      'Developed a responsive calendar UI and bar chart visualization with ReactJS, enhancing data accessibility and interactivity by 45%',
    ],
    technologies: ['Node.js', 'React', 'WordPress', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Python Developer Intern',
    company: 'CodSoft',
    period: 'July 2024 – Aug 2024',
    location: 'Remote',
    achievements: [
      'Created multiple Python applications including Calculator, Password Generator, and To-Do List, demonstrating algorithmic problem-solving capabilities',
      'Collaborated with senior developers to establish efficient coding standards, improving code quality and delivery timelines by 30%',
      'Managed software debugging and version control using Git, ensuring stable releases with 0 major post-deployment bugs',
    ],
    technologies: ['Python', 'Git', 'GitHub', 'Problem Solving', 'Algorithms'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative min-h-screen py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">03 — Experience</p>
          <h2 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] tracking-tight">
            <span className="gradient-text-blue">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500 md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative mb-12 md:mb-20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                  <motion.div
                    className="glass-card rounded-2xl p-8"
                    whileHover={{ y: -4 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                        <Briefcase className="text-white" size={20} />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-slate-200 font-['Space_Grotesk']">{exp.title}</h3>
                        <p className="text-cyan-400 font-semibold text-sm">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4 text-sm text-slate-500 font-['Space_Grotesk']">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-3 mb-6 text-slate-300 text-left text-sm leading-relaxed">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1 flex-shrink-0">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="absolute left-4 md:left-1/2 w-5 h-5 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full border-4 border-slate-950 -translate-x-1/2 md:-translate-x-1/2 z-10">
                  <div className="absolute inset-0 rounded-full bg-blue-500/50 pulse-ring" />
                </div>

                <div className="hidden md:block w-5/12" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
