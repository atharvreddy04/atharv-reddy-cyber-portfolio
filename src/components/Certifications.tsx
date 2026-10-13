import React, { useState, useEffect } from 'react';
import { ExternalLink, X, FileText } from 'lucide-react';

interface CertificateItem {
  id: string;
  bulletTitle: string;
  issuer: string;
  category?: string;
  issued: string;
  pdfPath: string;
  featured?: boolean;
}

const certs: CertificateItem[] = [
  {
    id: 'nasscom',
    bulletTitle: '. Cyber Security Professional',
    issuer: 'NASSCOM IT-ITeS SSC',
    category: 'Gold Category',
    issued: 'Issued: July 2026',
    pdfPath: '/certs/nasscom.pdf',
    featured: true,
  },
  {
    id: 'iifis-csp',
    bulletTitle: '. Cyber Security Professional',
    issuer: 'International Institute for Information Security (IIFIS)',
    category: 'Professional Tier',
    issued: 'Issued: 2026',
    pdfPath: '/certs/iifis-cyber-security-professional.pdf',
  },
  {
  id: 'iifis-ai-csa',
  bulletTitle: '. AI Cyber Security Associate',
  issuer: 'International Institute for Information Security (IIFIS)',
  category: 'AI & Offensive Security',
  issued: 'Issued: 2026',
  pdfPath: '/certs/iifis-ai-cyber-security-associate.png',
},
  {
    id: 'coursera',
    bulletTitle: '. Foundations of Cybersecurity',
    issuer: 'Google',
    issued: 'Issued: 2025',
    pdfPath: '/certs/coursera-cybersecurity.pdf',
  },
  {
    id: 'digit-defence',
    bulletTitle: '. Cybersecurity Internship Certificate',
    issuer: 'Digit Defence',
    issued: 'Issued: July 2026',
    pdfPath: '/certs/digit-defence.pdf',
  },
];

export const Certifications: React.FC = () => {
  const [modalPdf, setModalPdf] = useState<string | null>(null);

  // Close modal when pressing the Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setModalPdf(null);
      }
    };
    if (modalPdf) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalPdf]);

  const featured = certs.find((c) => c.featured);
  const others = certs.filter((c) => !c.featured);

  return (
    <section id="certifications" className="scroll-mt-20 px-6 py-10 max-w-7xl mx-auto font-mono">
      {/* Section Header */}
      <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm tracking-wider uppercase mb-5">
        <span>🛡</span>
        <h2>[ CERTIFICATIONS ]</h2>
      </div>

      {/* Featured Card */}
      {featured && (
        <div className="mb-6 rounded-xl border border-cyan-500/20 bg-slate-900/60 overflow-hidden transition-all duration-300 hover:border-cyan-400">
          <div className="relative bg-slate-950/70 border-b border-slate-800 p-8 sm:p-14 flex flex-col items-center justify-center text-center group">
            {/* Top-left Featured Ribbon Badge */}
            <span className="absolute top-3 left-3 bg-emerald-500 text-slate-950 font-bold text-[10px] px-2.5 py-0.5 rounded tracking-wider uppercase">
              FEATURED
            </span>

            <FileText className="h-16 w-16 text-slate-500 group-hover:text-cyan-400 transition-colors mb-4" />

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              POONDRU ATHARV REDDY
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              has successfully cleared the assessment on
            </p>
            <div className="text-base sm:text-lg font-bold text-cyan-400 mt-1">
              Cyber Security Professional
            </div>

            <div className="flex items-center justify-center mt-6">
              <button
                onClick={() => setModalPdf(featured.pdfPath)}
                className="px-5 py-2 rounded-lg border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 text-xs hover:bg-cyan-900/40 hover:border-cyan-400 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Inspect PDF</span>
              </button>
            </div>
          </div>

          {/* Bottom Metadata Ribbon */}
          <div className="p-4 bg-slate-950 text-xs space-y-1">
            <div className="text-slate-100 font-bold">{featured.bulletTitle}</div>
            <div className="text-slate-400 text-[11px]">{featured.issuer}</div>
            {featured.category && (
              <div className="text-slate-500 text-[11px]">{featured.category}</div>
            )}
            <div className="text-slate-500 text-[11px]">{featured.issued}</div>
          </div>
        </div>
      )}

      {/* Grid of Secondary Certificates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {others.map((cert) => (
          <div
            key={cert.id}
            className="rounded-xl border border-cyan-500/20 bg-slate-900/60 overflow-hidden transition-all duration-300 hover:border-cyan-400 flex flex-col justify-between"
          >
            <div className="bg-slate-950/70 p-8 sm:p-10 flex flex-col items-center justify-center text-center border-b border-slate-800 group">
              <FileText className="h-10 w-10 text-slate-600 group-hover:text-cyan-400 transition-colors mb-3" />
              <div className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
                {cert.issuer}
              </div>
              <div className="text-xs font-bold text-white mt-1">
                {cert.bulletTitle.replace('. ', '')}
              </div>

              <div className="flex items-center justify-center mt-4">
                <button
                  onClick={() => setModalPdf(cert.pdfPath)}
                  className="px-4 py-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/40 text-cyan-300 text-[11px] hover:bg-cyan-900/40 hover:border-cyan-400 transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(6,182,212,0.12)]"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span>Inspect</span>
                </button>
              </div>
            </div>

            <div className="p-3.5 bg-slate-950 text-xs">
              <div className="text-slate-200 font-bold">
                {cert.bulletTitle} - {cert.issuer}
              </div>
              <div className="text-slate-500 text-[10px] mt-0.5">{cert.issued}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Embedded Native PDF Viewer Modal with Robust Preview Support */}
      {modalPdf && (
        <div
          onClick={() => setModalPdf(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full h-[85vh] bg-slate-900 rounded-xl border border-cyan-500/30 flex flex-col overflow-hidden shadow-[0_0_30px_rgba(6,182,212,0.2)]"
          >
            {/* Viewer Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-slate-950 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-cyan-400 font-semibold tracking-wider uppercase">
                  Document Viewer
                </span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={modalPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-cyan-300 text-[11px] underline flex items-center gap-1 transition-colors"
                >
                  <span>Open in New Tab</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
                <button
                  onClick={() => setModalPdf(null)}
                  className="p-1 rounded text-slate-400 hover:text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Document Content Viewport */}
            <div className="w-full flex-1 bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
              <object
                data={`${modalPdf}#view=FitH`}
                type="application/pdf"
                className="w-full h-full"
              >
                <iframe
                  src={`${modalPdf}#view=FitH`}
                  title="Certificate Document Preview"
                  className="w-full h-full border-none"
                >
                  {/* Fallback if browser blocks both object and iframe PDF plugins */}
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center space-y-4">
                    <FileText className="h-12 w-12 text-slate-600" />
                    <p className="text-xs text-slate-400 max-w-md">
                      Your browser security settings prevented this PDF from previewing directly inside the inline frame.
                    </p>
                    <a
                      href={modalPdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg border border-cyan-500/40 bg-cyan-950/50 text-cyan-300 text-xs hover:bg-cyan-900/50 flex items-center gap-2"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>View PDF in New Tab</span>
                    </a>
                  </div>
                </iframe>
              </object>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};