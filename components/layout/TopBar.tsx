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
    if (!isMobile) return // Cancels opening the mobile menu on desktop
    setOpenMobileMenu(((prevState: boolean)=>prevState = !prevState))
  }

  return(
    <div data-testid="top-bar" className={`${styles.container} relative flex flex-row items-center w-full bg-white dark:bg-grey`}>
      {isMobile && <MobileLogo />}
      <BoardTitle title={boardName} isMobile={isMobile} handleClick={mobileMenuVisibility}/>
      <div className='absolute right-0 flex flex-row items-center'>
        <AddNewTaskButton />
        <div className='mr-4'>
          <OptionsMenu menuItems={['Edit Board', 'Delete Board']}/>
        </div>
      </div>
    </div>
  )
}

export default TopBar