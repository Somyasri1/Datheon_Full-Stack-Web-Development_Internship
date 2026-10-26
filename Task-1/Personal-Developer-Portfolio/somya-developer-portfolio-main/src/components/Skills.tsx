import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Code2, Layout, Server, Database, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code2 className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
      case 'layout':
        return <Layout className="w-5 h-5 text-sky-500 dark:text-sky-400" />;
      case 'server':
        return <Server className="w-5 h-5 text-purple-500 dark:text-purple-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
      case 'wrench':
      default:
        return <Wrench className="w-5 h-5 text-sky-500 dark:text-sky-400" />;
    }
  };

  const filteredCategories =
    activeCategory === 'all'
      ? skillsData
      : skillsData.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="flex flex-col space-y-6">
        {/* Section Kicker */}
        <div className="flex items-center gap-3">
          <span className="font-mono-code text-xs font-semibold text-sky-600 dark:text-sky-400 tracking-widest uppercase">
            02 / Capabilities
          </span>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Technical Skills
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-1">
              Core technologies and frameworks applied across academic coursework, projects, and internship experience.
            </p>
          </div>
          <span className="font-mono-code text-xs text-slate-500 dark:text-slate-400">
            5 Technical Categories
          </span>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 w-fit">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
              activeCategory === 'all'
                ? 'bg-indigo-600 text-white shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800'
            }`}
          >
            All Categories ({skillsData.length})
          </button>
          {skillsData.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* 5 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
          {filteredCategories.map((category) => {
            const isWide = category.id === 'tools' && activeCategory === 'all';
            return (
              <div
                key={category.id}
                className={`rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all ${
                  isWide ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center">
                      {getCategoryIcon(category.iconName)}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-5 leading-normal">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 font-mono-code text-xs font-medium text-slate-800 dark:text-slate-200 hover:border-indigo-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
