import { MatchV5 } from "@/utils/types/match";
import { formatDistanceToNowStrict } from "date-fns/formatDistanceToNowStrict";
import Image from "next/image";
import DamageAllergy from "./damageAllergy";

export default function MatchDataShort({
  match,
  summonerId,
}: {
  match: MatchV5.MatchDTO;
  summonerId: string;
}) {
  if (!match) {
    return <></>;
  }
  const playerData = match.info?.participants?.find(
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
          isGameWon ? "bg-emerald-400/50" : "bg-rose-400/50"
        }`}
      >
        {score}
      </p>

      <DamageAllergy damageAllergy={damageAllergy} />

      <p className="w-28 text-end">{dateFormatted} ago</p>
    </li>
  );
}
