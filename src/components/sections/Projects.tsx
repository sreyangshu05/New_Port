import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { useState } from 'react';

const projects = [
  { title: 'SureEntry Pro', description: 'A real-time face recognition and workforce attendance platform built with Flask and OpenCV, combining biometric attendance, employee self-service, payroll, QR/RFID check-ins, reporting, and administrative workflows.', impact: 'Automated attendance recording and workforce operations through biometric and device-based check-ins, reducing manual attendance effort while centralizing employee and payroll management.', architecture: 'Designed a Flask-based backend with OpenCV Haar Cascade face detection, scikit-learn KNN recognition, distance-based unknown-person rejection, atomic JSON/JSONL/CSV persistence, and optional Socket.IO events for live attendance updates.', technologies: ['Python', 'Flask', 'OpenCV', 'scikit-learn', 'NumPy', 'joblib', 'HTML', 'CSS', 'JavaScript', 'Flask-WTF', 'Flask-SocketIO'], metrics: ['95%+ recognition accuracy', '35% latency reduction', '50% handling efficiency improvement', '70% manual effort reduction'], highlights: [ 'Employee registration and self-service attendance workspace', 'Payroll calculation with gross and net salary records', 'Signed QR and RFID device-based attendance APIs', 'CSV, XLSX, and PDF report generation', 'Duplicate attendance prevention and checkout workflows', 'Multi-frame liveness signal and unknown-person rejection' ], github: 'https://github.com/sreyangshu05/SureEntry-Pro-Updated/tree/master', demo: 'https://sureentry-pro.onrender.com/', featured: true, },
  {
    title: 'FunLearn',
    description: 'An AI-powered tutoring platform implemented with context-aware workflows and robust error handling, increasing learner engagement by 35% and reducing integration bugs by 45%.',
    impact: 'Deployed a single POST /ask endpoint, simplifying routing and improving efficiency by 60%. Reduced latency by 40%',
    architecture: 'Flask backend integrated with Google Gemini API for AI responses, React frontend with Vite for fast development. Context-aware conversation management with error handling.',
    technologies: ['Flask', 'React', 'Vite', 'Google Gemini API', 'JavaScript', 'Python'],
    metrics: ['40% latency reduction', '35% engagement increase', '60% efficiency improvement'],
    github: 'https://github.com/sreyangshu05/Tutor',
    demo: 'https://skc-sreyangshusarkar-funlearn.netlify.app/',
    featured: true,
  },
  {
    title: 'SmartSupport AI',
    description: 'A full-stack AI support platform architected to increase ticket resolution efficiency by 40% and reduce redundant tickets by 35%. Integrated AI/NLP modules for summarization, semantic search, clustering, and classification.',
    impact: 'Improved knowledge retrieval speed by 50% and agent decision-making by 45%. Formulated AI-guided onboarding workflow, cutting new agent ramp-up time by 30%',
    architecture: 'React and TypeScript frontend, FastAPI backend with PostgreSQL and Redis for caching. AI/NLP integration for intelligent ticket management and knowledge base search.',
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'AI/NLP', 'Python'],
    metrics: ['40% efficiency increase', '50% faster retrieval', '30% faster onboarding'],
    github: 'https://github.com/sreyangshu05/SmartSupport-AI',
    demo: 'https://smartsupport-ai.vercel.app/',
    featured: true,
  },
  {
    title: 'SP-Guide',
    description: 'A drone classification system using deep learning and superpixel segmentation. Achieved 98% classification accuracy across multiple drone categories. Implemented SLIC superpixel extraction with CNN architectures for robust aerial image analysis.',
    impact: 'Reached 98% classification accuracy using transfer learning with ResNet, VGG, ConvNeXt, EfficientNetV2, and Swin Transformer. Applied U-Net++ and YOLO for segmentation and detection pipelines.',
    architecture: 'PyTorch deep learning pipeline with OpenCV for image processing. SLIC superpixel segmentation for feature extraction. Multiple CNN architectures compared via transfer learning. Google Gemini API integration for scene understanding.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'CNN', 'Transfer Learning', 'SLIC', 'ResNet', 'VGG', 'ConvNeXt', 'EfficientNetV2', 'Swin Transformer', 'U-Net++', 'YOLO', 'Gemini API'],
    metrics: ['98% classification accuracy', '6+ CNN architectures', 'Multi-category drone detection'],
    github: 'https://github.com/sreyangshu05',
    demo: '',
    featured: true,
  },
  {
    title: 'IdeaGraph',
    description: 'Real-time collaborative graph editor handling 500+ nodes with ~1–2s sync latency across 5+ users, improving collaboration by 40%. Implemented AI-powered node suggestions, version history, and conflict resolution.',
    impact: 'Developed fallback scripts and hybrid DB support, enabling instant demos and persistence by 25%',
    architecture: 'React and TypeScript frontend with Socket.IO for real-time collaboration. Neo4j for graph database and PostgreSQL for persistence. Hybrid database architecture for flexibility.',
    technologies: ['React', 'TypeScript', 'Socket.IO', 'Node.js', 'Neo4j', 'PostgreSQL'],
    metrics: ['500+ nodes', '1-2s sync latency', '40% collaboration improvement'],
    github: 'https://github.com/sreyangshu05/IdeaGraph',
    demo: 'https://drive.google.com/file/d/1xCrADHLwN3TFgAVq4rBn0Ef_RLvXEPIX/view',
    featured: false,
  },
  {
    title: 'StudyMate AI',
    description: 'A PDF-based AI learning platform with Q&A, GPT-3.5-turbo quiz generation, and progress tracking, achieving 90% feature completion and ~95% data accuracy. RAG-based AI assistant reducing document processing to 2–5s per page.',
    impact: 'Improved knowledge retrieval by ~50%. Optimized backend with SQLite/PostgreSQL-ready, PDF-parse, and FAISS. Ensured secure user management with JWT, bcrypt, and CORS',
    architecture: 'React frontend with Node.js and Express backend. SQLite for development, PostgreSQL-ready for production. FAISS for vector search and OpenAI API for quiz generation. RAG implementation for document Q&A.',
    technologies: ['React', 'Node.js', 'Express', 'SQLite', 'OpenAI API', 'FAISS', 'JWT', 'bcrypt'],
    metrics: ['90% completion', '95% accuracy', '50% faster retrieval'],
    github: 'https://github.com/sreyangshu05/StudyMate',
    demo: 'https://studymate-aideploy.netlify.app/login',
    featured: false,
  },
  {
    title: 'FiscalFocus',
    description: 'Scalable finance dashboard with MERN stack, improving data retrieval by 40% and flow efficiency by ~35%. Integrated TypeScript, Redux Toolkit, 3+ APIs with MongoDB caching, reducing response times by 45% and manual entry by 70%.',
    impact: 'Embedded a machine-learning module for fiscal forecasting, achieving 85% prediction accuracy',
    architecture: 'MERN stack (MongoDB, Express, React, Node.js) with TypeScript. Redux Toolkit for state management. ML module for financial predictions. MongoDB caching for performance optimization.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Redux Toolkit', 'ML', 'JavaScript'],
    metrics: ['40% faster retrieval', '45% response time reduction', '85% prediction accuracy'],
    github: 'https://github.com/sreyangshu05/FiscalFocus',
    demo: '',
    featured: false,
  },
];

