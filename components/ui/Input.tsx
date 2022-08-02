import { InputProps } from '../../typings/interfaces'

const Input = ({placeholder, labelText, name, defaultValue, testId}: InputProps)=> {
  return(
    <div className="form-control w-full">
      <div className="mb-3 text-grey-400 dark:text-white">{labelText}</div>
      <input 
        data-testid={testId}
        type="text" 
        name={name} 
        placeholder={placeholder} 
        className="
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
          "
        defaultValue={defaultValue}
      />
    </div>
  )
}

export default Input