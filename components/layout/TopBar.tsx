import styles from '../../styles/layout/Topbar.module.scss'
import BoardTitle from '../ui/BoardTitle'
import MobileLogo from '../ui/MobileLogo'
import AddNewTaskButton from '../ui/AddNewTaskButton'
import OptionsMenu from '../reusables/OptionsMenu'
import appContext from '../../context/appContext'
import { useContext } from 'react'

// TS interface
import {TopBarProps} from '../../typings/interfaces'

const TopBar = ({boardName}: TopBarProps)=> {
  const {isMobile, setOpenMobileMenu} = useContext(appContext)

  function mobileMenuVisibility() {
    setOpenMobileMenu(((prevState: boolean)=>prevState = !prevState))
  }

  return(
    <div data-testid="top-bar" className={`${styles.container} flex flex-row items-center align-center w-full bg-white dark:bg-midnight`}>
      {isMobile && <MobileLogo />}
      <BoardTitle title={boardName} isMobile={isMobile} handleClick={mobileMenuVisibility}/>
      <AddNewTaskButton />
      <OptionsMenu menuItems={['Edit Board', 'Delete Board']}/>
    </div>
  )
}

export default TopBar