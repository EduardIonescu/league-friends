import PlayerSection from "@/components/playerSection";
import { ACCOUNTS_DATA } from "@/utils/constants";
import { getPlayerData } from "@/utils/lib/riotHelpers";

export default async function Home() {
  const edAccounts = await getPlayerData(ACCOUNTS_DATA.ED);
  const demonAccounts = await getPlayerData(ACCOUNTS_DATA.DEMON);
  /*  const danAccounts = await getPlayerData(ACCOUNTS_DATA.DAN);
  const tzapAccounts = await getPlayerData(ACCOUNTS_DATA.TZAP); */

  return (
    <main className="flex flex-col items-center gap-12 p-4">
      {edAccounts && (
        <PlayerSection name={ACCOUNTS_DATA.ED.name} accounts={edAccounts} />
      )}
      {demonAccounts && (
        <PlayerSection
          name={ACCOUNTS_DATA.DEMON.name}
          accounts={demonAccounts}
        />
      )}
      {/*   {danAccounts && (
        <PlayerSection name={ACCOUNTS_DATA.DAN.name} accounts={danAccounts} />
      )}
      {tzapAccounts && (
        <PlayerSection name={ACCOUNTS_DATA.TZAP.name} accounts={tzapAccounts} />
      )}  */}
    </main>
  );
}
