import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState<string>('dark')
  const colorScheme = theme === 'dark' ? 'light' : 'dark';
  useEffect(()=> {
    const root = window.document.documentElement
    root.classList.remove(colorScheme)
    root.classList.add(theme)
  }, [theme, colorScheme])

  return [colorScheme, setTheme]
}