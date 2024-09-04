import { AccountData, SummonerDataExtra } from "@/utils/types/common";
import { Fragment } from "react";
import AccountCard from "./accountCard";

export default function PlayerSection({
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
          accounts?.map((account, index) => (
            <Fragment key={index}>
              <AccountCard account={account} />
            </Fragment>
          ))}
      </section>
    </section>
  );
}
