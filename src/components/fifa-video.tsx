import { useState } from "react";
import { ChevronDown, ExternalLink, Play } from "lucide-react";
import { Note, Panel, SectionLabel } from "@/components/workshop";
import { cn } from "@/lib/utils";
import { fifaClips, fifaDocs, fifaSkillList, skillClips, type FifaClip } from "@/lib/videos";

type SkillClip = (typeof skillClips)[number];

/** Films page: FIFA / UEFA guideline films as compact rows. */
export function FifaVideoList() {
  return (
    <section id="films-sca" className="flex scroll-mt-24 flex-col gap-3">
      <SectionLabel>SCA GUIDELINE FILMS</SectionLabel>
      <p className="text-sm leading-snug text-muted">
        FIFA, UEFA Medical and U.S. Soccer. Tap a film to play it — needs a connection.
      </p>
      <VideoList clips={fifaClips} />
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
            FIFA films play in FIFA’s own player; the others play from YouTube. This app does not replace ALS
            certification or the station inventory in front of you.
          </Note>
        </div>
      </Panel>
    </section>
  );
}

export function FifaSkillZoneList() {
  return (
    <section id="films-skill" className="flex scroll-mt-24 flex-col gap-3">
      <SectionLabel>FIFA SKILL ZONE</SectionLabel>
      <p className="text-sm leading-snug text-muted">
        FIFA’s pitchside technique films: sideline, set-up, Hands On 1-2-3, cervical spine and lower limb.
      </p>
      <VideoList clips={fifaSkillList} />
    </section>
  );
}

export function SkillVideoList() {
  return (
    <section id="films-airway" className="flex scroll-mt-24 flex-col gap-3">
      <SectionLabel>AIRWAY & EQUIPMENT SKILLS</SectionLabel>
      <p className="text-sm leading-snug text-muted">
        Technique films from the i-gel manufacturer and medical-education channels, each with what the FIFA
        Emergency Care Manual says. Where a film differs, follow FIFA and the device instructions.
      </p>
      <Panel>
        <ul className="divide-y divide-line">
          {skillClips.map((clip) => (
            <li key={clip.youtubeId}>
              <VideoRow
                id={clip.youtubeId}
                title={clip.title}
                source={clip.source}
                poster={clip.poster}
                watchUrl={`https://www.youtube.com/watch?v=${clip.youtubeId}`}
                watchLabel="Watch on YouTube"
                summary={clip.fifa[0]}
              >
                <SkillPoints clip={clip} />
              </VideoRow>
            </li>
          ))}
        </ul>
      </Panel>
    </section>
  );
}

