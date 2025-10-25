"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"

import { useTheme } from "@/components/providers/theme-provider"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    const newTheme = theme === 'light' || theme === 'system' && !window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    setTheme(newTheme);
  };
  
  // We need to wait for the component to be mounted before we can check the theme
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled className="h-10 w-10">
        <Sun className="h-6 w-6" />
      </Button>
    )
  }
  
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-10 w-10" aria-label="Toggle theme">
      {isDark ? (
         <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

      ) : (
        <Moon className="h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
    </Button>
  )
}
