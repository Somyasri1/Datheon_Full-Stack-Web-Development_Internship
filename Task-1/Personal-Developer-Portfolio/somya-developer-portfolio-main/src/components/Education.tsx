import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, MapPin, Award, BookOpen } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="flex flex-col space-y-6">
        {/* Section Kicker */}
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-widest uppercase">
            05 / Academics
          </span>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
          Education
        </h2>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-sm flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div>
                {/* Score & Period Row */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="font-mono-code text-xs font-bold text-indigo-600 dark:text-indigo-400">
                    {edu.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 font-mono-code text-xs font-bold text-emerald-700 dark:text-emerald-300">
                    <Award className="w-3.5 h-3.5" />
                    <span>{edu.scoreLabel}: {edu.score}</span>
                  </span>
                </div>

                {/* Degree & College */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-indigo-500" />
                  <span>{edu.institution}</span>
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{edu.location}</span>
                </p>

                {/* Coursework & Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                  {edu.description}
                </p>
              </div>

              {edu.coursework && (
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Key Coursework &amp; Foundations</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono-code text-[11px] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
