import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervals = [
      setTimeout(() => setProgress(30), 200),
      setTimeout(() => setProgress(60), 600),
      setTimeout(() => setProgress(85), 1000),
      setTimeout(() => setProgress(100), 1400),
      setTimeout(() => setVisible(false), 1800),
    ];
    return () => intervals.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="loading-screen"
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
        >
          <div className="aurora-bg">
            <div className="aurora-1" />
            <div className="aurora-2" />
            <div className="aurora-3" />
          </div>

          <motion.div
            className="relative z-10 flex flex-col items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-2xl">
                <span className="text-2xl font-black text-white font-['Space_Grotesk']">S</span>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 blur-xl opacity-40 animate-pulse" />
            </div>

            <div className="text-center">
              <p className="text-slate-400 text-sm font-['Space_Grotesk'] tracking-widest uppercase mb-1">
                Loading Portfolio
              </p>
              <p className="text-slate-600 text-xs tracking-wider">Sreyangshu Sarkar</p>
            </div>

            <div className="w-48 h-0.5 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />
            </div>

            <motion.p
              className="text-slate-600 text-xs font-['Space_Grotesk']"
              key={progress}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {progress}%
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
