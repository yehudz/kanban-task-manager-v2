interface ColumnTitleProps {
  title: string
  isMobile: boolean
}

const ColumnTitle = ({title, isMobile}: ColumnTitleProps)=> {
  return(
    <div>
      <h1 data-testid="column-title">{title}</h1>
      {isMobile && <div data-testid="column-drop-down-icon">V</div>}
    </div>
  )
}

export default ColumnTitle