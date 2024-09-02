import { ACCOUNTS_DATA } from "@/utils/constants";
import {
  getAccountData,
  getRiotIds,
  getSummonersData,
} from "@/utils/lib/riotHelpers";
import { AccountData, SummonerDataExtra } from "@/utils/types/common";
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

  console.log("demonIds", danAccounts);

  return (
    <main className="flex flex-col items-center gap-20">
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
    <section className="flex flex-col gap-8">
      <h2 className="text-center text-3xl font-bold">{name}</h2>
      <section className="flex gap-8 text-center">
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

function AccountCard({
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
  return (
    <article
      className="max-w-64 border-light shadow-light p-4"
      key={summonerData.id}
    >
      <h3 className="text-2xl">
        {summonerData.gameName} #{summonerData.tagLine}
      </h3>
      {(() => {
        if (accountData.length >= 1) {
          const rankedAccount = accountData.find(
            (type) => type.queueType === "RANKED_SOLO_5x5"
          );

          if (!rankedAccount) {
            return <p>Unranked</p>;
          }

          const winrate = Math.round(
            (rankedAccount.wins / (rankedAccount.wins + rankedAccount.losses)) *
              100
          );

          return (
            <>
              <p>
                {rankedAccount.tier} {rankedAccount.rank} (
                {rankedAccount.leaguePoints} LP)
              </p>
              <p>Wins: {rankedAccount.wins}</p>
              <p>Losses: {rankedAccount.losses}</p>
              <p>Winrate: {winrate}%</p>
            </>
          );
        }
      })()}
    </article>
  );
}
