import ColumnsListMenu from "./ColumnsListMenu"
import ThemeToggle from "./ThemeToggle"

interface MobileMenuProps {
  show: boolean
}

const MobileMenu = ({show}: MobileMenuProps)=> {
  return(
    <div data-testid="mobile-menu" className={show ? '' : 'hidden'}>
      <ColumnsListMenu />
      <ThemeToggle />
    </div>
  )
}

export default MobileMenu