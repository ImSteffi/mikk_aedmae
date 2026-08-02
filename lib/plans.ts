export type PlanGender = "mehed" | "naised";
export type PlanDays = 3 | 5 | 6;

export type Plan = {
  slug: string;
  gender: PlanGender;
  days: PlanDays;
  title: string;
  description: string;
  price: number;
  bullets: string[];
};

const sharedBullets = [
  "Harjutuste pildid iga liigutuse juures",
  "Nõuanded tehnika ja progressiooni kohta",
  "PDF-fail, mille saad kohe alla laadida",
];

function plan(
  gender: PlanGender,
  days: PlanDays,
  description: string,
): Plan {
  return {
    slug: `${gender}-${days}`,
    gender,
    days,
    title: `${days}-PÄEVANE KAVA`,
    description,
    price: 59,
    bullets: sharedBullets,
  };
}

export const plans: Plan[] = [
  plan(
    "mehed",
    3,
    "Kompaktne jõukava kolmeks nädalapäevaks — sobib, kui aeg on piiratud, aga tahad ikkagi progressi.",
  ),
  plan(
    "mehed",
    5,
    "Tasakaalustatud 5-päevane programm jõule ja mahule. Rohkem mahtu, selge jaotus lihasgruppide vahel.",
  ),
  plan(
    "mehed",
    6,
    "Intensiivne 6-päevane kava maksimaalseks arenguks. Neile, kes tahavad treenida peaaegu iga päev.",
  ),
  plan(
    "naised",
    3,
    "Naistele kohandatud 3-päevane kava — tõhus, lihtne järgida ja sobib tihedasse nädalasse.",
  ),
  plan(
    "naised",
    5,
    "5-päevane programm jõule, vormile ja enesekindlusele. Selged sessioonid ja mõistlik maht.",
  ),
  plan(
    "naised",
    6,
    "6-päevane kava neile, kes tahavad kiiremat muutust. Rohkem sagedust, selge struktuur ja progressioon.",
  ),
];

export function getPlan(slug: string): Plan | undefined {
  return plans.find((p) => p.slug === slug);
}

export function plansByGender(gender: PlanGender): Plan[] {
  return plans.filter((p) => p.gender === gender);
}

export function genderLabel(gender: PlanGender): string {
  return gender === "mehed" ? "Mehed" : "Naised";
}
