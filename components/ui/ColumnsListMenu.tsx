import SidebarMenuListItem from "../reusables/SidebarMenuListItem"
import appContext from '../../context/appContext'
import { useContext } from "react"
type BoardListItem = {
  title: string
}

const ColumnsListMenu = ()=> {
  const {setModalVisibility, setModalContentType} = useContext(appContext)
  let boardsDummyData: BoardListItem[] = [
    {title: 'Example One'},
    {title: 'Example Two'}
  ]
  function showAddBoardForm() {
    setModalVisibility(true)
    setModalContentType("CREATE_NEW_BOARD")
  }
  return(
    <div data-testid="columns-list-menu">
      <div data-testid="columns-list-menu-title">All Boards</div>
      <div data-testid="board-list-items">
        {boardsDummyData.map((item: BoardListItem)=> {
          return(
            <SidebarMenuListItem key={item.title} title={item.title}/>
          )
        })}
      </div>
      <div onClick={()=> showAddBoardForm()} data-testid="add-board-button">Create New Board</div>
    </div>
  )
}

export default ColumnsListMenu