import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { AboutJson } from './components/AboutJson';
import { ResumeCV } from './components/ResumeCV';
import { Certifications } from './components/Certifications';
import { GithubMonitor } from './components/GithubMonitor';
import { RecruitmentBanner } from './components/RecruitmentBanner';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      <Navbar />
      <main className="space-y-4">
        <Hero />
        <MetricsBar />
        <AboutJson />
        <ResumeCV />
        <Certifications />
        <GithubMonitor />
        <RecruitmentBanner />
        <Contact />
      </main>
      <footer className="py-8 text-center text-xs font-mono text-slate-600 border-t border-slate-900">
        &copy; {new Date().getFullYear()} Poondru Atharv Reddy. All systems secured.
      </footer>
    </div>
  );
}

export default App;