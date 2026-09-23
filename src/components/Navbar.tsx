import React, { useState, useEffect } from 'react';
import { PageSection } from '../types';

interface NavbarProps {
  activeSection: PageSection;
  onNavigate: (section: PageSection, title: string) => void;
  onOpenProgramsModal: () => void;
  onOpenGalleryModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenProgramsModal,
  onOpenGalleryModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, section: PageSection, title: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (section === 'programs') {
      onOpenProgramsModal();
      return;
    }
    if (section === 'gallery') {
      onOpenGalleryModal();
      return;
    }

    onNavigate(section, title);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#200a28]/95 backdrop-blur-xl border-b border-[#fff4e5]/10 shadow-2xl py-3'
            : 'bg-gradient-to-b from-[#17041e]/90 via-[#200a28]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Shamsul Huda emblem & title */}
          <button
            onClick={(e) => handleLinkClick(e, 'home', 'Home Stage')}
            className="group flex items-center space-x-3 text-left focus:outline-none transition-transform active:scale-95"
            title="L'Intervention 2026"
          >
            <img
              src="https://lh3.googleusercontent.com/aida/AEtjO1UIb4krRxly8eJHRq4FiCjhTPlLp7pqfMoSCaRSWbEjeSnpEV4IhisUGHU_ysIyANBYCBPu55rXOuYqtAjBX4p81XyUvYUohtYYrQt1JFEyMGMqp2bFZ0xJxQohqCHPA-aB4xOCjgicQvfQEHzpPI0rBhDvgfJWgqKhKhVZ-G2mv6bnCown-PLTr7o3mPw7bOC6VULzw01Ai9SJ-zco9aobs8ObsNAF53KAibLeLsM1hQwABmg3DsrFsHOgYuhlgP7PpsKylfl8bI4"
              alt="L'Intervention Crest"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-[0.28em] text-[#ffc174] uppercase font-bold leading-tight">
                Shamsul Huda
              </span>
              <span className="text-[9px] font-mono tracking-[0.24em] text-[#fff4e5]/75 uppercase">
                ARTS FEST '26
              </span>
            </div>
          </button>

          {/* Center / Right: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-[11px] font-mono tracking-[0.22em] uppercase">
            <button
              onClick={(e) => handleLinkClick(e, 'home', 'Home Stage')}
              className={`transition-colors py-1 relative ${
                activeSection === 'home'
                  ? 'text-[#ffc174] font-bold'
                  : 'text-[#fff4e5]/70 hover:text-[#ffc174]'
              }`}
            >
              Home
              {activeSection === 'home' && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#ffc174] rounded-full" />
              )}
            </button>

            <button
              onClick={(e) => handleLinkClick(e, 'teams', 'Festival Contingents')}
              className={`transition-colors py-1 relative ${
                activeSection === 'teams'
                  ? 'text-[#ffc174] font-bold'
                  : 'text-[#fff4e5]/70 hover:text-[#ffc174]'
              }`}
            >
              Teams
              {activeSection === 'teams' && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#ffc174] rounded-full" />
              )}
            </button>

            <button
              onClick={(e) => handleLinkClick(e, 'gallery', 'Fest Library & Archives')}
              className="text-[#fff4e5]/70 hover:text-[#ffc174] transition-colors py-1"
            >
              Library
            </button>
          </nav>

          {/* Right: Festival Status & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-[#382140]/60 border border-[#fff4e5]/15 text-[11px] font-mono tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#ffc174] animate-pulse" />
              <span className="text-[#fff4e5] uppercase font-semibold">Fest 2026</span>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-[#382140] border border-[#ffc174]/30 flex flex-col items-center justify-center gap-1 text-[#fff4e5]"
              aria-label="Toggle Menu"
            >
              <span className="w-4 h-[2px] bg-[#ffc174]" />
              <span className="w-4 h-[2px] bg-[#ffc174]" />
              <span className="w-4 h-[2px] bg-[#ffc174]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#1a0522]/98 backdrop-blur-2xl md:hidden flex flex-col p-8 pt-24 animate-in fade-in duration-200">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#2d1635] text-[#fff4e5] flex items-center justify-center text-lg font-bold border border-[#ffc174]/30"
          >
            ✕
          </button>

          <div className="flex flex-col space-y-6 text-center font-syne text-2xl uppercase tracking-wider text-[#fff4e5]">
            <button
              onClick={(e) => handleLinkClick(e, 'home', 'Home Stage')}
              className="hover:text-[#ffc174] transition-colors text-left border-b border-[#fff4e5]/10 pb-4"
            >
              ✦ Home
            </button>
            <button
              onClick={(e) => handleLinkClick(e, 'teams', 'Festival Contingents')}
              className="hover:text-[#ffc174] transition-colors text-left border-b border-[#fff4e5]/10 pb-4"
            >
              ✦ Teams
            </button>
            <button
              onClick={(e) => handleLinkClick(e, 'gallery', 'Fest Library & Archives')}
              className="hover:text-[#ffc174] transition-colors text-left border-b border-[#fff4e5]/10 pb-4"
            >
              ✦ Library
            </button>
          </div>

          <div className="mt-auto pt-8 border-t border-[#fff4e5]/10 flex flex-col items-center text-center">
            <span className="font-mono text-xs text-[#ffc174] tracking-widest uppercase">
              Shamsul Huda Arts Fest '26
            </span>
            <span className="font-newsreader italic text-xs text-[#fff4e5]/60 mt-1">
              Écris Le Monde · Four Teams · One Stage
            </span>
          </div>
        </div>
      )}
    </>
  );
};
