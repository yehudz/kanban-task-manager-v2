import SidebarMenuListItem from "../reusables/SidebarMenuListItem"

type BoardListItem = {
  title: string
}

const ColumnsListMenu = ()=> {
  let boardsDummyData: BoardListItem[] = [
    {title: 'Example One'},
    {title: 'Example Two'}
  ]
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
      <div data-testid="add-column-button">Create New Board</div>
    </div>
  )
}

export default ColumnsListMenu