import { FC, useContext, useEffect, useRef, useState } from 'react'
import Button from 'src/components/Button'
import Form from 'src/components/Form'
import Input from 'src/components/Input'
import Select from 'src/components/Select'
import { GlobalContext } from 'src/useContext/GlobalContext'
import DefaultLayout from '../../layouts/BaseLayout/DefaultLayout'
import styles from './index.module.scss'

type typeErr = {
  email: boolean
  hoten: boolean
  password: boolean
  repeatPassword: boolean
  sdt: boolean
  timeZone: boolean
  phoneExt: boolean
}

const Profile: FC = () => {
  const [errors, setErrors] = useState<typeErr>({
    email: false,
    password: false,
    repeatPassword: false,
    sdt: false,
    hoten: false,
    timeZone: false,
    phoneExt: false
  })
  const { user } = useContext(GlobalContext)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    let listInput: NodeListOf<HTMLInputElement>
    if (formRef.current?.querySelectorAll('.itemForm')) {
      const account: any = window.localStorage.getItem('account')
      listInput = formRef.current?.querySelectorAll('.itemForm')
      for (const input of listInput) {
        input.value = account[input.name]
      }
    }
  }, [])

  const handleSubmit = () => {
    const dataInput: any = {}
    let errClone = { ...errors }
    let listInput: NodeListOf<HTMLInputElement>
    if (formRef.current?.querySelectorAll('.itemForm')) {
      listInput = formRef.current?.querySelectorAll('.itemForm')

      for (const input of listInput) {
        if (typeof errClone === 'object') {
          errClone = { ...errClone, [input.name]: input.value === '' && input.required ? true : false }
          dataInput[input.name] = input.value
        }
      }

      if (Object.values(errClone).every((err) => err == false)) {
        if (dataInput.password !== dataInput.repeatPassword) {
          alert('Mật khẩu không khớp')
          return
        }
        const accList = window.localStorage.getItem('listAccount')
        if (accList) {
          if (!JSON.parse(accList).some((acc: any) => acc.hoten === dataInput.hoten)) {
            window.localStorage.setItem('listAccount', JSON.stringify([...JSON.parse(accList), dataInput]))
          } else {
            alert('Tên đăng nhập đã tồn tại')
          }
        } else {
          window.localStorage.setItem('listAccount', JSON.stringify([dataInput]))
        }
      }
      setErrors(errClone)
    }
  }

  return (
    <DefaultLayout>
      <section className='container' style={{ minHeight: 'calc(100vh - 245px)' }}>
        <h2 className={styles.title}>Tạo yêu cầu mới</h2>
        <p style={{ margin: '0 0 10px' }}>Hãy điền vào bảng dưới đây để mở phiếu yêu cầu mới.</p>
        <h3>Thông tin liên lạc</h3>
        <hr style={{ marginBottom: '20px' }} />
        <div className={styles.infomation}>
          <Form action='' ref={formRef}>
            <Input label='Địa chỉ email' type='email' require name='email' error={errors?.email} />
            <div className='mb-15' />
            <Input label='Họ tên' type='text' require name='hoten' error={errors?.hoten} />
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
            <h3 style={{ padding: '0 15px' }}>Tùy chỉnh cá nhân</h3>
            <hr style={{ margin: '10px 0 20px' }} />
            <Select widthLabel='195px' label='Múi giờ' require setSlected='Viet Nam' width='500px' name='timeZone' />
            <div className='mb-15' />
            <h3 style={{ padding: '0 15px' }}>Mật khẩu xác thực vào hệ thống</h3>
            <hr style={{ margin: '25px 0 20px' }} />
            <Input label='Mật khẩu hiện tại' error={errors?.password} type='password' name='currentPassword' />
            <div className='mb-15' />
            <Input label='Mật khẩu mới' error={errors?.password} type='password' name='password' />
            <div className='mb-15' />
            <Input label='Xác nhận mật khẩu mới' error={errors?.repeatPassword} type='password' name='repeatPassword' />
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <Button text='Đăng ký' bgColor='#5cb85c' borderColor='#4cae4c' handleClick={handleSubmit} />
              <Button text='Hủy bỏ' bgColor='#ac2925' borderColor='#d43f3a' handleClick={() => {}} />
            </div>
            <br />
            <br />
          </Form>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default Profile
