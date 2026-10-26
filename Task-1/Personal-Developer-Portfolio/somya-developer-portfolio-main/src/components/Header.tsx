import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { downloadResumeFile } from '../utils/resumeDownload';
import { Menu, X, Sun, Moon, Download, User } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-[#0b1326]/90 dark:bg-[#0b1326]/90 bg-white/90 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/20 border-b border-slate-200/50 dark:border-slate-800/60'
          : 'bg-[#0b1326]/75 dark:bg-[#0b1326]/75 bg-slate-50/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between gap-4">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          >
            <div className="h-10 px-3 rounded-lg bg-indigo-950/80 dark:bg-slate-800/80 border border-indigo-500/30 dark:border-indigo-400/20 flex items-center justify-center font-mono-code text-sm font-bold text-indigo-400 dark:text-indigo-300 shadow-sm group-hover:border-indigo-400 transition-colors">
              USS
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 dark:text-slate-100 leading-tight text-base tracking-tight">
                SOMYA SRI
              </span>
              <span className="font-mono-code text-[11px] text-slate-500 dark:text-slate-400 tracking-wider uppercase">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-1 p-1 rounded-xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-semibold"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3.5 py-1.5 rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Header Controls & CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Mode Switch */}
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label={darkMode ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
              className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Resume Download Button */}
            <a
              href={personalInfo.resumePath}
              download={personalInfo.downloadFileName}
              onClick={(e) => {
                e.preventDefault();
                downloadResumeFile(personalInfo.resumePath, personalInfo.downloadFileName);
              }}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs tracking-wide transition-all shadow-sm hover:shadow hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </a>

            {/* Avatar Indicator */}
            <div
              className="hidden md:flex w-9 h-9 rounded-full bg-indigo-500/20 dark:bg-indigo-600/30 border border-indigo-500/40 items-center justify-center text-indigo-600 dark:text-indigo-300"
              title="Uppalapati Somya Sri"
              aria-label="Profile Status: Ready for Work"
            >
              <User className="w-4 h-4" />
            </div>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Mobile Navigation'}
              className="xl:hidden w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 flex items-center justify-center text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 top-20 z-50 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm ml-auto h-[calc(100vh-5rem)] bg-white dark:bg-[#0f172a] border-l border-slate-200 dark:border-slate-800 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                <span className="font-mono-code text-xs text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">
                  Navigation Menu
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {personalInfo.shortName}
                </span>
              </div>

              <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-indigo-600 text-white font-semibold'
                          : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-white"></span>}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">
              <a
                href={personalInfo.resumePath}
                download={personalInfo.downloadFileName}
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  downloadResumeFile(personalInfo.resumePath, personalInfo.downloadFileName);
                }}
                className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>

              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1 pt-2">
                <span>Theme: {darkMode ? 'Dark Navy' : 'Daylight Slate'}</span>
                <button
                  type="button"
                  onClick={() => setDarkMode((prev) => !prev)}
                  className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  Toggle Theme
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
