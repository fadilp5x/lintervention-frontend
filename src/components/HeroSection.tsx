import React, { useEffect, useRef, useState, useCallback } from 'react';
import { audioEngine } from '../utils/audio';

interface HeroSectionProps {
  onNavigateToSection: (section: 'teams' | 'leaderboard', title: string) => void;
  onOpenGallery: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigateToSection,
  onOpenGallery,
}) => {
  const skyCanvasRef = useRef<HTMLCanvasElement>(null);
  const fxCanvasRef = useRef<HTMLCanvasElement>(null);
  const logoCardRef = useRef<HTMLDivElement>(null);
  const heroContainerRef = useRef<HTMLDivElement>(null);

  // Easter egg 5 continuous clicks tracking
  const [clickCount, setClickCount] = useState(0);
  const clickTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Kinetic Tagline Scramble state
  const TARGET_TEXT = "ÉCRIS LE MONDE";
  const [taglineChars, setTaglineChars] = useState<string[]>(TARGET_TEXT.split(''));
  const [isScrambling, setIsScrambling] = useState(false);
  const scrambleIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoStopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrambleGlyphs = [
    "ا", "ك", "ت", "ب", "ع", "ل", "م", "و",
    "É", "C", "R", "I", "S", "L", "E", "M", "O", "N", "D", "E",
    "α", "β", "γ", "δ", "Ω", "Ψ", "Σ", "Φ",
    "ᚠ", "ᚢ", "ᚦ", "ᚨ", "ᚱ", "ᚲ", "ᚷ",
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "✦", "✧", "✺"
  ];

  // Particle systems refs
  const shockwavesRef = useRef<Array<{ x: number; y: number; radius: number; maxRadius: number; growth: number; alpha: number; lineWidth: number; color: string }>>([]);
  const sparksRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; drag: number; gravity: number; radius: number; maxRadius?: number; color: string; alpha: number; decay: number; trail: Array<{ x: number; y: number }>; isFlash?: boolean }>>([]);
  const planesRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; angle: number; color: { r: number; g: number; b: number }; smokeCounter: number }>>([]);
  const smokeRef = useRef<Array<{ x: number; y: number; vx: number; vy: number; radius: number; grow: number; alpha: number; decay: number; color: { r: number; g: number; b: number } }>>([]);

  const mousePosRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, curX: 0, curY: 0 });
  const logoSpringRef = useRef({ rotX: 0, rotY: 0, targetRotX: 0, targetRotY: 0, scale: 1, targetScale: 1 });

  // Spawn firecracker spark burst
  const spawnCelebratoryBurst = useCallback((originX: number, originY: number, sparkCount = 35, intensity = 1.0) => {
    audioEngine.playSparkCrack(intensity);

    // Flash halo
    sparksRef.current.push({
      x: originX,
      y: originY,
      vx: 0,
      vy: 0,
      drag: 1,
      gravity: 0,
      radius: 6 * intensity,
      maxRadius: 28 * intensity,
      color: '#fff4e5',
      alpha: 0.95,
      decay: 0.1,
      trail: [],
      isFlash: true,
    });

    const sparkPalette = ['#fff4e5', '#ffc174', '#f59e0b', '#fed7aa', '#ffffff', '#e2b8ec'];
    for (let i = 0; i < sparkCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = (Math.random() * 6.5 + 2.0) * intensity;
      const color = sparkPalette[Math.floor(Math.random() * sparkPalette.length)];
      const lifespan = Math.random() * 0.7 + 0.5;

      sparksRef.current.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        drag: 0.94 + Math.random() * 0.03,
        gravity: 0.1 + Math.random() * 0.06,
        radius: Math.random() * 2.2 + 0.8,
        color: color,
        alpha: 1.0,
        decay: 1.0 / (lifespan * 60),
        trail: [],
      });
    }
  }, []);

  // Spawn shockwave ring
  const spawnShockwaveRing = useCallback((originX: number, originY: number) => {
    shockwavesRef.current.push({
      x: originX,
      y: originY,
      radius: 20,
      maxRadius: Math.max(window.innerWidth, window.innerHeight) * 0.65,
      growth: 16,
      alpha: 0.85,
      lineWidth: 3.5,
      color: '#ffc174',
    });
    shockwavesRef.current.push({
      x: originX,
      y: originY,
      radius: 10,
      maxRadius: Math.max(window.innerWidth, window.innerHeight) * 0.5,
      growth: 12,
      alpha: 0.6,
      lineWidth: 2,
      color: '#fff4e5',
    });
  }, []);

  // Launch aerobatic squadron flypast
  const launchSquadronFlypast = useCallback(() => {
    audioEngine.playFlypastSound();
    const w = window.innerWidth;
    const h = window.innerHeight;

    const festivalSmokeColors = [
      { r: 245, g: 158, b: 11 },  // Saffron Orange / Gold
      { r: 16,  g: 185, b: 129 }, // Emerald Green
      { r: 59,  g: 130, b: 246 }, // Royal Azure
      { r: 239, g: 68,  b: 68 },  // Crimson Ruby
      { r: 254, g: 240, b: 138 }  // Golden Champagne Yellow
    ];

    const startAngle = -Math.PI * 0.28 + (Math.random() * 0.1 - 0.05);
    const baseSpeed = Math.min(w, h) * 0.016 + 11;
    const originX = -120;
    const originY = h * 0.85 + Math.random() * 50;

    const offsets = [
      { dx: 0, dy: 0, color: festivalSmokeColors[0] },
      { dx: -60, dy: 45, color: festivalSmokeColors[1] },
      { dx: -120, dy: 90, color: festivalSmokeColors[2] },
      { dx: -55, dy: -45, color: festivalSmokeColors[3] },
      { dx: -110, dy: -90, color: festivalSmokeColors[4] }
    ];

    offsets.forEach((off, idx) => {
      const cosA = Math.cos(startAngle);
      const sinA = Math.sin(startAngle);
      const rotatedX = off.dx * cosA - off.dy * sinA;
      const rotatedY = off.dx * sinA + off.dy * cosA;

      planesRef.current.push({
        x: originX + rotatedX,
        y: originY + rotatedY,
        vx: Math.cos(startAngle) * (baseSpeed + idx * 0.2),
        vy: Math.sin(startAngle) * (baseSpeed + idx * 0.2),
        angle: startAngle,
        color: off.color,
        smokeCounter: 0,
      });
    });
  }, []);

  // Handle Logo Click with continuous 5-click easter egg detector
  const handleLogoClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    audioEngine.playPunchSound();

    const rect = e.currentTarget.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    spawnShockwaveRing(cx, cy);
    spawnCelebratoryBurst(cx, cy, 38, 1.3);
    launchSquadronFlypast();

    // Tactile punch visual
    if (logoCardRef.current) {
      logoCardRef.current.classList.remove('logo-punch-active');
      void logoCardRef.current.offsetWidth;
      logoCardRef.current.classList.add('logo-punch-active');
    }

    // 5 Continuous Clicks logic
    const nextCount = clickCount + 1;
    setClickCount(nextCount);

    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);

    if (nextCount >= 5) {
      // Trigger Cloud Transition Easter Egg!
      setClickCount(0);
      onNavigateToSection('teams', 'Festival Contingents');
    } else {
      clickTimerRef.current = setTimeout(() => {
        setClickCount(0);
      }, 2500);
    }
  };

  // Kinetic Tagline Scramble Functions
  const startScramble = useCallback((durationMs = 8000) => {
    setIsScrambling(true);
    if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);
    if (autoStopTimeoutRef.current) clearTimeout(autoStopTimeoutRef.current);

    const startTime = Date.now();
    const totalChars = TARGET_TEXT.length;

    scrambleIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      const lockCount = progress > 0.7 ? Math.floor(((progress - 0.7) / 0.3) * totalChars) : 0;

      const newChars: string[] = [];
      for (let i = 0; i < totalChars; i++) {
        if (TARGET_TEXT[i] === ' ') {
          newChars.push(' ');
        } else if (i < lockCount) {
          newChars.push(TARGET_TEXT[i]);
        } else {
          newChars.push(scrambleGlyphs[Math.floor(Math.random() * scrambleGlyphs.length)]);
        }
      }
      setTaglineChars(newChars);
    }, 45);

    autoStopTimeoutRef.current = setTimeout(() => {
      stopScramble();
    }, durationMs);
  }, []);

  const stopScramble = useCallback(() => {
    if (scrambleIntervalRef.current) clearInterval(scrambleIntervalRef.current);
    if (autoStopTimeoutRef.current) clearTimeout(autoStopTimeoutRef.current);
    setIsScrambling(false);
    setTaglineChars(TARGET_TEXT.split(''));
  }, []);

  // Main Canvas & Physics Loop
  useEffect(() => {
    const skyCanvas = skyCanvasRef.current;
    const fxCanvas = fxCanvasRef.current;
    if (!skyCanvas || !fxCanvas) return;

    let sw = (skyCanvas.width = window.innerWidth);
    let sh = (skyCanvas.height = window.innerHeight);
    let pw = (fxCanvas.width = window.innerWidth);
    let ph = (fxCanvas.height = window.innerHeight);

    const sCtx = skyCanvas.getContext('2d');
    const pCtx = fxCanvas.getContext('2d');

    const stars = Array.from({ length: 70 }, () => ({
      x: Math.random() * sw,
      y: Math.random() * sh,
      size: Math.random() * 1.5 + 0.4,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.02 + 0.006,
    }));

    const embers = Array.from({ length: 30 }, () => ({
      x: Math.random() * pw,
      y: Math.random() * ph,
      vx: (Math.random() - 0.5) * 0.28,
      vy: -Math.random() * 0.5 - 0.15,
      radius: Math.random() * 1.6 + 0.4,
      color: Math.random() > 0.5 ? 'rgba(255, 193, 116,' : 'rgba(255, 244, 229,',
      life: Math.random() * 0.65 + 0.25,
      osc: Math.random() * Math.PI * 2,
    }));

    let animationId: number;

    const renderLoop = () => {
      // 1. Render Sky Stars
      if (sCtx) {
        sCtx.clearRect(0, 0, sw, sh);
        stars.forEach((st) => {
          st.alpha += st.speed;
          if (st.alpha > 0.92 || st.alpha < 0.2) st.speed = -st.speed;
          sCtx.beginPath();
          sCtx.arc(st.x, st.y, st.size, 0, Math.PI * 2);
          sCtx.fillStyle = `rgba(255, 244, 229, ${Math.max(0.1, st.alpha)})`;
          sCtx.shadowBlur = 3;
          sCtx.shadowColor = 'rgba(255, 193, 116, 0.5)';
          sCtx.fill();
        });
      }

      // 2. Render FX Canvas (Embers, Shockwaves, Smoke, Planes, Sparks)
      if (pCtx) {
        pCtx.clearRect(0, 0, pw, ph);

        // Micro Embers
        embers.forEach((p) => {
          p.y += p.vy;
          p.osc += 0.02;
          p.x += p.vx + Math.sin(p.osc) * 0.22;
          if (p.y < -10) { p.y = ph + 10; p.x = Math.random() * pw; }
          if (p.x < -10) p.x = pw + 10;
          if (p.x > pw + 10) p.x = -10;

          pCtx.beginPath();
          pCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          pCtx.fillStyle = `${p.color} ${p.life})`;
          pCtx.shadowBlur = 3;
          pCtx.shadowColor = 'rgba(255, 193, 116, 0.4)';
          pCtx.fill();
        });

        // Shockwaves
        for (let i = shockwavesRef.current.length - 1; i >= 0; i--) {
          const ring = shockwavesRef.current[i];
          ring.radius += ring.growth;
          ring.alpha -= 0.022;

          if (ring.alpha <= 0 || ring.radius >= ring.maxRadius) {
            shockwavesRef.current.splice(i, 1);
            continue;
          }

          pCtx.save();
          pCtx.beginPath();
          pCtx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
          pCtx.strokeStyle = ring.color;
          pCtx.lineWidth = ring.lineWidth;
          pCtx.globalAlpha = Math.max(0, ring.alpha);
          pCtx.shadowBlur = 15;
          pCtx.shadowColor = ring.color;
          pCtx.stroke();
          pCtx.restore();
        }

        // Smoke particles
        for (let i = smokeRef.current.length - 1; i >= 0; i--) {
          const sm = smokeRef.current[i];
          sm.x += sm.vx;
          sm.y += sm.vy;
          sm.radius += sm.grow;
          sm.alpha -= sm.decay;

          if (sm.alpha <= 0) {
            smokeRef.current.splice(i, 1);
            continue;
          }

          pCtx.save();
          pCtx.beginPath();
          pCtx.arc(sm.x, sm.y, sm.radius, 0, Math.PI * 2);
          pCtx.fillStyle = `rgba(${sm.color.r}, ${sm.color.g}, ${sm.color.b}, ${Math.max(0, sm.alpha)})`;
          pCtx.shadowBlur = 10;
          pCtx.shadowColor = `rgba(${sm.color.r}, ${sm.color.g}, ${sm.color.b}, 0.5)`;
          pCtx.fill();
          pCtx.restore();
        }

        // Aerobatic Planes
        for (let i = planesRef.current.length - 1; i >= 0; i--) {
          const plane = planesRef.current[i];
          plane.x += plane.vx;
          plane.y += plane.vy;
          plane.smokeCounter++;

          if (plane.smokeCounter % 1 === 0) {
            for (let s = 0; s < 2; s++) {
              smokeRef.current.push({
                x: plane.x - Math.cos(plane.angle) * 8 + (Math.random() - 0.5) * 3,
                y: plane.y - Math.sin(plane.angle) * 8 + (Math.random() - 0.5) * 3,
                vx: -Math.cos(plane.angle) * 1.5 + (Math.random() - 0.5) * 0.8,
                vy: -Math.sin(plane.angle) * 1.5 + (Math.random() - 0.5) * 0.8,
                radius: Math.random() * 4 + 4,
                grow: 0.35 + Math.random() * 0.25,
                alpha: 0.72,
                decay: 0.007 + Math.random() * 0.004,
                color: plane.color,
              });
            }
          }

          pCtx.save();
          pCtx.translate(plane.x, plane.y);
          pCtx.rotate(plane.angle);

          pCtx.fillStyle = '#fff4e5';
          pCtx.shadowBlur = 8;
          pCtx.shadowColor = `rgb(${plane.color.r}, ${plane.color.g}, ${plane.color.b})`;

          pCtx.beginPath();
          pCtx.moveTo(14, 0);
          pCtx.lineTo(-10, -9);
          pCtx.lineTo(-6, -2);
          pCtx.lineTo(-12, -4);
          pCtx.lineTo(-10, 0);
          pCtx.lineTo(-12, 4);
          pCtx.lineTo(-6, 2);
          pCtx.lineTo(-10, 9);
          pCtx.closePath();
          pCtx.fill();

          pCtx.fillStyle = `rgb(${plane.color.r}, ${plane.color.g}, ${plane.color.b})`;
          pCtx.beginPath();
          pCtx.arc(-8, 0, 2.5, 0, Math.PI * 2);
          pCtx.fill();

          pCtx.restore();

          if (plane.x > pw + 250 || plane.y < -250 || plane.x < -300 || plane.y > ph + 300) {
            planesRef.current.splice(i, 1);
          }
        }

        // Firecracker Sparks
        for (let i = sparksRef.current.length - 1; i >= 0; i--) {
          const sp = sparksRef.current[i];

          if (sp.isFlash) {
            sp.radius += 2.0;
            sp.alpha -= sp.decay;
            if (sp.alpha <= 0) {
              sparksRef.current.splice(i, 1);
              continue;
            }
            pCtx.save();
            pCtx.beginPath();
            pCtx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);
            pCtx.fillStyle = `rgba(255, 244, 229, ${Math.max(0, sp.alpha * 0.45)})`;
            pCtx.shadowBlur = 12;
            pCtx.shadowColor = '#fed7aa';
            pCtx.fill();
            pCtx.restore();
            continue;
          }

          sp.vx *= sp.drag;
          sp.vy = sp.vy * sp.drag + sp.gravity;

          sp.trail.push({ x: sp.x, y: sp.y });
          if (sp.trail.length > 5) sp.trail.shift();

          sp.x += sp.vx;
          sp.y += sp.vy;
          sp.alpha -= sp.decay;

          if (sp.alpha <= 0) {
            sparksRef.current.splice(i, 1);
            continue;
          }

          if (sp.trail.length > 1) {
            pCtx.save();
            pCtx.beginPath();
            pCtx.moveTo(sp.trail[0].x, sp.trail[0].y);
            for (let t = 1; t < sp.trail.length; t++) {
              pCtx.lineTo(sp.trail[t].x, sp.trail[t].y);
            }
            pCtx.strokeStyle = sp.color;
            pCtx.lineWidth = sp.radius * 0.75;
            pCtx.lineCap = 'round';
            pCtx.globalAlpha = Math.max(0, sp.alpha * 0.4);
            pCtx.stroke();
            pCtx.restore();
          }

          pCtx.save();
          pCtx.beginPath();
          pCtx.arc(sp.x, sp.y, sp.radius, 0, Math.PI * 2);
          pCtx.fillStyle = sp.color;
          pCtx.globalAlpha = Math.max(0, sp.alpha);
          pCtx.shadowBlur = 8;
          pCtx.shadowColor = sp.color;
          pCtx.fill();
          pCtx.restore();
        }
      }

      // 3. Logo Spring Tilting & 3D Interactive Card
      const spring = logoSpringRef.current;
      spring.rotX += (spring.targetRotX - spring.rotX) * 0.08;
      spring.rotY += (spring.targetRotY - spring.rotY) * 0.08;
      spring.scale += (spring.targetScale - spring.scale) * 0.08;

      if (logoCardRef.current && !logoCardRef.current.classList.contains('logo-punch-active')) {
        logoCardRef.current.style.transform = `rotateX(${spring.rotX.toFixed(2)}deg) rotateY(${spring.rotY.toFixed(2)}deg) scale(${spring.scale.toFixed(3)})`;
        const shadowX = (-spring.rotY * 2.2).toFixed(1);
        const shadowY = (16 + spring.rotX * 1.5).toFixed(1);
        logoCardRef.current.style.filter = `drop-shadow(${shadowX}px ${shadowY}px 45px rgba(0,0,0,0.65)) drop-shadow(0 0 16px rgba(255,193,116,0.2))`;
      }

      animationId = requestAnimationFrame(renderLoop);
    };

    animationId = requestAnimationFrame(renderLoop);

    const handleResize = () => {
      sw = skyCanvas.width = window.innerWidth;
      sh = skyCanvas.height = window.innerHeight;
      pw = fxCanvas.width = window.innerWidth;
      ph = fxCanvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Mouse move handler on Hero Section for 3D stage tilt
  const handleMouseMove = (e: React.MouseEvent) => {
    mousePosRef.current.x = e.clientX;
    mousePosRef.current.y = e.clientY;

    if (logoCardRef.current) {
      const rect = logoCardRef.current.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;

      logoSpringRef.current.targetRotX = -normY * 8;
      logoSpringRef.current.targetRotY = normX * 10;
      logoSpringRef.current.targetScale = 1.02;
    }
  };

  const handleMouseLeave = () => {
    logoSpringRef.current.targetRotX = 0;
    logoSpringRef.current.targetRotY = 0;
    logoSpringRef.current.targetScale = 1.0;
  };

  return (
    <section
      id="home"
      ref={heroContainerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-radial from-[#59033a] via-[#30062a] to-[#17041e] text-[#fff4e5] select-none pt-24 pb-12"
      style={{
        background: 'radial-gradient(circle at 50% 45%, #59033a 0%, #30062a 50%, #17041e 100%)',
      }}
    >
      {/* ========================================================= */}
      {/* 1. REPEATING ARCHITECTURAL CITYSCAPE BORDERS (TOP & BOTTOM)*/}
      {/* ========================================================= */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* TOP SKYLINE BORDER: Inverted subtle architectural repeat */}
        <div className="absolute top-0 left-0 w-full opacity-25 select-none pointer-events-none overflow-hidden">
          <div className="w-full pattern-tile-strip pattern-top rotate-180" />
        </div>
        {/* BOTTOM SKYLINE BORDER: Crisp global landmarks cityscape */}
        <div className="absolute bottom-0 left-0 w-full opacity-30 select-none pointer-events-none overflow-hidden">
          <div className="w-full pattern-tile-strip pattern-bottom" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. FULLSCREEN BACKGROUND CANVAS LAYERS (STARS & FX)       */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <canvas ref={skyCanvasRef} className="absolute inset-0 w-full h-full opacity-60 pointer-events-none" />
        <canvas ref={fxCanvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      </div>

      {/* ========================================================= */}
      {/* 3. CENTRAL HERO CONTENT: 3D LOGO, MOTTO & ACTION BUTTONS  */}
      {/* ========================================================= */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center max-w-5xl mx-auto w-full">
        {/* Official L'Intervention 2026 Full Lockup Logo with 3D Perspective & Click Pulse Stage */}
        <div
          onClick={handleLogoClick}
          className="relative w-full flex flex-col items-center justify-center cursor-pointer group"
          title="Click for Festival Flypast & Fireworks! (Continuous 5 clicks triggers cloud transition)"
        >
          <div className="logo-breathing flex justify-center items-center">
            <div
              ref={logoCardRef}
              className="flex justify-center items-center transition-all duration-300 transform-gpu"
            >
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY-oO0-zMEsQxX1h-TNpkors_kpN2N0cwpoPOV9gtaKzkdPh1L5uvxT01sHEXSNkt1Y4jiv8pBkvvaeRKHeyAaEADBXXY8W1PKMU5SzTEgNooTwktH-Ul-zsh6-FB94xTOWKKyzpVwSaiW4XTb-dYN7JDfkVhGUSSmfJsxpfSFFA6I_VZ3p1AOOajn-9d8M7bL4KENfAT66FVcW4w8Xs2blRam9Id4knxM3g25fJa5qJWdcvhkpHHiQwqpJhR0Q9hCJVA"
                alt="L'Intervention 2026"
                className="w-[86vw] sm:w-[74vw] md:w-[680px] lg:w-[780px] max-w-[820px] h-auto object-contain drop-shadow-[0_18px_45px_rgba(0,0,0,0.65)] select-none pointer-events-auto"
                draggable={false}
              />
            </div>
          </div>

          {/* Continuous click indicator toast if user is tapping */}
          {clickCount > 0 && clickCount < 5 && (
            <div className="absolute -bottom-4 px-3 py-1 rounded-full bg-[#17041e]/90 border border-[#ffc174] text-[11px] font-mono text-[#ffc174] tracking-wider animate-bounce shadow-lg">
              ✦ CLOUD GATEWAY: {clickCount} / 5 TAPS (CONTINUOUS)
            </div>
          )}
        </div>

        {/* Kinetic Motto "ÉCRIS LE MONDE" with Multilingual Morph & 10s Timer */}
        <div className="mt-7 sm:mt-8 flex flex-col items-center">
          <h1
            onClick={() => startScramble(8000)}
            onMouseEnter={() => !isScrambling && startScramble(8000)}
            onMouseLeave={stopScramble}
            className="font-syne font-bold text-lg sm:text-xl md:text-2xl tracking-[0.34em] text-[#fef3c7] uppercase min-h-[1.75rem] flex items-center justify-center cursor-pointer transition-all duration-300 hover:tracking-[0.38em] tagline-settled-pulse"
            title="Hover or click to scramble glyphs"
          >
            {taglineChars.map((char, index) => (
              <span
                key={index}
                className={`kinetic-char ${char === ' ' ? 'space' : ''} ${
                  isScrambling ? 'scrambling' : 'locked text-[#fef3c7]'
                }`}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <div className="w-10 h-[1.5px] bg-[#fff4e5]/30 mt-3 rounded-full" />
        </div>

        {/* Editorial Action Buttons */}
        <div className="mt-7 sm:mt-9 flex flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-sm sm:max-w-md">
          {/* Primary: Explore Contingents */}
          <button
            onClick={() => onNavigateToSection('teams', 'Festival Contingents')}
            className="flex-1 text-center py-3.5 px-6 sm:px-7 rounded-full bg-[#fff4e5] text-[#200a28] font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 hover:bg-[#ffc174] hover:-translate-y-0.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_25px_rgba(255,193,116,0.3)] focus:outline-none focus:ring-2 focus:ring-[#ffc174]"
          >
            Explore Teams
          </button>

          {/* Secondary: View Leaderboard */}
          <button
            onClick={() => onNavigateToSection('leaderboard', 'Live Leaderboard')}
            className="flex-1 text-center py-3.5 px-6 sm:px-7 rounded-full bg-transparent border border-[#fff4e5]/40 text-[#fff4e5] font-mono text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-200 hover:border-[#fff4e5] hover:bg-[#fff4e5]/10 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#fff4e5]/50"
          >
            Leaderboard
          </button>
        </div>
      </div>

      {/* Downward Scroll Invitation Indicator */}
      <div
        onClick={() => onNavigateToSection('teams', 'Festival Contingents')}
        className="relative z-20 flex flex-col items-center justify-center text-center cursor-pointer group opacity-75 hover:opacity-100 transition-opacity"
      >
        <span className="text-[10px] font-mono tracking-[0.24em] text-[#ffc174] uppercase">
          Scroll To Festival Contingents
        </span>
        <span className="material-symbols-outlined text-[#ffc174] text-xl animate-bounce mt-1">
          expand_more
        </span>
      </div>
    </section>
  );
};
