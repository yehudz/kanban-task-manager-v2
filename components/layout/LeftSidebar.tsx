import { useState } from "react"
import ColumnsListMenu from "../ui/ColumnsListMenu"
import ThemeToggle from "../ui/ThemeToggle"
import styles from '../../styles/layout/LeftSidebar.module.scss'

const LeftSidebar = ()=> {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)
  function toggleSidebarVisibility() {
    setSidebarOpen(prevState=> prevState = !prevState)
  }

  return(
    <div 
      data-testid="right-sidebar" 
      className={`${styles.container} ${sidebarOpen ? 'sidebarOpen' : ''} flex flex-col items-center h-full bg-white dark:bg-grey relative`}>
      <div data-testid="right-sidebar-logo" className={`${styles.logoContainer} flex items-center w-full`}>
        <img src="images/logo-light.svg" alt="" className={`${styles.image}`}/>
      </div>
      <ColumnsListMenu />
      <div className={`absolute bottom-4 ${styles.bottomContainer}`}>
        <ThemeToggle />
        <div data-testid="toggle-sidebar-button" onClick={toggleSidebarVisibility}>Hide Sidebar</div>
      </div>
    </div>
  )
}

export default LeftSidebar