import styles from '../../styles/layout/Topbar.module.scss'
import ColumnTitle from '../ui/ColumnTitle'
import MobileLogo from '../ui/MobileLogo'

interface TopBarProps {
  isMobile: boolean
}

const TopBar = ({isMobile}: TopBarProps)=> {
  return(
    <div data-testid="top-bar" className={`${styles.container} w-screen`}>
      <MobileLogo show={isMobile ? true : false}/>
      <ColumnTitle title={'Example Title'} isMobile={false}/>
    </div>
  )
}

export default TopBar