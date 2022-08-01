import { InputProps } from '../../typings/interfaces'

const Input = ({placeholder, labelText, inputName, inputDefaultValue, testId}: InputProps)=> {
  return(
    <div className="form-control mt-4 w-full">
      <label htmlFor={inputName} className="font-bold">{labelText}</label>
      <input 
        data-testid={testId}
        type="text" 
        name={inputName} 
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
          mt-2
          mb-8
          placeholder-grey-700
          "
        defaultValue={inputDefaultValue}
      />
    </div>
  )
}

export default Input