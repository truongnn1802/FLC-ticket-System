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
  name?: string
  onChange?: (value?: string) => void
  data?: any[]
}

const Select = ({
  label,
  require,
  widthLabel = '16.66666667%',
  width = '100%',
  style,
  styleLabel,
  name,
  onChange,
  data
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
  const handleChangeValue = (value: string) => {
    if (onChange) onChange(value)
  }
  return (
    <div className={styles.wrapperInput} style={inlineStyle}>
      <label style={inlineStyleLabel}>
        {label}
        <span style={{ color: require ? 'red' : 'transparent' }}>*</span>
      </label>
      <select
        name={name}
        className='itemForm'
        onChange={(e) => {
          handleChangeValue(e.target.value)
        }}
      >
        {data?.map((item, index) => {
          if (item?.isSelectd) {
            return (
              <option value={item?.value} key={index} selected>
                {item?.name}
              </option>
            )
          } else {
            return (
              <option value={item?.value} key={index}>
                {item?.name}
              </option>
            )
          }
        })}
        <option value='0'>Chọn 1 dịch vụ CNTT</option>
        <option value='1'>Dịch vụ hỗ trợ phần cứng </option>
        <option value='2'>Dịch vụ hỗ trợ phần mềm</option>
      </select>
    </div>
  )
}

export default Select
{
  /* {data?.map((item, index) => {
          if (item.isSelectd) {
            return (
              <option value={item?.value} key={index} selected>
                {item?.name}
              </option>
            )
          } else {
            return (
              <option value={item?.value} key={index}>
                {item?.name}
              </option>
            )
          }
        })} */
}
