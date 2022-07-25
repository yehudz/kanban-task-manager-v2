import styles from '../../styles/layout/BoardColumnsContainer.module.scss'
import dummyData from '../../data.json'
const BoardColumnsContainer = ()=> {
  console.log(dummyData.boards[0])
  return(
    <div data-testid="columns-container" className={`${styles.container} w-full h-full`}>
      
    </div>
  )
}

export default BoardColumnsContainer