import ColumnsListMenu from "./ColumnsListMenu"

interface MobileMenuProps {
  show: boolean
}

const MobileMenu = ({show}: MobileMenuProps)=> {
  return(
    <div data-testid="mobile-menu" className={show ? '' : 'hidden'}>
      <ColumnsListMenu />
    </div>
  )
}

export default MobileMenu