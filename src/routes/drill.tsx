import { createFileRoute, Link } from "@tanstack/react-router";
import { PlayCircle } from "lucide-react";
import { AppShell, HeroPhoto, Panel, RoleChip, SectionLabel } from "@/components/workshop";
import { workshop } from "@/lib/workshop";

export const Route = createFileRoute("/drill")({ component: Drill });

function Drill() {
  return (
    <AppShell tab="drill">
      <div className="flex flex-col gap-3.5">
        <HeroPhoto
          src="/img/flow.jpg"
          alt="Six-step pictorial sequence of the on-field SCA drill"
          caption="Workshop drill sequence. Call your line out loud."
          contain
        />
        <Panel>
          <div className="px-3.5 py-2">
            {workshop.steps.map((step, i) => (
              <article
                key={step.n}
                className={
                  i === workshop.steps.length - 1
                    ? "flex gap-3 py-3.5"
                    : "flex gap-3 border-b border-line py-3.5"
                }
              >
                <div
                  className="grid size-7 shrink-0 place-items-center rounded-full bg-navy font-display text-sm font-bold text-gold"
                  aria-hidden="true"
                >
                  {step.n}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm">
                    <span className="font-semibold text-ink">{step.title}</span>
                    <span className="text-muted"> · {step.time}</span>
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {step.who.map((id) => (
                      <RoleChip key={id} id={id} />
                    ))}
                  </div>
                  <ul className="mt-2 flex flex-col gap-1">
                    {step.lines.map((line) => (
                      <li key={line} className="text-sm leading-snug text-ink">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Panel>
        <SectionLabel>SEQUENCE</SectionLabel>
        <p className="text-xs leading-snug text-muted">
          Assess → CPR + airway + AED → analyse + board → shock → 10-second dash → cycle 2 +
          handover. Workshop drill stays 30:2 until an LMA is in.
        </p>
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
                <p className="text-sm leading-snug">Watch official SCA, CPR and AED films</p>
              </div>
            </div>
          </Panel>
        </Link>
      </div>
    </AppShell>
  );
}
