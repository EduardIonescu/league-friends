export type Region = "eun1" | "euw1";

export type RiotId = {
  puuid: string;
  gameName: string;
  tagLine: string;
};
export type RiotIdWithRegion = {
  puuid: string;
  gameName: string;
  tagLine: string;
  region: Region;
};

export type AccountsData = {
  name: string;
  endpoints: { url: string; region: Region }[];
};

export type SummonerData = {
  id: string;
  accountId: string;
  puuid: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
};

export type SummonerDataExtra = {
  puuid: string;
  gameName: string;
  tagLine: string;
  region: Region;
  id: string;
  accountId: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
};

export type AccountData = {
  leagueId: string;
  summonerId: string;
  queueType: string;
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  hotStreak: boolean;
  miniSeries: MiniSeries;
};

export type MiniSeries = {
  losses: number;
  wins: number;
  progress: string;
  target: number;
};
