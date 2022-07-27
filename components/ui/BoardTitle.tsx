import { BoardTitleProps } from '../../typings/interfaces';
import styles from '../../styles/ui/BoardTitle.module.scss'
const BoardTitle = ({title, isMobile, handleClick}: BoardTitleProps)=> {
  return(
    <button onClick={handleClick} className={`${styles.container} flex flex-row items-center`}>
      <h1 data-testid="board-title">{title}</h1>
      {isMobile && <div data-testid="board-drop-down-icon">
        <img src="images/icon-chevron-down.svg" alt="" className='ml-3'/>  
      </div>}
    </button>
  )
}

export default BoardTitle