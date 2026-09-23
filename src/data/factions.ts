import { FactionData } from '../types';

export const FACTIONS_DATA: Record<string, FactionData> = {
  bastille: {
    id: 'bastille',
    name: 'Team Bastille',
    badge: 'FACTION PROFILE · BASTILLE',
    motto: '“Par la plume et par l’épée”',
    desc: 'Rooted in classical resistance, forensic French and Arabic debate, and grand historical theater. Defending champions and masters of extempore rhetoric.',
    captain: 'Rayyan Abdul Malik',
    master: 'Usthad Farooq Nadwi',
    symbol: 'The Iron Parapet',
    points: 1428,
    momentum: '+42 pts this session',
    rank: '01',
    rankSub: 'Leading',
    aheadText: 'Ahead by 58 points',
    candidates: '42',
    events: '18 / 24',
    golds: '09',
    winRate: '68.4%',
    bannerGradient: 'from-[#991B1B] via-[#DC2626] to-[#7F1D1D]',
    accentColor: '#DC2626',
    illustrationUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByiZn6my2XXqEvXTE3gkUJWf2vM4z5j6lQEHHjfbTSeWT90OU46-jtNCLKYqFLJkfynVD88TLp6jDejgUjBX5x1GSaGWLTgH3GBkW1RqC64218yK0ODShuyODQ3YHvG-cVctXwmEzQ17rtY2W2IpJ-kkM3lq3xzwA9oomR_141b2yV9gehx_vEJTgfInRDFOeFkJo5ospmGhaxAK1YqTN5nr1sNY2Bk4KUMiaTYqZYUdgUPGsETk0g-g',
    badgeStripUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDtbW2b0MMXCTsL7UwDPLVITwzy3m8R_awMfLe30VBpdGgumgZulp9dPH2VX5Ppf_mP26d9ISf6kQ-RqY0tqBgY1ZZ121iOM1IrDRmtRAZeILMaq0gpTXtSXy7nzfTSj4Ty07TIwVsdV_VGJajUzv3NKEXlAVKBuDs8KdnE1zL96OBfFM2QMVVUhzg7buCIMiD6B6SH0_jjIN8rs0vfBiLuERKFaPr70_PIg89P04JtWqksgyDOhl3Dxg',
    actionCircleUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDd9TlFNMEQff0q76c0H-PmRvEmsNTJlpw08TDqEsQQKH6mZj-jhjPSYLBhqrogAOkAgB_zcQqsBdJLBiI18PqU4X7cZKUJs_slgFeUJhAtI9QVe-KUZLG4Zd_kQF5fkRQhHsoz4g3zVifYnxtsN1l5BPKOVIt_VdCZlOTGC3l3xMmcr-ySjy5VmdiY5ec_fAo0jx032t3hF7Tf64BJgIqjvMrhSdVaG_d1HAkogZ-ooit7IZ5UqO_KfQ',
    topContenders: [
      { name: 'Ameen Al-Baqir', event: 'Classical Arabic Debate', score: '185 PTS', status: 'Gold Medalist', icon: 'mic' },
      { name: 'Hamza V. Siddeeq', event: 'Historical Monologue (Urdu)', score: '160 PTS', status: 'Finalist', icon: 'theater_comedy' },
      { name: 'Zayan Thaha', event: 'English Exegesis & Rhetoric', score: '144 PTS', status: 'Silver Medalist', icon: 'draw' },
      { name: 'Fadil Noorani', event: 'Grand Vernacular Drama', score: '130 PTS', status: 'Quarter-Final', icon: 'groups' }
    ],
    scheduledClashes: [
      { title: 'Grand Inter-Faction Debate', stage: 'Stage A (Victor Hugo)', time: '14:30 Today', state: 'NEXT UP', contender: 'Ameen & Hamza' },
      { title: 'Calligraphic Illuminations', stage: 'Atelier III', time: '16:00 Today', state: 'SCHEDULED', contender: 'Sulaiman K.' },
      { title: 'Extempore Impromptu Clash', stage: 'Amphitheater East', time: '18:15 Today', state: 'CALLING', contender: 'Zayan Thaha' }
    ],
    feed: [
      { title: 'Arabic Debate Finals Won', points: '+50 PTS', time: '28m ago', type: 'victory' },
      { title: 'Classical Poetry Recitation', points: '+25 PTS', time: '1h 14m ago', type: 'standard' },
      { title: 'Essay Jury Adjudication', points: '+15 PTS', time: '2h 30m ago', type: 'standard' }
    ]
  },
  tiananmen: {
    id: 'tiananmen',
    name: 'Team Tiananmen',
    badge: 'FACTION PROFILE · TIANANMEN',
    motto: '“Truth Written in Living Jade”',
    desc: 'Disciplined scholars of calligraphy, philosophical dialectics, and intricate linguistic translation. Known for quiet precision and relentless essay tallies.',
    captain: 'Ibrahim Khaleel',
    master: 'Usthad Zainuddin Wafy',
    symbol: 'The Imperial Gate',
    points: 1175,
    momentum: '+28 pts this session',
    rank: '04',
    rankSub: 'Trailing',
    aheadText: 'Trailing by 253 points',
    candidates: '38',
    events: '16 / 24',
    golds: '06',
    winRate: '54.2%',
    bannerGradient: 'from-[#052e16] via-[#15803D] to-[#14532D]',
    accentColor: '#15803D',
    illustrationUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRBz83Tfr2g7VAbOr6Ezf_YtNE6Yw_Yh2S0Eus4H-0GItKUYBu7fKYgnqmVzURQ5nEPtSrAroz1O1is58nDZPKJQQFQuv9k-8VdJ5aswAvSd9AKqPnEH64kh-5z7MG09WzWaQgKJ9LbCmeognneYYsaYO5k2Pdoc-XYICYFime-FaAhe2cPVPKwbFvMI-X0h69l1khLG2E8KONaLRvEjFJ1svgtj1BLxnq0WvTs5BF-G3MPvBx-uh4rw',
    badgeStripUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkq2fIHk2HNIiUEBbNkzgUpY012GUyLLGGKpG9bDszf701B1lCJI1S2FDfT9xhcfsNBsaApdn9kwOehfNLnQDEyuvaNNienwoPENLdQoV0NHcD9awm04cLPASlctemAxm318Hs8pWPJgc8nYg67AJSAVRNv6JkIVYxRM5U9t8WQ_MT_J0voIhki_Y7MPdygQo4khAK_kvxmJ4gQRFEhVmcPUuHkFUFHu8TBc5fCAOWlEaTg-oKAMZZOw',
    actionCircleUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrym0Rc3f-QMtxjg_WJi6xuN_jRtkxw9JIpi7gXRUrJ2Hb_LRPeC-GUi7nnXYmlQlGSI7hg9AVLRYnGWKwZDnNoIBUYJAa9hZgQSEeX7vCczQO4cvYZjS3nGum4B5dOtFTWfp0TzyZK1s97NyThLIsaAcl2yaNyQh8xN118Zsb_NuVTZDsFSGvyhPIIWnbVIHFQIlHd8FwDygye9pY4mM7FrwcZ49gj9rURagAQDwx6Hhx3zYG134cFg',
    topContenders: [
      { name: 'Luqman Hakim', event: 'Diwani Calligraphy Masters', score: '172 PTS', status: 'Gold Medalist', icon: 'brush' },
      { name: 'Munawwir Shan', event: 'Comparative Thematic Essay', score: '145 PTS', status: 'Gold Medalist', icon: 'edit_note' },
      { name: 'Sirajudheen Ali', event: 'Quranic Translation & Syntax', score: '138 PTS', status: 'Finalist', icon: 'menu_book' },
      { name: 'Ashraf Kareem', event: 'Dialectical Forum (Malayalam)', score: '110 PTS', status: 'Semi-Finalist', icon: 'record_voice_over' }
    ],
    scheduledClashes: [
      { title: 'Manuscript Inscription Trial', stage: 'Guild Gallery Room', time: '14:45 Today', state: 'READY', contender: 'Luqman Hakim' },
      { title: 'Bilingual Scholastic Forum', stage: 'Pavilion Stage B', time: '17:00 Today', state: 'SCHEDULED', contender: 'Munawwir Shan' },
      { title: 'Eastern Heritage Monologue', stage: 'Stage D (Al-Ghazali)', time: '19:30 Today', state: 'UPCOMING', contender: 'Shahid Raza' }
    ],
    feed: [
      { title: 'Calligraphy Masterclass 1st Place', points: '+45 PTS', time: '40m ago', type: 'victory' },
      { title: 'Book Review Commendation', points: '+20 PTS', time: '3h ago', type: 'standard' },
      { title: 'Speed Composition Trial', points: '+18 PTS', time: '4h 10m ago', type: 'standard' }
    ]
  },
  tahrir: {
    id: 'tahrir',
    name: 'Team Tahrir',
    badge: 'FACTION PROFILE · TAHRIR',
    motto: '“The Open Square of Liberty”',
    desc: 'The crowd-rousers of oratorical eloquence, insurgent verse, and kinetic stage theater. Fierce competitors in high-decibel debate arenas.',
    captain: 'Muhammed Sinan',
    master: 'Usthad Tariq Al-Bukhari',
    symbol: 'The Radiant Obelisk',
    points: 1370,
    momentum: '+55 pts this session',
    rank: '02',
    rankSub: 'Challenger',
    aheadText: 'Trailing #01 by only 58 points',
    candidates: '44',
    events: '18 / 24',
    golds: '08',
    winRate: '64.8%',
    bannerGradient: 'from-[#0C4A6E] via-[#0284C7] to-[#1D4ED8]',
    accentColor: '#0284C7',
    illustrationUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHK8fqlNM-DCH5SoNkflW188PZSD-I0nvQbRecfSFQuAQcHmUGaV3zpvwvtt7oJMt_iJGpxjfCqpOR9_MWcn354lmWgfgFssK7Jz5-yLapfzdp2DVV8L5jFxXQ0tpWBdV5TKGlP6CMhxtyVUHX6W-TTW9VKlfLwWs5YANbVvsd39KzCaVFhZbVvObsDQA8XIsWUvvIT_74up3B3LuHSAfApgq2C1D7fo_ZQtdqzcANCYFNzkB0x9nF7Q',
    badgeStripUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDyLCzDYdPauhkdenPFKbXlA_D4iueBdrhF7ZzifY3dhReu8i4m4L5p_mHt6aA9Et7P7d1AA4QJHPaVzyRjxxDekkxjbPBHRiv0G8xMgiVrrNUEByEcI8nGi6J9wn4TFC8VhbNUQEZ1gy_5j6DYGnGvttA4F26L_-V4B7adwZCkQ9XNPpJgbt1A9v-jKee-S1rhJYMbvPFajlwlQOf9CCRy9w4djmlRmiIAOtAF_iKW3L_a5pm9HGwyHA',
    actionCircleUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3YfquysJ0mDbqXF7HYgjiO34KiirUXW1eWicevmclRBTPz8WyJiJVgPoaN6LA1GYkMhiuXgFX0oTorVEMPPWk1wKRE0hEB5-b9MMA4ma2GOWb-NzT_TPcM8AoET5IZQRkc4jsoNS5dJ8PJvNYSuSJqUvM3NMtSCCb8RssFsaNum-Q56y-HHcHRjXZUcfwNDYTbSJQ2d_T6DtEwZ_1rh2C9SXiUbR7sAq8S4_-PTUq1MIKh04rKiZR7A',
    topContenders: [
      { name: 'Rashid Al-Kindi', event: 'Street Theater & Tableau', score: '180 PTS', status: 'Gold Medalist', icon: 'theater_comedy' },
      { name: 'Bilal Anwari', event: 'Forensic Arabic Eloquence', score: '168 PTS', status: 'Gold Medalist', icon: 'mic' },
      { name: 'Noufal Mubarak', event: 'Ode of Liberation (Qasida)', score: '142 PTS', status: 'Silver Medalist', icon: 'auto_stories' },
      { name: 'Thameem Darwish', event: 'Rhetoric & Counter-Argument', score: '124 PTS', status: 'Finalist', icon: 'campaign' }
    ],
    scheduledClashes: [
      { title: 'Stage Play Grand Finale', stage: 'Open Arena Theatre', time: '15:15 Today', state: 'LIVE NOW', contender: 'Rashid & Troupe' },
      { title: 'Qasida Recitation Stage', stage: 'Stage C (Ibn Rushd)', time: '17:30 Today', state: 'SCHEDULED', contender: 'Noufal Mubarak' },
      { title: 'Parliamentary Style Cross', stage: 'Senate Chamber', time: '20:00 Today', state: 'SCHEDULED', contender: 'Bilal Anwari' }
    ],
    feed: [
      { title: 'Street Theater Sweep Gold', points: '+55 PTS', time: '12m ago', type: 'victory' },
      { title: 'Arabic Eloquence Semis', points: '+30 PTS', time: '1h 45m ago', type: 'standard' },
      { title: 'Anthology Recitation', points: '+22 PTS', time: '3h ago', type: 'standard' }
    ]
  },
  syntagma: {
    id: 'syntagma',
    name: 'Team Syntagma',
    badge: 'FACTION PROFILE · SYNTAGMA',
    motto: '“Constitution of the Muses”',
    desc: 'Rooted in Athenian scholasticism, philosophical disputation, and classical choir chants. Strongholds in scholastic debate, logic puzzles, and symposiums.',
    captain: 'Danish Farhan',
    master: 'Usthad Salman Azhari',
    symbol: 'The Ionic Colonnade',
    points: 1311,
    momentum: '+35 pts this session',
    rank: '03',
    rankSub: 'Contender',
    aheadText: 'Trailing #02 by 59 points',
    candidates: '40',
    events: '17 / 24',
    golds: '07',
    winRate: '61.5%',
    bannerGradient: 'from-[#713F12] via-[#EAB308] to-[#A16207]',
    accentColor: '#EAB308',
    illustrationUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTf0_qC8Rr2GwUKuSh8A3A1hlEeuzZtkMGay02bYcKDfpgwcLcwe00-5Z5nk5T8knKuJwu677o9yprWphcQs5e7qPmQpZRFtb_4ZxmHJT2c5hX-3-WpT2Ykzier-HzsLxr-FCZlTBy-Hqj8fTcwDBYyfFk0BMJzHmR6Q8jQBji60zSLLmR8EGndp2wYJ5puZgjxXkwpPzih1NIKGLcknZaoFYQbt2gox6Kf1lQuOW-2W4Ldp1FhLdnPA',
    badgeStripUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9UJSjN8qAtdgCiMh_3uFiRA1leQIHHGhZZgZyuCo4wOxwhrnOFLvZM9td7tlu_C8O2RK_js8MBHlHzVHd5pDae4I0eK2VHbOWCS-jlx2wGFf5cTgtTCCqHDnQvX1fp0cFSzaja0iadsflym7UJhERXBJ5CEQ6rkdcsEabkehffyBgLUiKjFffK4LYL2wXHbWmOt9D88CcpcCYDTRECJ8YKUtMqJW2zweVMvL71-CxAUaDmsI2SYMuCQ',
    actionCircleUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_QVyR-Mu132Ftr9QLM5eL5_eEmQyDiVvFICULf4-PnPk9aHpotVjd7ZnzXhh1HX3-wrW6EEeJsOTAxa_7_GE4G6hc919WuA-6tuyrfquTXMbvZbEdDMXLjR_CMv49705AqgZgvPQ90Og2wPNEKKlC8zelcA8d3tQErpAk4kBmDG5PNr-wXuutE0AG0TfMk28rUng9_W2SHrnUPQgxpoFLMfOM5CkPpdM7aQeT1JPMzZTLmw9lBq6t_w',
    topContenders: [
      { name: 'Adil Munir', event: 'Socratic Dialogue Contest', score: '175 PTS', status: 'Gold Medalist', icon: 'psychology' },
      { name: 'Zuhair Al-Hassan', event: 'Classical Choral Anthem', score: '155 PTS', status: 'Gold Medalist', icon: 'music_note' },
      { name: 'Haneef Wafa', event: 'Philosophical Jurisprudence', score: '139 PTS', status: 'Silver Medalist', icon: 'balance' },
      { name: 'Irfan Jaleel', event: 'English Elocution & Satire', score: '120 PTS', status: 'Finalist', icon: 'volume_up' }
    ],
    scheduledClashes: [
      { title: 'Choral Polyphony Contest', stage: 'Acoustic Sanctuary', time: '15:45 Today', state: 'NEXT UP', contender: 'Zuhair & Choral' },
      { title: 'Jurisprudence Disputation', stage: 'Court of Scholastics', time: '18:00 Today', state: 'SCHEDULED', contender: 'Haneef Wafa' },
      { title: 'Satirical Prose Clash', stage: 'Stage A (Victor Hugo)', time: '19:45 Today', state: 'UPCOMING', contender: 'Irfan Jaleel' }
    ],
    feed: [
      { title: 'Socratic Disputation Gold', points: '+45 PTS', time: '35m ago', type: 'victory' },
      { title: 'Philosophical Thesis Defense', points: '+25 PTS', time: '2h 10m ago', type: 'standard' },
      { title: 'Anthem Prelude Trial', points: '+15 PTS', time: '4h ago', type: 'standard' }
    ]
  }
};
