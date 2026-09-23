import React from 'react';

interface ProgramsGalleryModalProps {
  type: 'programs' | 'gallery' | null;
  onClose: () => void;
}

export const ProgramsGalleryModal: React.FC<ProgramsGalleryModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#17041e]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-[#200a28] border-2 border-[#ffc174]/30 text-[#fff4e5] w-full max-w-3xl rounded-3xl p-6 sm:p-8 shadow-2xl relative max-h-[88vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#2d1635] text-[#ffc174] border border-[#ffc174]/40 font-bold flex items-center justify-center hover:bg-[#382140] transition-colors cursor-pointer"
        >
          ✕
        </button>

        {type === 'programs' ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffc174] animate-ping" />
              <span className="font-mono text-xs text-[#ffc174] uppercase tracking-widest font-bold">
                STAGE LINEUP & EVENTS
              </span>
            </div>
            <h3 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase text-[#fff4e5]">
              Festival Programs Lineup
            </h3>
            <p className="font-newsreader text-base text-[#d8c3ad] italic mt-1 mb-6">
              Official order of literary, forensic, musical, and theatrical clashes for L'Intervention 2026.
            </p>

            <div className="space-y-4">
              {[
                {
                  time: '10:00 AM - 12:00 PM',
                  stage: 'Grand Victor Hugo Arena (Stage A)',
                  title: 'Grand Arabic Forensics & Counter-Disputation',
                  category: 'Debate & Rhetoric',
                  factions: 'Bastille vs Tahrir',
                },
                {
                  time: '12:30 PM - 02:00 PM',
                  stage: 'Al-Ghazali Scholastic Pavilion',
                  title: 'Comparative Exegesis & Philosophical Symposium',
                  category: 'Scholastic Literature',
                  factions: 'Tiananmen vs Syntagma',
                },
                {
                  time: '02:30 PM - 04:30 PM',
                  stage: 'Open Sky Amphitheater',
                  title: 'Epic Street Tableau & Historical Monologue',
                  category: 'Theatrical Arts',
                  factions: 'All 4 Contingents',
                },
                {
                  time: '05:00 PM - 07:00 PM',
                  stage: 'Atelier of Illumination',
                  title: 'Diwani & Kufic Calligraphy Master Trials',
                  category: 'Visual & Manuscript Arts',
                  factions: 'Selected Guild Masters',
                },
                {
                  time: '07:30 PM - 10:00 PM',
                  stage: 'Acoustic Sanctuary',
                  title: 'Choral Polyphony & Grand Festival Anthem Clashes',
                  category: 'Vocal Performance',
                  factions: 'Championship Finale',
                },
              ].map((prog, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-[#2d1635] border border-[#fff4e5]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-[#ffc174]/40 transition-colors"
                >
                  <div className="flex flex-col">
                    <span className="font-mono text-[11px] text-[#ffc174] uppercase tracking-wider font-semibold">
                      {prog.time} · {prog.stage}
                    </span>
                    <h4 className="font-syne font-bold text-lg text-[#fff4e5] mt-0.5">{prog.title}</h4>
                    <span className="font-newsreader text-xs text-[#d8c3ad] italic">
                      Category: {prog.category}
                    </span>
                  </div>
                  <span className="self-start sm:self-center px-3 py-1 rounded-full bg-[#442c4b] font-mono text-xs text-[#ffddb8] whitespace-nowrap">
                    {prog.factions}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7fe192] animate-ping" />
              <span className="font-mono text-xs text-[#7fe192] uppercase tracking-widest font-bold">
                VISUAL ARCHIVES
              </span>
            </div>
            <h3 className="font-syne text-3xl sm:text-4xl font-extrabold uppercase text-[#fff4e5]">
              Festival Gallery
            </h3>
            <p className="font-newsreader text-base text-[#d8c3ad] italic mt-1 mb-6">
              Capturing historic moments, calligraphic masterworks, and grand arena oratory.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Bastille Fortress Citadel',
                  tag: 'Architecture & Stage',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByiZn6my2XXqEvXTE3gkUJWf2vM4z5j6lQEHHjfbTSeWT90OU46-jtNCLKYqFLJkfynVD88TLp6jDejgUjBX5x1GSaGWLTgH3GBkW1RqC64218yK0ODShuyODQ3YHvG-cVctXwmEzQ17rtY2W2IpJ-kkM3lq3xzwA9oomR_141b2yV9gehx_vEJTgfInRDFOeFkJo5ospmGhaxAK1YqTN5nr1sNY2Bk4KUMiaTYqZYUdgUPGsETk0g-g',
                  bg: 'from-[#991B1B]/40 to-[#200a28]',
                },
                {
                  title: 'Imperial Dialectics Pagoda',
                  tag: 'Tiananmen Guild',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRBz83Tfr2g7VAbOr6Ezf_YtNE6Yw_Yh2S0Eus4H-0GItKUYBu7fKYgnqmVzURQ5nEPtSrAroz1O1is58nDZPKJQQFQuv9k-8VdJ5aswAvSd9AKqPnEH64kh-5z7MG09WzWaQgKJ9LbCmeognneYYsaYO5k2Pdoc-XYICYFime-FaAhe2cPVPKwbFvMI-X0h69l1khLG2E8KONaLRvEjFJ1svgtj1BLxnq0WvTs5BF-G3MPvBx-uh4rw',
                  bg: 'from-[#15803D]/40 to-[#200a28]',
                },
                {
                  title: 'Obelisk of Freedom',
                  tag: 'Tahrir Square',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHK8fqlNM-DCH5SoNkflW188PZSD-I0nvQbRecfSFQuAQcHmUGaV3zpvwvtt7oJMt_iJGpxjfCqpOR9_MWcn354lmWgfgFssK7Jz5-yLapfzdp2DVV8L5jFxXQ0tpWBdV5TKGlP6CMhxtyVUHX6W-TTW9VKlfLwWs5YANbVvsd39KzCaVFhZbVvObsDQA8XIsWUvvIT_74up3B3LuHSAfApgq2C1D7fo_ZQtdqzcANCYFNzkB0x9nF7Q',
                  bg: 'from-[#0284C7]/40 to-[#200a28]',
                },
                {
                  title: 'Temple of Civic Rhetoric',
                  tag: 'Syntagma Colonnade',
                  img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTf0_qC8Rr2GwUKuSh8A3A1hlEeuzZtkMGay02bYcKDfpgwcLcwe00-5Z5nk5T8knKuJwu677o9yprWphcQs5e7qPmQpZRFtb_4ZxmHJT2c5hX-3-WpT2Ykzier-HzsLxr-FCZlTBy-Hqj8fTcwDBYyfFk0BMJzHmR6Q8jQBji60zSLLmR8EGndp2wYJ5puZgjxXkwpPzih1NIKGLcknZaoFYQbt2gox6Kf1lQuOW-2W4Ldp1FhLdnPA',
                  bg: 'from-[#EAB308]/40 to-[#200a28]',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-2xl bg-gradient-to-b ${item.bg} border border-[#fff4e5]/10 flex flex-col items-center text-center`}
                >
                  <img src={item.img} alt={item.title} className="w-36 h-36 object-contain my-2 drop-shadow-md" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#ffc174] mt-2">
                    {item.tag}
                  </span>
                  <h4 className="font-syne font-bold text-base text-[#fff4e5]">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-[#fff4e5]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#ffc174] text-[#200a28] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#ffddb8] transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
