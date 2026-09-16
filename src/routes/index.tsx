import { createFileRoute, Link } from "@tanstack/react-router";
import { BriefcaseMedical, CalendarDays, ChevronRight, PlayCircle } from "lucide-react";
import { AppShell, HeroPhoto, Note, Panel, SectionLabel } from "@/components/workshop";
import { programme } from "@/lib/programme";
import { workshop } from "@/lib/workshop";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <AppShell tab="home">
      <div className="flex flex-col gap-3.5">
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
                <p className="text-sm leading-snug">CPR, AED and pitchside SCA from FIFA / UEFA</p>
                <p className="text-xs text-muted">5 official videos · needs a connection</p>
              </div>
              <ChevronRight className="size-5 shrink-0 text-gold" />
            </div>
          </Panel>
        </Link>
        <HeroPhoto
          src="/img/cover.jpg"
          alt="Team positions around the collapsed player"
          caption="Stand on your colour. If it is not your job, do not reach in. Black owns the clock."
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
          <div className="px-3.5 py-3">
            <SectionLabel>{workshop.bearers.name}</SectionLabel>
            <p className="mt-2 text-sm leading-snug text-ink">{workshop.bearers.text}</p>
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
