import { useEffect, useRef, useState } from 'react'
import styles from './index.module.scss'

type Props = {
  type: string
  label?: string
  note?: string
  require?: boolean
  widthLabel?: string
  width?: string
  style?: object
  styleLabel?: object
  styleInput?: object
}

const Input = ({
  type,
  label,
  require,
  widthLabel = '16.66666667%',
  width = '100%',
  style,
  styleLabel,
  styleInput,
  note
}: Props): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value,setValue] = useState<string>('')
  useEffect(()=>{
    console.log(value);
  },[value])

  return (
    <div className={styles.wrapperInput} style={{ width: width, ...style }}>
      {label && (
        <label style={{ width: widthLabel, flexBasis: widthLabel, ...styleLabel }}>
          {label}
          <span style={{ color: require ? 'red' : 'transparent' }}>*</span>
        </label>
      )}
      <input type={type} style={{ ...styleInput }} ref={inputRef} value={value} onChange={(event)=>setValue(event.target.value)}/>
      {note && (
        <em className={styles.note}>
          {note}
          <span style={{ color: require ? 'red' : 'transparent' }}>*</span>
        </em>
      )}
    </div>
  )
}

export default Input
