import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BriefcaseMedical,
  CalendarDays,
  ClipboardList,
  PlayCircle,
} from "lucide-react";
import { AppShell, HeroPhoto, Note, Panel, SectionLabel } from "@/components/workshop";
import { programme } from "@/lib/programme";
import { workshop } from "@/lib/workshop";
import { asset } from "@/lib/asset";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <AppShell tab="home">
      <div className="flex flex-col gap-3.5">
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
              className={`flex min-h-[4.75rem] flex-col items-center justify-center rounded-lg px-2 py-4 text-center transition-transform duration-150 ease-out active:scale-95${r.id === "yellow" ? " col-span-2" : ""}`}
              style={{
                backgroundColor: r.color,
                color: r.text,
                boxShadow: r.id === "white" ? "inset 0 0 0 1px rgba(11,31,58,0.22)" : undefined,
              }}
            >
              <span className="font-display text-xl font-bold tracking-[0.1em]">{r.name}</span>
              <span className="mt-1 text-[11px] font-medium opacity-90">
                {r.id === "yellow" ? "× 4 First Aiders" : r.role}
              </span>
            </Link>
          ))}
        </div>
        <Note>If it is not your colour, do not reach in.</Note>
        <HeroPhoto
          src={asset("/img/stations/positions-aerial-v2.jpg")}
          alt="Team positions around the collapsed player: Orange and Green at the head, Red chest, Blue right hip, White right leg, Black left flank, four Yellow First Aiders at the feet"
          caption="FIFA PEAP 2025 positions. Orange, Red, Blue and White on the player's RIGHT. Green at the head on the LEFT. Black on the LEFT flank. Yellow First Aiders at the FEET."
          contain
        />
        <SectionLabel>WORKSHOP</SectionLabel>
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { to: "/stations" as const, icon: ClipboardList, title: "Skill stations", sub: "Stations 1–5 + simulation" },
            { to: "/event" as const, icon: CalendarDays, title: "Programme", sub: `${programme.datesLabel}` },
            { to: "/bag" as const, icon: BriefcaseMedical, title: "Emergency bag", sub: "FIFA packing list" },
            { to: "/guides" as const, icon: PlayCircle, title: "Films", sub: "SCA + airway skills" },
          ].map((t) => (
            <Link key={t.to} to={t.to} className="block active:scale-[0.98]">
              <Panel className="h-full">
                <div className="flex h-full flex-col gap-2 px-3 py-3">
                  <span className="grid size-9 place-items-center rounded-full bg-navy text-gold">
                    <t.icon className="size-[18px]" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-display text-xs font-semibold tracking-[0.12em] text-navy">
                      {t.title.toUpperCase()}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-muted">{t.sub}</p>
                  </div>
                </div>
              </Panel>
            </Link>
          ))}
        </div>
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
