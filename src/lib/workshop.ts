import { asset } from "@/lib/asset";

export type RoleId = "black" | "orange" | "red" | "blue" | "white" | "green" | "yellow";

export type Role = {
  id: RoleId;
  name: string;
  role: string;
  color: string;
  text: string;
  stand: string;
  bring: string;
  photo: string;
  fifa: string;
  do: string[];
  say: string[];
};

export type Step = {
  n: number;
  title: string;
  time: string;
  who: RoleId[];
  lines: string[];
};

export const DASH_SECONDS = 10;

/**
 * Protocol copy follows the FIFA Emergency Care Manual (2022) — Ch.1 roles / set piece,
 * Ch.2 primary survey, Ch.3 cardiac arrest, Ch.10 skill zone — and the FIFA PEAP colour roles.
 * Roles follow the HKL SCA Colour Role Cards / Pictorial Card; the arrest carry uses a spinal board lifted by the Yellow First Aiders.
 */
export const workshop = {
  event: "HKL'S SPORTS-EMERGENCY FOOTBALL MEDICINE WORKSHOP 2026",
  title: "On-Field Sudden Cardiac Arrest",
  org: "Hospital Kuala Lumpur",
  rule: "Non-contact collapse = sudden cardiac arrest until proven otherwise.",
  sources: [
    "FIFA Emergency Care Manual (2022) — Ch.1 roles & set piece, Ch.2 primary survey, Ch.3 cardiac arrest, Ch.10 FIFA Emergency Care Bag & skill zone",
    "FIFA Pre-Match Emergency Action Plan (PEAP) colour roles",
    "HKL SCA Colour Role Cards & Pictorial Participant Card 2026 — spinal-board carry with 10-second stop and start",
    "ERC 2021 Basic & Advanced Life Support guidelines (as reproduced in the FIFA manual)",
  ],
  timings: [
    { tag: "Immediately", text: "Non-contact collapse: enter the pitch at once. Do not wait for the ball to go out of play." },
    { tag: "≤ 10 s", text: "Signs of life: look for chest movement + feel the carotid pulse together." },
    { tag: "5–6 cm", text: "Compressions mid-chest, 100–120/min, full recoil." },
    { tag: "AED now", text: "Apply the AED the moment it arrives — do not wait for the current 30-count to end." },
    { tag: "Hands-off", text: "Everyone clear for analysis and shock. Oxygen flow OFF; masks ≥ 1 m away." },
    { tag: "No pulse check", text: "After a shock, restart compressions immediately." },
    { tag: "30:2", text: "Until an i-gel is in. Face mask + OPA/NPA is a two-person technique." },
    { tag: "Every 10th", text: "With an i-gel: continuous compressions, one breath every 10th compression (~10/min)." },
    { tag: "15 L/min", text: "Oxygen to the bag reservoir." },
    { tag: "2 min", text: "Rhythm check every 2 minutes. Rotate the compressor (Red → Green)." },
    { tag: "≤ 10 s", text: "Maximum CPR interruption for any carry." },
    { tag: "≥ 2 min", text: "After each carry: board down and at least 2 minutes of compressions." },
  ],
  roles: [
    {
      id: "black",
      name: "BLACK",
      role: "Team Leader",
      color: "#1C1C1C",
      text: "#FFFFFF",
      stand: "Player's LEFT flank, mid-torso (FIFA PEAP black mark). Hands-off. Not at the feet.",
      bring: "Radio / comms. PEAP contact card.",
      photo: asset("/img/roles/black.jpg"),
      fifa: "Hands-off. Closed-loop commands. Ensure ambulance is called. Prefer the ambulance onto the field.",
      do: [
        "You are the team leader. Remain hands-off on the LEFT flank.",
        "Ensure the ambulance is called.",
        "Confirm continuous compressions and that Green applies the AED.",
        "Oversee the log-roll (Orange controls it): Red chest, Blue pelvis, White legs.",
      ],
      say: [
        "Sudden cardiac arrest protocol activated. Ambulance on standby for immediate field entry.",
        "Orange, you have the roll.",
        "Ready to lift. On three. One, two, three, LIFT.",
      ],
    },
    {
      id: "orange",
      name: "ORANGE",
      role: "Airway / C-spine",
      color: "#E36B12",
      text: "#FFFFFF",
      stand: "At the player's HEAD (FIFA PEAP orange mark). Never leave the head.",
      bring: "LMA (i-gel) and BVM with reservoir.",
      photo: asset("/img/roles/orange.jpg"),
      fifa: "Airway after compressions + AED are running. i-gel LMA: bag once every 10 compressions. Face-mask only, or i-gel leaking: pause for 30:2.",
      do: [
        "Airway opening manoeuvres (jaw thrust if experienced). Manual in-line C-spine control if trauma.",
        "Insert i-gel / LMA. Attach bag-valve.",
        "Squeeze the bag ONCE EVERY 10 COMPRESSIONS.",
        "Control the log-roll from the HEAD.",
      ],
      say: [
        "Airway open. LMA in. (or “OPA in — bagging.”)",
        "Holding the head. Ready to roll.",
        "Roll on three. One, two, three, ROLL.",
      ],
    },
    {
      id: "red",
      name: "RED",
      role: "Chest",
      color: "#C0392B",
      text: "#FFFFFF",
      stand: "Player's RIGHT CHEST (FIFA PEAP red mark).",
      bring: "Nothing. First hands on the player.",
      photo: asset("/img/roles/red.jpg"),
      fifa: "Commence chest compressions at once. 5–6 cm, 100–120/min, full recoil. Do not stop while Green applies the AED.",
      do: [
        "Priority: assess for signs of life.",
        "If no signs of life: start CONTINUOUS chest compressions (5–6 cm, 100–120/min, full recoil) and call for AED.",
        "Do not stop compressions while Green applies the AED.",
        "Take the CHEST in the log-roll.",
        "Rotate off compressions after 2 minutes. After a shock: resume at once, no pulse check.",
      ],
      say: ["Player is unresponsive!", "No breathing, no pulse. No signs of life!"],
    },
    {
      id: "blue",
      name: "BLUE",
      role: "Oxygen",
      color: "#1F6AA5",
      text: "#FFFFFF",
      stand: "Player's RIGHT HIP (FIFA PEAP blue mark), same side as Red.",
      bring: "Oxygen cylinder.",
      photo: asset("/img/roles/blue.jpg"),
      fifa: "Oxygen to the reservoir at 15 L/min. Turn flow OFF before defibrillation (do not disconnect the i-gel). Any mask or cannula at least 1 m away.",
      do: [
        "Bring the oxygen cylinder onto the pitch.",
        "Apply oxygen at 15 L/min to the bag / reservoir (SCA) or trauma mask.",
        "Flow OFF before a shock (do not disconnect the i-gel). Any mask or cannula: at least 1 m away.",
        "Take the PELVIS in the log-roll.",
      ],
      say: ["Oxygen connected. Flow open.", "Pelvis ready. Oxygen connected."],
    },
    {
      id: "white",
      name: "WHITE",
      role: "Spinal board",
      color: "#F2F2F0",
      text: "#1C1C1C",
      stand: "Player's RIGHT LEG, level with the lower legs, same side as Red and Blue (FIFA PEAP white mark).",
      bring: "Spinal board, spider straps and splints.",
      photo: asset("/img/white.jpg"),
      fifa: "FIFA ECM: for cardiac-arrest transfer the player, long spinal board and AED are strapped together as one unit. Involve First Aiders. Take the legs in the log-roll.",
      do: [
        "Bring the spinal board, spider straps and splints. Involve the yellow First Aiders.",
        "Spinal board in line with the feet, 2–3 lengths away, ready to slide in.",
        "Take the LEGS in the log-roll.",
        "Strap the player to the board: player + spinal board + AED move as one strapped unit.",
      ],
      say: ["Board ready.", "Board is in. Hands off for analysis."],
    },
    {
      id: "green",
      name: "GREEN",
      role: "Bag + AED",
      color: "#1E8A4C",
      text: "#FFFFFF",
      stand: "At the HEAD with the bag and AED (FIFA PEAP green mark).",
      bring: "FIFA emergency care bag and AED.",
      photo: asset("/img/roles/green.jpg"),
      fifa: "AED on as soon as it arrives — do not wait for the current 30-count. Pads: upper-right chest + lower-left axilla. Green checks all clear; Blue turns oxygen OFF.",
      do: [
        "Bring the FIFA bag and AED. Apply the AED.",
        "Pads: upper-right chest + lower-left axilla. Before shock: all clear, and ensure Blue turns oxygen OFF.",
        "Assist with equipment. Take over compressions at 2 min.",
        "Time every 10-second movement window out loud.",
      ],
      say: ["I'm clear, you're clear, everyone's clear!", "Shock delivered.", "Ten seconds!"],
    },
    {
      id: "yellow",
      name: "YELLOW",
      role: "First Aiders",
      color: "#E8C31A",
      text: "#1C1C1C",
      stand: "At the FEET, in an arc facing the player (FIFA PEAP yellow marks). Not medical staff by default.",
      bring: "Nothing required. Spinal board, splints and spider straps if directed.",
      photo: asset("/img/roles/yellow.jpg"),
      fifa: "FIFA ECM: the extrication team stands or kneels beside the extrication device facing the player and awaits instructions. They may be invited into log-roll positions if extra hands are needed.",
      do: [
        "Stand or kneel beside the spinal board, facing the player. Await instructions.",
        "Do not enter the circle unless Black invites you to take a log-roll position.",
        "If asked: help slide the spinal board underneath during the log-roll.",
        "On Black's command only: lift and carry the spinal board.",
        "During the carry: keep pace, stay silent, listen for Green's 10-second count.",
      ],
      say: ["Ready and waiting.", "Lifting on your command, Black."],
    },
  ] as Role[],
  steps: [
    {
      n: 1,
      title: "Assess",
      time: "≤ 10 s check",
      who: ["red", "black"],
      lines: [
        "Non-contact collapse = SCA. Enter at once — do not wait for the ball to go out of play.",
        "Red: priority is signs of life. “Player is unresponsive!” … “No breathing, no pulse. No signs of life!”",
        "Gasping or slow seizure-like movement = SCA, not a fit.",
        "Red starts CONTINUOUS compressions (5–6 cm, 100–120/min, full recoil) and calls for the AED.",
        "Black ensures the ambulance is called: “Sudden cardiac arrest protocol activated. Ambulance on standby for immediate field entry.”",
      ],
    },
    {
      n: 2,
      title: "Airway + O2 + AED",
      time: "At once",
      who: ["orange", "blue", "green", "red"],
      lines: [
        "Green: AED on now — do not wait for the current 30-count. Pads upper-right chest + lower-left axilla.",
        "Red does not stop compressions while the pads go on.",
        "Orange: jaw thrust, i-gel / LMA, bag once every 10 compressions. Face mask only or i-gel leaking: 30:2.",
        "Blue: oxygen 15 L/min to the bag / reservoir.",
      ],
    },
    {
      n: 3,
      title: "Spinal board",
      time: "Orange's count",
      who: ["black", "orange", "red", "blue", "white", "yellow"],
      lines: [
        "Black: “Orange, you have the roll.”",
        "Orange: “Roll on three. One, two, three, ROLL.” Red chest · Blue pelvis · White legs.",
        "White + Yellow First Aiders slide the spinal board underneath (board was 2–3 lengths from the feet).",
        "White: “Board is in. Hands off for analysis.” Strap: player + spinal board + AED = one unit.",
      ],
    },
    {
      n: 4,
      title: "Shock",
      time: "2–3 s",
      who: ["blue", "green", "red"],
      lines: [
        "AED: “Shock advised.” Blue: oxygen OFF (do not disconnect the i-gel). Green checks.",
        "Green: “I'm clear, you're clear, everyone's clear!” Shock if advised. “Shock delivered.”",
        "Red resumes compressions at once — no pulse check.",
      ],
    },
    {
      n: 5,
      title: "10-second dash",
      time: "≤ 10 s",
      who: ["black", "yellow", "green", "orange", "blue"],
      lines: [
        "Black: “Ready to lift. On three. One, two, three, LIFT.”",
        "Yellow First Aiders: “Lifting on your command, Black.” Carry ≤ 10 s — keep pace, stay silent.",
        "Green times the window out loud: “Ten seconds!”",
        "Board down. CPR for at least 2 minutes before the next carry.",
      ],
    },
    {
      n: 6,
      title: "Continue",
      time: "Until ambulance",
      who: ["green", "black"],
      lines: [
        "Green takes over compressions at 2 min.",
        "Repeat shock → dash → board down → CPR until the player is inside the ambulance.",
        "Prefer the ambulance onto the field.",
        "ALS if trained: adrenaline 1 mg IV after the 3rd shock, every 3–5 min; amiodarone 300 mg after the 3rd shock.",
      ],
    },
  ] as Step[],
  fifaNotes: [
    "Recognition: any non-contact collapse is SCA. Enter at once. Gasping and slow seizure-like movement are SCA, not a fit.",
    "Airway is not the first priority in adult cardiac arrest: compressions and the AED first, then the i-gel (FIFA's adjunct of choice).",
    "With an i-gel: continuous compressions, ~10 breaths/min (every 10th compression). Face mask + OPA/NPA: 30:2.",
    "Before a shock the person shocking checks all clear and oxygen off. Turn the flow off rather than disconnecting the i-gel.",
    "After a shock: restart CPR immediately — no pulse check. Rhythm check every 2 minutes.",
    "Transfer: player, spinal board and AED strapped as one unit. CPR interrupted ≤ 10 s per carry, then ≥ 2 minutes of compressions. Prefer the ambulance onto the field.",
    "ALS if trained: adrenaline 1 mg IV after the 3rd shock (shockable) or as soon as possible (non-shockable), every 3–5 min; amiodarone 300 mg after the 3rd shock, 150 mg after the 5th.",
    "Reversible causes (4 Hs & 4 Ts) — only once compressions, AED and airway are running: hypoxia, hypovolaemia, hypo/hyperthermia, tension pneumothorax are the pitchside ones.",
    "Destination: a hospital with 24/7 coronary angiography, agreed before the match.",
  ],
  dashRules: [
    "Carry only on Black's command, and never more than 10 seconds — Green counts out loud.",
    "At “Ten seconds!”: board down, compressions at once.",
    "At least 2 minutes of compressions before the next carry.",
    "Repeat until the player is inside the ambulance. Prefer the ambulance onto the field.",
  ],
  disclaimer:
    "Teaching aid based on the FIFA Emergency Care Manual. Not a substitute for current ALS certification or local hospital protocol.",
} as const;

const ROLE_IDS: RoleId[] = ["black", "orange", "red", "blue", "white", "green", "yellow"];

export function isRoleId(id: string): id is RoleId {
  return (ROLE_IDS as string[]).includes(id);
}

export function getRole(id: string): Role | undefined {
  return workshop.roles.find((r) => r.id === id);
}
