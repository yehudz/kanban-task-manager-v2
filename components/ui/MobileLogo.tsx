interface MobileLogoProps {
  show: boolean
}

const MobileLogo = ({show}: MobileLogoProps)=> {
  return(
    <div data-testid="logo-container">
      <h3>Logo</h3>
    </div>
  )
}

export default MobileLogo