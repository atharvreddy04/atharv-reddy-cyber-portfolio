import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { AboutJson } from './components/AboutJson';
import { ResumeCV } from './components/ResumeCV';
import { Certifications } from './components/Certifications';
import { GithubMonitor } from './components/GithubMonitor';
import { RecruitmentBanner } from './components/RecruitmentBanner';
import { Contact } from './components/Contact';
import { SectionReveal } from './components/SectionReveal';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />
      
      <main className="space-y-4">
        <Hero />

        <SectionReveal variant="secondary">
          <MetricsBar />
        </SectionReveal>

        <SectionReveal variant="primary">
          <AboutJson />
        </SectionReveal>

        <SectionReveal variant="primary">
          <ResumeCV />
        </SectionReveal>

        <Certifications />

        <SectionReveal variant="secondary">
          <GithubMonitor />
        </SectionReveal>

        <SectionReveal variant="primary">
          <RecruitmentBanner />
        </SectionReveal>

        <SectionReveal variant="primary">
          <Contact />
        </SectionReveal>
      </main>

      <footer className="py-8 text-center text-xs font-mono text-slate-600 border-t border-slate-900">
        &copy; {new Date().getFullYear()} POONDRU ATHARV REDDY. All systems secured.
      </footer>
    </div>
  );
}

export default App;