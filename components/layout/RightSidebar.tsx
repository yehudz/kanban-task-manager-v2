import { useState } from "react"
import ColumnsListMenu from "../ui/ColumnsListMenu"
import ThemeToggle from "../ui/ThemeToggle"
import styles from '../../styles/layout/RightSidebar.module.scss'

const RightSidebar = ()=> {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)
  function toggleSidebarVisibility() {
    setSidebarOpen(prevState=> prevState = !prevState)
  }

  return(
    <div 
      data-testid="right-sidebar" 
      className={`${styles.container} ${sidebarOpen ? 'sidebarOpen' : ''} h-screen dark:bg-midnight relative`}>
      <div data-testid="right-sidebar-logo"></div>
      <ColumnsListMenu />
      <ThemeToggle />
      <div data-testid="toggle-sidebar-button" onClick={toggleSidebarVisibility}>Hide Sidebar</div>
    </div>
  )
}

export default RightSidebar