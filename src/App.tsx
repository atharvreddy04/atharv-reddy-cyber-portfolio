import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { AboutJson } from './components/AboutJson';
import { ResumeCV } from './components/ResumeCV';
import { HighlightCard3D } from './components/HighlightCard3D';
import { Experience } from './components/Experience';
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
        {/* HOME SECTION */}
        <Hero />

        {/* METRICS */}
        <SectionReveal variant="secondary">
          <MetricsBar />
        </SectionReveal>

        {/* ABOUT SECTION */}
        <SectionReveal variant="primary">
          <AboutJson />
        </SectionReveal>

        {/* RESUME / CREDENTIALS */}
        <SectionReveal variant="primary">
          <ResumeCV />
        </SectionReveal>

        {/* DEDICATED PROJECTS SECTION (HighlightCard3D) */}
        <SectionReveal variant="primary">
          <HighlightCard3D />
        </SectionReveal>

        {/* DEDICATED EXPERIENCE SECTION */}
        <SectionReveal variant="primary">
          <Experience />
        </SectionReveal>

        {/* DEDICATED SKILLS & CERTIFICATIONS SECTION */}
        <SectionReveal variant="primary">
          <Certifications />
        </SectionReveal>

        {/* GITHUB MONITOR */}
        <SectionReveal variant="secondary">
          <GithubMonitor />
        </SectionReveal>

        {/* RECRUITMENT BANNER */}
        <SectionReveal variant="primary">
          <RecruitmentBanner />
        </SectionReveal>

        {/* CONTACT SECTION */}
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