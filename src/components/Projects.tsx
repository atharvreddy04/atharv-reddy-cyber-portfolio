import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto font-mono">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-cyan-400 mb-8">
        &gt; FEATURED_PROJECTS
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project 1: NetSecure */}
        <div className="p-6 rounded-lg border border-cyan-800/50 bg-[#06121e]/80 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-100">NetSecure</h3>
            <p className="text-sm text-slate-400 mt-2 font-sans">
              Real-time network traffic analyzer and security monitor built with React, Vite, and Tailwind CSS.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <a 
              href="https://atharvreddy-network-traffic-analyzer.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-cyan-400 hover:underline font-semibold"
            >
              <span>Live App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;