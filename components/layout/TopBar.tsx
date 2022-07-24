import styles from '../../styles/layout/Topbar.module.scss'

const TopBar = ()=> {
  return(
    <div data-testid="top-bar" className={`${styles.container} w-screen`}></div>
  )
}

export default TopBar