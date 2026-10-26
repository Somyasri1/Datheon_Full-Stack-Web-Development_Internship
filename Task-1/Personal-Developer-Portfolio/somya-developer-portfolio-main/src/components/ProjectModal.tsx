import React, { useEffect, useRef } from 'react';
import { Project } from '../types/portfolio';
import { X, ExternalLink, Github, CheckCircle, ShieldCheck, Database, Layers, Info } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Manage Escape key and body scroll
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    // Focus close button on mount
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`modal-title-${project.id}`}
      className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-slate-800 rounded-xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <span className="font-mono-code text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              {project.category}
            </span>
            <h3
              id={`modal-title-${project.id}`}
              className="text-2xl font-bold text-slate-900 dark:text-white mt-1"
            >
              {project.title} • Architecture Spec
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-6 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
          {/* Overview */}
          <div>
            <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-1.5 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-500" />
              <span>System Overview</span>
            </h4>
            <p>{project.architectureDetails.overview}</p>
          </div>

          {/* Key Engineering Features */}
          <div>
            <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-sky-500" />
              <span>Key Engineering Architecture</span>
            </h4>
            <ul className="space-y-2">
              {project.architectureDetails.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Schemas / Models */}
          {project.architectureDetails.modelsOrCollections && (
            <div>
              <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Database className="w-4 h-4 text-purple-500" />
                <span>Data Modeling &amp; Persistence</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.architectureDetails.modelsOrCollections.map((model, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 text-xs font-mono-code text-slate-700 dark:text-slate-300"
                  >
                    {model}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Security & Access */}
          {project.architectureDetails.security && (
            <div>
              <h4 className="text-base font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Security &amp; Authorization Pipeline</span>
              </h4>
              <ul className="space-y-1.5">
                {project.architectureDetails.security.map((sec, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>{sec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technology Badges */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono-code text-xs text-slate-800 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Verification / Staging Disclaimer */}
          <div className="p-3.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-start gap-3 text-slate-700 dark:text-slate-300">
            <Info className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
            <span className="text-xs leading-normal">
              {project.architectureDetails.liveDemoStatus}
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            Close
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-xs transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Open Repository</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};
