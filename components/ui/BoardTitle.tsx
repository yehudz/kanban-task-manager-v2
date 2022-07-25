import {useContext} from 'react';
import appContext from '../../context/appContext'
import { BoardTitleProps } from '../../typings/interfaces';

const BoardTitle = ({title, isMobile, handleClick}: BoardTitleProps)=> {
  // const {setOpenMobileMenu} = useContext(appContext)

  // function handleMobileMenuVisibility() {
  //   if (isMobile) handleClick((prevState: boolean)=> prevState = !prevState)
  // }
  return(
    <div onClick={handleClick}>
      <h1 data-testid="column-title">{title}</h1>
      {isMobile && <div data-testid="column-drop-down-icon">V</div>}
    </div>
  )
}

export default BoardTitle