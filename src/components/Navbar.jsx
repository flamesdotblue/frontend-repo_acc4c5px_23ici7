import { Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-950/60 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">Aura IDE</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Pricing</a>
          <a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">About</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 text-sm font-medium rounded-lg border border-neutral-300/70 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">Sign in</button>
          <button className="px-3 py-2 text-sm font-semibold rounded-lg text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 hover:opacity-90 transition-opacity">Get Started</button>
        </div>
      </div>
    </header>
  );
}
