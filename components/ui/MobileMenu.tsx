interface MobileMenuProps {
  show: boolean
}

const MobileMenu = ({show}: MobileMenuProps)=> {
  return(
    <div data-testid="mobile-menu" className={show ? '' : 'hidden'}><h1>Mobile Menu</h1></div>
  )
}

export default MobileMenu