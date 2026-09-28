import { createFileRoute, Link, Navigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AppShell, Note, Panel, SayLine, SectionLabel } from "@/components/workshop";
import { getRole, isRoleId } from "@/lib/workshop";

export const Route = createFileRoute("/role/$id")({ component: RoleCard });

function RoleCard() {
  const { id } = Route.useParams();
  if (!isRoleId(id)) return <Navigate to="/" />;
  const r = getRole(id);
  if (!r) return <Navigate to="/" />;

  return (
    <AppShell tab="home">
      <div className="flex flex-col gap-3">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center gap-1.5 font-display text-sm font-semibold tracking-wide text-gold"
        >
          <ArrowLeft className="size-4" strokeWidth={2.4} />
          All colours
        </Link>
        <Panel>
          <div
            className="px-3.5 py-3"
            style={{
              backgroundColor: r.color,
              color: r.text,
              boxShadow: r.id === "white" ? "inset 0 0 0 1px rgba(11,31,58,0.18)" : undefined,
            }}
          >
            <h2 className="font-display text-2xl font-bold tracking-[0.08em]">{r.name}</h2>
            <p className="text-sm opacity-90">{r.role}</p>
          </div>
          <img
            src={r.photo}
            alt={`${r.name} ${r.role} position`}
            className="block max-h-80 w-full bg-cream object-contain"
          />
          <div className="flex flex-col gap-3.5 px-3.5 py-3.5">
            <section>
              <SectionLabel>WHERE YOU STAND</SectionLabel>
              <p className="mt-2 text-sm leading-snug">{r.stand}</p>
            </section>
            <section>
              <SectionLabel>WHAT YOU BRING</SectionLabel>
              <p className="mt-2 text-sm leading-snug">{r.bring}</p>
              {r.id === "green" ? (
                <Link
                  to="/bag"
                  className="mt-2 inline-flex min-h-11 items-center font-display text-sm font-semibold tracking-wide text-gold"
                >
                  Full FIFA bag list
                </Link>
              ) : null}
            </section>
            <section>
              <SectionLabel>WHAT YOU DO</SectionLabel>
              <ul className="mt-2 flex flex-col gap-1.5">
                {r.do.map((line) => (
                  <li key={line} className="text-sm leading-snug">
                    {line}
                  </li>
                ))}
              </ul>
            </section>
            <section className="flex flex-col gap-1.5">
              <SectionLabel>WHAT YOU SAY</SectionLabel>
              {r.say.map((line) => (
                <SayLine key={line} text={`“${line}”`} />
              ))}
            </section>
            <p className="rounded-lg bg-navy px-2.5 py-2 text-center font-display text-xs font-semibold tracking-wide text-gold">
              If it is not your colour, do not reach in.
            </p>
            <Note>
              <span className="font-semibold text-navy">FIFA: </span>
              {r.fifa}
            </Note>
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
