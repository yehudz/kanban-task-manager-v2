import { TextareaProps } from "../../typings/interfaces"

const Textarea = ({placeholder, defaultValue}: TextareaProps)=> {
  return(
    <textarea 
      placeholder={placeholder}
      defaultValue={defaultValue}
      className="
        bg-transparent 
        border 
        border-solid 
        border-grey-700 
        w-full
        px-4
        py-3
        mt-3
        focus:border-purple
        outline-none
        placeholder-grey-300
        dark:placeholder-grey-700
        rounded-md
      "
    />
  )
}

export default Textarea