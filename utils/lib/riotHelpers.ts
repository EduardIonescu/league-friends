import {
  AccountData,
  AccountsData,
  RiotId,
  RiotIdWithRegion,
  SummonerData,
  SummonerDataExtra,
} from "../types/common";
import { MatchV5 } from "../types/match";
import { retryAsyncFunction } from "./retryAsyncFunction";

export async function getRiotIds(accountsData: AccountsData) {
  try {
    const endpoints = accountsData.endpoints;

    const promises = endpoints.map((endpoint) =>
      fetch(endpoint.url, {
        // next: { revalidate: 180 },
        headers: {
          "X-Riot-Token": process.env.NEXT_PUBLIC_LEAGUE_API!,
        },
      }).then((response) => ({ response, region: endpoint.region }))
    );

    const responses = await Promise.all(promises);

    const data = await Promise.all(
      responses.map(async ({ response, region }) => {
        const jsonData: RiotId = await response.json();
        return { ...jsonData, region };
      })
    );

    return data;
  } catch (error) {
    return `Error fetching data for ${accountsData.name}`;
  }
}

export async function getSummonerId(riotId: RiotIdWithRegion) {
  const { region, puuid: encryptedPUUID } = riotId;
  try {
    const endpoint = `https://${region}.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${encryptedPUUID}`;

    const data = await fetch(endpoint, {
      headers: {
        "X-Riot-Token": process.env.NEXT_PUBLIC_LEAGUE_API!,
      },
    });

    const result: SummonerData = await data.json();

    return { ...result, ...riotId };
  } catch (error) {
    return `Error fetching summoner data for ${encryptedPUUID}`;
  }
}

export async function getSummonersData(riotIds: RiotIdWithRegion[] | string) {
  if (typeof riotIds === `string`) {
    return riotIds;
  }

  const promises = riotIds.map((riotId) => getSummonerId(riotId));

  const data = await Promise.all(promises);

  return data;
}

export async function getAccountId(
  summonerDataExtra: SummonerDataExtra | string
) {
  if (typeof summonerDataExtra === `string`) {
    return summonerDataExtra;
  }
  const {
    region,
    id: encryptedSummonerId,
    gameName,
    tagLine,
  } = summonerDataExtra;
  try {
    const endpoint = `https://${region}.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}`;

    const data = await fetch(endpoint, {
      next: { revalidate: 180 },
      headers: {
        "X-Riot-Token": process.env.NEXT_PUBLIC_LEAGUE_API!,
      },
    });

    const result: AccountData[] | [] = await data.json();

    return { accountData: result, summonerData: summonerDataExtra };
  } catch (error) {
    return `Error fetching account data for ${gameName}#${tagLine}`;
  }
}

export async function getAccountData(
  summonerDataExtra: string | (SummonerDataExtra | string)[]
) {
  if (typeof summonerDataExtra === `string`) {
    return summonerDataExtra;
  }

  const promises = summonerDataExtra.map((data) => getAccountId(data));

  const data = await Promise.all(promises);

  return data;
}

export async function getPlayerData(accountsData: AccountsData) {
  const riotIds = await getRiotIds(accountsData);
  const summoners = await getSummonersData(riotIds);
  const accounts = await getAccountData(summoners);

  return accounts;
}

export async function getMatchIds(puuid: string) {
  const limit = 4;
  const endpoint = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?type=ranked&start=0&count=${limit}`;

  const data = await fetch(endpoint, {
    next: { revalidate: 180 },
    headers: {
      "X-Riot-Token": process.env.NEXT_PUBLIC_LEAGUE_API!,
    },
  });

  if (data.status !== 200) {
    throw new Error("Status: " + data.status);
  }

  const result: string[] = await data.json();

  return result;
}

export async function getMatch(matchId: string) {
  const endpoint = `https://europe.api.riotgames.com/lol/match/v5/matches/${matchId}`;
  const data = await fetch(endpoint, {
    next: { revalidate: 180 },
    headers: {
      "X-Riot-Token": process.env.NEXT_PUBLIC_LEAGUE_API!,
    },
  });

  const result: MatchV5.MatchDTO = await data.json();

  return result;
}

export async function getMatches(matchIds: string[]) {
  const data = [];

  for (const matchId of matchIds) {
    const match = await retryAsyncFunction(getMatch, matchId);
    if (match) {
      data.push(match);
    } else {
      console.warn("Match didn't go through");
    }
  }

  return data;
}
