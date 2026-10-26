import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { downloadResumeFile } from '../utils/resumeDownload';
import { ArrowDown, FileText, Check, Copy, CheckCircle2, Terminal } from 'lucide-react';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const engineer = {
  name: "Uppalapati Somya Sri",
  role: "Aspiring Software Engineer",
  stack: [
    "MERN",
    "REST APIs",
    "Firebase",
    "JWT"
  ],
  focus: "Scalable Full-Stack Web Applications",
  status: "Seeking Fresher SDE / ASE Roles"
};

// System ready to deploy value
export default engineer;`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('projects');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-28 pb-16 sm:pb-24 overflow-hidden">
      {/* Ambient Radial Glows */}
      <div className="absolute top-10 left-1/4 -translate-x-1/2 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-[26rem] h-[26rem] bg-sky-500/10 dark:bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Hero Left Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Status Indicator Chip */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sky-500"></span>
              </span>
              <span className="font-mono-code text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-wide uppercase">
                {personalInfo.headline} • {personalInfo.subHeadline}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                UPPALAPATI<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-sky-500 dark:from-indigo-300 dark:via-purple-300 dark:to-sky-300">
                  SOMYA SRI
                </span>
              </h1>
            </div>

            {/* Summary Narrative */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download={personalInfo.downloadFileName}
                onClick={(e) => {
                  e.preventDefault();
                  downloadResumeFile(personalInfo.resumePath, personalInfo.downloadFileName);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 font-semibold text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Download Resume</span>
              </a>

              {/* Social Icon Links */}
              <div className="flex items-center gap-2 pl-1">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 hover:border-sky-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Skills Pill Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/50 font-mono-code font-medium text-indigo-700 dark:text-indigo-300">
                MERN Stack
              </span>
              <span className="px-2.5 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/50 font-mono-code font-medium text-sky-700 dark:text-sky-300">
                REST Architecture
              </span>
              <span className="px-2.5 py-1 rounded-md bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/50 font-mono-code font-medium text-purple-700 dark:text-purple-300">
                JWT & RBAC Auth
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono-code font-medium text-slate-700 dark:text-slate-300">
                Cloud & Firestore
              </span>
            </div>
          </div>

          {/* Hero Right: IDE / Code Preview Card */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-xl bg-[#060e20] border border-slate-800 shadow-2xl overflow-hidden relative group">
              {/* IDE Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1427] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block"></span>
                  <span className="font-mono-code text-xs text-slate-400 ml-2 font-medium">
                    engineer.js
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    aria-label="Copy snippet"
                    className="text-slate-400 hover:text-slate-200 transition-colors p-1 rounded hover:bg-slate-800"
                    title="Copy code"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <div className="flex items-center gap-1.5 text-slate-400 font-mono-code text-[11px]">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>node v20.x</span>
                  </div>
                </div>
              </div>

              {/* Syntax Highlighted Code */}
              <div className="p-4 sm:p-5 overflow-x-auto text-[13px] font-mono-code leading-relaxed text-slate-200">
                <pre>
                  <code>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-sky-300">engineer</span> = &#123;{'\n'}
                    {'  '}<span className="text-indigo-300">name</span>:{' '}
                    <span className="text-emerald-300">"Uppalapati Somya Sri"</span>,{'\n'}
                    {'  '}<span className="text-indigo-300">role</span>:{' '}
                    <span className="text-emerald-300">"Aspiring Software Engineer"</span>,{'\n'}
                    {'  '}<span className="text-indigo-300">stack</span>: [{'\n'}
                    {'    '}<span className="text-emerald-300">"MERN"</span>,{'\n'}
                    {'    '}<span className="text-emerald-300">"REST APIs"</span>,{'\n'}
                    {'    '}<span className="text-emerald-300">"Firebase"</span>,{'\n'}
                    {'    '}<span className="text-emerald-300">"JWT"</span>{'\n'}
                    {'  '}],{'\n'}
                    {'  '}<span className="text-indigo-300">focus</span>:{' '}
                    <span className="text-emerald-300">"Scalable Full-Stack Web Applications"</span>,{'\n'}
                    {'  '}<span className="text-indigo-300">status</span>:{' '}
                    <span className="text-sky-300">"Seeking Fresher SDE / ASE Roles"</span>{'\n'}
                    &#125;;{'\n\n'}
                    <span className="text-slate-500">// System ready to deploy value</span>{'\n'}
                    <span className="text-purple-400">export default</span> engineer;
                  </code>
                </pre>
              </div>

              {/* Terminal status bar */}
              <div className="px-4 py-2.5 bg-[#091122] border-t border-slate-800/80 flex items-center justify-between font-mono-code text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-sky-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                  <span>Node.js • ES6+ Environment</span>
                </span>
                <span>UTF-8 • LF • JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
