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

export const workshop = {
  event: "HKL'S SPORTS-EMERGENCY FOOTBALL MEDICINE WORKSHOP 2026",
  title: "On-Field Sudden Cardiac Arrest",
  org: "Hospital Kuala Lumpur",
  rule: "Non-contact collapse = sudden cardiac arrest until proven otherwise.",
  sources: [
    "HKL workshop set-piece script (drill standard for this course)",
    "FIFA Emergency Care Manual — Ch.1 roles / set-piece, Ch.3 cardiac arrest",
    "FIFA Medical Set-Piece / Pre-Match Emergency Action Plan colour roles",
    "Resuscitation Council UK: Resuscitation on the Field of Play (min. 3 shocks on the pitch if VF/pVT persists)",
  ],
  timings: [
    { tag: "≤ 10 s", text: "Breathing + carotid pulse check. Never linger." },
    { tag: "Hands-on", text: "Do not stop compressions while AED pads go on." },
    { tag: "Hands-off", text: "Everyone clear for AED analyse and shock." },
    { tag: "3–5 s", text: "Analysis window — use it for the log-roll and board." },
    { tag: "2–3 s", text: "Clear-check and shock delivery." },
    { tag: "≤ 10 s", text: "Every lift–carry–down window (the Dash)." },
    { tag: "2 min", text: "Swap compressor each cycle (Red → Blue)." },
    { tag: "15 L/min", text: "Oxygen to the BVM reservoir (FIFA)." },
    { tag: "≤ 2 min", text: "Target collapse-to-first-shock." },
    {
      tag: "3 shocks",
      text: "If still shockable, deliver at least 3 shocks on the field before moving (RCUK / FIFA ALS).",
    },
    {
      tag: "No pulse check",
      text: "After a shock, restart CPR immediately. Do not pause to feel for a pulse (FIFA).",
    },
    {
      tag: "2 min down",
      text: "After each 10-second carry, board down and CPR for at least 2 more minutes.",
    },
  ],
  roles: [
    {
      id: "black",
      name: "BLACK",
      role: "Team Leader",
      color: "#1C1C1C",
      text: "#FFFFFF",
      stand: "At the player's FEET, one step back. Hands off the chest.",
      bring: "Radio / comms.",
      photo: "/img/black.jpg",
      fifa: "FIFA ECM: hands-off team leader. Coordinate, close the loop, stop task-fixation. One job is making sure the AED is used the moment it arrives.",
      do: [
        "Own the clock and every movement command.",
        "Alert stadium control. Ambulance on standby for immediate field entry.",
        "Confirm compressions started and AED is being applied.",
        "Instruct Green on drugs / IV or IO.",
        "Command the log-roll, the lift and each 10-second dash.",
        "Give a 30-second ATMIST handover. CPR does not stop for the speech.",
      ],
      say: [
        "Sudden cardiac arrest protocol activated. Ambulance on standby for immediate field entry.",
        "Roll on three. One, two, three, ROLL.",
        "Ready to lift. On three. One, two, three, LIFT.",
      ],
    },
    {
      id: "orange",
      name: "ORANGE",
      role: "Airway Specialist",
      color: "#E36B12",
      text: "#FFFFFF",
      stand: "Kneel at the player's HEAD. Never leave the head.",
      bring: "LMA (or OPA) and BVM with reservoir.",
      photo: "/img/orange.jpg",
      fifa: "FIFA ECM “Take the Head”: MILS, speak to the player, jaw thrust, hold BVM mask, control the log-roll. Preferred airway in SCA is an i-gel LMA. With LMA: continuous CPR and about 10 breaths/min (one every 10th compression). Face-mask is two-person 30:2.",
      do: [
        "Open the airway with a jaw thrust (protect the neck).",
        "Insert LMA. If no LMA, insert an OPA.",
        "Attach BVM + reservoir. Deliver high-flow oxygenated breaths.",
        "Hold the head for the log-roll.",
        "Pause ventilations for AED analyse and shock.",
      ],
      say: ["Airway open. LMA in.", "OPA in — bagging.", "Holding the head. Ready to roll."],
    },
    {
      id: "red",
      name: "RED",
      role: "Compressor 1",
      color: "#C0392B",
      text: "#FFFFFF",
      stand: "Player's RIGHT side — chest. First hands on the player.",
      bring: "Nothing. Run straight to the player.",
      photo: "/img/red.jpg",
      fifa: "FIFA ECM “Chest”: player’s right. Signs of life, pulse, start CPR 5–6 cm at 100–120/min. Do not wait for the end of a 30-count before Green puts the AED on.",
      do: [
        "Tap and check responsiveness.",
        "Check breathing + carotid pulse together — maximum 10 seconds.",
        "Start Cycle 1 CPR. Workshop drill: 30:2, aim 5 cycles (~2 minutes).",
        "Do not stop compressions while Green applies pads.",
        "Help the log-roll: far-side shoulder, hip and knee.",
        "After ~2 minutes rotate out. Look for reversible causes.",
      ],
      say: ["Player is unresponsive!", "No breathing, no pulse. No signs of life!"],
    },
    {
      id: "blue",
      name: "BLUE",
      role: "Compressor 2",
      color: "#1F6AA5",
      text: "#FFFFFF",
      stand: "Player's LEFT side.",
      bring: "Oxygen tank.",
      photo: "/img/blue.jpg",
      fifa: "FIFA PEAP: bring the oxygen cylinder. FIFA ECM: 15 L/min to the BVM / i-gel reservoir. Take over compressions from Red at 2 minutes. Turn oxygen OFF (or ≥1 m away) before a shock.",
      do: [
        "Bring the O2 tank onto the field.",
        "Open the flow at 15 L/min. Connect the line to the BVM reservoir — do not take the face from Orange.",
        "Help the log-roll on the far side.",
        "Take over compressions for Cycle 2 at ~2 minutes.",
      ],
      say: ["Oxygen connected. Flow open.", "Blue taking compressions."],
    },
    {
      id: "white",
      name: "WHITE",
      role: "Board Handler",
      color: "#F2F2F0",
      text: "#1C1C1C",
      stand: "Beside the player, board side. Coordinate the 4 stretcher bearers.",
      bring: "Spinal board / extrication device. Brief the 4 bearers.",
      photo: "/img/white.jpg",
      fifa: "FIFA ECM set-piece: basket/scoop in line with the feet, 2–3 lengths away; scoop split ready to slide. FIFA PEAP White brings extrication devices. Player + board + AED move as one unit.",
      do: [
        "Position the board in line with the player.",
        "On the log-roll, slide the board underneath in one move.",
        "Player flat on the board before the AED reading finishes.",
        "Set the carry path toward the ambulance.",
        "Bearers lift only on Black's command.",
      ],
      say: ["Board ready.", "Board is in. Hands off for analysis."],
    },
    {
      id: "green",
      name: "GREEN",
      role: "AED Operator / Meds",
      color: "#1E8A4C",
      text: "#FFFFFF",
      stand: "LEFT flank of the player (FIFA: often left of the head).",
      bring: "Emergency care bag and AED.",
      photo: "/img/green.jpg",
      fifa: "FIFA ECM Equipment + AED: pads anterolateral; apical pad mid-axillary (V6), below the armpit. Apply the AED as soon as it arrives — do not wait for the current 30 compressions to finish. Check everyone is clear and oxygen is off before shock.",
      do: [
        "Expose the chest. Pads: upper-right chest below the collarbone + lower-left mid-axillary line / axilla.",
        "Operate the AED. Do not stop Red's compressions while pads go on.",
        "When shock advised: scan the body, shout clear, press shock.",
        "Time every 10-second movement window out loud.",
        "Prepare drugs / insert IV branula if competent, on Black's order.",
      ],
      say: ["I'm clear, you're clear, everyone's clear!", "Shock delivered.", "Ten seconds!"],
    },
  ] as Role[],
  bearers: {
    name: "STRETCHER BEARERS",
    n: 4,
    text: "Four dedicated rescuers. Lift and carry the spinal board only on Black's command. No other tasks. Hands off during AED analysis and shock.",
  },
  steps: [
    {
      n: 1,
      title: "Assess",
      time: "Phase 1",
      who: ["red", "black"],
      lines: [
        "Team takes organised positions around the player.",
        "Do not wait for the ball to go out of play (FIFA).",
        "Red taps: “Player is unresponsive!”",
        "Agonal gasps and slow seizure-like movements after a non-contact collapse are SCA, not a fit (FIFA).",
        "Black radios SCA protocol + ambulance standby.",
        "Red checks breathing + pulse together ≤ 10 seconds.",
        "Red: “No breathing, no pulse. No signs of life!”",
      ],
    },
    {
      n: 2,
      title: "CPR + airway + AED",
      time: "Phase 2",
      who: ["red", "orange", "blue", "green"],
      lines: [
        "Red starts high-quality CPR. Workshop drill uses 30:2.",
        "Orange: jaw thrust, LMA (or OPA), BVM + reservoir.",
        "Blue: O2 tank on, 15 L/min to the reservoir.",
        "Green: bag + AED. Pads on as soon as the AED arrives — do not wait for the current 30-count to finish (FIFA).",
      ],
    },
    {
      n: 3,
      title: "Analyse + board",
      time: "3–5 sec",
      who: ["red", "orange", "blue", "white", "black"],
      lines: [
        "AED: “Stop CPR. Analysing. Do not touch the patient.”",
        "Red hovers. Orange pauses breaths.",
        "Orange holds the head. Red + Blue grip far-side shoulder, hip, knee.",
        "Black: “Roll on three.” White slides the board under.",
        "Flat on the board. ALL HANDS OFF for a clean reading.",
      ],
    },
    {
      n: 4,
      title: "Shock",
      time: "2–3 sec",
      who: ["green"],
      lines: [
        "AED: “Shock advised. Charging. Stand clear.”",
        "Green scans the full body.",
        "Green: “I'm clear, you're clear, everyone's clear!”",
        "Green presses the shock button.",
        "If no shock advised: stay clear until the prompt ends, then resume.",
      ],
    },
    {
      n: 5,
      title: "10-second dash",
      time: "10 sec",
      who: ["black", "green", "red", "blue", "orange"],
      lines: [
        "The instant the shock finishes — resume CPR with NO pulse check (FIFA).",
        "Red compresses. Orange ventilates. Green times the window.",
        "Black: “Ready to lift. On three. LIFT.”",
        "Carry ≤10 seconds. Green: “Ten seconds!” Board down. CPR for at least 2 more minutes (FIFA).",
        "Player + board + AED move as one unit. Prefer the ambulance onto the field.",
      ],
    },
    {
      n: 6,
      title: "Cycle 2 + handover",
      time: "Ongoing",
      who: ["blue", "green", "black"],
      lines: [
        "At ~2 minutes Blue takes compressions.",
        "Green prepares drugs / IV if competent, on Black's order.",
        "Typical ALS if trained and stocked: adrenaline 1 mg IV/IO every 3–5 min; amiodarone 300 mg after the 3rd shock if still shockable.",
        "If VF/pVT persists, plan for at least 3 shocks on the field before moving (RCUK).",
        "Black gives ATMIST to the ambulance crew. CPR does not stop for the speech.",
      ],
    },
  ] as Step[],
  fifaNotes: [
    "This app follows the HKL 2026 workshop script so the station runs as rehearsed (30:2 until an LMA is in).",
    "FIFA Emergency Care Manual: non-contact collapse = SCA. Do not wait for the ball to go out. Agonal gasps and slow seizure-like movement are SCA, not a fit.",
    "FIFA with a secured i-gel LMA: continuous compressions and about 10 breaths/min (one every 10th compression). Face-mask remains 30:2.",
    "After a shock: restart CPR immediately — no pulse check. Oxygen off or ≥1 m away before the shock.",
    "Transfer: interrupt CPR ≤10 s, then board down and CPR for at least 2 minutes. Prefer the ambulance onto the field.",
    "ALS if competent: adrenaline 1 mg after the 3rd shock (shockable) or ASAP (non-shockable); amiodarone 300 mg after the 3rd shock.",
  ],
  dashRules: [
    "Resume CPR the instant the shock finishes.",
    "Interruptions never exceed 10 seconds.",
    "Repeat lift–carry–down windows until the player is off the pitch.",
  ],
  disclaimer: "Teaching aid only. Not a substitute for current ALS certification or local hospital protocol.",
} as const;

const ROLE_IDS: RoleId[] = ["black", "orange", "red", "blue", "white", "green"];

export function isRoleId(id: string): id is RoleId {
  return (ROLE_IDS as string[]).includes(id);
}

export function getRole(id: string): Role | undefined {
  return workshop.roles.find((r) => r.id === id);
}
