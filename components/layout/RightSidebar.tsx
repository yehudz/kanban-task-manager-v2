import { useState } from "react"
import ColumnsListMenu from "../ui/ColumnsListMenu"
import ThemeToggle from "../ui/ThemeToggle"

const RightSidebar = ()=> {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)
  function toggleSidebarVisibility() {
    setSidebarOpen(prevState=> prevState = !prevState)
  }

  return(
    <div data-testid="right-sidebar" className={sidebarOpen ? 'sidebarOpen' : ''}>
      <div data-testid="right-sidebar-logo"></div>
      <ColumnsListMenu />
      <ThemeToggle />
      <div data-testid="toggle-sidebar-button" onClick={toggleSidebarVisibility}>Hide Sidebar</div>
    </div>
  )
}

export default RightSidebar