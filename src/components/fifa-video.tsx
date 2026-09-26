import { useState } from "react";
import { Play } from "lucide-react";
import { Note, Panel, SectionLabel } from "@/components/workshop";
import { fifaClips, fifaDocs, skillClips, type FifaClip } from "@/lib/videos";

export function FifaVideoList() {
  return (
    <div className="flex flex-col gap-3.5">
      <SectionLabel>FIFA / UEFA GUIDELINE FILMS</SectionLabel>
      <p className="text-sm leading-snug text-muted">
        Official films from FIFA, UEFA Medical and U.S. Soccer. Tap play — needs a connection. Roles
        and timings in this app follow the FIFA Emergency Care Manual.
      </p>
      {fifaClips.map((clip) => (
        <FifaClipCard key={clip.youtubeId} clip={clip} />
      ))}
      <Panel>
        <div className="flex flex-col gap-2 px-3.5 py-3.5">
          <SectionLabel>READ THE PROTOCOL</SectionLabel>
          <ul className="mt-1 flex flex-col gap-2">
            {fifaDocs.map((d) => (
              <li key={d.href}>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium leading-snug text-navy underline-offset-2 hover:underline"
                >
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
          <Note>
            Films stay on YouTube (FIFA / UEFA / USSF). This app does not replace ALS certification
            or the station inventory in front of you.
          </Note>
        </div>
      </Panel>
    </div>
  );
}

export function SkillVideoList() {
  return (
    <div className="flex flex-col gap-3.5">
      <SectionLabel>AIRWAY & EQUIPMENT SKILLS</SectionLabel>
      <p className="text-sm leading-snug text-muted">
        Technique films from the i-gel manufacturer and medical-education channels. Under each one:
        what the FIFA Emergency Care Manual (2022) says. Where a film differs, follow FIFA and the
        device instructions.
      </p>
      {skillClips.map((clip) => (
        <Panel key={clip.youtubeId}>
          <ClipPlayer id={clip.youtubeId} title={clip.title} source={clip.source} poster={clip.poster} />
          <div className="px-3.5 py-3">
            <p className="font-display text-sm font-semibold tracking-wide text-navy">{clip.title}</p>
            <p className="mt-0.5 text-[11px] text-muted">{clip.source}</p>
            <p className="mt-2.5 font-display text-[11px] font-semibold tracking-[0.12em] text-navy">
              FIFA ECM KEY POINTS
            </p>
            <ul className="mt-1 flex list-disc flex-col gap-1 pl-4 text-sm leading-snug marker:text-gold">
              {clip.fifa.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <a
              href={`https://www.youtube.com/watch?v=${clip.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-navy underline-offset-2 hover:underline"
            >
              Watch on YouTube
            </a>
          </div>
        </Panel>
      ))}
    </div>
  );
}

function ClipPlayer({
  id,
  title,
  source,
  poster,
}: {
  id: string;
  title: string;
  source: string;
  poster?: string;
}) {
  const [play, setPlay] = useState(false);
  return play ? (
    <div className="relative aspect-video bg-navy">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
        title={`${title} — ${source}`}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  ) : (
    <button
      type="button"
      onClick={() => setPlay(true)}
      className="group relative block aspect-video w-full overflow-hidden bg-navy text-left"
      aria-label={`Play ${title}`}
    >
      {poster ? (
        <img src={poster} alt="" loading="lazy" className="h-full w-full object-cover opacity-90" />
      ) : null}
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid size-14 place-items-center rounded-full bg-navy/80 text-gold shadow-card transition-transform duration-150 group-active:scale-95">
          <Play className="size-6 translate-x-0.5" fill="currentColor" strokeWidth={0} />
        </span>
      </span>
    </button>
  );
}

function FifaClipCard({ clip }: { clip: FifaClip }) {
  return (
    <Panel>
      <ClipPlayer id={clip.youtubeId} title={clip.title} source={clip.source} poster={clip.poster} />
      <div className="px-3.5 py-3">
        <p className="font-display text-sm font-semibold tracking-wide text-navy">{clip.title}</p>
        <p className="mt-0.5 text-[11px] text-muted">
          {clip.source} · {clip.duration}
        </p>
        <p className="mt-2 text-sm leading-snug">{clip.why}</p>
        <a
          href={`https://www.youtube.com/watch?v=${clip.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-navy underline-offset-2 hover:underline"
        >
          Watch on YouTube
        </a>
      </div>
    </Panel>
  );
}
