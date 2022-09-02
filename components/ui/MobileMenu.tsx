import ColumnsListMenu from "./ColumnsListMenu"
import ThemeToggle from "./ThemeToggle"
import styles from '../../styles/ui/MobileMenu.module.scss'
interface MobileMenuProps {
  show: boolean
}

const MobileMenu = ({show}: MobileMenuProps)=> {
  return(
    <div data-testid="mobile-menu" className={`${styles.container} ${show ? '' : 'hidden'} absolute bg-white dark:bg-grey`}>
      <ColumnsListMenu />
      <ThemeToggle />
    </div>
  )
}

export default MobileMenu