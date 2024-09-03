export namespace MatchV5 {
  export enum MatchType {
    Ranked = "ranked",
    Normal = "normal",
    Tourney = "tourney",
    Tutorial = "tutorial",
  }

  export interface StatPerksDTO {
    defense: number;
    flex: number;
    offense: number;
  }

  export interface SelectionDTO {
    perk: number;
    var1: number;
    var2: number;
    var3: number;
  }

  export interface StyleDTO {
    description: string;
    selections: SelectionDTO[];
    style: number;
  }

  export interface PerksDTO {
    statPerks: StatPerksDTO;
    styles: StyleDTO[];
  }

  export interface ChallengesDTO {
    "12AssistStreakCount": number;
    abilityUses: number;
    acesBefore15Minutes: number;
    alliedJungleMonsterKills: number;
    baronBuffGoldAdvantageOverThreshold: number;
    baronTakedowns: number;
    blastConeOppositeOpponentCount: number;
    bountyGold: number;
    buffsStolen: number;
    completeSupportQuestInTime: number;
    controlWardTimeCoverageInRiverOrEnemyHalf: number;
    controlWardsPlaced: number;
    damagePerMinute: number;
    damageTakenOnTeamPercentage: number;
    dancedWithRiftHerald: number;
    deathsByEnemyChamps: number;
    dodgeSkillShotsSmallWindow: number;
    doubleAces: number;
    dragonTakedowns: number;
    earliestBaron: number;
    earlyLaningPhaseGoldExpAdvantage: number;
    effectiveHealAndShielding: number;
    elderDragonKillsWithOpposingSoul: number;
    elderDragonMultikills: number;
    enemyChampionImmobilizations: number;
    enemyJungleMonsterKills: number;
    epicMonsterKillsNearEnemyJungler: number;
    epicMonsterKillsWithin30SecondsOfSpawn: number;
    epicMonsterSteals: number;
    epicMonsterStolenWithoutSmite: number;
    firstTurretKilled: number;
    firstTurretKilledTime: number;
    flawlessAces: number;
    fullTeamTakedown: number;
    gameLength: number;
    getTakedownsInAllLanesEarlyJungleAsLaner: number;
    goldPerMinute: number;
    hadOpenNexus: number;
    immobilizeAndKillWithAlly: number;
    initialBuffCount: number;
    initialCrabCount: number;
    jungleCsBefore10Minutes: number;
    junglerTakedownsNearDamagedEpicMonster: number;
    kTurretsDestroyedBeforePlatesFall: number;
    kda: number;
    killAfterHiddenWithAlly: number;
    killParticipation: number;
    killedChampTookFullTeamDamageSurvived: number;
    killingSprees: number;
    killsNearEnemyTurret: number;
    killsOnOtherLanesEarlyJungleAsLaner: number;
    killsOnRecentlyHealedByAramPack: number;
    killsUnderOwnTurret: number;
    killsWithHelpFromEpicMonster: number;
    knockEnemyIntoTeamAndKill: number;
    landSkillShotsEarlyGame: number;
    laneMinionsFirst10Minutes: number;
    laningPhaseGoldExpAdvantage: number;
    legendaryCount: number;
    legendaryItemUsed: number[];
    lostAnInhibitor: number;
    maxCsAdvantageOnLaneOpponent: number;
    maxKillDeficit: number;
    maxLevelLeadLaneOpponent: number;
    mejaisFullStackInTime: number;
    moreEnemyJungleThanOpponent: number;
    multiKillOneSpell: number;
    multiTurretRiftHeraldCount: number;
    multikills: number;
    multikillsAfterAggressiveFlash: number;
    outerTurretExecutesBefore10Minutes: number;
    outnumberedKills: number;
    outnumberedNexusKill: number;
    perfectDragonSoulsTaken: number;
    perfectGame: number;
    pickKillWithAlly: number;
    playedChampSelectPosition: number;
    poroExplosions: number;
    quickCleanse: number;
    quickFirstTurret: number;
    quickSoloKills: number;
    riftHeraldTakedowns: number;
    saveAllyFromDeath: number;
    scuttleCrabKills: number;
    skillshotsDodged: number;
    skillshotsHit: number;
    snowballsHit: number;
    soloBaronKills: number;
    soloKills: number;
    soloTurretsLategame: number;
    stealthWardsPlaced: number;
    survivedSingleDigitHpCount: number;
    survivedThreeImmobilizesInFight: number;
    takedownOnFirstTurret: number;
    takedowns: number;
    takedownsAfterGainingLevelAdvantage: number;
    takedownsBeforeJungleMinionSpawn: number;
    takedownsFirstXMinutes: number;
    takedownsInAlcove: number;
    takedownsInEnemyFountain: number;
    teamBaronKills: number;
    teamDamagePercentage: number;
    teamElderDragonKills: number;
    teamRiftHeraldKills: number;
    tookLargeDamageSurvived: number;
    turretPlatesTaken: number;
    turretTakedowns: number;
    turretsTakenWithRiftHerald: number;
    twentyMinionsIn3SecondsCount: number;
    twoWardsOneSweeperCount: number;
    unseenRecalls: number;
    visionScoreAdvantageLaneOpponent: number;
    visionScorePerMinute: number;
    wardTakedowns: number;
    wardTakedownsBefore20M: number;
    wardsGuarded: number;
  }

  export interface ParticipantDTO {
    assists: number;
    baronKills: number;
    bountyLevel: number;
    challenges: ChallengesDTO;
    champExperience: number;
    champLevel: number;
    championId: number;
    championName: string;
    championTransform: number;
    consumablesPurchased: number;
    damageDealtToBuildings: number;
    damageDealtToObjectives: number;
    damageDealtToTurrets: number;
    damageSelfMitigated: number;
    deaths: number;
    detectorWardsPlaced: number;
    doubleKills: number;
    dragonKills: number;
    firstBloodAssist: boolean;
    firstBloodKill: boolean;
    firstTowerAssist: boolean;
    firstTowerKill: boolean;
    gameEndedInEarlySurrender: boolean;
    gameEndedInSurrender: boolean;
    goldEarned: number;
    goldSpent: number;
    individualPosition: string;
    inhibitorKills: number;
    inhibitorTakedowns: number;
    inhibitorsLost: number;
    item0: number;
    item1: number;
    item2: number;
    item3: number;
    item4: number;
    item5: number;
    item6: number;
    itemsPurchased: number;
    killingSprees: number;
    kills: number;
    lane: string;
    largestCriticalStrike: number;
    largestKillingSpree: number;
    largestMultiKill: number;
    longestTimeSpentLiving: number;
    magicDamageDealt: number;
    magicDamageDealtToChampions: number;
    magicDamageTaken: number;
    neutralMinionsKilled: number;
    nexusKills: number;
    nexusLost: number;
    nexusTakedowns: number;
    objectivesStolen: number;
    objectivesStolenAssists: number;
    participantId: number;
    pentaKills: number;
    perks: PerksDTO;
    physicalDamageDealt: number;
    physicalDamageDealtToChampions: number;
    physicalDamageTaken: number;
    profileIcon: number;
    puuid: string;
    quadraKills: number;
    riotIdName: string;
    riotIdTagline: string;
    role: string;
    sightWardsBoughtInGame: number;
    spell1Casts: number;
    spell2Casts: number;
    spell3Casts: number;
    spell4Casts: number;
    summoner1Casts: number;
    summoner1Id: number;
    summoner2Casts: number;
    summoner2Id: number;
    summonerId: string;
    summonerLevel: number;
    summonerName: string;
    teamEarlySurrendered: boolean;
    teamId: number;
    teamPosition: string;
    timeCCingOthers: number;
    timePlayed: number;
    totalDamageDealt: number;
    totalDamageDealtToChampions: number;
    totalDamageShieldedOnTeammates: number;
    totalDamageTaken: number;
    totalHeal: number;
    totalHealsOnTeammates: number;
    totalMinionsKilled: number;
    totalTimeCCDealt: number;
    totalTimeSpentDead: number;
    totalUnitsHealed: number;
    tripleKills: number;
    trueDamageDealt: number;
    trueDamageDealtToChampions: number;
    trueDamageTaken: number;
    turretKills: number;
    turretTakedowns: number;
    turretsLost: number;
    unrealKills: number;
    visionScore: number;
    visionWardsBoughtInGame: number;
    wardsKilled: number;
    wardsPlaced: number;
    win: boolean;
  }

  export interface ObjectivesStatsDTO {
    first: boolean;
    kills: number;
  }
  export interface ObjectivesDTO {
    baron: ObjectivesStatsDTO;
    champion: ObjectivesStatsDTO;
    dragon: ObjectivesStatsDTO;
    inhibitor: ObjectivesStatsDTO;
    riftHerald: ObjectivesStatsDTO;
    tower: ObjectivesStatsDTO;
  }

  export interface BanDTO {
    championId: number;
    pickTurn: number;
  }

  export interface TeamDTO {
    bans: BanDTO[];
    objectives: ObjectivesDTO;
    teamId: number;
    win: boolean;
  }

  export interface MatchInfoDTO {
    endOfGameResult: string;
    gameCreation: number;
    gameDuration: number;
    gameId: number;
    gameMode: string;
    gameName: string;
    gameEndTimestamp: number;
    gameStartTimestamp: number;
    gameType: string;
    gameVersion: string;
    mapId: number;
    participants: ParticipantDTO[];
    platformId: string;
    queueId: number;
    teams: TeamDTO[];
    tournamentCode: string;
  }

  export interface MetadataDTO {
    dataVersion: string;
    matchId: string;
    participants: string[];
  }

  export interface MatchDTO {
    metadata: MetadataDTO;
    info: MatchInfoDTO;
  }

  export interface MatchTimelineParticipantDTO {
    participantId: number;
    puuid: string;
  }

  export interface PositionDTO {
    x: number;
    y: number;
  }

  export interface ParticipantFrameDTO {
    championStats: { [key: string]: number };
    currentGold: number;
    damageStats: { [key: string]: number };
    goldPerSecond: number;
    jungleMinionsKilled: number;
    level: number;
    minionsKilled: number;
    participantId: number;
    position: PositionDTO;
    timeEnemySpentControlled: number;
    totalGold: number;
    xp: number;
  }

  export interface VictimDamageDTO {
    basic: boolean;
    magicDamage: number;
    name: string;
    participantId: number;
    physicalDamage: number;
    spellName: string;
    spellSlot: number;
    trueDamage: number;
    type: string;
  }

  export interface EventDTO {
    realTimestamp?: number;
    timestamp: number;
    type: string;
    itemId?: number;
    participantId?: number;
    levelUpType?: string;
    skillSlot?: number;
    creatorId?: number;
    wardType?: string;
    level?: number;
    bounty?: number;
    killStreakLength?: number;
    killerId?: number;
    position?: PositionDTO;
    victimDamageDealt?: string[];
    victimDamageReceived?: string[];
    victimId?: number;
    killType?: string;
    afterId?: number;
    beforeId?: number;
    goldGain?: number;
    assistingParticipantIds?: number[];
    laneType?: string;
    teamId?: number;
    killerTeamId?: number;
    monsterSubType?: string;
    monsterType?: string;
    buildingType?: string;
    towerType?: string;
    transformType?: string;
    multiKillLength?: number;
    gameId?: number;
    winningTeam?: number;
  }

  export interface FrameDTO {
    events: EventDTO[];
    participantFrames: { [key: string]: ParticipantFrameDTO };
    timestamp: number;
  }

  export interface MatchTimelineInfoDTO {
    frameInterval: number;
    frames: FrameDTO[];
    gameId: number;
    participants: MatchTimelineParticipantDTO[];
  }

  export interface MatchTimelineDTO {
    metadata: MetadataDTO;
    info: MatchTimelineInfoDTO;
  }
}
