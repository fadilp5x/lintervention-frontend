export type PageSection = 'home' | 'teams' | 'leaderboard' | 'programs' | 'gallery';

export interface Contender {
  name: string;
  event: string;
  score: string;
  status: string;
  icon: string;
}

export interface ScheduledClash {
  title: string;
  stage: string;
  time: string;
  state: 'NEXT UP' | 'SCHEDULED' | 'CALLING' | 'LIVE NOW' | 'READY' | 'UPCOMING';
  contender: string;
}

export interface ScoreFeedItem {
  title: string;
  points: string;
  time: string;
  type: 'victory' | 'standard';
}

export interface FactionData {
  id: 'bastille' | 'tiananmen' | 'tahrir' | 'syntagma';
  name: string;
  badge: string;
  motto: string;
  desc: string;
  captain: string;
  master: string;
  symbol: string;
  points: number;
  momentum: string;
  rank: string;
  rankSub: string;
  aheadText: string;
  candidates: string;
  events: string;
  golds: string;
  winRate: string;
  bannerGradient: string;
  accentColor: string;
  illustrationUrl: string;
  badgeStripUrl: string;
  actionCircleUrl: string;
  topContenders: Contender[];
  scheduledClashes: ScheduledClash[];
  feed: ScoreFeedItem[];
}

export interface ActivityItem {
  team: string;
  points: string;
  event: string;
  color: string;
}
