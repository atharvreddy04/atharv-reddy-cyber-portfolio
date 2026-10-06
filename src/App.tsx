import React from 'react';
import { motion } from 'framer-motion';
import { ParticleSpace } from './components/ParticleSpace';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { AboutJson } from './components/AboutJson';
import { ResumeCV } from './components/ResumeCV';
import { GithubMonitor } from './components/GithubMonitor';
import { RecruitmentBanner } from './components/RecruitmentBanner';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-emerald-500 selection:text-slate-950 font-mono">
      {/* Background Interactive Ambient Canvas */}
      <ParticleSpace />

      <div className="relative z-10">
        <Navbar />

        <main className="space-y-4">
          <Hero />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <MetricsBar />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <AboutJson />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <ResumeCV />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <GithubMonitor />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <RecruitmentBanner />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <Contact />
          </motion.div>
        </main>

        <footer className="py-8 text-center text-xs font-mono text-slate-600 border-t border-slate-900">
          &copy; {new Date().getFullYear()} Poondru Atharv Reddy. All systems secured.
        </footer>
      </div>
    </div>
  );
}

export default App;