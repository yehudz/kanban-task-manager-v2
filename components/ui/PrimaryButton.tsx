import { PrimaryButtonProps } from "../../typings/interfaces"

const PrimaryButton = ({buttonText, color, handleClick}: PrimaryButtonProps)=> {
  return(
    <button data-testid="primaryButton" onClick={handleClick}>{buttonText}</button>
  )
}

export default PrimaryButton