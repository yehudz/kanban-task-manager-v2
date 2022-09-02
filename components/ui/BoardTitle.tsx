import { BoardTitleProps } from '../../typings/interfaces';
import styles from '../../styles/ui/BoardTitle.module.scss'
import { useContext } from 'react';
import { BoardsContext } from '../../context/BoardsContext';
import { BoardContextValues } from '../../typings/context.types';
const BoardTitle = (
  {
    isMobile, 
    handleClick
  }: BoardTitleProps)=> {
    const {board} = useContext(BoardsContext) as BoardContextValues

  return(
    <button 
      onClick={handleClick} 
      className={`
        ${styles.container} 
        flex 
        flex-row 
        items-center
      `}
    >
      <h1 
        data-testid="board-title" 
        className='
          text-grey 
          dark:text-white
        '
      >
        {board.name}
      </h1>
      {isMobile && 
      <div 
        data-testid="board-drop-down-icon">
        <img 
          src="images/icon-chevron-down.svg" 
          alt="" 
          className='ml-3'
        />  
      </div>}
    </button>
  )
}

export default BoardTitle