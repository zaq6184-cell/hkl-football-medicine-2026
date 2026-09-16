import { createFileRoute } from "@tanstack/react-router";
import { FifaVideoList } from "@/components/fifa-video";
import { AppShell } from "@/components/workshop";

export const Route = createFileRoute("/guides")({ component: GuidesPage });

function GuidesPage() {
  return (
    <AppShell tab="drill">
      <FifaVideoList />
    </AppShell>
  );
}
