import { Plus, FolderOpen, GitBranch, MessageCircle } from "lucide-react";

const ActionButton = ({ icon: Icon, label, kbd }) => (
  <button
    className="group flex items-center justify-between w-full rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.08] transition-colors px-4 py-3"
  >
    <span className="flex items-center gap-3">
      <span className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center text-white/80 group-hover:text-white">
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-sm font-medium text-white/90">{label}</span>
    </span>
    {kbd && (
      <span className="text-[11px] text-white/50 border border-white/10 rounded-md px-1.5 py-0.5">
        {kbd}
      </span>
    )}
  </button>
);

export default function QuickActions() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full max-w-4xl mx-auto">
      <ActionButton icon={Plus} label="New Project" kbd="⌘ N" />
      <ActionButton icon={FolderOpen} label="Open Folder" kbd="⌘ O" />
      <ActionButton icon={GitBranch} label="Clone Repository" />
      <ActionButton icon={MessageCircle} label="Ask Aura to Start" kbd="⌘ K" />
    </div>
  );
}
