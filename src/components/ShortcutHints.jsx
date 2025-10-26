export default function ShortcutHints() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/60">
      <div className="flex items-center gap-2">
        <kbd className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[11px]">⌘</kbd>
        <span>+</span>
        <kbd className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[11px]">K</kbd>
        <span className="ml-1">Command Palette</span>
      </div>
      <div className="hidden sm:flex items-center gap-2">
        <kbd className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[11px]">⌘</kbd>
        <span>+</span>
        <kbd className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[11px]">P</kbd>
        <span className="ml-1">Quick Open</span>
      </div>
      <div className="hidden sm:flex items-center gap-2">
        <kbd className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[11px]">⌘</kbd>
        <span>+</span>
        <kbd className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 text-[11px]">/</kbd>
        <span className="ml-1">AI Help</span>
      </div>
    </div>
  );
}
