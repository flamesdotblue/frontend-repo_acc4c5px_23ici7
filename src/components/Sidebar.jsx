import { Home, FolderOpen, GitBranch, Settings, Rocket } from "lucide-react";

export default function Sidebar() {
  const items = [
    { icon: Home, label: "Home" },
    { icon: FolderOpen, label: "Open" },
    { icon: GitBranch, label: "Source" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <aside className="h-full w-16 md:w-64 border-r border-neutral-200/70 dark:border-neutral-800 bg-white/60 dark:bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-neutral-950/50">
      <div className="flex items-center gap-2 px-3 md:px-4 h-14 border-b border-neutral-200/70 dark:border-neutral-800">
        <div className="h-7 w-7 rounded-md bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500" />
        <span className="hidden md:block font-semibold tracking-tight">Aura IDE</span>
      </div>
      <nav className="py-3">
        {items.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className="group flex items-center w-full gap-3 px-3 md:px-4 py-2 text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100/70 dark:hover:bg-neutral-900/60"
          >
            <Icon className="h-5 w-5" />
            <span className="hidden md:inline">{label}</span>
          </button>
        ))}
      </nav>
      <div className="mt-auto hidden md:block p-4">
        <div className="rounded-lg border border-neutral-200/70 dark:border-neutral-800 p-3">
          <div className="flex items-center gap-2 font-medium"><Rocket className="h-4 w-4" /> Get Started</div>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">Create or open a project to begin.</p>
        </div>
      </div>
    </aside>
  );
}
