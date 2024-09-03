import DamageAllergy from "@/components/damageAllergy";
import { ACCOUNTS_DATA } from "@/utils/constants";
import {
  getAccountData,
  getMatches,
  getMatchIds,
  getRiotIds,
  getSummonersData,
} from "@/utils/lib/riotHelpers";
import { AccountData, SummonerDataExtra } from "@/utils/types/common";
import { MatchV5 } from "@/utils/types/match";
import { formatDistanceToNowStrict } from "date-fns/formatDistanceToNowStrict";
import Image from "next/image";
import { Fragment } from "react";

export default async function Home() {
  const edIds = await getRiotIds(ACCOUNTS_DATA.ED);
  const danIds = await getRiotIds(ACCOUNTS_DATA.DAN);
  const demonIds = await getRiotIds(ACCOUNTS_DATA.DEMON);

  const edSummoners = await getSummonersData(edIds);
  const danSummoners = await getSummonersData(danIds);
  const demonSummoners = await getSummonersData(demonIds);

  const edAccounts = await getAccountData(edSummoners);
  const danAccounts = await getAccountData(danSummoners);
  const demonAccounts = await getAccountData(demonSummoners);

  return (
    <main className="flex flex-col items-center gap-12 p-4">
      <PlayerSection name={ACCOUNTS_DATA.ED.name} accounts={edAccounts} />
      <PlayerSection name={ACCOUNTS_DATA.DAN.name} accounts={danAccounts} />
      <PlayerSection name={ACCOUNTS_DATA.DEMON.name} accounts={demonAccounts} />
    </main>
  );
}

function PlayerSection({
  name,
  accounts,
}: {
  name: string;
  accounts:
    | string
    | (
        | string
        | {
            accountData: [] | AccountData[];
            summonerData: SummonerDataExtra;
          }
      )[];
}) {
  if (typeof accounts === "string") {
    return (
      <section>
        <h2>{name}</h2>
        <p>ALKGHJWALKGALK NOT FOUND: {accounts}</p>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-center text-3xl font-bold">{name}</h2>
      <section className="flex gap-6 text-center">
        {accounts.length > 0 &&
          accounts.map((account, index) => (
            <Fragment key={index}>
              <AccountCard account={account} />
            </Fragment>
          ))}
      </section>
    </section>
  );
}

async function AccountCard({
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

  const rankedAccount = accountData.find(
    (type) => type.queueType === "RANKED_SOLO_5x5"
  );

  if (!rankedAccount) {
    return (
      <article
        className="w-72 border-[1px] border-light shadow-light rounded-md p-4"
        key={summonerData.id}
      >
        <h3 className="text-xl font-bold">
          {summonerData.gameName} #{summonerData.tagLine}
        </h3>
        <p>Unranked</p>
      </article>
    );
  }

  const matchIds = await getMatchIds(summonerData.puuid);
  const matches = await getMatches(matchIds);

  const winrate = Math.round(
    (rankedAccount.wins / (rankedAccount?.wins + rankedAccount?.losses)) * 100
  );
  return (
    <article
      key={summonerData.id}
      className="border-[1px] border-light shadow-light rounded-md"
    >
      <article className="w-72 p-4">
        <h3 className="text-xl font-bold">
          {summonerData.gameName} #{summonerData.tagLine}
        </h3>

        <>
          <p>
            {rankedAccount.tier} {rankedAccount.rank} (
            {rankedAccount.leaguePoints} LP)
          </p>
          <p>Wins: {rankedAccount.wins}</p>
          <p>Losses: {rankedAccount.losses}</p>
          <p>Winrate: {winrate}%</p>
        </>
      </article>
      {matches.length >= 1 && (
        <ul className="w-72 p-4 border-t-[1px] border-light">
          {matches.map((match) => (
            <Fragment key={match.metadata?.matchId ?? Math.random() * 10000}>
              <MatchDataShort match={match} summonerId={summonerData.id} />
            </Fragment>
          ))}
        </ul>
      )}
    </article>
  );
}

function MatchDataShort({
  match,
  summonerId,
}: {
  match: MatchV5.MatchDTO;
  summonerId: string;
}) {
  const playerData = match.info?.participants.find(
    (participant) => participant?.summonerId === summonerId
  );
  const imageSrc = `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${playerData?.championId}.png`;
  const score = `${playerData?.kills} / ${playerData?.deaths} / ${playerData?.assists}`;
  const isGameWon = playerData?.win;
  const date = new Date(match.info?.gameEndTimestamp ?? 0);
  const dateFormatted = formatDistanceToNowStrict(date);

  const totalDamageDealt = playerData?.totalDamageDealtToChampions || 0;
  const gameLengthMinutes = Math.floor(match.info?.gameDuration / 60);
  const damagePerMinute = Math.round(totalDamageDealt / gameLengthMinutes);
  const lowDamagePerMinute = damagePerMinute < 700;

  const isSupport = playerData?.individualPosition === "UTILITY";

  const damageAllergy = !isSupport && lowDamagePerMinute;
  return (
    <li
      key={match.metadata?.matchId ?? Math.random() * 10000}
      className="flex gap-1 items-center h-6 shadow-sm my-0.5"
    >
      <div className="relative w-6 h-6">
        <Image
          src={imageSrc}
          fill
          sizes="100%"
          alt=""
          aria-hidden
          className="object-cover"
        />
      </div>

      <p
        className={`w-24 text-center text-sm h-full flex items-center justify-center ${
          isGameWon ? "bg-green-400/50" : "bg-red-400/50"
        }`}
      >
        {score}
      </p>

      <DamageAllergy damageAllergy={damageAllergy} />

      <p className="w-28 text-end">{dateFormatted} ago</p>
    </li>
  );
}
