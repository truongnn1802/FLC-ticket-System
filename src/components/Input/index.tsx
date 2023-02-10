import styles from './index.module.scss'

type Props = {
  type: string
  label?:string
}

const Input = ({ type,label }: Props): JSX.Element => {
  return (
    <div className={styles.wrapperInput}>
      <label>{label}</label>
      <input type={type} />
    </div>
  )
}

export default Input
