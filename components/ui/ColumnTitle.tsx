import {useContext} from 'react';
import appContext from '../../context/appContext'

interface ColumnTitleProps {
  title: string
  isMobile: boolean
}

const ColumnTitle = ({title, isMobile}: ColumnTitleProps)=> {
  const {setOpenMobileMenu} = useContext(appContext)

  function handleMobileMenuVisibility() {
    if (isMobile) setOpenMobileMenu((prevState: boolean)=> prevState = !prevState)
  }
  return(
    <div onClick={handleMobileMenuVisibility}>
      <h1 data-testid="column-title">{title}</h1>
      {isMobile && <div data-testid="column-drop-down-icon">V</div>}
    </div>
  )
}

export default ColumnTitle