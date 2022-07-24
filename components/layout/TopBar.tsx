import styles from '../../styles/layout/Topbar.module.scss'
import ColumnTitle from '../ui/ColumnTitle'
import MobileLogo from '../ui/MobileLogo'
import AddNewTaskButton from '../ui/AddNewTaskButton'
import OptionsMenuButton from '../ui/OptionsMenuButton'

interface TopBarProps {
  isMobile: boolean
}

const TopBar = ({isMobile}: TopBarProps)=> {
  return(
    <div data-testid="top-bar" className={`${styles.container} w-screen`}>
      <MobileLogo show={isMobile ? true : false}/>
      <ColumnTitle title={'Example Title'} isMobile={false}/>
      <AddNewTaskButton />
      <OptionsMenuButton />
    </div>
  )
}

export default TopBar