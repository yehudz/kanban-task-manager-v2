import styles from '../../styles/layout/Topbar.module.scss'
import BoardTitle from '../ui/BoardTitle'
import MobileLogo from '../ui/MobileLogo'
import AddNewButton from '../ui/AddNewButton'
import OptionsMenu from '../reusables/OptionsMenu'
import {AppContext} from '../../context/AppContext'
import { useContext } from 'react'

// TS interface
import {TopBarProps} from '../../typings/interfaces'
import { AppContextType } from '../../typings/context.types'
import BoardsContextProvider from '../../context/BoardsContext'

const TopBar = (
  {
    boardColumnsCount
  }: TopBarProps)=> {
  const {
    isMobile, 
    setOpenMobileMenu
  } = useContext(AppContext) as AppContextType

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
      <BoardsContextProvider>
        <BoardTitle 
          isMobile={isMobile} 
          handleClick={mobileMenuVisibility}
        />
      </BoardsContextProvider>
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
          disabled={boardColumnsCount === 0 ? 
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