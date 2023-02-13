import { forwardRef, Ref, useRef } from 'react'
import FormProvider, { FormContext } from 'src/useContext/FormContext'
import styles from './index.module.scss'

type Props = {
  children: string | JSX.Element | JSX.Element[]
  action?: string
  onSubmit?: () => void
}

//onclick btn gửi=> gọi hàm onsubmit

const Form = ({ children, action, onSubmit }: Props, ref: Ref<HTMLFormElement>): JSX.Element => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (onSubmit) onSubmit()
    event.preventDefault()
  }
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <FormProvider>
      <form onSubmit={e => e.preventDefault()} action={action} ref={ref} style={styles}>
        {children}
      </form>
    </FormProvider>
  )
}

export default forwardRef(Form)
