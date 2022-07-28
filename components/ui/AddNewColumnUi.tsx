import styles from '../../styles/ui/AddNewColumnUi.module.scss'

const AddNewColumnUi = ()=> {
  return(
    <div data-testid="add-new-column-ui" className={`${styles.container} flex items-center justify-center h-sreen bg-grey-200 dark:bg-grey bg-opacity-60 dark:bg-opacity-20 rounded-lg cursor-pointer`}>
      <h2 className={`${styles.title} text-grey-400`}>+ New column</h2>
    </div>
  )
}

export default AddNewColumnUi