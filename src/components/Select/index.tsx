import styles from './index.module.scss'

type Props = {
  label?: string
  require?: boolean
  widthLabel?: string
  width?: string
  style?: object
  styleLabel?: object
  styleInput?: object
  setSlected?: string
  name?: string,
  onChange?:any
}

const Select = ({
  label,
  require,
  widthLabel = '16.66666667%',
  width = '100%',
  style,
  styleLabel,
  setSlected,
  name,
  onChange
}: Props): JSX.Element => {
  const inlineStyle: object = {
    width,
    ...style
  }
  const inlineStyleLabel: object = {
    width: widthLabel,
    flexBasis: widthLabel,
    ...styleLabel
  }
  const handleChangeValue = (value:string)=>{
    onChange(value)
  }
  return (
    <div className={styles.wrapperInput} style={inlineStyle}>
      <label style={inlineStyleLabel}>
        {label}
        <span style={{ color: require ? 'red' : 'transparent' }}>*</span>
      </label>
      <select name={name} className='itemForm' onChange={e=>{handleChangeValue(e.target.value)}}>
        <option selected>{setSlected}</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </select>
    </div>
  )
}

export default Select
