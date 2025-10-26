import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200/70 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 px-3 py-1 text-xs text-neutral-700 dark:text-neutral-300">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
            AI-powered IDE
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white bg-clip-text text-transparent">
            Build faster with an intelligent coding companion
          </h1>
          <p className="mt-5 text-lg text-neutral-600 dark:text-neutral-300">
            Voice, chat, and context-aware automation wrapped in a beautiful editor. Ship ideas from concept to production in minutes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500 px-5 py-3 text-white font-semibold shadow-sm hover:opacity-95 transition">
              Start building
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-lg border border-neutral-300/70 dark:border-neutral-700 px-5 py-3 font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-900 transition">
              See features
            </a>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] md:h-[560px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.25)] ring-1 ring-neutral-900/5 dark:ring-white/10">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: "100%", height: "100%" }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/40 dark:from-neutral-950/40 dark:to-neutral-950/40" />
          </div>
        </div>
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-40 blur-3xl">
        <div className="mx-auto h-64 w-[36rem] sm:w-[42rem] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.25),rgba(59,130,246,0.20),rgba(249,115,22,0.18))]" />
      </div>
    </section>
  );
}
