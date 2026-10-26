import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, MapPin, Briefcase, Layout, Server, Database, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const handleConnectClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById('contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="flex flex-col space-y-6">
        {/* Section Kicker */}
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-widest uppercase">
            01 / Profile
          </span>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Narrative Card */}
          <div className="lg:col-span-8 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                Passionate Developer Crafting Reliable Full-Stack Architectures
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                I am a Computer Science and Engineering undergraduate at Vishnu Institute of Technology, Bhimavaram. My journey is shaped by a deep fascination with building responsive web interfaces, robust backend systems, and well-structured database schemas.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Through my MERN Stack virtual internship and multifaceted academic projects, I have developed a strong practical foundation in end-to-end web engineering. My core strengths center around{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  Frontend UI development with React.js
                </strong>
                ,{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  Backend REST APIs with Node.js & Express.js
                </strong>
                ,{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  Database integration with MongoDB & Firebase Firestore
                </strong>
                , and enforcing secure{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  Role-Based Access Control (RBAC)
                </strong>{' '}
                via JWT authentication.
              </p>
            </div>

            {/* Quick Pill Highlights */}
            <div className="flex flex-wrap gap-2.5 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono-code text-xs font-medium">
                <GraduationCap className="w-4 h-4 text-indigo-500" />
                <span>B.Tech CSE (2023–2027)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono-code text-xs font-medium">
                <MapPin className="w-4 h-4 text-sky-500" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono-code text-xs font-medium">
                <Briefcase className="w-4 h-4 text-purple-500" />
                <span>Open for SDE Roles</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics / Key Strengths Panel */}
          <div className="lg:col-span-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between space-y-6 shadow-sm">
            <div>
              <span className="font-mono-code text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium">
                Engineering Focus
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                Core Competencies
              </h4>
            </div>

            <div className="space-y-3.5">
              <div className="rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 p-3.5 shadow-xs">
                <div className="flex items-center gap-2.5 mb-1">
                  <Layout className="w-4 h-4 text-indigo-500" />
                  <span className="font-semibold text-slate-900 dark:text-white text-sm">
                    Frontend Craft
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  Component-based architecture, modern React state flow, and mobile-first layouts.
                </p>
              </div>

              <div className="rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 p-3.5 shadow-xs">
                <div className="flex items-center gap-2.5 mb-1">
                  <Server className="w-4 h-4 text-sky-500" />
                  <span className="font-semibold text-slate-900 dark:text-white text-sm">
                    Backend & APIs
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  RESTful design, MVC separation, middleware validation, and token auth pipelines.
                </p>
              </div>

              <div className="rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/60 p-3.5 shadow-xs">
                <div className="flex items-center gap-2.5 mb-1">
                  <Database className="w-4 h-4 text-purple-500" />
                  <span className="font-semibold text-slate-900 dark:text-white text-sm">
                    Data Modeling
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  Mongoose schemas, indexing, NoSQL document stores, and Firebase Firestore rules.
                </p>
              </div>
            </div>

            <div>
              <a
                href="#contact"
                onClick={handleConnectClick}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-200 dark:bg-slate-800 hover:bg-indigo-600 dark:hover:bg-indigo-600 text-slate-800 dark:text-slate-200 hover:text-white font-semibold text-xs tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                <span>Connect with Me</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
