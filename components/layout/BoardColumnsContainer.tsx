import styles from '../../styles/layout/ColumnsContainer.module.scss'

const ColumnsContainer = ()=> {
  return(
    <div data-testid="columns-container" className={`${styles.container} w-screen h-screen`}></div>
  )
}

export default ColumnsContainer