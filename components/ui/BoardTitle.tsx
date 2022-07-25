import { BoardTitleProps } from '../../typings/interfaces';

const BoardTitle = ({title, isMobile, handleClick}: BoardTitleProps)=> {
  return(
    <div onClick={handleClick}>
      <h1 data-testid="column-title">{title}</h1>
      {isMobile && <div data-testid="column-drop-down-icon">V</div>}
    </div>
  )
}

export default BoardTitle