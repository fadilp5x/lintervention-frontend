import React, { useState, useEffect, useRef } from 'react';
import { PageSection } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TeamsSection } from './components/TeamsSection';
import { LeaderboardSection } from './components/LeaderboardSection';
import { CloudTransition } from './components/CloudTransition';
import { ProgramsGalleryModal } from './components/ProgramsGalleryModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';

export default function App() {
  const [activeSection, setActiveSection] = useState<PageSection>('home');
  const [cloudActive, setCloudActive] = useState(false);
  const [targetDestination, setTargetDestination] = useState<{ section: PageSection; title: string }>({
    section: 'home',
    title: 'Home Stage',
  });

  const [modalType, setModalType] = useState<'programs' | 'gallery' | null>(null);

  // Pending scroll target during cloud transition
  const pendingScrollSectionRef = useRef<PageSection | null>(null);

  // Star brush custom cursor
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track active section on natural scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      const homeEl = document.getElementById('home');
      const teamsEl = document.getElementById('teams');
      const leaderboardEl = document.getElementById('leaderboard');

      if (leaderboardEl && scrollPos >= leaderboardEl.offsetTop) {
        setActiveSection('leaderboard');
      } else if (teamsEl && scrollPos >= teamsEl.offsetTop) {
        setActiveSection('teams');
      } else if (homeEl) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger Diagonal Cloud Transition
  const triggerCloudTransition = (section: PageSection, title: string) => {
    setTargetDestination({ section, title });
    pendingScrollSectionRef.current = section;
    setCloudActive(true);
  };

  // Called when cloud is fully covering the screen (around 2s hold mark)
  const handleCloudPhaseComplete = () => {
    const target = pendingScrollSectionRef.current;
    if (target) {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: 'auto' });
      }
      setActiveSection(target);
      pendingScrollSectionRef.current = null;
    }
    setCloudActive(false);
  };

  return (
    <div className="relative min-h-screen bg-[#200a28] text-[#fff4e5] overflow-x-hidden">
      {/* Scroll Progress Bar at the very top */}
      <ScrollProgressBar />

      {/* Custom Star Brush Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 hidden md:block"
        style={{ willChange: 'transform' }}
      >
        <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#f59e0b] to-[#ffc174] shadow-[0_0_12px_#f59e0b] flex items-center justify-center">
          <span className="text-[9px] text-[#200a28] font-black scale-75 leading-none">✦</span>
        </div>
      </div>

      {/* Cloud Transition Layer (Diag Rise & Part) */}
      <CloudTransition
        isOpen={cloudActive}
        targetName={targetDestination.title}
        onPhaseComplete={handleCloudPhaseComplete}
      />

      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={triggerCloudTransition}
        onOpenProgramsModal={() => setModalType('programs')}
        onOpenGalleryModal={() => setModalType('gallery')}
      />

      {/* Page 1: Top Hero Section */}
      <HeroSection
        onNavigateToSection={(sec, title) => triggerCloudTransition(sec, title)}
        onOpenGallery={() => setModalType('gallery')}
      />

      {/* Page 2: Festival Contingents (Loaded on scroll down or via transition) */}
      <TeamsSection
        onNavigateToLeaderboard={() => triggerCloudTransition('leaderboard', 'Live Leaderboard')}
      />

      {/* Page 3: Leaderboard (Shown on further scroll down or via transition) */}
      <LeaderboardSection />

      {/* Shared Modals for Programs Lineup and Gallery */}
      <ProgramsGalleryModal
        type={modalType}
        onClose={() => setModalType(null)}
      />

      {/* Global Bottom Footer */}
      <footer className="w-full bg-[#120417] text-[#fff4e5]/80 py-8 px-6 md:px-12 border-t border-[#fff4e5]/10 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[#ffc174] font-bold">L'Intervention 2026</span>
            <span className="text-[#fff4e5]/40">·</span>
            <span>Shamsul Huda Arts Fest</span>
          </div>
          <div className="text-[#fff4e5]/60">
            © 2026 L'Intervention Arts Guild. All rights reserved. Écris Le Monde.
          </div>
        </div>
      </footer>
    </div>
  );
}
