import { FC } from 'react'
import Button from 'src/components/Button'
import Capcha from 'src/components/Capcha'
import Form from 'src/components/Form'
import Input from 'src/components/Input'
import Select from 'src/components/Select'
import DefaultLayout from '../../layouts/BaseLayout/DefaultLayout'
import styles from './index.module.scss'
const NewRequest: FC = () => {
  // const handleSubmit = ()=>{
  //   console.log(event:React.FormEvent<HTMLFormElement>);
    
  // }
  return (
    <DefaultLayout>
      <section className='container'>
        <h2 className={styles.title}>Tạo yêu cầu mới</h2>
        <p style={{ margin: '0 0 10px' }}>Hãy điền vào bảng dưới đây để mở phiếu yêu cầu mới.</p>
        <h3>Thông tin liên lạc</h3>
        <hr style={{ marginBottom: '20px' }} />
        <div className={styles.infomation}>
          <Form action='' >
            <Input label='Địa chỉ email' type='text' require />
            <div className='mb-15' />
            <Input label='Họ tên' type='text' require />
            <div className='mb-15' />
            <Input label='Số điện thoại' type='text' require widthLabel='195px' width='406px' />
            <Input
              label='Số máy lẻ'
              type='text'
              widthLabel='76px'
              width='165px'
              styleLabel={{ padding: 0 }}
              styleInput={{ margin: 0, fontWeight: 400 }}
            />
            <hr style={{margin:'10px 0 20px'}}/>
            <Select label='Chủ đề' require setSlected='---Chọn một chủ đề---'/>
            <div className='mb-15' />
            <Capcha  label='Capcha' widthLabel='195px' width='295px'/>
            <Input note='Vui lòng điền dãy số - đăng nhập tài khoản để tắt chức năng này.' type='text' width='500px'  styleInput={{ margin: 0, width: '80px',height:'30px' }} require />
            <hr style={{margin:'25px 0 20px'}}/>
            <Button/>
          </Form>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default NewRequest
