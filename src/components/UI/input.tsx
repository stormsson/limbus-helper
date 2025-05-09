import * as React from "react"
import inputStyles from "./input.module.css"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return <input type={type} className={`${inputStyles.input} ${className || ""}`} ref={ref} {...props} />
})
Input.displayName = "Input"

export { Input }