function SkillPoints({ clip }: { clip: SkillClip }) {
  return (
    <>
      <p className="font-display text-[11px] font-semibold tracking-[0.12em] text-navy">FIFA ECM KEY POINTS</p>
      <ul className="mt-1 flex list-disc flex-col gap-1 pl-4 text-sm leading-snug marker:text-gold">
        {clip.fifa.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </>
  );
}

/** A panel of compact, expandable video rows. */
export function VideoList({ clips }: { clips: FifaClip[] }) {
  return (
    <Panel>
      <ul className="divide-y divide-line">
        {clips.map((c) => (
          <li key={c.youtubeId}>
            <VideoRow
              id={c.youtubeId}
              embed={c.embed}
              title={c.title}
              source={c.source}
              duration={c.duration}
              poster={c.poster}
              watchUrl={c.watchUrl ?? `https://www.youtube.com/watch?v=${c.youtubeId}`}
              watchLabel={c.watchUrl ? "Open on FIFA.com" : "Watch on YouTube"}
              summary={c.why}
            />
          </li>
        ))}
      </ul>
    </Panel>
  );
}

/** Compact row: thumbnail + title. Tap to expand into the player. */
function VideoRow({
  id,
  embed,
  title,
  source,
  duration,
  poster,
  watchUrl,
  watchLabel,
  summary,
  children,
}: {
  id: string;
  embed?: string;
  title: string;
  source: string;
  duration?: string;
  poster?: string;
  watchUrl: string;
  watchLabel: string;
  summary: string;
  children?: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={`${open ? "Close" : "Play"} ${title}`}
        className="flex w-full items-center gap-3 px-3 py-2.5 text-left active:bg-cream"
      >
        <span className="relative block aspect-video w-28 shrink-0 overflow-hidden rounded-md bg-navy">
          {poster ? <img src={poster} alt="" loading="lazy" className="h-full w-full object-cover" /> : null}
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid size-7 place-items-center rounded-full bg-navy/80 text-gold">
              <Play className="size-3.5 translate-x-px" fill="currentColor" strokeWidth={0} />
            </span>
          </span>
          {duration ? (
            <span className="absolute bottom-1 right-1 rounded bg-black/75 px-1 font-display text-[10px] font-semibold leading-4 text-white">
              {duration}
            </span>
          ) : null}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-display text-[13px] font-semibold leading-tight tracking-wide text-navy">
            {title}
          </span>
          <span className="mt-0.5 block text-[11px] text-muted">{source}</span>
          {!open ? <span className="mt-0.5 line-clamp-2 text-xs leading-snug text-ink/80">{summary}</span> : null}
        </span>
        <ChevronDown className={cn("size-4 shrink-0 text-gold transition-transform", open && "rotate-180")} />
      </button>
      {open ? (
        <div className="pb-3">
          <div className="relative aspect-video bg-navy">
            <iframe
              src={embed ?? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
              title={`${title} — ${source}`}
              className="absolute inset-0 h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
          <div className="px-3.5 pt-2.5">
            {children ?? <p className="text-sm leading-snug">{summary}</p>}
            <a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex min-h-10 items-center gap-1.5 text-sm font-medium text-navy underline-offset-2 hover:underline"
            >
              <ExternalLink className="size-3.5" />
              {watchLabel}
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function ClipPlayer({
  id,
  embed,
  title,
  source,
  poster,
  duration,
}: {
  id: string;
  embed?: string;
  title: string;
  source: string;
  poster?: string;
  duration?: string;
}) {
  const [play, setPlay] = useState(false);
  return play ? (
    <div className="relative aspect-video bg-navy">
      <iframe
        src={embed ?? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
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
      {poster ? <img src={poster} alt="" loading="lazy" className="h-full w-full object-cover opacity-90" /> : null}
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid size-14 place-items-center rounded-full bg-navy/80 text-gold shadow-card transition-transform duration-150 group-active:scale-95">
          <Play className="size-6 translate-x-0.5" fill="currentColor" strokeWidth={0} />
        </span>
      </span>
      {duration ? (
        <span className="absolute bottom-2 right-2 rounded bg-black/75 px-1.5 font-display text-xs font-semibold leading-5 text-white">
          {duration}
        </span>
      ) : null}
    </button>
  );
}

/** Large single-video card (used inside stations). */
export function FifaClipCard({ clip }: { clip: FifaClip }) {
  return (
    <Panel>
      <ClipPlayer
        id={clip.youtubeId}
        embed={clip.embed}
        title={clip.title}
        source={clip.source}
        poster={clip.poster}
        duration={clip.duration}
      />
      <div className="px-3.5 py-3">
        <p className="font-display text-sm font-semibold tracking-wide text-navy">{clip.title}</p>
        <p className="mt-0.5 text-[11px] text-muted">
          {clip.source} · {clip.duration}
        </p>
        <p className="mt-2 text-sm leading-snug">{clip.why}</p>
        <a
          href={clip.watchUrl ?? `https://www.youtube.com/watch?v=${clip.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex min-h-11 items-center text-sm font-medium text-navy underline-offset-2 hover:underline"
        >
          {clip.watchUrl ? "Open on FIFA.com" : "Watch on YouTube"}
        </a>
      </div>
    </Panel>
  );
}
