"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from 'react'

// Custom hook for theme toggling
export function useThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleTheme = React.useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light")
  }, [theme, setTheme])

  return {
    theme,
    toggleTheme,
    mounted
  }
}

// Default theme toggle component
export function ThemeToggle({ className, children }) {
  const { theme, toggleTheme, mounted } = useThemeToggle()

  if (!mounted) return null

  if (children) {
    return (
      <button onClick={toggleTheme} className={className}>
        {children}
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className={className || "px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-black dark:text-white"}
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  )
}