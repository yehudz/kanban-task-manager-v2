import styles from '../../styles/ui/ColumnsListMenu.module.scss'
import { SidebarMenuListItemProps } from '../../typings/interfaces'

const SidebarMenuListItem = ({title, active}: SidebarMenuListItemProps)=> {
  return(
    <div data-testid="board-list-item" className={`${styles.boardButton} flex flex-row items-center ${active ? 'bg-purple font-bold text-white' : ''} text-grey-400 hover:bg-grey-200 hover:dark:bg-white hover:text-purple`}>
      <img src="images/icon-board.svg" alt="board" className={`${active ? styles.active : ''}`}/>
      <span>{title}</span>  
    </div>
  )
}

export default SidebarMenuListItem