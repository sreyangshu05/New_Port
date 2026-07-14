import { AnimatedBackground } from './components/layout/AnimatedBackground';
import { CustomCursor } from './components/layout/CustomCursor';
import { Header } from './components/layout/Header';
import { LoadingScreen } from './components/layout/LoadingScreen';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';
import { Education } from './components/sections/Education';
import { Experience } from './components/sections/Experience';
import { Hero } from './components/sections/Hero';
import { ImpactMetrics } from './components/sections/ImpactMetrics';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      <LoadingScreen />
      <CustomCursor />
      <ScrollProgress />
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <ImpactMetrics />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
