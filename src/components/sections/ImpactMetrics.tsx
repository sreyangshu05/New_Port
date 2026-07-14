import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Activity, Cpu, GitBranch, Rocket, Users, Zap } from 'lucide-react';

const metrics = [
  { icon: GitBranch, label: 'Projects Completed', value: 8, suffix: '+', color: 'from-blue-500 to-cyan-500' },
  { icon: Cpu, label: 'Technologies Mastered', value: 45, suffix: '+', color: 'from-purple-500 to-pink-500' },
  { icon: Rocket, label: 'GitHub Repositories', value: 15, suffix: '+', color: 'from-cyan-500 to-emerald-500' },
  { icon: Zap, label: 'Commits', value: 500, suffix: '+', color: 'from-amber-500 to-orange-500' },
  { icon: Users, label: 'Users Reached', value: 200, suffix: '+', color: 'from-emerald-500 to-teal-500' },
  { icon: Activity, label: 'Hours Coded', value: 2000, suffix: '+', color: 'from-rose-500 to-red-500' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold gradient-text-blue font-['Space_Grotesk']">
      {count}{suffix}
    </div>
  );
}

export function ImpactMetrics() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-label mb-3">02 — Impact</p>
          <h2 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] tracking-tight">
            <span className="text-slate-200">By the </span>
            <span className="gradient-text-blue">Numbers</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                className="metric-card rounded-2xl p-6 md:p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4`}>
                  <Icon className="text-white" size={20} />
                </div>
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                <p className="text-slate-500 text-sm mt-2 font-['Space_Grotesk']">{metric.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
