import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { AboutJson } from './components/AboutJson';
import { ResumeCV } from './components/ResumeCV';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { GithubMonitor } from './components/GithubMonitor';
import { RecruitmentBanner } from './components/RecruitmentBanner';
import { Contact } from './components/Contact';
import { SectionReveal } from './components/SectionReveal';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <Navbar />

      <main className="space-y-4">
        <Hero />

        <SectionReveal variant="secondary">
          <MetricsBar />
        </SectionReveal>

        <SectionReveal>
          <Experience />
        </SectionReveal>

        <SectionReveal>
          <Certifications />
        </SectionReveal>

        <SectionReveal>
          <Contact />
        </SectionReveal>
      </main>
    </div>
  );
}