import { retryAsyncFunction } from "@/utils/lib/retryAsyncFunction";
import { getMatches, getMatchIds } from "@/utils/lib/riotHelpers";
import { AccountData, SummonerDataExtra } from "@/utils/types/common";
import { Fragment } from "react";
import MatchDataShort from "./matchDataShort";
import OPGGLink from "./opggLink";
import WinrateBar from "./winrateBar";

export default async function AccountCard({
  account,
}: {
  account:
    | string
    | {
        accountData: [] | AccountData[];
        summonerData: SummonerDataExtra;
      };
}) {
  if (typeof account === "string") {
    return (
      <article>
        <p>ALKGHJWKGALK NOT FOUND: {account}</p>
      </article>
    );
  }
  const { accountData, summonerData } = account;

  const rankedAccount = accountData?.find(
    (type) => type.queueType === "RANKED_SOLO_5x5"
  );

  if (!rankedAccount) {
    return (
      <article
        className="w-72 border-[1px] border-light shadow-light rounded-md p-4"
        key={summonerData.id}
      >
        <OPGGLink summonerData={summonerData} />

        <p>Unranked</p>
      </article>
    );
  }

  const matchIds = await retryAsyncFunction(getMatchIds, summonerData.puuid);
  const matches = await retryAsyncFunction(getMatches, matchIds);

  return (
    <article
      key={summonerData.id}
      className="border-[1px] border-light shadow-light rounded-md"
    >
      <article className="w-72 p-4">
        <OPGGLink summonerData={summonerData} />

        <>
          <p>
            {rankedAccount.tier} {rankedAccount.rank} (
            {rankedAccount.leaguePoints} LP)
          </p>

          <WinrateBar wins={rankedAccount.wins} losses={rankedAccount.losses} />
        </>
      </article>
      {matches.length >= 1 && (
        <ul className="w-72 p-4 border-t-[1px] border-light">
          {matches?.map((match) => (
            <Fragment key={match.metadata?.matchId ?? Math.random() * 10000}>
              <MatchDataShort match={match} summonerId={summonerData.id} />
            </Fragment>
          ))}
        </ul>
      )}
    </article>
  );
}
