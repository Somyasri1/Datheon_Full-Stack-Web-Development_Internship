import React from 'react';
import { internshipData } from '../data/portfolioData';
import { Calendar, MapPin, CheckCircle, Handshake } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="flex flex-col space-y-6">
        {/* Section Kicker */}
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-widest uppercase">
            03 / Experience
          </span>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
          Internship Experience
        </h2>

        {/* Timeline Node Card */}
        <div className="rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm relative overflow-hidden">
          {/* Card Header Row */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800/50 font-mono-code text-xs font-semibold text-sky-700 dark:text-sky-300 mb-2">
                <span>{internshipData.trainingDuration} Virtual Internship</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {internshipData.role}
              </h3>
              <p className="text-sm sm:text-base text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                {internshipData.organization}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mt-1">
                <Handshake className="w-4 h-4 text-purple-500" />
                <span>In Collaboration with {internshipData.collaboration}</span>
              </p>
            </div>

            <div className="flex flex-col md:items-end">
              <span className="inline-flex items-center gap-1.5 font-mono-code text-xs font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700">
                <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                <span>{internshipData.period}</span>
              </span>
              <span className="font-mono-code text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{internshipData.location}</span>
              </span>
            </div>
          </div>

          {/* Contributions & Impact */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80">
            <h4 className="font-semibold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
              Core Contributions &amp; Engineering Scope
            </h4>

            <ul className="space-y-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              {internshipData.descriptionBullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
              {internshipData.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 font-mono-code text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
