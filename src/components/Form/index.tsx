import { useRef } from 'react'
import styles from './index.module.scss'

type Props = {
  children: string | JSX.Element | JSX.Element[]
  action?:string
  // onSubmit:(event:React.FormEvent<HTMLFormElement>)=>void
}

//onclick btn gửi=> gọi hàm onsubmit

const Form = ({children,action}:Props): JSX.Element => {
  const handleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
  event.preventDefault()    
  console.log("abc",formRef.current);
  
  }
  const formRef = useRef<HTMLFormElement>(null)
  return (
    <form onSubmit={handleSubmit} action={action} ref={formRef}>
      {children}
    </form>
  )
}

export default Form
