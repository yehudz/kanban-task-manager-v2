import styles from '../../styles/layout/Topbar.module.scss'
import ColumnTitle from '../ui/ColumnTitle'
import MobileLogo from '../ui/MobileLogo'
import AddNewTaskButton from '../ui/AddNewTaskButton'
import OptionsMenuButton from '../ui/OptionsMenuButton'
import appContext from '../../context/appContext'
import { useContext } from 'react'

const TopBar = ()=> {
  const {isMobile} = useContext(appContext)
  return(
    <div data-testid="top-bar" className={`${styles.container} w-screen`}>
      {isMobile && <MobileLogo />}
      <ColumnTitle title={'Example Title'} isMobile={isMobile}/>
      <AddNewTaskButton />
      <OptionsMenuButton />
    </div>
  )
}

export default TopBar