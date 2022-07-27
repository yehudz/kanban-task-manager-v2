import { useContext } from "react"
import ColumnsListMenu from "../ui/ColumnsListMenu"
import ThemeToggle from "../ui/ThemeToggle"
import styles from '../../styles/layout/LeftSidebar.module.scss'
import appContext from "../../context/appContext"

const LeftSidebar = ()=> {
  const {sidebarOpen, setSidebarOpen} = useContext(appContext)
  function toggleSidebarVisibility() {
    setSidebarOpen((prevState: boolean)=> prevState = !prevState)
  }

  return(
    <div 
      data-testid="left-sidebar" 
      className={`${styles.container} flex flex-col items-center h-full bg-white dark:bg-grey relative`}>
      <div data-testid="left-sidebar-logo" className={`${styles.logoContainer} flex items-center w-full`}>
        <img src="images/logo-light.svg" alt="" className={`${styles.image}`}/>
      </div>
      <ColumnsListMenu />
      <div className={`absolute bottom-4 ${styles.bottomContainer}`}>
        <ThemeToggle />
        <div data-testid="toggle-sidebar-button" onClick={toggleSidebarVisibility} className="flex flex-row my-8 cursor-pointer">
          <img src="images/icon-hide-sidebar.svg" alt="" />
          <span className="ml-6 text-grey-400 text-xl">Hide Sidebar</span>
        </div>
      </div>
      <div 
        data-testid="show-sidebar" 
        className={`${styles.showSidebarContainer} absolute flex justify-center items-center cursor-pointer ${sidebarOpen ? 'hidden': ''}`}
        onClick={toggleSidebarVisibility}
      >
        <img src="images/icon-show-sidebar.svg" alt="Show sidebar icon" />
      </div>
    </div>
  )
}

export default LeftSidebar