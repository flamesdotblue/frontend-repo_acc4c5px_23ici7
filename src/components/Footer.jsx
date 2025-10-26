export default function Footer() {
  return (
    <footer className="border-t border-neutral-200/70 dark:border-neutral-800 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Aura IDE. All rights reserved.
        </p>
        <nav className="flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          <a href="#privacy" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Privacy</a>
          <a href="#terms" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Terms</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
