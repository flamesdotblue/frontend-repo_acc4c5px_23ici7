import { Command, Search, Plus, FolderOpen, Settings } from "lucide-react";

export default function CommandBar() {
  return (
    <div className="h-14 flex items-center gap-3 border-b border-neutral-200/70 dark:border-neutral-800 px-3 md:px-6 bg-white/60 dark:bg-neutral-950/60 backdrop-blur supports-[backdrop-filter]:bg-white/50 dark:supports-[backdrop-filter]:bg-neutral-950/50">
      <div className="hidden md:flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
        <Command className="h-4 w-4" />
        <span>Press Cmd/Ctrl+K to ask Aura</span>
      </div>
      <div className="flex-1" />
      <div className="flex items-center gap-2">
        <button className="inline-flex items-center gap-2 rounded-md border border-neutral-200/70 dark:border-neutral-800 px-3 py-1.5 text-sm hover:bg-neutral-100/70 dark:hover:bg-neutral-900/70"><Plus className="h-4 w-4" /> New</button>
        <button className="inline-flex items-center gap-2 rounded-md border border-neutral-200/70 dark:border-neutral-800 px-3 py-1.5 text-sm hover:bg-neutral-100/70 dark:hover:bg-neutral-900/70"><FolderOpen className="h-4 w-4" /> Open</button>
        <button className="inline-flex items-center gap-2 rounded-md border border-neutral-200/70 dark:border-neutral-800 px-3 py-1.5 text-sm hover:bg-neutral-100/70 dark:hover:bg-neutral-900/70"><Search className="h-4 w-4" /> Search</button>
        <button className="inline-flex items-center gap-2 rounded-md border border-neutral-200/70 dark:border-neutral-800 px-3 py-1.5 text-sm hover:bg-neutral-100/70 dark:hover:bg-neutral-900/70"><Settings className="h-4 w-4" /><span className="hidden sm:inline">Settings</span></button>
      </div>
    </div>
  );
}
