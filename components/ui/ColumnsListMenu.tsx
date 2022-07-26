import SidebarMenuListItem from "../reusables/SidebarMenuListItem"
import styles from '../../styles/ui/ColumnsListMenu.module.scss'
import appContext from '../../context/appContext'
import { useContext } from "react"
import { BoardListItem } from "../../typings/common.types"

const ColumnsListMenu = ()=> {
  const {setModalVisibility, setModalContentType} = useContext(appContext)
  let boardsDummyData: BoardListItem[] = [
    {title: 'Example One', active: true},
    {title: 'Example Two', active: false}
  ]
  function showAddBoardForm() {
    setModalVisibility(true)
    setModalContentType("CREATE_NEW_BOARD")
  }
  return(
    <div data-testid="columns-list-menu" className={`${styles.container} w-full`}>
      <div data-testid="columns-list-menu-title" className={`${styles.title} text-grey-400 font-bold`}>All Boards (8)</div>
      <div data-testid="board-list-items" className="my-8">
        {boardsDummyData.map((item: BoardListItem)=> {
          return(
            <div className="flex items-center">
              <SidebarMenuListItem key={item.title} title={item.title} active={item.active}/>
            </div>
          )
        })}
      </div>
      <div onClick={()=> showAddBoardForm()} data-testid="add-board-button">Create New Board</div>
    </div>
  )
}

export default ColumnsListMenu