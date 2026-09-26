import { createFileRoute } from "@tanstack/react-router";
import { FifaVideoList, SkillVideoList } from "@/components/fifa-video";
import { AppShell } from "@/components/workshop";

export const Route = createFileRoute("/guides")({ component: GuidesPage });

function GuidesPage() {
  return (
    <AppShell tab="drill">
      <div className="flex flex-col gap-6">
        <FifaVideoList />
        <div id="skills">
          <SkillVideoList />
        </div>
      </div>
    </AppShell>
  );
}
