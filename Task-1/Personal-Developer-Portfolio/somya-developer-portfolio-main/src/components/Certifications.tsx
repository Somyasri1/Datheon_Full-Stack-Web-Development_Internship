import React from 'react';
import { certificationsData, activitiesData } from '../data/portfolioData';
import { Award, Trophy, Code2, Database, Shield, Cpu, Star, FileText, Zap, CheckCircle2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  const getCertIcon = (icon: string) => {
    switch (icon) {
      case 'code':
        return <Code2 className="w-5 h-5 text-indigo-500" />;
      case 'database':
        return <Database className="w-5 h-5 text-sky-500" />;
      case 'shield':
      default:
        return <Shield className="w-5 h-5 text-purple-500" />;
    }
  };

  const getActivityIcon = (icon: string) => {
    switch (icon) {
      case 'award':
        return <Trophy className="w-4 h-4 text-indigo-500" />;
      case 'cpu':
        return <Cpu className="w-4 h-4 text-sky-500" />;
      case 'star':
        return <Star className="w-4 h-4 text-purple-500" />;
      case 'file-text':
        return <FileText className="w-4 h-4 text-emerald-500" />;
      case 'zap':
      default:
        return <Zap className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <section id="certifications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="flex flex-col space-y-6">
        {/* Section Kicker */}
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-widest uppercase">
            06 / Credentials
          </span>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
          Certifications &amp; Hackathons
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
          {/* Verified Certifications (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-500" />
              <span>Verified Certifications</span>
            </h3>

            <div className="space-y-3.5">
              {certificationsData.map((cert, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-sm flex items-start gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                    {getCertIcon(cert.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                      {cert.issuer}
                    </p>
                    <span className="inline-block font-mono-code text-xs text-indigo-600 dark:text-indigo-400 mt-2 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-200 dark:border-indigo-800/50">
                      {cert.topics}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Competitions (Right 5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Trophy className="w-5 h-5 text-sky-500" />
              <span>Competitions &amp; Hackathons</span>
            </h3>

            <div className="rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-sm space-y-2.5">
              {activitiesData.map((activity, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="w-7 h-7 rounded-md bg-white dark:bg-slate-700 flex items-center justify-center shrink-0 shadow-xs">
                    {getActivityIcon(activity.icon)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 block truncate">
                      {activity.title}
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 block font-mono-code">
                      {activity.type}
                    </span>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
