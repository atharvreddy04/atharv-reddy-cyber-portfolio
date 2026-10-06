import React, { useState } from 'react';
import { Mail, Send, Check, ShieldCheck, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="px-6 py-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Information Card */}
        <div className="cyber-card-highlight lg:col-span-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Mail className="h-3.5 w-3.5" />
            <span>COMMUNICATION CHANNEL</span>
          </div>

          <h2 className="text-3xl font-bold font-mono text-white">Get In Touch</h2>

          <p className="text-xs sm:text-sm text-slate-400 font-mono leading-relaxed">
            Interested in discussing security assessments, SOC workflows, or technical roles? Reach out directly through the verified endpoints below.
          </p>

          <div className="space-y-4 pt-2 font-mono text-xs">
            <div className="cyber-card-highlight flex items-center gap-3 p-3.5 rounded-xl border border-slate-800/80 bg-slate-950/60 text-slate-300">
              <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
              <span>Hyderabad, Telangana, India (IST / UTC+5:30)</span>
            </div>
            <div className="cyber-card-highlight flex items-center gap-3 p-3.5 rounded-xl border border-slate-800/80 bg-slate-950/60 text-slate-300">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>PGP Verified Communications Accepted</span>
            </div>
          </div>
        </div>

        {/* Right Dispatch Form */}
        <div className="cyber-card-highlight lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-5 font-mono text-xs">
            <div>
              <label className="block text-slate-400 mb-2">OPERATOR_NAME</label>
              <input
                type="text"
                required
                placeholder="e.g. Alex Mercer"
                className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/80 text-slate-200 placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-2">EMAIL_ENDPOINT</label>
              <input
                type="email"
                required
                placeholder="operator@domain.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/80 text-slate-200 placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-slate-400 mb-2">TRANSMISSION_PAYLOAD</label>
              <textarea
                rows={4}
                required
                placeholder="Inquire regarding VAPT assessments, role openings, or collaborations..."
                className="w-full px-4 py-3 rounded-xl border border-slate-800 bg-slate-950/80 text-slate-200 placeholder:text-slate-600 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_-3px_rgba(6,182,212,0.4)] active:scale-[0.98]"
            >
              {submitted ? (
                <>
                  <Check className="h-4 w-4" />
                  <span>Payload Transmitted</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  <span>Send Transmission</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};