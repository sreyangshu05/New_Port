import { motion } from 'framer-motion';
import { BookOpen, GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Kolkata, West Bengal',
    period: 'Oct. 2024 – Present',
    location: 'Kolkata, West Bengal',
    focus: 'Computer Science',
    highlights: [
      'CGPA: 6.0',
      'Relevant Coursework: Mathematics for Computing, Data Structures and Algorithms, Object Oriented Analysis and Design',
      'Advanced Database Management System, Advanced Operating System, Compiler Design',
      'Cryptography and Network Security, Image Processing and Pattern Recognition, Artificial Intelligence',
      'Machine Learning, Data Science, Deep Learning, Computer Vision, NLP',
    ],
    icon: GraduationCap,
  },
  {
    degree: 'Bachelor of Science in Computer Science (Honours)',
    institution: 'University of Calcutta',
    period: 'Sep. 2021 – Aug. 2024',
    location: 'Kolkata, West Bengal',
    focus: 'Computer Science & Software Engineering',
    highlights: [
      'CGPA: 6.8',
      'Relevant Coursework: Data Structures, Operating System, Networking, Computational Mathematics',
      'Algorithms, Database Management System, Digital Image Processing, Software Engineering',
      'Strong foundation in computer science fundamentals and modern software development practices',
    ],
    icon: GraduationCap,
  },
  {
    degree: 'Higher Secondary (Class XII)',
    institution: 'Bidhannagar Municipal School',
    period: '2019 – 2021',
    location: 'Kolkata, West Bengal',
    focus: 'Science Stream',
    highlights: [
      'Percentage: 78.4%',
      'Completed higher secondary education with focus on science and mathematics',
    ],
    icon: BookOpen,
  },
  {
    degree: 'Secondary (Class X)',
    institution: 'Bidhannagar Municipal School',
    period: '2009 – 2019',
    location: 'Kolkata, West Bengal',
    focus: 'General Studies',
    highlights: [
      'Percentage: 80.2%',
      'Completed secondary education with strong academic performance',
    ],
    icon: BookOpen,
  },
];

export function Education() {
  return (
    <section id="education" className="relative min-h-screen py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">04 — Education</p>
          <h2 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] tracking-tight">
            <span className="gradient-text-blue">Education</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="glass-card rounded-2xl p-8 h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-200 mb-1 font-['Space_Grotesk']">{edu.degree}</h3>
                      <p className="text-cyan-400 font-semibold text-sm">{edu.institution}</p>
                      <p className="text-slate-500 text-xs mt-1 font-['Space_Grotesk']">
                        {edu.period} • {edu.location}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full text-xs font-medium font-['Space_Grotesk']">
                      {edu.focus}
                    </span>
                  </div>

                  <ul className="space-y-2 text-slate-400 text-sm">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-0.5 flex-shrink-0">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
