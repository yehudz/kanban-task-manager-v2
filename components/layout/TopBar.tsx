import styles from '../../styles/layout/Topbar.module.scss'
import ColumnTitle from '../ui/ColumnTitle'
import MobileLogo from '../ui/MobileLogo'
import AddNewTaskButton from '../ui/AddNewTaskButton'
import OptionsMenuButton from '../ui/OptionsMenuButton'
import appContext from '../../context/appContext'
import { useContext } from 'react'

// TS interface
import {TopBarProps} from '../../typings/interfaces'

const TopBar = ({boardName}: TopBarProps)=> {
  const {isMobile, setOpenMobileMenu} = useContext(appContext)
  return(
    <div data-testid="top-bar" className={`${styles.container} flex flex-row items-center align-center w-full bg-white dark:bg-midnight`}>
      {isMobile && <MobileLogo />}
      <ColumnTitle title={boardName} isMobile={isMobile}/>
      <AddNewTaskButton />
      <OptionsMenuButton />
    </div>
  )
}

export default TopBar