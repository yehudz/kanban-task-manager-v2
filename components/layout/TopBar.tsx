import styles from '../../styles/layout/Topbar.module.scss'
import BoardTitle from '../ui/BoardTitle'
import MobileLogo from '../ui/MobileLogo'
import AddNewButton from '../ui/AddNewButton'
import OptionsMenu from '../reusables/OptionsMenu'
import appContext from '../../context/appContext'
import { useContext } from 'react'

// TS interface
import {TopBarProps} from '../../typings/interfaces'

const TopBar = (
  {
    boardName, 
    boardColumnsCount
  }: TopBarProps)=> {
  const {
    isMobile, 
    setOpenMobileMenu
  } = useContext(appContext)

  function mobileMenuVisibility() {
    if (!isMobile) return // Cancels opening the mobile menu on desktop
    setOpenMobileMenu((
      (prevState: boolean)=>
      prevState = !prevState)
    )
  }

  return(
    <div 
      data-testid="top-bar" 
      className={`
        ${styles.container} 
        relative 
        flex 
        flex-row 
        items-center 
        w-full 
        bg-white 
        dark:bg-grey
      `}
    >
      {isMobile && <MobileLogo />}
      <BoardTitle 
        title={boardName} 
        isMobile={isMobile} 
        handleClick={mobileMenuVisibility}
      />
      <div 
        className='
          absolute 
          right-0 
          flex 
          flex-row 
          items-center
        '
      >
        <AddNewButton 
          buttonText='Add New Task' 
          contentType='add-new-task' 
          disabled={!boardName || boardColumnsCount === 0 ? 
            true : 
            false
          }
        />
        <div className='mr-4'>
          <OptionsMenu 
            menuItems={['Edit Board', 'Delete Board']} 
            disabled={
              boardColumnsCount === 0 ? 
              true : 
              false
            }
          />
        </div>
      </div>
    </div>
  )
}

export default TopBar