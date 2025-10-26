import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureCards from "./components/FeatureCards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeatureCards />
        <section id="get-started" className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500 p-[1px]">
              <div className="rounded-2xl bg-white dark:bg-neutral-950 p-8 md:p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold">Meet your new coding superpower</h3>
                <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
                  Spin up projects, generate components, and refactor code with natural language. Your personal AI agent, right inside your IDE.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="#" className="inline-flex items-center justify-center rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-5 py-3 font-semibold hover:opacity-90 transition">
                    Launch Aura IDE
                  </a>
                  <a href="#" className="inline-flex items-center justify-center rounded-lg border border-neutral-300/70 dark:border-neutral-700 px-5 py-3 font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-900 transition">
                    Watch demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
