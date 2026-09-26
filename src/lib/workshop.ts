import { asset } from "@/lib/asset";

export type RoleId = "black" | "orange" | "red" | "blue" | "white" | "green";

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
 * The HKL Station 4 spinal-board "stop and start" transfer is kept: FIFA ECM Ch.3 describes it.
 */
export const workshop = {
  event: "HKL'S SPORTS-EMERGENCY FOOTBALL MEDICINE WORKSHOP 2026",
  title: "On-Field Sudden Cardiac Arrest",
  org: "Hospital Kuala Lumpur",
  rule: "Non-contact collapse = sudden cardiac arrest until proven otherwise.",
  sources: [
    "FIFA Emergency Care Manual (2022) — Ch.1 roles & set piece, Ch.2 primary survey, Ch.3 cardiac arrest, Ch.10 FIFA Emergency Care Bag & skill zone",
    "FIFA Pre-Match Emergency Action Plan (PEAP) colour roles",
    "HKL workshop Station 4 — spinal-board transfer with 10-second stop and start",
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
      stand: "Player's LEFT flank, mid-torso (FIFA PEAP black mark). Hands-off.",
      bring: "Radio / comms. PEAP contact card.",
      photo: asset("/img/black.jpg"),
      fifa: "FIFA ECM: hands-off leader — keeps the overview and stops task fixation (e.g. making sure the AED is used the moment it arrives). Closed-loop commands using names. Ensure the ambulance is called; prefer the ambulance onto the field.",
      do: [
        "Stay hands-off. Keep the overview and the clock.",
        "Ensure the ambulance is called. Send a designated person to the fourth official / referee.",
        "Check compressions have started and the AED goes on the moment it arrives.",
        "Direct each task by name; wait for the task to be confirmed (closed loop).",
        "Order the 10-second carries and each board-down.",
        "Instruct Green on drugs if an ALS-trained team is present.",
      ],
      say: [
        "Sudden cardiac arrest protocol activated. Put the ambulance on standby for immediate field entry.",
        "Stretcher bearers… LIFT AND GO!",
        "STOP. Board DOWN. Start CPR.",
      ],
    },
    {
      id: "orange",
      name: "ORANGE",
      role: "Take the Head · Airway",
      color: "#E36B12",
      text: "#FFFFFF",
      stand: "At the player's HEAD (FIFA PEAP orange mark). Never leave the head.",
      bring: "i-gel (LMA) and bag-valve with reservoir. OPA/NPA as back-up.",
      photo: asset("/img/orange.jpg"),
      fifa: "FIFA ECM “Take the Head”: MILS, jaw thrust (if experienced), airway and BVM mask, and CONTROLS THE LOG ROLL. In cardiac arrest, airway comes after compressions + AED are running; the i-gel is the adjunct of choice.",
      do: [
        "Jaw thrust to open the airway (MILS if trauma).",
        "Once compressions and the AED are running: insert the i-gel (size 4 green 50–90 kg, size 5 orange > 90 kg). No i-gel: OPA or NPA.",
        "Attach bag + reservoir. With i-gel: one breath every 10th compression. Face mask: 30:2, two-person.",
        "Pause ventilations while the AED analyses.",
        "Control the log roll from the head — you give the count.",
        "During the carry, walk at the head keeping the i-gel and bag secure.",
      ],
      say: [
        "Airway open. i-gel in.",
        "OPA in — bagging 30:2.",
        "Log roll on my count. Ready, brace, ROLL.",
      ],
    },
    {
      id: "red",
      name: "RED",
      role: "Chest · Compressions",
      color: "#C0392B",
      text: "#FFFFFF",
      stand: "Player's RIGHT side, level with the chest (FIFA PEAP red mark). First hands on the player.",
      bring: "Nothing. Run straight to the player.",
      photo: asset("/img/red.jpg"),
      fifa: "FIFA ECM “Chest”: player's right, ideally one of the most experienced. Priority is signs of life; if none, CONTINUOUS compressions and call for the AED. Rotate off compressions after 2 minutes. Take the chest in the log roll.",
      do: [
        "Check response. Look for chest movement + feel the carotid pulse — no more than 10 seconds. Do not put your face to the player's mouth.",
        "Gasping or slow seizure-like movement after a non-contact collapse = cardiac arrest.",
        "No signs of life: compress mid-chest 5–6 cm, 100–120/min, full recoil.",
        "Do not stop while Green applies the pads. Hands hover during analysis.",
        "After a shock, restart at once — no pulse check.",
        "Log roll: the chest — hand on the far shoulder and hip.",
        "Rotate off compressions to Green after 2 minutes.",
      ],
      say: ["Player is unresponsive!", "No breathing, no pulse. No signs of life!"],
    },
    {
      id: "blue",
      name: "BLUE",
      role: "Pelvis · Oxygen",
      color: "#1F6AA5",
      text: "#FFFFFF",
      stand: "Player's RIGHT side, level with the pelvis (FIFA PEAP blue mark).",
      bring: "Oxygen cylinder.",
      photo: asset("/img/blue.jpg"),
      fifa: "FIFA PEAP: bring the oxygen cylinder, oxygen at 15 L/min, take the pelvis in the log roll. FIFA ECM: before a shock turn the flow OFF rather than disconnecting the i-gel; any mask or nasal cannula at least 1 m from the chest.",
      do: [
        "Bring the oxygen cylinder. Oxygen at 15 L/min to the bag reservoir.",
        "Turn the flow OFF for every shock (do not disconnect the i-gel).",
        "Log roll: the pelvis — hand on the waist and under the knee.",
        "Help with the spider straps.",
        "During the carry, keep the cylinder close to the bag line.",
      ],
      say: ["Oxygen connected. 15 litres.", "Oxygen OFF.", "Pelvis ready."],
    },
    {
      id: "white",
      name: "WHITE",
      role: "Legs · Extrication",
      color: "#F2F2F0",
      text: "#1C1C1C",
      stand: "Player's RIGHT side, level with the lower legs (FIFA PEAP white mark).",
      bring: "Extrication kit: spinal board, spider straps, head blocks, splints. Brief the stretcher bearers.",
      photo: asset("/img/white.jpg"),
      fifa: "FIFA PEAP: bring on the extrication equipment and involve the first aiders before the match; take the legs in the log roll. FIFA ECM: for cardiac arrest transfer the player, board and AED are strapped together as one unit.",
      do: [
        "Set the board in line with the feet with the stretcher bearers, ready to slide.",
        "Log roll: the legs — hand under the lower leg and the ankle.",
        "After the roll: straps on so player + board + AED are one unit.",
        "During the carry, help Black clear the path to the ambulance.",
      ],
      say: ["Board ready.", "Strapped — one unit."],
    },
    {
      id: "green",
      name: "GREEN",
      role: "Equipment · AED",
      color: "#1E8A4C",
      text: "#FFFFFF",
      stand: "At the player's head / left shoulder with the bag and AED (FIFA PEAP green mark).",
      bring: "FIFA Emergency Care Bag and AED.",
      photo: asset("/img/green.jpg"),
      fifa: "FIFA PEAP: bring the FIFA bag and AED, apply the AED, assist with equipment, prepare to perform chest compressions. FIFA ECM: the person shocking checks everyone is clear AND the oxygen is off — that is their responsibility.",
      do: [
        "AED on the moment it arrives — do not wait for the 30-count.",
        "Pads anterolateral: upper-right chest below the collarbone + left mid-axillary line (V6), below the armpit. Dry the chest if wet.",
        "Before a shock: check everyone is clear and Blue has the oxygen OFF, then shock.",
        "Hand the right kit to the right person (usually Red / Orange).",
        "Take over compressions from Red at 2 minutes.",
        "Count every 10-second carry out loud.",
      ],
      say: ["Oxygen off? I'm clear, you're clear, everyone's clear!", "Shock delivered.", "1… 2… 3… … 10!"],
    },
  ] as Role[],
  bearers: {
    name: "STRETCHER BEARERS × 4",
    n: 4,
    text: "The extrication team (yellow in the FIFA PEAP). Stand or kneel beside the board at the feet, facing the player, and wait. One slides the board in during the log roll. Lift and carry only on Black's command, never more than 10 seconds; on Green's “10” put the board flat and step back.",
    say: ["Ready and waiting.", "Lifting on your command."],
  },
  steps: [
    {
      n: 1,
      title: "Recognise + assess",
      time: "≤ 10 s check",
      who: ["red", "black"],
      lines: [
        "Non-contact collapse: team enters immediately — do not wait for the ball to go out (FIFA).",
        "Red: “Player is unresponsive!” Look for chest movement + feel the carotid pulse together, ≤ 10 seconds.",
        "Gasping or slow seizure-like movement = SCA, not a fit.",
        "Red: “No breathing, no pulse. No signs of life!”",
        "Black radios: SCA protocol, ambulance on standby. Designated person informs the fourth official.",
      ],
    },
    {
      n: 2,
      title: "Compressions + AED",
      time: "At once",
      who: ["red", "green"],
      lines: [
        "Red compresses mid-chest, 5–6 cm, 100–120/min, full recoil.",
        "Green: AED on the moment it arrives. Pads upper-right chest + left mid-axillary (below armpit).",
        "Red does not stop while the pads go on.",
      ],
    },
    {
      n: 3,
      title: "Airway + oxygen",
      time: "Once CPR + AED run",
      who: ["orange", "blue"],
      lines: [
        "Orange: jaw thrust, then i-gel. No i-gel: OPA/NPA with a face mask (30:2, two-person).",
        "Blue: oxygen 15 L/min to the bag reservoir.",
        "With i-gel: continuous compressions, one breath every 10th compression. Leak → 30:2.",
      ],
    },
    {
      n: 4,
      title: "Analyse",
      time: "Hands off",
      who: ["red", "orange"],
      lines: [
        "AED: “Stop CPR. Analysing rhythm. Do not touch the patient.”",
        "Red hovers. Orange pauses ventilations.",
      ],
    },
    {
      n: 5,
      title: "Shock",
      time: "2–3 s",
      who: ["green", "blue"],
      lines: [
        "AED: “Shock advised.” Blue: oxygen OFF.",
        "Green checks everyone is clear and the oxygen is off: “I'm clear, you're clear, everyone's clear!”",
        "Green shocks. Red restarts compressions at once — no pulse check.",
        "No shock advised: restart CPR at once.",
      ],
    },
    {
      n: 6,
      title: "Log roll onto the board",
      time: "Orange's count",
      who: ["orange", "red", "blue", "white"],
      lines: [
        "Orange (head) controls the move: “Log roll on my count. Ready, brace, ROLL.”",
        "Red chest (far shoulder + hip) · Blue pelvis (waist + under knee) · White legs (lower leg + ankle).",
        "A stretcher bearer slides the spinal board under. Roll back, CPR resumes.",
        "White + Blue strap: player, board and AED as one unit.",
      ],
    },
    {
      n: 7,
      title: "CPR cycle",
      time: "2 min",
      who: ["green", "red"],
      lines: [
        "Continue CPR until the AED's next analysis (every 2 minutes).",
        "Green takes over compressions from Red at 2 minutes.",
        "Shock if advised (Blue oxygen OFF, Green clear, shock), then restart CPR at once.",
      ],
    },
    {
      n: 8,
      title: "10-second carry",
      time: "≤ 10 s",
      who: ["black", "green", "orange", "blue"],
      lines: [
        "Black: “Stretcher bearers… LIFT AND GO!”",
        "4 bearers carry the board toward the ambulance. Orange keeps the airway, Blue the oxygen, Green the AED.",
        "Green counts aloud: “1… 2… … 10!”",
      ],
    },
    {
      n: 9,
      title: "Board down, CPR",
      time: "≥ 2 min",
      who: ["black", "red", "green", "orange"],
      lines: [
        "Black: “STOP. Board DOWN. Start CPR.” Bearers put the board flat and step back.",
        "Fresh compressor restarts at once. Orange ventilates.",
        "At least 2 minutes of compressions before the next carry (FIFA).",
      ],
    },
    {
      n: 10,
      title: "Repeat to the ambulance",
      time: "Until inside",
      who: ["black"],
      lines: [
        "Repeat carry ≤ 10 s → board down → CPR ≥ 2 min until the player is inside the ambulance.",
        "Better still: bring the ambulance onto the field (FIFA).",
        "A mechanical CPR device (e.g. AutoPulse) allows the transfer without interruption — only if the team is trained on it.",
        "Hand over to the ambulance crew; CPR continues en route.",
      ],
    },
  ] as Step[],
  fifaNotes: [
    "Recognition: any non-contact collapse is SCA. Enter at once. Gasping and slow seizure-like movement are SCA, not a fit.",
    "Airway is not the first priority in adult cardiac arrest: compressions and the AED first, then the i-gel (FIFA's adjunct of choice).",
    "With an i-gel: continuous compressions, ~10 breaths/min (every 10th compression). Face mask + OPA/NPA: 30:2.",
    "Before a shock the person shocking checks all clear and oxygen off. Turn the flow off rather than disconnecting the i-gel.",
    "After a shock: restart CPR immediately — no pulse check. Rhythm check every 2 minutes.",
    "Transfer: player, board and AED strapped as one unit. CPR interrupted ≤ 10 s per carry, then ≥ 2 minutes of compressions. Prefer the ambulance onto the field.",
    "ALS if trained: adrenaline 1 mg IV after the 3rd shock (shockable) or as soon as possible (non-shockable), every 3–5 min; amiodarone 300 mg after the 3rd shock, 150 mg after the 5th.",
    "Reversible causes (4 Hs & 4 Ts) — only once compressions, AED and airway are running: hypoxia, hypovolaemia, hypo/hyperthermia, tension pneumothorax are the pitchside ones.",
    "Destination: a hospital with 24/7 coronary angiography, agreed before the match.",
  ],
  dashRules: [
    "Carry only on Black's command, and never more than 10 seconds — Green counts out loud.",
    "At “10”: board down, compressions at once.",
    "At least 2 minutes of compressions before the next carry.",
    "Repeat until the player is inside the ambulance. Prefer the ambulance onto the field.",
  ],
  disclaimer:
    "Teaching aid based on the FIFA Emergency Care Manual. Not a substitute for current ALS certification or local hospital protocol.",
} as const;

const ROLE_IDS: RoleId[] = ["black", "orange", "red", "blue", "white", "green"];

export function isRoleId(id: string): id is RoleId {
  return (ROLE_IDS as string[]).includes(id);
}

export function getRole(id: string): Role | undefined {
  return workshop.roles.find((r) => r.id === id);
}
