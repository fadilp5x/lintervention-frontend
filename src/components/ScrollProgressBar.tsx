import React, { useEffect, useState } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const currentProgress = (window.scrollY / scrollHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-[3px] sm:h-[3.5px] z-[60] pointer-events-none bg-[#17041e]/50 backdrop-blur-xs"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#f59e0b] via-[#ffc174] to-[#f9d8ff] transition-[width] duration-100 ease-out shadow-[0_0_12px_rgba(255,193,116,0.9)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
