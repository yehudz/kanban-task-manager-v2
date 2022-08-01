import { PrimaryButtonProps } from "../../typings/interfaces"
import styles from '../../styles/ui/PrimaryButton.module.scss'
const PrimaryButton = ({buttonText, color, handleClick}: PrimaryButtonProps)=> {
  return(
    <button 
      data-testid="primaryButton" 
      onClick={handleClick}
      className={`${styles.container} w-full font-bold mb-4 mt-4 ${color === 'white' ? 'bg-grey-200 dark:bg-white text-purple dark:hover:bg-grey-200 hover:bg-white' : 'bg-purple hover:bg-purple-light'}`}
    >
      {buttonText}
    </button>
  )
}

export default PrimaryButton