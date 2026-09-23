import React, { useState } from 'react';
import { audioEngine } from '../utils/audio';

interface LeaderboardTeam {
  id: string;
  name: string;
  rank: number;
  points: number;
  tag: string;
  motto: string;
  deltaText: string;
  colorClass: string;
  textColorClass: string;
  hasCrown?: boolean;
}

export const LeaderboardSection: React.FC = () => {
  const [teams] = useState<LeaderboardTeam[]>([
    {
      id: 'bastille',
      name: 'BASTILLE',
      rank: 1,
      points: 0,
      tag: 'FORTRESS OF ELOQUENCE',
      motto: "PAR LA PLUME ET PAR L'ÉPÉE",
      deltaText: 'RESULTS PENDING',
      colorClass: 'bg-[#F39C24]',
      textColorClass: 'text-[#1E121E]',
      hasCrown: false,
    },
    {
      id: 'tahrir',
      name: 'TAHRIR',
      rank: 2,
      points: 0,
      tag: 'OBELISK OF DISCOURSE',
      motto: 'VOICE OF THE UNYIELDING CHORUS',
      deltaText: 'RESULTS PENDING',
      colorClass: 'bg-[#2B8752]',
      textColorClass: 'text-[#F4EBDC]',
      hasCrown: false,
    },
    {
      id: 'syntagma',
      name: 'SYNTAGMA',
      rank: 3,
      points: 0,
      tag: 'TEMPLE OF RHETORIC',
      motto: 'ARCHITECTS OF CIVIC REASON',
      deltaText: 'RESULTS PENDING',
      colorClass: 'bg-[#C93F30]',
      textColorClass: 'text-[#F4EBDC]',
      hasCrown: false,
    },
    {
      id: 'tiananmen',
      name: 'TIANANMEN',
      rank: 4,
      points: 0,
      tag: 'PAVILION OF DIALECTICS',
      motto: 'DEFIANT SPIRIT IN GOLDEN SCRIPT',
      deltaText: 'RESULTS PENDING',
      colorClass: 'bg-[#4A2B75]',
      textColorClass: 'text-[#F4EBDC]',
      hasCrown: false,
    },
  ]);

  const [selectedTeam, setSelectedTeam] = useState<LeaderboardTeam | null>(null);
  const [activityModalOpen, setActivityModalOpen] = useState(false);

  return (
    <section id="leaderboard" className="relative w-full min-h-screen bg-[#F4EBDC] text-[#1E121E] pt-16 pb-0 flex flex-col justify-between overflow-x-hidden select-none">
      {/* Paper Stipple Pattern Texture Layer */}
      <div className="paper-texture-bg absolute inset-0 pointer-events-none z-0" />

      {/* Header Section with Marginalia */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-4 text-center z-20 flex flex-col items-center">
        {/* Left Marginalia Note */}
        <div className="hidden lg:block absolute left-4 top-4 rotate-[-10deg] text-left text-[#C24D28] font-script text-2xl leading-tight font-bold select-none pointer-events-none">
          <p>Art • People</p>
          <p className="ml-3">Culture</p>
          <p className="ml-5 text-xl">A Brighter</p>
          <p className="ml-7 text-xl">Tomorrow</p>
          <div className="w-14 h-[2px] bg-[#C24D28]/60 mt-1 ml-6 rounded-full" />
        </div>

        {/* Right Marginalia Note */}
        <div className="hidden lg:block absolute right-6 top-4 rotate-[10deg] text-left text-[#C03E26] font-script text-3xl font-bold select-none pointer-events-none">
          <p>Écris</p>
          <p className="-mt-2 ml-3">Le Monde</p>
          <p className="text-sm text-[#1E121E]/70 font-sans tracking-wide uppercase font-bold mt-1 ml-4">
            Four Teams • One Stage
          </p>
        </div>

        {/* Live Status Pill */}
        <div className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-widest text-[#1E121E] mb-2 bg-[#1E121E]/5 px-4 py-1.5 rounded-full border border-[#1E121E]/15 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-[#D33624] animate-pulse" />
          <span className="text-[#D33624] font-black">STANDINGS STATUS</span>
          <span className="text-[#1E121E]/30 font-normal">|</span>
          <span className="tracking-widest text-[#1E121E]/80">RESULTS TBD · JURY DELIBERATION IN PROGRESS</span>
        </div>

        {/* Colossal Poster Title */}
        <h2 className="font-poster text-6xl sm:text-7xl md:text-8xl lg:text-[104px] leading-[0.85] select-none tracking-tight text-[#1E121E] drop-shadow-[2px_3px_0px_rgba(30,18,30,0.2)]">
          LEADERBOARD
        </h2>
        <p className="font-poster text-base sm:text-xl tracking-[0.28em] text-[#1E121E]/85 mt-2 font-bold uppercase">
          FOUR TEAMS. COUNTLESS STORIES. ÉCRIS LE MONDE.
        </p>
      </div>

      {/* Horizontal Championship Streamers */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-30 mb-8">
        <div className="flex flex-col gap-4 w-full">
          {teams.map((team) => (
            <article
              key={team.id}
              onClick={() => setSelectedTeam(team)}
              className={`streamer-block ${team.colorClass} ${team.textColorClass} w-full rounded-xl border-2 border-[#1E121E] p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4 cursor-pointer relative overflow-hidden transition-all duration-300 hover:-translate-y-1`}
              title="Click to inspect team dossier"
            >
              {/* Rank & Crown (TBD State) */}
              <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
                <div className="flex items-center gap-3">
                  <span className="font-poster text-5xl sm:text-6xl lg:text-7xl font-black leading-none tracking-tighter">
                    TBD
                  </span>
                  <div className="bg-black/25 px-2.5 py-1 rounded text-xs font-mono font-bold border border-white/20 whitespace-nowrap">
                    STATUS: TBD
                  </div>
                </div>

                {/* Mobile Points inline */}
                <div className="md:hidden text-right">
                  <span className="font-poster text-3xl font-black leading-none">
                    TBD
                  </span>
                  <span className="text-xs font-mono font-bold block opacity-85">
                    PTS · AWAITED
                  </span>
                </div>
              </div>

              {/* Woodcut Landmark Icon */}
              <div className="hidden sm:flex items-center justify-center h-16 w-32 shrink-0">
                {team.id === 'bastille' && (
                  <svg className="w-full h-full max-h-16 object-contain fill-current" viewBox="0 0 160 80">
                    <circle cx="80" cy="32" fill="#DB7E14" r="16" />
                    <path d="M20 70 L20 40 L32 40 L32 48 L48 48 L48 36 L64 36 L64 45 L96 45 L96 36 L112 36 L112 48 L128 48 L128 40 L140 40 L140 70 Z" />
                    <rect fill="#F39C24" height="8" width="3" x="40" y="52" />
                    <rect fill="#F39C24" height="9" width="3" x="78" y="51" />
                    <rect fill="#F39C24" height="8" width="3" x="118" y="52" />
                  </svg>
                )}
                {team.id === 'tahrir' && (
                  <svg className="w-full h-full max-h-16 object-contain fill-current" viewBox="0 0 160 80">
                    <path d="M10 70 Q30 50 50 55 Q70 42 90 48 Q115 40 135 50 Q145 56 155 70 Z" fill="#184A2C" />
                    <line stroke="#11361F" strokeWidth="3" x1="55" x2="72" y1="65" y2="20" />
                    <path d="M72 20 Q92 14 110 24 Q95 34 72 28 Z" fill="#0D2E1A" />
                  </svg>
                )}
                {team.id === 'syntagma' && (
                  <svg className="w-full h-full max-h-16 object-contain fill-current" viewBox="0 0 160 80">
                    <circle cx="105" cy="32" fill="#F4EBDC" opacity="0.9" r="15" />
                    <polygon fill="#2B1015" points="30,36 75,22 120,36" />
                    <rect fill="#2B1015" height="4" width="94" x="28" y="36" />
                    <rect fill="#2B1015" height="28" width="5" x="35" y="40" />
                    <rect fill="#2B1015" height="28" width="5" x="50" y="40" />
                    <rect fill="#2B1015" height="28" width="5" x="65" y="40" />
                    <rect fill="#2B1015" height="28" width="5" x="80" y="40" />
                    <rect fill="#2B1015" height="20" width="5" x="95" y="40" />
                    <rect fill="#2B1015" height="28" width="5" x="110" y="40" />
                    <rect fill="#200A0E" height="4" width="102" x="24" y="68" />
                  </svg>
                )}
                {team.id === 'tiananmen' && (
                  <svg className="w-full h-full max-h-16 object-contain fill-current" viewBox="0 0 160 80">
                    <circle cx="80" cy="30" fill="#F4EBDC" opacity="0.9" r="16" />
                    <path d="M48 38 Q80 28 112 38 L106 33 Q80 26 54 33 Z" fill="#201033" />
                    <rect fill="#26143D" height="8" width="40" x="60" y="38" />
                    <path d="M38 50 Q80 38 122 50 L116 44 Q80 34 44 44 Z" fill="#201033" />
                    <polygon fill="#1C0D2E" points="46,50 114,50 118,70 42,70" />
                  </svg>
                )}
              </div>

              {/* Team Name & Tag */}
              <div className="text-center md:text-left flex-1 px-2">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <h3 className="font-poster text-4xl sm:text-5xl lg:text-6xl font-black tracking-wide leading-none">
                    {team.name}
                  </h3>
                  <span className="hidden lg:inline-block bg-[#1E121E] text-[#F4EBDC] text-[10px] font-mono font-bold px-2.5 py-0.5 rounded tracking-widest uppercase">
                    {team.tag}
                  </span>
                </div>
                <p className="font-sans text-xs tracking-widest font-semibold uppercase opacity-85 mt-1">
                  {team.motto}
                </p>
              </div>

              {/* Points & Delta (TBD) */}
              <div className="hidden md:flex items-center gap-6 shrink-0 text-right">
                <div className="leading-none text-right">
                  <div className="flex items-baseline justify-end gap-1.5">
                    <span className="font-poster text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                      TBD
                    </span>
                    <span className="font-mono text-sm lg:text-base font-bold opacity-80">PTS</span>
                  </div>
                  <span className="inline-block mt-0.5 text-xs font-mono font-bold px-2 py-0.5 rounded border border-current/20 bg-black/15">
                    AWAITED
                  </span>
                </div>
                <span className="text-2xl font-black transition-transform group-hover:translate-x-1">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Multi-Plane Editorial Landscape Silhouette */}
      <div className="w-full relative -mb-1 z-10 select-none pointer-events-none overflow-hidden h-[180px] sm:h-[220px]">
        {/* Plane 1: Setting Sun and Mountain Ridges */}
        <div className="absolute inset-x-0 bottom-0 w-full">
          <svg className="w-full h-[180px] sm:h-[220px] object-cover" preserveAspectRatio="none" viewBox="0 0 1440 260">
            <circle cx="890" cy="190" fill="#E26D27" r="62" />
            <path
              d="M0 240 L180 200 L350 230 L520 170 L750 220 L920 160 L1100 210 L1300 170 L1440 200 L1440 260 L0 260 Z"
              fill="#653556"
              opacity="0.95"
            />
          </svg>
        </div>

        {/* Plane 2: Classical Aqueduct & Sunset Waterline */}
        <div className="absolute inset-x-0 bottom-0 w-full">
          <svg className="w-full h-[180px] sm:h-[220px] object-cover" preserveAspectRatio="none" viewBox="0 0 1440 260">
            <g fill="#2E1629">
              <rect height="10" width="820" x="200" y="200" />
              <rect fill="#F39C24" height="3" opacity="0.4" width="820" x="200" y="210" />
              <path
                d="M 210,212 A 12,12 0 0,0 234,212 M 242,212 A 12,12 0 0,0 266,212 M 274,212 A 12,12 0 0,0 298,212 M 306,212 A 12,12 0 0,0 330,212 M 338,212 A 12,12 0 0,0 362,212 M 370,212 A 12,12 0 0,0 394,212 M 402,212 A 12,12 0 0,0 426,212 M 434,212 A 12,12 0 0,0 458,212 M 466,212 A 12,12 0 0,0 490,212 M 498,212 A 12,12 0 0,0 522,212 M 530,212 A 12,12 0 0,0 554,212 M 562,212 A 12,12 0 0,0 586,212 M 594,212 A 12,12 0 0,0 618,212 M 626,212 A 12,12 0 0,0 650,212 M 658,212 A 12,12 0 0,0 682,212 M 690,212 A 12,12 0 0,0 714,212 M 722,212 A 12,12 0 0,0 746,212 M 754,212 A 12,12 0 0,0 778,212 M 786,212 A 12,12 0 0,0 810,212 M 818,212 A 12,12 0 0,0 842,212 M 850,212 A 12,12 0 0,0 874,212 M 882,212 A 12,12 0 0,0 906,212 M 914,212 A 12,12 0 0,0 938,212 M 946,212 A 12,12 0 0,0 970,212 M 978,212 A 12,12 0 0,0 1002,212"
                fill="#F4EBDC"
              />
            </g>
            <rect fill="#1A0E1C" height="38" width="1440" x="0" y="222" />
            <ellipse cx="890" cy="235" fill="#F39C24" opacity="0.65" rx="120" ry="5" />
            <ellipse cx="890" cy="245" fill="#F39C24" opacity="0.35" rx="70" ry="3" />
          </svg>
        </div>

        {/* Plane 3: Minarets, Domes, Citadel and Palms */}
        <div className="absolute inset-x-0 bottom-0 w-full">
          <svg className="w-full h-[180px] sm:h-[220px] object-cover" preserveAspectRatio="none" viewBox="0 0 1440 260">
            <g fill="#241121">
              <rect height="70" width="12" x="90" y="135" />
              <polygon points="85,135 96,95 107,135" />
              <circle cx="96" cy="91" r="2.5" />
              <ellipse cx="60" cy="165" rx="14" ry="11" />
              <path d="M0 220 L0 180 L35 170 L75 185 L120 180 L160 205 L210 220 L210 260 L0 260 Z" />
              <path d="M22 210 Q14 150 5 120" fill="none" stroke="#241121" strokeWidth="3" />
              <circle cx="5" cy="116" r="12" />
            </g>
            <g fill="#241121">
              <polygon points="1060,205 1130,185 1190,195 1240,175 1300,195 1440,175 1440,260 1020,260" />
              <rect height="35" width="28" x="1175" y="175" />
              <path d="M1040 230 Q1055 165 1065 138" fill="none" stroke="#241121" strokeWidth="3" />
              <circle cx="1065" cy="135" r="14" />
              <path d="M1360 220 Q1350 155 1340 120" fill="none" stroke="#241121" strokeWidth="3" />
              <circle cx="1340" cy="116" r="16" />
            </g>
          </svg>
        </div>
      </div>

      {/* Bottom Activity Bar Ticker */}
      <footer className="w-full bg-[#170E1A] text-[#F4EBDC] py-4 px-6 md:px-12 z-30 relative border-t-2 border-[#1E121E] shadow-2xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 font-black tracking-widest uppercase text-[#F39C24] whitespace-nowrap">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F39C24] inline-block animate-ping" />
            <span>SESSION STATUS</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 w-full md:w-auto text-left">
            <div className="leading-tight border-l border-white/20 pl-3">
              <div className="flex items-center gap-1.5 font-bold tracking-wider text-white uppercase">
                <span>BASTILLE</span>
                <span className="text-[#ffc174] font-mono text-[11px] font-bold">Result TBD</span>
              </div>
              <p className="text-[11px] opacity-75">Literary Clash</p>
            </div>
            <div className="leading-tight border-l border-white/20 pl-3">
              <div className="flex items-center gap-1.5 font-bold tracking-wider text-white uppercase">
                <span>TAHRIR</span>
                <span className="text-[#ffc174] font-mono text-[11px] font-bold">Result TBD</span>
              </div>
              <p className="text-[11px] opacity-75">Arabic Debate</p>
            </div>
            <div className="leading-tight border-l border-white/20 pl-3">
              <div className="flex items-center gap-1.5 font-bold tracking-wider text-white uppercase">
                <span>SYNTAGMA</span>
                <span className="text-[#ffc174] font-mono text-[11px] font-bold">Result TBD</span>
              </div>
              <p className="text-[11px] opacity-75">Civic Rhetoric</p>
            </div>
            <div className="leading-tight border-l border-white/20 pl-3">
              <div className="flex items-center gap-1.5 font-bold tracking-wider text-white uppercase">
                <span>TIANANMEN</span>
                <span className="text-[#ffc174] font-mono text-[11px] font-bold">Result TBD</span>
              </div>
              <p className="text-[11px] opacity-75">Dialectics & Script</p>
            </div>
          </div>

          <button
            onClick={() => setActivityModalOpen(true)}
            className="border border-white/30 hover:border-white hover:bg-white/10 active:scale-95 transition-all text-[#F4EBDC] text-[11px] font-bold tracking-widest uppercase px-5 py-2 rounded-full whitespace-nowrap flex items-center gap-2 cursor-pointer"
          >
            <span>VIEW EVENTS</span>
            <span>→</span>
          </button>
        </div>
      </footer>

      {/* Team Detail Inspection Modal - Pure TBD (No Results Published) */}
      {selectedTeam && (
        <div className="fixed inset-0 bg-[#1E121E]/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FBF8F1] border-4 border-[#1E121E] text-[#1E121E] w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0px_#000] relative">
            <button
              onClick={() => setSelectedTeam(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1E121E] text-[#F4EBDC] font-bold flex items-center justify-center hover:bg-[#1E121E]/80 transition-colors cursor-pointer"
            >
              ✕
            </button>
            <span className="text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-full uppercase bg-[#1E121E] text-[#F4EBDC]">
              FACTION DOSSIER · RESULTS TBD
            </span>
            <h3 className="font-poster text-5xl font-black mt-2 leading-none text-[#1E121E]">
              {selectedTeam.name}
            </h3>
            <p className="font-mono text-xl font-bold text-[#CA5A3B] mt-1">
              POINTS: TBD (OFFICIAL RESULT AWAITED)
            </p>
            <p className="text-xs text-[#1E121E]/70 font-newsreader italic mt-1">
              {selectedTeam.motto}
            </p>
            <hr className="border-[#1E121E]/20 my-4" />
            <div className="space-y-3 text-sm">
              <h4 className="font-black tracking-wider uppercase text-xs text-[#1E121E]/70 font-mono">
                Category Adjudications
              </h4>
              <div className="space-y-2 font-sans">
                <div className="flex justify-between items-center p-2.5 rounded bg-[#1E121E]/5 font-semibold">
                  <span>Literary & Essay Clashes</span>
                  <span className="font-mono text-xs font-bold text-[#8C4610] bg-[#F4EBDC] px-2 py-0.5 rounded border border-[#1E121E]/10">Evaluation In Progress · TBD</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded bg-[#1E121E]/5 font-semibold">
                  <span>Elocution & Arabic Debates</span>
                  <span className="font-mono text-xs font-bold text-[#8C4610] bg-[#F4EBDC] px-2 py-0.5 rounded border border-[#1E121E]/10">Evaluation In Progress · TBD</span>
                </div>
                <div className="flex justify-between items-center p-2.5 rounded bg-[#1E121E]/5 font-semibold">
                  <span>Visual Arts & Calligraphy</span>
                  <span className="font-mono text-xs font-bold text-[#8C4610] bg-[#F4EBDC] px-2 py-0.5 rounded border border-[#1E121E]/10">Evaluation In Progress · TBD</span>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 rounded-xl bg-[#CA5A3B]/10 border border-[#CA5A3B]/20 text-[11px] text-[#8C2C15] font-sans">
              ℹ️ Official results and medal standings are sealed under jury deliberation. Scores will be announced during the Grand Valedictory Ceremony.
            </div>
            <div className="mt-5 pt-4 border-t-2 border-[#1E121E]/15 flex items-center justify-between">
              <div className="text-xs text-[#1E121E]/70">
                Festival Jury: <strong className="text-[#1E121E]">Grand Arts Council</strong>
              </div>
              <button
                onClick={() => setSelectedTeam(null)}
                className="bg-[#F39C24] hover:bg-[#E08A15] border-2 border-[#1E121E] text-[#1E121E] font-black text-xs uppercase tracking-wider px-5 py-2.5 rounded-full shadow-[2px_2px_0px_#1E121E] cursor-pointer active:scale-95 transition-all"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Activity Log Full Sheet Modal - TBD Results */}
      {activityModalOpen && (
        <div className="fixed inset-0 bg-[#1E121E]/75 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FBF8F1] border-4 border-[#1E121E] text-[#1E121E] w-full max-w-xl rounded-2xl p-6 sm:p-8 shadow-[8px_8px_0px_#000] relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActivityModalOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1E121E] text-[#F4EBDC] font-bold flex items-center justify-center hover:bg-[#1E121E]/80 transition-colors cursor-pointer"
            >
              ✕
            </button>
            <h3 className="font-poster text-4xl font-black text-[#1E121E]">
              Festival Sessions & Status
            </h3>
            <p className="font-sans text-xs text-[#1E121E]/70 uppercase tracking-widest mt-1">
              Events In Progress · Results TBD · Shamsul Huda Arts Fest 2026
            </p>
            <hr className="border-[#1E121E]/20 my-4" />
            <div className="space-y-3 font-sans">
              {[
                { team: 'Bastille', points: 'Result TBD', desc: 'Arabic Classical Debate Grand Finals', time: '14 mins ago', color: '#DC2626' },
                { team: 'Tahrir', points: 'Result TBD', desc: 'Street Theater & Tableau Ensemble', time: '28 mins ago', color: '#0284C7' },
                { team: 'Syntagma', points: 'Result TBD', desc: 'Socratic Disputation & Philosophical Defense', time: '45 mins ago', color: '#EAB308' },
                { team: 'Tiananmen', points: 'Result TBD', desc: 'Diwani Calligraphy Masterclass', time: '1 hour ago', color: '#15803D' },
                { team: 'Bastille', points: 'Result TBD', desc: 'Classical Urdu Poetry Recitation Semis', time: '1.5 hours ago', color: '#DC2626' },
                { team: 'Tahrir', points: 'Result TBD', desc: 'Forensic Arabic Eloquence Trial', time: '2 hours ago', color: '#0284C7' },
              ].map((log, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-[#1E121E]/5 border border-[#1E121E]/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: log.color }} />
                    <div>
                      <h4 className="font-bold text-sm text-[#1E121E]">{log.team} · {log.desc}</h4>
                      <span className="text-[11px] font-mono text-[#1E121E]/60">{log.time}</span>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-xs bg-[#1E121E]/10 px-2 py-0.5 rounded text-[#CA5A3B]">{log.points}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-[#1E121E]/15 text-right">
              <button
                onClick={() => setActivityModalOpen(false)}
                className="bg-[#1E121E] text-[#F4EBDC] font-mono font-bold text-xs uppercase px-5 py-2.5 rounded-full hover:bg-[#301633] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
