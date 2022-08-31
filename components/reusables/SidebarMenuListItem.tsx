import styles from '../../styles/ui/ColumnsListMenu.module.scss'
import { SidebarMenuListItemProps } from '../../typings/interfaces'
import appContext from '../../context/appContext'
import { useContext } from 'react'

const SidebarMenuListItem = ({name, active, index}: SidebarMenuListItemProps)=> {
  const {setSelectedBoard} = useContext(appContext)
  return(
    <div 
      data-testid="board-list-item" 
      onClick={()=> setSelectedBoard(index)}
      className={`
        ${styles.boardButton} 
        flex 
        flex-row 
        items-center ${active ? 
          'bg-purple font-bold text-white hover:bg-purple hover:dark:bg-purple hover:text-white' : 
          ''} 
        text-grey-400 
        hover:bg-grey-200 
        hover:dark:bg-white 
        hover:text-purple
      `}
    >
      <img 
        src="images/icon-board.svg" 
        alt="board" 
        className={`
          ${active ? 
          styles.active : 
          ''
          }
        `}
      />
      <span
        className='
          whitespace-nowrap
          text-ellipsis
          overflow-hidden
        '
      >{name}</span>  
    </div>
  )
}

export default SidebarMenuListItem