import Spline from "@splinetool/react-spline";

export default function RobotCanvas() {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-slate-900/40 to-slate-900/70">
      {/* Spline canvas */}
      <Spline
        scene="https://prod.spline.design/vZX5NNlylxke-6DM/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />

      {/* Light glow overlays (non-interactive) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[36rem] rounded-full bg-gradient-to-r from-indigo-500/20 via-violet-500/25 to-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950/80 to-transparent" />
      </div>
    </div>
  );
}
