import Sidebar from "./components/Sidebar";
import CommandBar from "./components/CommandBar";
import WelcomeCanvas from "./components/WelcomeCanvas";
import RecentProjects from "./components/RecentProjects";

function App() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      {/* App shell */}
      <div className="grid grid-cols-[auto_1fr] min-h-0 min-w-0">
        {/* Sidebar */}
        <div className="h-screen sticky top-0 hidden sm:block">
          <Sidebar />
        </div>
        {/* Main */}
        <div className="flex flex-col min-h-screen">
          <CommandBar />
          <main className="flex-1 p-4 md:p-6 space-y-6">
            <WelcomeCanvas />
            <RecentProjects />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
