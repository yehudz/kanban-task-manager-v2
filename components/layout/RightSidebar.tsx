import ColumnsListMenu from "../ui/ColumnsListMenu"
import ThemeToggle from "../ui/ThemeToggle"

const RightSidebar = ()=> {
  return(
    <div data-testid="right-sidebar">
      <div data-testid="right-sidebar-logo"></div>
      <ColumnsListMenu />
      <ThemeToggle />
      <div data-testid="toggle-sidebar-button">Hide Sidebar</div>
    </div>
  )
}

export default RightSidebar