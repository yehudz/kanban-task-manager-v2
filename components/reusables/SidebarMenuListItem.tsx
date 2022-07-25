interface SidebarMenuListItemProps {
  title: string
}

const SidebarMenuListItem = ({title}: SidebarMenuListItemProps)=> {
  return(
    <div data-testid="board-list-item">{title}</div>
  )
}

export default SidebarMenuListItem