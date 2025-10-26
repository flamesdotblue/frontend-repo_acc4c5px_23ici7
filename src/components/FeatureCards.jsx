import { Brain, Terminal, Wand2, Shield } from "lucide-react";

const features = [
  {
    title: "AI Pair Programmer",
    description:
      "Inline suggestions, refactors, and explanations that adapt to your codebase in real time.",
    icon: Brain,
  },
  {
    title: "Command Palette",
    description:
      "Natural language to actions: run tests, generate components, or scaffold APIs in seconds.",
    icon: Terminal,
  },
  {
    title: "Generative Workflows",
    description:
      "Automate repetitive tasks with reusable prompts and one-click code transforms.",
    icon: Wand2,
  },
  {
    title: "Secure by Design",
    description:
      "Context isolation, redaction, and audit trails keep your code and data safe.",
    icon: Shield,
  },
];

export default function FeatureCards() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Designed for flow</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Everything you need to focus, create, and ship—without leaving your editor.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 p-6 backdrop-blur hover:shadow-lg transition-shadow"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500 text-white shadow-sm">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {description}
              </p>
              <div
                aria-hidden
                className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.18),rgba(59,130,246,0.12),rgba(249,115,22,0.10))] opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
