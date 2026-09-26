import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BriefcaseMedical,
  CalendarDays,
  ChevronRight,
  ClipboardList,
  PlayCircle,
} from "lucide-react";
import { AppShell, HeroPhoto, Note, Panel, SayLine, SectionLabel } from "@/components/workshop";
import { programme } from "@/lib/programme";
import { workshop } from "@/lib/workshop";
import { asset } from "@/lib/asset";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <AppShell tab="home">
      <div className="flex flex-col gap-3.5">
        <Link to="/stations" className="block active:scale-[0.99]">
          <Panel>
            <div className="flex items-center gap-3 px-3.5 py-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy text-gold">
                <ClipboardList className="size-5" strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-xs font-semibold tracking-[0.14em] text-navy">
                  SKILL STATIONS 1–5
                </p>
                <p className="text-sm leading-snug">PEAP · bag · primary survey · cardiac arrest · immobilization</p>
                <p className="text-xs text-muted">Plus simulation rotation and scenarios</p>
              </div>
              <ChevronRight className="size-5 shrink-0 text-gold" />
            </div>
          </Panel>
        </Link>
        <Link to="/event" search={{ tab: "programme" }} className="block active:scale-[0.99]">
          <Panel>
            <div className="flex items-center gap-3 px-3.5 py-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy text-gold">
                <CalendarDays className="size-5" strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-xs font-semibold tracking-[0.14em] text-navy">
                  PROGRAMME BOOK
                </p>
                <p className="text-sm leading-snug">
                  {programme.datesLabel} · {programme.venue.hall}
                </p>
                <p className="text-xs text-muted">{programme.venue.building}</p>
              </div>
              <ChevronRight className="size-5 shrink-0 text-gold" />
            </div>
          </Panel>
        </Link>
        <Link to="/bag" className="block active:scale-[0.99]">
          <Panel>
            <div className="flex items-center gap-3 px-3.5 py-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy text-gold">
                <BriefcaseMedical className="size-5" strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-xs font-semibold tracking-[0.14em] text-navy">
                  EMERGENCY BAG
                </p>
                <p className="text-sm leading-snug">FIFA Medical Emergency Bag packing list</p>
                <p className="text-xs text-muted">Airway · AED · drugs · travel rules</p>
              </div>
              <ChevronRight className="size-5 shrink-0 text-gold" />
            </div>
          </Panel>
        </Link>
        <Link to="/guides" className="block active:scale-[0.99]">
          <Panel>
            <div className="flex items-center gap-3 px-3.5 py-3">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-navy text-gold">
                <PlayCircle className="size-5" strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-xs font-semibold tracking-[0.14em] text-navy">
                  FIFA GUIDELINE FILMS
                </p>
                <p className="text-sm leading-snug">
                  SCA films + airway skills: OPA, NPA, i-gel, BVM, suction, collar, log roll
                </p>
                <p className="text-xs text-muted">15 videos with FIFA key points · needs a connection</p>
              </div>
              <ChevronRight className="size-5 shrink-0 text-gold" />
            </div>
          </Panel>
        </Link>
        <HeroPhoto
          src={asset("/img/stations/positions-aerial.jpg")}
          alt="Team positions around the collapsed player: Orange and Green at the head, Red chest, Blue right hip, White right leg, Black left flank, four stretcher bearers in yellow at the feet"
          caption="FIFA PEAP 2025 positions. Orange, Red, Blue and White on the player's RIGHT. Green at the head on the LEFT. Black on the LEFT flank. 4 stretcher bearers (yellow) at the FEET. If it is not your colour, hands off."
          contain
        />
        <Note>
          <span className="font-semibold text-navy">{workshop.rule}</span>
        </Note>
        <SectionLabel>TAP YOUR COLOUR</SectionLabel>
        <div className="grid grid-cols-2 gap-2.5">
          {workshop.roles.map((r) => (
            <Link
              key={r.id}
              to="/role/$id"
              params={{ id: r.id }}
              className="flex min-h-[4.75rem] flex-col items-center justify-center rounded-lg px-2 py-4 text-center transition-transform duration-150 ease-out active:scale-95"
              style={{
                backgroundColor: r.color,
                color: r.text,
                boxShadow: r.id === "white" ? "inset 0 0 0 1px rgba(11,31,58,0.22)" : undefined,
              }}
            >
              <span className="font-display text-xl font-bold tracking-[0.1em]">{r.name}</span>
              <span className="mt-1 text-[11px] font-medium opacity-90">{r.role}</span>
            </Link>
          ))}
        </div>
        <Panel>
          <div className="bg-[#E8C31A] px-3.5 py-2.5 text-ink">
            <p className="font-display text-lg font-bold tracking-[0.1em]">{workshop.bearers.name}</p>
          </div>
          <div className="flex flex-col gap-1.5 px-3.5 py-3">
            <p className="text-sm leading-snug text-ink">{workshop.bearers.text}</p>
            {workshop.bearers.say.map((line) => (
              <SayLine key={line} text={`“${line}”`} />
            ))}
          </div>
        </Panel>
        <HeroPhoto
          src={asset("/img/stations/peap-marks.jpg")}
          alt="FIFA PEAP 2025 official position marks around the player"
          caption="FIFA PEAP 2025 official marks. May flip all aspects depending on site of injury and hazards."
          contain
        />
      </div>
    </AppShell>
  );
}
