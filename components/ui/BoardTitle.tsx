import { BoardTitleProps } from '../../typings/interfaces';

const BoardTitle = ({title, isMobile, handleClick}: BoardTitleProps)=> {
  return(
    <div onClick={handleClick}>
      <h1 data-testid="board-title">{title}</h1>
      {isMobile && <div data-testid="board-drop-down-icon">V</div>}
    </div>
  )
}

export default BoardTitle