import { FC, useRef, useState } from 'react'
import Form from 'src/components/Form'
import Input from 'src/components/Input'
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
  const [errors] = useState<typeErr>({
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
    <section className='container min-height'>
      <hr style={{ margin: '20px 0' }} />
      <div className={styles.infomation}>
        <Form action='' ref={formRef}>
          <Input label='1.Yêu cầu cần hỗ trợ' type='text' require name='vanDe' error={errors?.vanDe} />
          <div className='mb-15' />
          <Input label='2. Nội dung yêu cầu' type='text' require name='moTa' error={errors?.moTa} />
        </Form>
      </div>
    </section>
  )
}

export default FormSupportCNTT
