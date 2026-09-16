export type FifaClip = {
  youtubeId: string;
  title: string;
  source: string;
  duration: string;
  poster: string;
  why: string;
};

export const fifaClips: FifaClip[] = [
  {
    youtubeId: "j-ZLHeQXFi8",
    title: "Heart Heroes United",
    source: "FIFA Health Education",
    duration: "2:44",
    poster: "/img/videos/fifa-heroes.jpg",
    why: "Official FIFA film on the SCA page. Check response, call for help, hands-only CPR, switch on the AED.",
  },
  {
    youtubeId: "vzgHqB32GmQ",
    title: "FIFA Sudden Death Registry",
    source: "FIFA Medical Network · Prof Tim Meyer",
    duration: "4:59",
    poster: "/img/videos/fifa-meyer.jpg",
    why: "Why pitchside resuscitation quality changes survival. FIFA-SDR data, commotio cordis, regional gaps.",
  },
  {
    youtubeId: "oTb539ZO2Bo",
    title: "SCA on the pitch — lessons learned",
    source: "UEFA Medical · Prof Jens Kleinefeld",
    duration: "12:01",
    poster: "/img/videos/uefa-sca.jpg",
    why: "Non-contact collapse = SCA until proven otherwise. Compressions, AED and airway in the first two minutes.",
  },
  {
    youtubeId: "W4KjYC51B-c",
    title: "Recognize to Recover — CPR and AED",
    source: "U.S. Soccer",
    duration: "4:14",
    poster: "/img/videos/ussoccer-cpr.jpg",
    why: "Pitchside demo: hands-only CPR, pad placement, shock, then back on compressions. Matches this drill’s first minutes.",
  },
  {
    youtubeId: "NgvVPdP5u30",
    title: "FIFA Football Medicine Course",
    source: "FIFA",
    duration: "4:21",
    poster: "/img/videos/fifa-course.jpg",
    why: "Member-association course: SCA, the FIFA medical bag, and how the team enters the field of play.",
  },
];

export const fifaDocs = [
  {
    label: "FIFA sudden cardiac arrest — how to help",
    href: "https://www.fifa.com/about-fifa/medical/education-awareness/sudden-cardiac-arrest",
  },
  {
    label: "FIFA Medical Set-Piece protocol for SCA (PDF)",
    href: "https://digitalhub.fifa.com/m/70de10635046d5a4/original/FIFA-Medical-Set-Piece-Emergency-Protocol-for-Sudden-Cardiac-Arrest.pdf",
  },
  {
    label: "FIFA PEAP — colour roles (BJSM)",
    href: "https://bjsm.bmj.com/content/56/13/715",
  },
];
