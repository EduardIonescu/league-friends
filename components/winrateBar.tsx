export default function WinrateBar({
  wins,
  losses,
}: {
  wins: number;
  losses: number;
}) {
  const winrate = Math.round((wins / (wins + losses)) * 100);

  return (
    <article className="flex items-center gap-2">
      <div
        className="w-11/12 h-6 bg-rose-500/75 mx-auto my-0.5 relative 
          rounded-full overflow-hidden"
      >
        <div
          className="absolute left-2 top-0 h-full flex items-center z-10 
            text-sm pb-0.5"
        >
          {wins} wins
        </div>
        <div
          className="absolute right-2 top-0 h-full flex items-center z-10 
            text-sm pb-0.5"
        >
          {losses} losses
        </div>

        <div
          className="bg-emerald-500 h-full absolute left-0 top-0"
          style={{ width: `${winrate}%` }}
        ></div>
      </div>
      <p className="text-sm text-rose-600 font-bold">{winrate}%</p>
    </article>
  );
}
