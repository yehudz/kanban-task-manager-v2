import { useState } from 'react'
import { InputProps } from '../../typings/interfaces'
import styles from '../../styles/ui/Input.module.scss'

const Input = ({placeholder, labelText, name, defaultValue, testId, setValue, createResource}: InputProps)=> {
  const [localValidation, setLocalValidation] = useState<string>('')
  function handleSetValue(e: React.ChangeEvent<HTMLInputElement>) {
    let target = e.currentTarget as HTMLInputElement
    setLocalValidation(target.value)
    setValue(target.value, e)
  }
  
  return(
    <div className={`form-control w-full ${styles.container}`}>
      <div className="mb-3 text-grey-400 dark:text-white">{labelText}</div>
      <div className='relative'>
        <input 
          data-testid={testId}
          type="text" 
          name={name} 
          placeholder={placeholder} 
          className={`
            bg-transparent 
            border 
            border-solid 
            border-grey-700 
            w-full
            px-4
            py-3
            focus:border-purple
            outline-none
            text-grey
            dark:text-white
            placeholder-grey-300
            dark:placeholder-grey-700
            rounded-md
            ${!localValidation && createResource ? 'border-red focus:border-red' : ''}
            `}
          defaultValue={defaultValue}
          onChange={handleSetValue}

        />
        {(!localValidation && createResource) && <h5 className={`text-red ${styles.error}`} data-testid="empty-input-warning">Can't be empty</h5>}
      </div>
    </div>
  )
}

export default Input