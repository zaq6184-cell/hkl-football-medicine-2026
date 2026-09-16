import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AppShell, Panel, SectionLabel } from "@/components/workshop";
import {
  displayName,
  getSpeaker,
  isSpeakerId,
  talksForSpeaker,
} from "@/lib/programme";

export const Route = createFileRoute("/speaker/$id")({ component: SpeakerPage });

function SpeakerPage() {
  const { id } = Route.useParams();
  if (!isSpeakerId(id)) return <Navigate to="/event" search={{ tab: "speakers" }} />;
  const s = getSpeaker(id);
  if (!s) return <Navigate to="/event" search={{ tab: "speakers" }} />;
  const talks = talksForSpeaker(s.id);

  return (
    <AppShell tab="event">
      <div className="flex flex-col gap-3">
        <Link
          to="/event"
          search={{ tab: "speakers" }}
          className="inline-flex min-h-11 items-center gap-1.5 font-display text-sm font-semibold tracking-wide text-gold"
        >
          <ArrowLeft className="size-4" strokeWidth={2.4} />
          All speakers
        </Link>
        <Panel>
          <div className="flex flex-col items-center px-3.5 pb-4 pt-6 text-center">
            <img
              src={s.photo}
              alt={displayName(s)}
              className="size-32 rounded-full bg-cream object-cover object-top"
            />
            <p className="mt-3 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
              {s.country}
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold leading-tight tracking-wide text-navy">
              {displayName(s)}
            </h2>
            <p className="mt-1 text-sm leading-snug">{s.title}</p>
            <p className="mt-0.5 text-xs text-muted">{s.org}</p>
          </div>
        </Panel>
        {talks.length > 0 ? (
          <Panel>
            <div className="px-3.5 py-3.5">
              <SectionLabel>ON THE PROGRAMME</SectionLabel>
              <ul className="mt-3 flex flex-col gap-3">
                {talks.map((t) => (
                  <li key={`${t.date}-${t.session.start}-${t.session.topic}`}>
                    <p className="font-display text-xs font-semibold tracking-wide text-navy">
                      {t.dayLabel} · {t.session.start}–{t.session.end}
                    </p>
                    <p className="text-sm leading-snug">{t.session.topic}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Panel>
        ) : null}
        <Panel>
          <div className="px-3.5 py-3.5">
            <SectionLabel>BIOGRAPHY</SectionLabel>
            <p className="mt-3 text-sm leading-relaxed">{s.bio}</p>
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
