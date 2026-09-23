import React, { useState, useRef } from 'react';
import { FACTIONS_DATA } from '../data/factions';
import { FactionData } from '../types';

interface TeamsSectionProps {
  onNavigateToLeaderboard: () => void;
}

export const TeamsSection: React.FC<TeamsSectionProps> = ({ onNavigateToLeaderboard }) => {
  const [selectedFactionKey, setSelectedFactionKey] = useState<'bastille' | 'tiananmen' | 'tahrir' | 'syntagma'>('bastille');
  const dossierRef = useRef<HTMLDivElement>(null);

  const selectedFaction: FactionData = FACTIONS_DATA[selectedFactionKey];

  const handleSelectFaction = (key: 'bastille' | 'tiananmen' | 'tahrir' | 'syntagma') => {
    setSelectedFactionKey(key);
    if (dossierRef.current) {
      dossierRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <section id="teams" className="w-full bg-[#1a0522] text-[#f9d8ff] pt-16 pb-20 border-t border-[#fff4e5]/10 relative z-20">
      {/* Top Architectural Ornament Band */}
      <div className="w-full py-4 opacity-25 pointer-events-none select-none overflow-hidden flex items-center justify-center gap-8 text-[#f9d8ff] border-b border-[#ffc174]/20">
        <div className="flex items-center gap-6 sm:gap-10 text-[11px] font-mono tracking-widest uppercase text-[#ffc174] overflow-x-auto whitespace-nowrap px-4">
          <span>♦ BASTILLE ♦</span>
          <svg className="w-5 h-5 stroke-current fill-none stroke-1" viewBox="0 0 24 24">
            <path d="M4 21V9l4-4 4 4 4-4 4 4v12H4zm2-2h3v-4H6v4zm7 0h3v-4h-3v4zM5 9h14" />
          </svg>
          <span>♦ TIANANMEN ♦</span>
          <svg className="w-5 h-5 stroke-current fill-none stroke-1" viewBox="0 0 24 24">
            <path d="M3 19h18M5 19V11l7-4 7 4v8M9 19v-5h6v5M1 11h22l-3-3H4l-3 3z" />
          </svg>
          <span>♦ TAHRIR ♦</span>
          <svg className="w-5 h-5 stroke-current fill-none stroke-1" viewBox="0 0 24 24">
            <path d="M12 2l2 6h-4l2-6zm-3 7h6l-1 12H10L9 9zm-5 12h16" />
          </svg>
          <span>♦ SYNTAGMA ♦</span>
          <svg className="w-5 h-5 stroke-current fill-none stroke-1" viewBox="0 0 24 24">
            <path d="M2 19h20M4 19V9h2v10m4-10v10m4-10v10m4-10v10m2 0V9h2v10M2 9l10-6 10 6H2z" />
          </svg>
          <span>♦ SHAMSUL HUDA ARTS FEST 2026 ♦</span>
        </div>
      </div>

      {/* Editorial Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 relative z-10">
        <div className="flex flex-col gap-2 max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#5b3a65] text-[#ffc174] font-mono text-[11px] uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] animate-ping" />
              Faction Rosters & Profiles
            </span>
            <span className="text-[#d8c3ad] font-mono text-[11px] uppercase tracking-widest">
              — Shamsul Huda Arts Fest
            </span>
          </div>
          <h2 className="font-syne text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#f9d8ff] tracking-tight leading-none mt-1">
            Festival Contingents
          </h2>
          <p className="font-newsreader text-base sm:text-lg text-[#d8c3ad] italic mt-1">
            Four legendary houses disputing the laurels of literature, rhetoric, debate, and performance.
          </p>
        </div>

        {/* Action Button to Leaderboard */}
        <button
          onClick={onNavigateToLeaderboard}
          className="px-6 py-3 rounded-full bg-[#ffc174] text-[#200a28] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#ffddb8] transition-transform active:scale-95 shadow-lg flex items-center gap-2 cursor-pointer"
        >
          <span>View Standings (TBD)</span>
          <span>→</span>
        </button>
      </div>

      {/* 4 TACTILE COLLECTIBLE FACTION CARDS (GRID) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CARD 1: BASTILLE */}
          <div
            onClick={() => handleSelectFaction('bastille')}
            className={`group relative flex flex-col justify-between h-[480px] rounded-[28px] p-6 cursor-pointer overflow-hidden transition-all duration-300 transform hover:-translate-y-2 focus:outline-none shadow-2xl bg-gradient-to-b from-[#DC2626] to-[#991B1B] text-white ${
              selectedFactionKey === 'bastille' ? 'ring-4 ring-[#ffc174] ring-offset-4 ring-offset-[#200a28]' : ''
            }`}
          >
            <div className="flex items-start justify-between z-10">
              <div className="flex flex-col">
                <span className="font-mono text-white/80 uppercase tracking-widest font-semibold text-[11px]">TEAM</span>
                <h3 className="font-syne text-3xl font-extrabold tracking-tight uppercase text-white leading-none mt-1">Bastille</h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/70 mt-1">Fortress of Letters</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white font-mono text-[11px] font-bold">
                STATUS · TBD
              </span>
            </div>

            <div className="relative w-full flex-1 flex items-center justify-center my-2 select-none pointer-events-none">
              <div className="w-48 h-48 rounded-full bg-white/10 absolute -top-2 flex items-center justify-center transition-transform duration-500 group-hover:scale-105" />
              <img
                src={FACTIONS_DATA.bastille.illustrationUrl}
                alt="Bastille Fortress"
                className="w-56 h-56 object-contain transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 relative z-10 drop-shadow-lg"
              />
            </div>

            <div className="flex items-end justify-between z-10 pt-2 border-t border-white/20">
              <div className="flex flex-col gap-1">
                <img
                  src={FACTIONS_DATA.bastille.badgeStripUrl}
                  alt="L'Intervention 2K26 Bastille"
                  className="h-3.5 w-auto object-contain opacity-85"
                />
                <div className="flex items-baseline gap-1.5">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-white/75">Tally</span>
                  <span className="font-mono text-xl font-bold tracking-tight text-white">
                    TBD <span className="text-[10px] font-normal text-white/80">AWAITED</span>
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                <img src={FACTIONS_DATA.bastille.actionCircleUrl} alt="Select Bastille" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* CARD 2: TIANANMEN */}
          <div
            onClick={() => handleSelectFaction('tiananmen')}
            className={`group relative flex flex-col justify-between h-[480px] rounded-[28px] p-6 cursor-pointer overflow-hidden transition-all duration-300 transform hover:-translate-y-2 focus:outline-none shadow-2xl bg-gradient-to-b from-[#15803D] to-[#14532D] text-white ${
              selectedFactionKey === 'tiananmen' ? 'ring-4 ring-[#ffc174] ring-offset-4 ring-offset-[#200a28]' : ''
            }`}
          >
            <div className="flex items-start justify-between z-10">
              <div className="flex flex-col">
                <span className="font-mono text-white/80 uppercase tracking-widest font-semibold text-[11px]">TEAM</span>
                <h3 className="font-syne text-3xl font-extrabold tracking-tight uppercase text-white leading-none mt-1">Tiananmen</h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/70 mt-1">Pavilion of Dialectics</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white font-mono text-[11px] font-bold">
                STATUS · TBD
              </span>
            </div>

            <div className="relative w-full flex-1 flex items-center justify-center my-2 select-none pointer-events-none">
              <div className="w-48 h-48 rounded-full bg-white/10 absolute -top-2 flex items-center justify-center transition-transform duration-500 group-hover:scale-105" />
              <img
                src={FACTIONS_DATA.tiananmen.illustrationUrl}
                alt="Tiananmen Gate"
                className="w-56 h-56 object-contain transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 relative z-10 drop-shadow-lg"
              />
            </div>

            <div className="flex items-end justify-between z-10 pt-2 border-t border-white/20">
              <div className="flex flex-col gap-1">
                <img
                  src={FACTIONS_DATA.tiananmen.badgeStripUrl}
                  alt="L'Intervention 2K26 Tiananmen"
                  className="h-3.5 w-auto object-contain opacity-85"
                />
                <div className="flex items-baseline gap-1.5">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-white/75">Tally</span>
                  <span className="font-mono text-xl font-bold tracking-tight text-white">
                    TBD <span className="text-[10px] font-normal text-white/80">AWAITED</span>
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                <img src={FACTIONS_DATA.tiananmen.actionCircleUrl} alt="Select Tiananmen" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* CARD 3: TAHRIR */}
          <div
            onClick={() => handleSelectFaction('tahrir')}
            className={`group relative flex flex-col justify-between h-[480px] rounded-[28px] p-6 cursor-pointer overflow-hidden transition-all duration-300 transform hover:-translate-y-2 focus:outline-none shadow-2xl bg-gradient-to-b from-[#0284C7] to-[#1D4ED8] text-white ${
              selectedFactionKey === 'tahrir' ? 'ring-4 ring-[#ffc174] ring-offset-4 ring-offset-[#200a28]' : ''
            }`}
          >
            <div className="flex items-start justify-between z-10">
              <div className="flex flex-col">
                <span className="font-mono text-white/80 uppercase tracking-widest font-semibold text-[11px]">TEAM</span>
                <h3 className="font-syne text-3xl font-extrabold tracking-tight uppercase text-white leading-none mt-1">Tahrir</h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/70 mt-1">Obelisk of Discourse</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white font-mono text-[11px] font-bold">
                STATUS · TBD
              </span>
            </div>

            <div className="relative w-full flex-1 flex items-center justify-center my-2 select-none pointer-events-none">
              <div className="w-48 h-48 rounded-full bg-white/10 absolute -top-2 flex items-center justify-center transition-transform duration-500 group-hover:scale-105" />
              <img
                src={FACTIONS_DATA.tahrir.illustrationUrl}
                alt="Tahrir Obelisk"
                className="w-56 h-56 object-contain transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 relative z-10 drop-shadow-lg"
              />
            </div>

            <div className="flex items-end justify-between z-10 pt-2 border-t border-white/20">
              <div className="flex flex-col gap-1">
                <img
                  src={FACTIONS_DATA.tahrir.badgeStripUrl}
                  alt="L'Intervention 2K26 Tahrir"
                  className="h-3.5 w-auto object-contain opacity-85"
                />
                <div className="flex items-baseline gap-1.5">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-white/75">Tally</span>
                  <span className="font-mono text-xl font-bold tracking-tight text-white">
                    TBD <span className="text-[10px] font-normal text-white/80">AWAITED</span>
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                <img src={FACTIONS_DATA.tahrir.actionCircleUrl} alt="Select Tahrir" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* CARD 4: SYNTAGMA */}
          <div
            onClick={() => handleSelectFaction('syntagma')}
            className={`group relative flex flex-col justify-between h-[480px] rounded-[28px] p-6 cursor-pointer overflow-hidden transition-all duration-300 transform hover:-translate-y-2 focus:outline-none shadow-2xl bg-gradient-to-b from-[#EAB308] to-[#A16207] text-[#1E0826] ${
              selectedFactionKey === 'syntagma' ? 'ring-4 ring-[#ffc174] ring-offset-4 ring-offset-[#200a28]' : ''
            }`}
          >
            <div className="flex items-start justify-between z-10">
              <div className="flex flex-col">
                <span className="font-mono text-[#1E0826]/80 uppercase tracking-widest font-semibold text-[11px]">TEAM</span>
                <h3 className="font-syne text-3xl font-extrabold tracking-tight uppercase text-[#1E0826] leading-none mt-1">Syntagma</h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#1E0826]/80 mt-1">Temple of Rhetoric</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-black/20 backdrop-blur-sm text-[#1E0826] font-mono text-[11px] font-bold">
                STATUS · TBD
              </span>
            </div>

            <div className="relative w-full flex-1 flex items-center justify-center my-2 select-none pointer-events-none">
              <div className="w-48 h-48 rounded-full bg-white/20 absolute -top-2 flex items-center justify-center transition-transform duration-500 group-hover:scale-105" />
              <img
                src={FACTIONS_DATA.syntagma.illustrationUrl}
                alt="Syntagma Colonnade"
                className="w-56 h-56 object-contain transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1 relative z-10 drop-shadow-lg"
              />
            </div>

            <div className="flex items-end justify-between z-10 pt-2 border-t border-[#1E0826]/20">
              <div className="flex flex-col gap-1">
                <img
                  src={FACTIONS_DATA.syntagma.badgeStripUrl}
                  alt="L'Intervention 2K26 Syntagma"
                  className="h-3.5 w-auto object-contain opacity-85"
                />
                <div className="flex items-baseline gap-1.5">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#1E0826]/80">Tally</span>
                  <span className="font-mono text-xl font-bold tracking-tight text-[#1E0826]">
                    TBD <span className="text-[10px] font-normal text-[#1E0826]/80">AWAITED</span>
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-lg transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110">
                <img src={FACTIONS_DATA.syntagma.actionCircleUrl} alt="Select Syntagma" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK FACTION SWITCHER PILL BAR */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap bg-[#291230] p-2 sm:p-2.5 rounded-2xl border border-[#fff4e5]/10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#d8c3ad] mr-2 hidden sm:inline-block">
            Inspect Roster:
          </span>
          {(['bastille', 'tiananmen', 'tahrir', 'syntagma'] as const).map((key) => {
            const isSelected = selectedFactionKey === key;
            const data = FACTIONS_DATA[key];
            return (
              <button
                key={key}
                onClick={() => handleSelectFaction(key)}
                className={`px-4 sm:px-5 py-2 rounded-xl font-mono text-xs uppercase font-bold tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? key === 'syntagma'
                      ? 'bg-[#EAB308] text-[#1E0826] shadow-md scale-105'
                      : key === 'bastille'
                      ? 'bg-[#DC2626] text-white shadow-md scale-105'
                      : key === 'tiananmen'
                      ? 'bg-[#15803D] text-white shadow-md scale-105'
                      : 'bg-[#0284C7] text-white shadow-md scale-105'
                    : 'bg-[#382140] text-[#d8c3ad] hover:text-[#fff4e5] hover:bg-[#442c4b]'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-current" />
                <span>{data.name}</span>
                <span className="text-[10px] opacity-80 font-mono">TBD</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* DYNAMIC TEAM DOSSIER VIEW */}
      <div ref={dossierRef} className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Dossier Hero Banner */}
        <div
          className={`relative rounded-3xl overflow-hidden p-8 lg:p-12 mb-8 transition-all duration-500 bg-gradient-to-r ${selectedFaction.bannerGradient} shadow-2xl ${
            selectedFactionKey === 'syntagma' ? 'text-[#1E0826]' : 'text-white'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex flex-col max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-black/25">
                  {selectedFaction.badge}
                </span>
                <span className="font-newsreader italic text-sm opacity-90">
                  {selectedFaction.motto}
                </span>
              </div>
              <h3 className="font-syne text-4xl sm:text-5xl font-extrabold tracking-tight uppercase leading-none mt-3">
                {selectedFaction.name}
              </h3>
              <p className="font-newsreader text-base sm:text-lg opacity-90 mt-2 leading-relaxed">
                {selectedFaction.desc}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono">
                <div>
                  <span className="opacity-75 uppercase tracking-wider">Captain: </span>
                  <strong>{selectedFaction.captain}</strong>
                </div>
                <div>
                  <span className="opacity-75 uppercase tracking-wider">Master: </span>
                  <strong>{selectedFaction.master}</strong>
                </div>
                <div>
                  <span className="opacity-75 uppercase tracking-wider">Symbol: </span>
                  <strong>{selectedFaction.symbol}</strong>
                </div>
              </div>
            </div>

            {/* Faction Point Scoreboard - TBD Status */}
            <div className="bg-black/30 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex flex-col items-center justify-center text-center min-w-[200px]">
              <span className="font-mono text-xs uppercase tracking-widest opacity-80">
                Official Points
              </span>
              <span className="font-mono text-5xl font-black tracking-tight mt-1 text-[#ffc174]">
                TBD
              </span>
              <span className="text-xs font-mono font-bold mt-1 text-[#fff4e5] bg-black/40 px-3 py-1 rounded-full">
                Results Awaited · Under Jury Review
              </span>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
          <div className="bg-[#2d1635] p-4 rounded-2xl border border-[#fff4e5]/10 flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#d8c3ad]">Standings Rank</span>
            <span className="font-syne text-2xl font-bold text-[#ffc174] mt-1">
              TBD <span className="text-xs font-mono uppercase text-[#fff4e5]/60">Under Deliberation</span>
            </span>
          </div>
          <div className="bg-[#2d1635] p-4 rounded-2xl border border-[#fff4e5]/10 flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#d8c3ad]">Registered Candidates</span>
            <span className="font-syne text-2xl font-bold text-[#f9d8ff] mt-1">{selectedFaction.candidates}</span>
          </div>
          <div className="bg-[#2d1635] p-4 rounded-2xl border border-[#fff4e5]/10 flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#d8c3ad]">Festival Status</span>
            <span className="font-syne text-2xl font-bold text-[#7fe192] mt-1">In Progress</span>
          </div>
          <div className="bg-[#2d1635] p-4 rounded-2xl border border-[#fff4e5]/10 flex flex-col">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#d8c3ad]">Gold Trophies</span>
            <span className="font-syne text-2xl font-bold text-[#ffc174] mt-1">TBD</span>
          </div>
          <div className="bg-[#2d1635] p-4 rounded-2xl border border-[#fff4e5]/10 flex flex-col col-span-2 sm:col-span-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#d8c3ad]">Victory Ratio</span>
            <span className="font-syne text-2xl font-bold text-[#ffc174] mt-1">TBD</span>
          </div>
        </div>

        {/* 3-Column Dossier Content: Contenders, Schedule, Score Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Col 1: Top Contenders */}
          <div className="bg-[#291230] p-6 rounded-3xl border border-[#fff4e5]/10 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#fff4e5]/10 pb-3">
              <h4 className="font-syne text-lg font-bold uppercase text-[#f9d8ff]">Key Contenders</h4>
              <span className="font-mono text-[11px] text-[#ffc174] uppercase">Roster</span>
            </div>
            <div className="flex flex-col gap-3">
              {selectedFaction.topContenders.map((contender, idx) => (
                <div
                  key={idx}
                  className="bg-[#2d1635] hover:bg-[#382140] transition-colors p-4 rounded-2xl flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#442c4b] flex items-center justify-center text-[#ffc174] font-mono font-bold text-xs">
                      0{idx + 1}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-newsreader font-bold text-base text-[#f9d8ff] leading-tight">
                        {contender.name}
                      </span>
                      <span className="font-mono text-[11px] text-[#d8c3ad] mt-0.5">{contender.event}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="font-mono font-bold text-sm text-[#ffc174]">TBD</span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#5b3a65] text-[#ffddb8] mt-0.5">
                      Nominated
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Scheduled Clashes */}
          <div className="bg-[#291230] p-6 rounded-3xl border border-[#fff4e5]/10 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#fff4e5]/10 pb-3">
              <h4 className="font-syne text-lg font-bold uppercase text-[#f9d8ff]">Scheduled Clashes</h4>
              <span className="font-mono text-[11px] text-[#7fe192] uppercase">Live Arena</span>
            </div>
            <div className="flex flex-col gap-3">
              {selectedFaction.scheduledClashes.map((clash, idx) => (
                <div
                  key={idx}
                  className="bg-[#2d1635] hover:bg-[#382140] transition-colors p-4 rounded-2xl flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wide ${
                        clash.state === 'LIVE NOW'
                          ? 'bg-[#93000a] text-white animate-pulse'
                          : 'bg-[#442c4b] text-[#ffc174]'
                      }`}
                    >
                      {clash.state}
                    </span>
                    <span className="font-mono text-[11px] text-[#d8c3ad]">{clash.time}</span>
                  </div>
                  <h5 className="font-syne font-bold text-base text-[#f9d8ff] leading-snug">{clash.title}</h5>
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#d8c3ad] pt-1 border-t border-[#fff4e5]/10">
                    <span>{clash.stage}</span>
                    <span className="font-semibold text-[#f9d8ff]">{clash.contender}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 3: Points Activity Feed */}
          <div className="bg-[#291230] p-6 rounded-3xl border border-[#fff4e5]/10 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-[#fff4e5]/10 pb-3">
              <h4 className="font-syne text-lg font-bold uppercase text-[#f9d8ff]">Event Sessions</h4>
              <span className="font-mono text-[11px] text-[#d8c3ad] uppercase">Status Feed</span>
            </div>
            <div className="flex flex-col gap-3">
              {selectedFaction.feed.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#2d1635] hover:bg-[#382140] transition-colors p-3.5 rounded-2xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.type === 'victory' ? 'bg-[#7fe192]' : 'bg-[#ffc174]'
                      }`}
                    />
                    <div className="flex flex-col">
                      <span className="font-mono text-xs font-semibold text-[#f9d8ff]">{item.title}</span>
                      <span className="font-mono text-[10px] text-[#d8c3ad]">{item.time}</span>
                    </div>
                  </div>
                  <span className="font-mono font-bold text-xs text-[#ffc174] bg-[#382140] px-2 py-0.5 rounded">
                    Result TBD
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Architectural Bottom Decorative Footnote */}
      <div className="w-full py-6 mt-12 opacity-20 pointer-events-none select-none flex items-center justify-center gap-8 text-[#f9d8ff] border-t border-[#ffc174]/20">
        <span className="font-mono text-[11px] uppercase tracking-widest text-[#ffc174]">
          L'INTERVENTION MMXXVI · BASTILLE · TIANANMEN · TAHRIR · SYNTAGMA
        </span>
      </div>
    </section>
  );
};
