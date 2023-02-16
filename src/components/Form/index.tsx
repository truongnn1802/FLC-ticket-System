import { forwardRef, Ref, FormHTMLAttributes, useRef, useEffect, LegacyRef } from 'react'
import styles from './index.module.scss'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  bgColor?: string
  borderColor?: string
}
//onclick btn gửi=> gọi hàm onsubmit

const Form = ({ children, ...rest }: FormProps, formRef: LegacyRef<HTMLFormElement> | undefined): JSX.Element => {
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   if (onSubmit) onSubmit()
  //   event.preventDefault()
  // }

  return (
    <form style={styles} {...rest} ref={formRef}>
      {children}
    </form>
  )
}

export default forwardRef(Form)
