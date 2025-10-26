import { FolderOpen, Clock } from "lucide-react";

const demoProjects = [
  { name: "aura-app", path: "~/dev/aura-app", lastOpened: "2h ago" },
  { name: "portfolio", path: "~/sites/portfolio", lastOpened: "yesterday" },
  { name: "api-server", path: "~/work/api-server", lastOpened: "3 days ago" },
  { name: "design-system", path: "~/dev/design-system", lastOpened: "a week ago" },
];

export default function RecentProjects() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-neutral-600 dark:text-neutral-300">Recent</h2>
        <button className="inline-flex items-center gap-2 rounded-md border border-neutral-200/70 dark:border-neutral-800 px-3 py-1.5 text-sm hover:bg-neutral-100/70 dark:hover:bg-neutral-900/70"><FolderOpen className="h-4 w-4" /> Open Folder</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {demoProjects.map((p) => (
          <button key={p.name} className="group flex items-center justify-between rounded-lg border border-neutral-200/70 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950/60 px-4 py-3 text-left hover:bg-neutral-100/70 dark:hover:bg-neutral-900/70">
            <div>
              <div className="font-medium tracking-tight group-hover:underline underline-offset-4">{p.name}</div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400">{p.path}</div>
            </div>
            <div className="flex items-center gap-1 text-xs text-neutral-500 dark:text-neutral-400"><Clock className="h-3.5 w-3.5" /> {p.lastOpened}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
