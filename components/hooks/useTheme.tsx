import { useEffect, useState, useContext } from "react";
import {AppContext} from "../../context/AppContext";
export default function useTheme() {
  const {theme, setTheme} = useContext(AppContext)
  const colorScheme = theme === 'dark' ? 'light' : 'dark';
  useEffect(()=> {
    const root = window.document.documentElement
    root.classList.remove(colorScheme)
    if (theme) {
      localStorage.setItem('kanbanTheme', theme)
      root.classList.add(theme)
    }
  }, [theme, colorScheme])

  return [colorScheme, setTheme]
}