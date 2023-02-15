import { FC, useRef, useState } from 'react'
import Form from 'src/components/Form'
import Input from 'src/components/Input'
import Select from 'src/components/Select'
import styles from './index.module.scss'

type typeErr = {
  vanDe: boolean
  moTa: boolean
  password: boolean
  repeatPassword: boolean
  sdt: boolean
  timeZone: boolean
  phoneExt: boolean
  newpassword: boolean
  renewPassword: boolean
}

const FormSupportCNTT: FC = () => {
  const [errors, setErrors] = useState<typeErr>({
    vanDe: false,
    password: false,
    repeatPassword: false,
    sdt: false,
    moTa: false,
    timeZone: false,
    phoneExt: false,
    newpassword: false,
    renewPassword: false
  })
  const formRef = useRef<HTMLFormElement>(null)


  return (
      <section className='container' style={{ minHeight: 'calc(100vh - 245px)' }}>
        <h3>CHI TIẾT VỀ VẤN ĐỀ CNTT</h3>
        <span>Những trường có dấu hoa thị đỏ là bắt buộc phải điền.</span>
        <hr style={{ marginBottom: '20px' }} />
        <div className={styles.infomation}>
          <Form action='' ref={formRef}>
            <Input label='1.Vấn đề cần hỗ trợ' type='text' require name='vanDe' error={errors?.vanDe} />
            <div className='mb-15' />
            <Input label='2. Mô tả vấn đề' type='text' require name='moTa' error={errors?.moTa} />
            <div className='mb-15' />
            <Select widthLabel='195px' label='Múi giờ' require setSlected='Viet Nam' width='400px' name='timeZone' />
            <Input
              label='* Khu vực | Tầng '
              type='text'
              require
              widthLabel='150px'
              width='406px'
              name='sdt'
            />
            <div className='mb-15' />

            <Input
              label='Số điện thoại'
              type='text'
              require
              widthLabel='195px'
              width='406px'
              name='sdt'
              error={errors?.sdt}
            />
            <Input
              label='Số máy lẻ'
              type='text'
              widthLabel='76px'
              width='165px'
              styleLabel={{ padding: 0 }}
              styleInput={{ margin: 0, fontWeight: 400 }}
              name='phoneExt'
            />
            <div className='mb-15' />
            <Input label='Ultraview ID' error={errors?.password} type='text' name='utraId' />
            <div className='mb-15' />
            <Input label='Ultraview Pass' error={errors?.newpassword} type='password' name='ultraPass' />
            <div className='mb-15' />
            <br />
            <br />
          </Form>
        </div>
      </section>
  )
}

export default FormSupportCNTT
