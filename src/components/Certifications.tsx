import React, { useState } from 'react';
import { Download, ExternalLink, X, FileText } from 'lucide-react';

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

  const featured = certs.find((c) => c.featured);
  const others = certs.filter((c) => !c.featured);

  return (
    <section id="certifications" className="px-6 py-10 max-w-7xl mx-auto font-mono">
      {/* Cyber Section Label */}
      <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm tracking-wider uppercase mb-5">
        <span className="text-emerald-500">🛡</span>
        <h2>CERTIFICATIONS</h2>
      </div>

      {/* Featured Top Card */}
      {featured && (
        <div className="mb-6 rounded-lg border border-slate-800 bg-slate-950 overflow-hidden transition-all duration-300 hover:border-emerald-500/80">
          <div className="relative bg-slate-900/60 border-b border-slate-800 p-8 sm:p-14 flex flex-col items-center justify-center text-center group">
            {/* Top-left Featured Badge */}
            <span className="absolute top-3 left-3 bg-emerald-500 text-slate-950 font-bold text-[10px] px-2.5 py-0.5 rounded tracking-wider uppercase">
              FEATURED
            </span>

            <FileText className="h-16 w-16 text-slate-500 group-hover:text-emerald-400 transition-colors mb-4" />

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              POONDRU ATHARV REDDY
            </h3>
            <p className="text-xs text-slate-400 mt-2">
              has successfully cleared the assessment on
            </p>
            <div className="text-base sm:text-lg font-bold text-emerald-400 mt-1">
              Cyber Security Professional
            </div>

            {/* Quick Action Overlay Buttons */}
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={() => setModalPdf(featured.pdfPath)}
                className="px-4 py-1.5 rounded border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs hover:bg-emerald-500/20 transition-all flex items-center gap-1.5"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                <span>Inspect PDF</span>
              </button>
              <a
                href={featured.pdfPath}
                download
                className="px-4 py-1.5 rounded border border-slate-700 bg-slate-900 text-slate-300 text-xs hover:text-white hover:border-slate-500 transition-all flex items-center gap-1.5"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Download</span>
              </a>
            </div>
          </div>

          {/* Metadata Bottom Strip */}
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

      {/* Grid Below Featured Item */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {others.map((cert) => (
          <div
            key={cert.id}
            className="rounded-lg border border-slate-800 bg-slate-950 overflow-hidden transition-all duration-300 hover:border-emerald-500/80 flex flex-col justify-between"
          >
            {/* Certificate Preview Box */}
            <div className="bg-slate-900/40 p-10 flex flex-col items-center justify-center text-center border-b border-slate-800 group">
              <FileText className="h-10 w-10 text-slate-600 group-hover:text-emerald-400 transition-colors mb-3" />
              <div className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
                {cert.issuer}
              </div>
              <div className="text-xs font-bold text-white mt-1">
                {cert.bulletTitle.replace('. ', '')}
              </div>

              <div className="flex items-center gap-2 mt-4">
                <button
                  onClick={() => setModalPdf(cert.pdfPath)}
                  className="px-3 py-1 rounded border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-[11px] hover:bg-emerald-500/20 transition-all flex items-center gap-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span>Inspect</span>
                </button>
                <a
                  href={cert.pdfPath}
                  download
                  className="px-3 py-1 rounded border border-slate-700 bg-slate-900 text-slate-300 text-[11px] hover:text-white transition-all flex items-center gap-1"
                >
                  <Download className="h-3 w-3" />
                  <span>PDF</span>
                </a>
              </div>
            </div>

            {/* Bottom Metadata */}
            <div className="p-3.5 bg-slate-950 text-xs">
              <div className="text-slate-200 font-bold">{cert.bulletTitle} - {cert.issuer}</div>
              <div className="text-slate-500 text-[10px] mt-0.5">{cert.issued}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Native PDF Modal Viewer */}
      {modalPdf && (
        <div
          onClick={() => setModalPdf(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full h-[85vh] bg-slate-900 rounded-xl border border-slate-700 flex flex-col overflow-hidden shadow-2xl"
          >
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800 bg-slate-950 text-xs">
              <span className="text-emerald-400 font-semibold">Document Viewer</span>
              <button
                onClick={() => setModalPdf(null)}
                className="p-1 rounded text-slate-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <iframe
              src={modalPdf}
              title="Certificate PDF"
              className="w-full flex-1 border-none bg-slate-950"
            />
          </div>
        </div>
      )}
    </section>
  );
};