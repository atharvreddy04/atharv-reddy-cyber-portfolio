import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { AboutJson } from './components/AboutJson';
import { ResumeCV } from './components/ResumeCV';
import { GithubMonitor } from './components/GithubMonitor';
import { RecruitmentBanner } from './components/RecruitmentBanner';
import { Contact } from './components/Contact';
import { ParticleSpace } from './components/ParticleSpace';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-400 selection:text-slate-950 overflow-x-hidden">
      <ParticleSpace />
      <div className="relative z-10 space-y-4">
        <Navbar />
        <main className="space-y-4">
          <Hero />
          <MetricsBar />
          <AboutJson />
          <ResumeCV />
          <GithubMonitor />
          <RecruitmentBanner />
          <Contact />
        </main>
        <footer className="py-8 text-center text-xs font-mono text-slate-600 border-t border-slate-900">
          &copy; {new Date().getFullYear()} Poondru Atharv Reddy. All systems secured.
        </footer>
      </div>
    </div>
  );
}

export default App;