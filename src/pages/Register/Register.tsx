import { FC, useContext, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Button from 'src/components/Button'
import Capcha from 'src/components/Capcha'
import Form from 'src/components/Form'
import Input from 'src/components/Input'
import Select from 'src/components/Select'
import DefaultLayout from '../../layouts/BaseLayout/DefaultLayout'
import styles from './index.module.scss'
import { FormContext } from 'src/useContext/FormContext'

type typeErr = {
  email:boolean
  hoten:boolean
  password:boolean
  repeatPassword:boolean
  sdt:boolean
}

const Register: FC = () => {
  const [errors,setErrors] = useState<typeErr>({
    email:false,
    password:false,
    repeatPassword:false,
    sdt:false,
    hoten:false
  })
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = () => {
    const dataInput: any = {}
    let listInput: NodeListOf<HTMLInputElement>
    if (formRef.current?.querySelectorAll('.itemForm')) {
      listInput = formRef.current?.querySelectorAll('.itemForm')

      for (const input of listInput) {
        dataInput[input.name] = input.value
        if(typeof errors === 'object'){
          setErrors(errors=>({...errors,[input.name]:input.value === ""?true:false}))
        }
      }
    }
  }

  return (
    <DefaultLayout>
      <section className='container' style={{minHeight:'calc(100vh - 245px)'}}>
        <h2 className={styles.title}>Tạo yêu cầu mới</h2>
        <p style={{ margin: '0 0 10px' }}>Hãy điền vào bảng dưới đây để mở phiếu yêu cầu mới.</p>
        <h3>Thông tin liên lạc</h3>
        <hr style={{ marginBottom: '20px' }} />
        <div className={styles.infomation}>
          <Form action='' ref={formRef}>
            <Input label='Địa chỉ email' type='email' require name='email' error={errors?.email}/>
            <div className='mb-15' />
            <Input label='Họ tên' type='text' require name='hoten' error={errors?.hoten}/>
            <div className='mb-15' />
            <Input label='Số điện thoại' type='text' require widthLabel='195px' width='406px' name='sdt' error={errors?.sdt}/>
            <Input
              label='Số máy lẻ'
              type='text'
              widthLabel='76px'
              width='165px'
              styleLabel={{ padding: 0 }}
              styleInput={{ margin: 0, fontWeight: 400 }}
            />
            <h3 style={{ padding: '0 15px' }}>Tùy chỉnh cá nhân</h3>
            <hr style={{ margin: '10px 0 20px' }} />
            <Select widthLabel='195px' label='Múi giờ' require setSlected='Viet Nam' width='500px' />
            <div className='mb-15' />
            <h3 style={{ padding: '0 15px' }}>Mật khẩu xác thực vào hệ thống</h3>
            <hr style={{ margin: '25px 0 20px' }} />
            <Input label='Tạo mật khẩu mới' error={errors?.password} type='password' require name='password' />
            <div className='mb-15' />
            <Input label='Xác nhận mật khẩu mới' error={errors?.repeatPassword} type='password' require name='repeatPassword' />
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <Button text='Đăng ký' bgColor='#5cb85c' borderColor='#4cae4c' handleClick={handleSubmit}/>
              <Button text='Hủy bỏ' bgColor='#ac2925' borderColor='#d43f3a' handleClick={()=>{}}/>
            </div>
            <br />
            <br />
          </Form>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default Register
