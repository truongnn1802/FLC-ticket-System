import { FormHTMLAttributes, forwardRef, LegacyRef } from 'react'
import styles from './index.module.scss'

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  bgColor?: string
  borderColor?: string
}

const Form = ({ children, ...rest }: FormProps, formRef: LegacyRef<HTMLFormElement> | undefined): JSX.Element => {
  return (
    <form style={styles} {...rest} ref={formRef}>
      {children}
    </form>
  )
}

export default forwardRef(Form)
