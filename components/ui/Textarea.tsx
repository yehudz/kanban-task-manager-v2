import { TextareaProps } from "../../typings/interfaces"

const Textarea = ({placeholder, defaultValue, setValue}: TextareaProps)=> {
  return(
    <textarea 
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=> setValue(e.target.value, e)}
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
        text-grey
        dark:text-white
        placeholder-grey-300
        dark:placeholder-grey-700
        rounded-md
      "
    />
  )
}

export default Textarea