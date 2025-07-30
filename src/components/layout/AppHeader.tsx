import { NavLink } from "react-router-dom";
import { Moon, Sun, Maximize2, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useState, useEffect } from "react";

const headerTabs = [
  { title: "Cards", url: "/cards" },
  { title: "Dashboard", url: "/" },
  { title: "Mail", url: "/mail" },
  { title: "Pricing", url: "/pricing" },
  { title: "Color Palette", url: "/colors" },
];

export function AppHeader() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    document.documentElement.classList.toggle('dark', newIsDark);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <header className="h-12 border-b border-border bg-background flex items-center px-4 gap-4">
      <SidebarTrigger className="h-6 w-6" />
      
      <nav className="flex items-center gap-6 flex-1">
        {headerTabs.map((tab) => (
          <NavLink
            key={tab.title}
            to={tab.url}
            className={({ isActive }) =>
              `text-sm font-medium transition-colors px-3 py-2 rounded-md ${
                isActive
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`
            }
          >
            {tab.title}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          className="h-8 w-8 p-0"
        >
          {isDark ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleFullscreen}
          className="h-8 w-8 p-0"
        >
          <Maximize2 className="h-4 w-4" />
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0"
        >
          <Grid3X3 className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}