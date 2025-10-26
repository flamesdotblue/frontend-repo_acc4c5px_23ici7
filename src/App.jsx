import SplashHeader from "./components/SplashHeader";
import RobotCanvas from "./components/RobotCanvas";
import QuickActions from "./components/QuickActions";
import ShortcutHints from "./components/ShortcutHints";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(236,72,153,0.12),transparent_60%)] bg-slate-950 text-white">
      {/* Subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.04]"
      />

      <div className="relative z-0 max-w-7xl mx-auto">
        <SplashHeader />

        <main className="px-6 pb-16 pt-10 md:pt-16 flex flex-col items-center gap-8">
          <div className="text-center space-y-3">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Welcome to <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">Aura IDE</span>
            </h1>
            <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto">
              An AI-native workspace that helps you start faster, explore ideas, and ship with confidence.
            </p>
          </div>

          <RobotCanvas />

          <QuickActions />

          <div className="pt-2">
            <ShortcutHints />
          </div>
        </main>
      </div>
    </div>
  );
}
