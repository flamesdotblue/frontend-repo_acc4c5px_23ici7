import { Sparkles } from "lucide-react";

export default function SplashHeader() {
  return (
    <header className="w-full flex items-center justify-between px-6 pt-6">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-violet-600 shadow-lg shadow-violet-500/30 flex items-center justify-center">
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div className="text-left">
          <p className="text-sm font-semibold text-white/90 leading-none">Aura IDE</p>
          <p className="text-[11px] text-white/50 leading-none mt-1">AI Coding Environment</p>
        </div>
      </div>
      <div className="text-[11px] text-white/50">v0.1 • Experimental</div>
    </header>
  );
}
