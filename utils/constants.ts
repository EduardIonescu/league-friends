import { AccountsData } from "./types/common";

export const ACCOUNTS_DATA = {
  ED: {
    name: "Ed",
    endpoints: [
      {
        url: "https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/xuessima/eune",
        region: "eun1",
      },
      {
        url: "https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/iac/eune",
        region: "eun1",
      },
      {
        url: "https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/peltea/euw",
        region: "euw1",
      },
      {
        url: "https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/knee%20wrap/euw",
        region: "euw1",
      },
      {
        url: "https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/shady99/euw",
        region: "euw1",
      },
    ],
  } as AccountsData,
  DAN: {
    name: "Dan",
    endpoints: [
      {
        url: "https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/minetrodw/2386",
        region: "euw1",
      },
      {
        url: "https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/daqn/qand",
        region: "eun1",
      },
      {
        url: "https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/gasdrinker/6661",
        region: "eun1",
      },
    ],
  } as AccountsData,
  DEMON: {
    name: "Demon",
    endpoints: [
      {
        url: "https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/ad%20is%20a%20bait/eune",
        region: "eun1",
      },
      {
        url: "https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/marshalltl/euw",
        region: "euw1",
      },
    ],
  } as AccountsData,
};
