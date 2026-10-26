import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { downloadResumeFile, openResumeInNewTab } from '../utils/resumeDownload';
import { Download, ExternalLink, FileCheck, FileText, ZoomIn, ZoomOut, RotateCcw, ShieldCheck, AlertCircle } from 'lucide-react';
import resumePreviewImg from '../assets/resume-preview.png';

export const ResumeSection: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [imgError, setImgError] = useState<boolean>(false);
  const [resolvedPdfUrl, setResolvedPdfUrl] = useState<string>(personalInfo.resumePath);

  // Compute domain-agnostic asset URL for the PDF
  useEffect(() => {
    try {
      const base = import.meta.env.BASE_URL || '/';
      const cleanBase = base.endsWith('/') ? base : `${base}/`;
      setResolvedPdfUrl(`${cleanBase}assets/resume.pdf`);
    } catch {
      setResolvedPdfUrl(personalInfo.resumePath);
    }
  }, []);

  const handleDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    downloadResumeFile(resolvedPdfUrl, personalInfo.downloadFileName);
  };

  const handlePreview = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openResumeInNewTab(resolvedPdfUrl);
  };

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 15, 160));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 15, 75));
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  return (
    <section id="resume" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="flex flex-col space-y-6">
        {/* Section Header Card */}
        <div className="rounded-2xl bg-gradient-to-br from-indigo-950/40 via-slate-900/80 to-purple-950/30 dark:from-indigo-950/60 dark:via-slate-900 dark:to-purple-950/50 border border-indigo-500/30 dark:border-indigo-500/20 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative">
            <div className="space-y-2">
              <span className="font-mono-code text-xs font-semibold text-sky-400 tracking-widest uppercase flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-sky-400" />
                <span>Official Curriculum Vitae</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Curriculum Vitae / Resume
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Official single-page resume detailing academic records, full-stack MERN internship experience, software projects, and technical skills.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono-code text-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Official Resume Document (PDF)</span>
                </span>
                <span className="text-xs font-mono-code text-slate-400">
                  • Single-page A4
                </span>
              </div>
            </div>

            {/* Core Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href={resolvedPdfUrl}
                download={personalInfo.downloadFileName}
                onClick={handleDownload}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-md hover:shadow-indigo-500/25 transition-all hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <a
                href={resolvedPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handlePreview}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Preview in New Tab</span>
              </a>
            </div>
          </div>
        </div>

        {/* Live Document Preview Container */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 sm:p-6 shadow-xl flex flex-col space-y-4">
          {/* Viewer Toolbar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2.5">
              <span className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base flex items-center gap-2">
                <FileText className="w-4 h-4 text-indigo-500" />
                <span>Live Document Preview</span>
              </span>
              <span className="text-xs font-mono-code text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                Page 1 of 1
              </span>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
              <button
                type="button"
                onClick={handleZoomOut}
                aria-label="Zoom out"
                className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono-code px-1.5 font-medium">{zoomLevel}%</span>
              <button
                type="button"
                onClick={handleZoomIn}
                aria-label="Zoom in"
                className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                aria-label="Reset zoom"
                className="p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Reset to 100%"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Centered Document Display Area */}
          <div className="w-full relative min-h-[680px] md:min-h-[820px] bg-slate-100 dark:bg-slate-950 rounded-xl overflow-hidden border border-slate-300 dark:border-slate-800 flex items-start justify-center">
            <div className="w-full h-full overflow-auto p-4 sm:p-6 flex items-start justify-center bg-slate-200/70 dark:bg-slate-950/90 scrollbar-thin">
              {!imgError ? (
                <div
                  style={{ width: `${zoomLevel}%`, maxWidth: '880px', transition: 'width 0.15s ease' }}
                  className="bg-white shadow-2xl rounded-lg overflow-hidden border border-slate-300 mx-auto"
                >
                  <img
                    src={resumePreviewImg}
                    alt="Uppalapati Somya Sri Official Resume Document"
                    className="w-full h-auto block select-none"
                    loading="eager"
                    onError={() => setImgError(true)}
                  />
                </div>
              ) : (
                <div className="p-8 text-center max-w-md my-auto space-y-4">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center mx-auto">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-slate-200 text-base">
                    Document Preview
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    The document preview can be accessed directly using the PDF download or new tab preview buttons.
                  </p>
                  <div className="flex justify-center gap-3 pt-2">
                    <a
                      href={resolvedPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <span>Open Resume PDF</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Status Bar with Direct Fallback Link */}
          <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600 dark:text-slate-400">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
              <span>Document preview loaded from <code>{resolvedPdfUrl}</code></span>
            </span>

            <div className="flex items-center gap-3 shrink-0">
              <a
                href={resolvedPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1"
              >
                <span>Open Resume PDF in New Tab</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