type Project = typeof projects[0];

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative min-h-screen py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-label mb-3">06 — Projects</p>
          <h2 className="text-4xl md:text-6xl font-bold font-['Space_Grotesk'] tracking-tight">
            <span className="gradient-text-blue">Featured Projects</span>
          </h2>
          <p className="text-lg text-slate-500 mt-4 max-w-3xl">
            Real-world engineering solutions that demonstrate architectural thinking, scalability, and measurable business impact.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={project.featured ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <div
                className="glass-card rounded-2xl p-6 h-full flex flex-col cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                {project.featured && (
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded-full text-xs font-bold uppercase tracking-wide font-['Space_Grotesk']">
                      Featured
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-blue-400 transition-colors font-['Space_Grotesk']">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="text-xs font-semibold text-emerald-400 mb-1 font-['Space_Grotesk']">Impact:</div>
                  <p className="text-slate-500 text-xs leading-relaxed">{project.impact}</p>
                </div>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-md text-xs font-medium border border-blue-500/20 font-['Space_Grotesk']">
                      {metric}
                    </span>
                  ))}
                </div>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag">+{project.technologies.length - 4}</span>
                  )}
                </div>

                <div className="flex gap-4 mt-auto pt-4 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      <span className="text-xs font-medium">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      <span className="text-xs font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-xl z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-strong rounded-3xl p-8 md:p-12 max-w-4xl max-h-[85vh] overflow-y-auto w-full"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-200 font-['Space_Grotesk']">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-slate-500 hover:text-slate-200 transition-colors"
                  aria-label="Close"
                >
                  <X size={24} />
                </button>
              </div>

              <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed">{selectedProject.description}</p>

              <div className="mb-8">
                <h4 className="text-lg font-bold text-emerald-400 mb-3 font-['Space_Grotesk']">Business Impact</h4>
                <p className="text-slate-400 leading-relaxed">{selectedProject.impact}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-bold text-cyan-400 mb-3 font-['Space_Grotesk']">Architecture & Design</h4>
                <p className="text-slate-400 leading-relaxed">{selectedProject.architecture}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-bold text-blue-400 mb-3 font-['Space_Grotesk']">Key Metrics</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.metrics.map((metric) => (
                    <span key={metric} className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg font-medium border border-blue-500/30 text-sm font-['Space_Grotesk']">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-bold text-slate-200 mb-3 font-['Space_Grotesk']">Technology Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full glass text-slate-200 hover:bg-white/10 transition-all font-medium text-sm"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                )}
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/30 transition-all font-medium text-sm"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
