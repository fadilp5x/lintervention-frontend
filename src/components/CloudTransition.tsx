import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { audioEngine } from '../utils/audio';

interface CloudTransitionProps {
  isOpen: boolean;
  targetName: string;
  onPhaseComplete: () => void;
}

export const CloudTransition: React.FC<CloudTransitionProps> = ({
  isOpen,
  targetName,
  onPhaseComplete,
}) => {
  const [phase, setPhase] = useState<'idle' | 'rising' | 'holding' | 'parting'>('idle');

  useEffect(() => {
    if (isOpen) {
      setPhase('rising');
      audioEngine.playCloudWoosh();

      // Rise takes ~0.8s, then hold for ~2.0s
      const holdTimer = setTimeout(() => {
        setPhase('holding');
      }, 700);

      // Parting clouds after holding for ~2.3 seconds
      const partingTimer = setTimeout(() => {
        setPhase('parting');
        // Let parent switch/position target page in background right before parting
        onPhaseComplete();
      }, 2700);

      // Finish transition
      const finishTimer = setTimeout(() => {
        setPhase('idle');
      }, 3600);

      return () => {
        clearTimeout(holdTimer);
        clearTimeout(partingTimer);
        clearTimeout(finishTimer);
      };
    } else {
      setPhase('idle');
    }
  }, [isOpen, onPhaseComplete]);

  if (phase === 'idle') return null;

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-auto overflow-hidden select-none"
      style={{
        perspective: '1200px',
      }}
    >
      <AnimatePresence>
        {/* DIAGONAL CLOUD LAYERS (Rising from bottom-left towards top-right) */}
        <motion.div
          key="cloud-blanket-base"
          initial={{ x: '-110%', y: '110%', opacity: 0.7 }}
          animate={
            phase === 'rising' || phase === 'holding'
              ? { x: '0%', y: '0%', opacity: 1 }
              : { x: '120%', y: '-120%', opacity: 0 }
          }
          transition={{
            duration: phase === 'parting' ? 0.9 : 0.75,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute -inset-[30%] w-[160%] h-[160%] bg-gradient-to-tr from-[#17041e] via-[#35062e] to-[#200a28]"
        />

        {/* CLOUD BILLOW LAYER 1 - Deep Aubergine Clouds */}
        <motion.div
          key="cloud-layer-1"
          initial={{ x: '-130%', y: '130%', scale: 0.85 }}
          animate={
            phase === 'rising' || phase === 'holding'
              ? { x: '0%', y: '0%', scale: 1 }
              : { x: '130%', y: '-130%', scale: 1.15 }
          }
          transition={{
            duration: phase === 'parting' ? 1.0 : 0.85,
            ease: [0.2, 0.9, 0.3, 1],
          }}
          className="absolute -inset-[20%] w-[140%] h-[140%] pointer-events-none opacity-90"
        >
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <radialGradient id="cloudGrad1" cx="30%" cy="70%" r="60%">
                <stop offset="0%" stopColor="#59033a" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#290527" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#17041e" stopOpacity="0.85" />
              </radialGradient>
              <filter id="cloudBlur1" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="35" />
              </filter>
            </defs>
            <g filter="url(#cloudBlur1)" fill="url(#cloudGrad1)">
              <circle cx="200" cy="800" r="320" />
              <circle cx="450" cy="650" r="380" />
              <circle cx="750" cy="400" r="420" />
              <circle cx="300" cy="400" r="350" />
              <circle cx="600" cy="250" r="340" />
              <circle cx="850" cy="150" r="300" />
              <path d="M0,1000 L1000,1000 L1000,0 L0,1000 Z" />
            </g>
          </svg>
        </motion.div>

        {/* CLOUD BILLOW LAYER 2 - Golden & Saffron Edge Volumetric Cloud Mist */}
        <motion.div
          key="cloud-layer-2"
          initial={{ x: '-150%', y: '150%', scale: 0.9 }}
          animate={
            phase === 'rising' || phase === 'holding'
              ? { x: '0%', y: '0%', scale: 1 }
              : { x: '140%', y: '-140%', scale: 1.1 }
          }
          transition={{
            duration: phase === 'parting' ? 0.95 : 0.8,
            delay: 0.05,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute -inset-[20%] w-[140%] h-[140%] pointer-events-none opacity-85"
        >
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <radialGradient id="cloudGrad2" cx="40%" cy="60%" r="55%">
                <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.45" />
                <stop offset="35%" stopColor="#7a144e" stopOpacity="0.8" />
                <stop offset="85%" stopColor="#200a28" stopOpacity="0.95" />
              </radialGradient>
              <filter id="cloudBlur2" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="28" />
              </filter>
            </defs>
            <g filter="url(#cloudBlur2)" fill="url(#cloudGrad2)">
              <circle cx="150" cy="900" r="260" />
              <circle cx="380" cy="720" r="320" />
              <circle cx="620" cy="520" r="360" />
              <circle cx="820" cy="320" r="310" />
              <circle cx="500" cy="350" r="300" />
              <circle cx="280" cy="500" r="280" />
              <circle cx="700" cy="200" r="260" />
            </g>
          </svg>
        </motion.div>

        {/* CLOUD BILLOW LAYER 3 - Ethereal Soft White/Cream Billows */}
        <motion.div
          key="cloud-layer-3"
          initial={{ x: '-160%', y: '160%' }}
          animate={
            phase === 'rising' || phase === 'holding'
              ? { x: '0%', y: '0%' }
              : { x: '150%', y: '-150%' }
          }
          transition={{
            duration: phase === 'parting' ? 0.9 : 0.85,
            delay: 0.1,
            ease: [0.18, 1, 0.32, 1],
          }}
          className="absolute -inset-[15%] w-[130%] h-[130%] pointer-events-none opacity-40 mix-blend-screen"
        >
          <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
            <defs>
              <filter id="cloudBlur3">
                <feGaussianBlur stdDeviation="40" />
              </filter>
            </defs>
            <g filter="url(#cloudBlur3)" fill="#fff4e5">
              <circle cx="220" cy="850" r="240" opacity="0.6" />
              <circle cx="480" cy="620" r="290" opacity="0.75" />
              <circle cx="740" cy="400" r="320" opacity="0.7" />
              <circle cx="360" cy="420" r="250" opacity="0.5" />
              <circle cx="620" cy="220" r="260" opacity="0.5" />
            </g>
          </svg>
        </motion.div>

        {/* AMBIENT CELESTIAL STARDUST & RAYS IN HOLD PHASE */}
        {(phase === 'holding' || phase === 'rising') && (
          <motion.div
            key="stardust-aura"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 pointer-events-none flex items-center justify-center"
          >
            {/* Soft Radial Sunburst / Backlight */}
            <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-r from-[#ffc174]/20 via-[#f59e0b]/15 to-transparent blur-3xl animate-pulse" />
          </motion.div>
        )}

        {/* CENTERPIECE: ANIMATED L'INTERVENTION 2026 LOGO LOCKUP */}
        {(phase === 'holding' || phase === 'rising') && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-50 pointer-events-none">
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{
                scale: [0.8, 1.04, 1],
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center justify-center text-center max-w-xl"
            >
              {/* Spinning / Glowing Celestial Ring */}
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-[#ffc174]/25 border-dashed pointer-events-none"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                  className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] rounded-full border border-[#ffc174]/15 pointer-events-none"
                />

                {/* Pulsing L'Intervention Festival Logo Badge */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    filter: [
                      'drop-shadow(0 0 20px rgba(255, 193, 116, 0.4))',
                      'drop-shadow(0 0 45px rgba(255, 193, 116, 0.75))',
                      'drop-shadow(0 0 20px rgba(255, 193, 116, 0.4))',
                    ],
                  }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="relative z-10"
                >
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY-oO0-zMEsQxX1h-TNpkors_kpN2N0cwpoPOV9gtaKzkdPh1L5uvxT01sHEXSNkt1Y4jiv8pBkvvaeRKHeyAaEADBXXY8W1PKMU5SzTEgNooTwktH-Ul-zsh6-FB94xTOWKKyzpVwSaiW4XTb-dYN7JDfkVhGUSSmfJsxpfSFFA6I_VZ3p1AOOajn-9d8M7bL4KENfAT66FVcW4w8Xs2blRam9Id4knxM3g25fJa5qJWdcvhkpHHiQwqpJhR0Q9hCJVA"
                    alt="L'Intervention 2026"
                    className="w-[75vw] sm:w-[520px] max-w-[560px] h-auto object-contain"
                  />
                </motion.div>
              </div>

              {/* Transition Caption / Journey Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                className="mt-6 flex flex-col items-center gap-2"
              >
                <div className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ffc174]/15 border border-[#ffc174]/30 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#ffc174] animate-ping" />
                  <span className="font-mono text-[11px] tracking-[0.25em] text-[#ffc174] uppercase font-bold">
                    {targetName ? `JOURNEYING TO ${targetName.toUpperCase()}` : "ÉCRIS LE MONDE"}
                  </span>
                </div>
                <span className="font-newsreader italic text-sm text-[#fff4e5]/80">
                  Shamsul Huda Arts Fest '26 · Four Teams · One Stage
                </span>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
