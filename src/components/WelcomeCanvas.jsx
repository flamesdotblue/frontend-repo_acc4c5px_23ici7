import Spline from "@splinetool/react-spline";
import { Rocket, Wand2 } from "lucide-react";

export default function WelcomeCanvas() {
  return (
    <section className="relative overflow-hidden rounded-xl border border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-950">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-6 md:p-10 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Welcome to Aura IDE</h1>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-prose">
            An AI‑powered workspace that feels like Cursor and VS Code combined. Start a new project,
            open a folder, or ask Aura to generate boilerplate and refactor code for you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2.5 font-medium hover:opacity-90 transition">
              <Rocket className="h-4 w-4" /> New Project
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg border border-neutral-300/70 dark:border-neutral-700 px-4 py-2.5 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition">
              <Wand2 className="h-4 w-4" /> Ask Aura
            </button>
          </div>
        </div>
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-full min-h-[280px]">
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          {/* Soft gradients that don't capture pointer events */}
          <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(closest-side,rgba(99,102,241,0.25),transparent)]" />
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent" />
        </div>
      </div>
    </section>
  );
}
