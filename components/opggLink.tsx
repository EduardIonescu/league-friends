import { regionToOPGGRegion } from "@/utils/dictionary";
import { SummonerDataExtra } from "@/utils/types/common";

export default function OPGGLink({
  summonerData,
}: {
  summonerData: SummonerDataExtra;
}) {
  const opggRegion = regionToOPGGRegion[summonerData.region];
  const href = `https://www.op.gg/summoners/${opggRegion}/${summonerData.gameName}-${summonerData.tagLine}`;
  return (
    <a
      href={href}
      target="_blank"
      className="text-xl font-bold hover:text-rose-500 transition-colors"
    >
      {summonerData.gameName} #{summonerData.tagLine}
    </a>
  );
}
