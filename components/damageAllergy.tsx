"use client";

import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function DamageAllergy({
  damageAllergy,
}: {
  damageAllergy: boolean;
}) {
  if (!damageAllergy) return <div className="w-6 h-6"></div>;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="relative w-6 h-6 cursor-pointer"
            style={{
              filter:
                "invert(20%) sepia(75%) saturate(5000%) hue-rotate(373deg) brightness(100%) contrast(150%)",
            }}
          >
            <Image
              src="/goat.webp"
              fill
              sizes="100%"
              alt=""
              aria-hidden
              className=" object-contain"
            />
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Esti alergic la damage!</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
