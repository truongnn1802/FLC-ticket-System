import { useContext, useState } from 'react'
import Button from 'src/components/Button'
import Capcha from 'src/components/Capcha'
import Form from 'src/components/Form'
import FormRequest from 'src/components/FormRequest'
import Input from 'src/components/Input'
import Select from 'src/components/Select'
import { GlobalContext } from 'src/useContext/GlobalContext'
import DefaultLayout from '../../layouts/BaseLayout/DefaultLayout'
import FormSupportCNTT from './components/FormSupportCNTT'
import styles from './index.module.scss'

const NewRequest = () => {
  const [renderComponent, setRenderComponent] = useState<string | undefined>('0')
  const { user } = useContext(GlobalContext)

  const Component = (id: string | undefined) => {
    switch (id) {
      case '1':
        return <FormSupportCNTT />
      case '2':
        return <FormRequest />
      default:
        return null
    }
  }

  const handleChangeTopic = (value: string | undefined) => {
    setRenderComponent(value)
  }

  return (
    <DefaultLayout>
      <section className='container min-height'>
        <h2 className={styles.title}>Tạo yêu cầu mới</h2>
        <p style={{ margin: '0 0 10px' }}>Hãy điền vào bảng dưới đây để mở phiếu yêu cầu mới.</p>
        {!user?.isLogin ? (
          <>
            <h3>Thông tin liên lạc</h3>
            <hr style={{ marginBottom: '20px' }} />
            <div className={styles.infomation}>
              <Form action=''>
                <Input label='Địa chỉ email' type='text' require />
                <div className='mb-15' />
                <Input label='Họ tên' type='text' require name='hoten' />
                <div className='mb-15' />
                <Input label='Số điện thoại' type='text' require widthLabel='195px' width='406px' name='sdt' />
                <Input
                  label='Số máy lẻ'
                  type='text'
                  widthLabel='76px'
                  width='165px'
                  styleLabel={{ padding: 0 }}
                  styleInput={{ margin: 0, fontWeight: 400 }}
                />
                <hr style={{ margin: '10px 0 20px' }} />
                <Select label='Chủ đề' require setSlected='---Chọn một chủ đề---' />
                <div className='mb-15' />
                <Capcha label='Capcha' widthLabel='195px' width='295px' />
                <Input
                  note='Vui lòng điền dãy số - đăng nhập tài khoản để tắt chức năng này.'
                  type='text'
                  width='500px'
                  styleInput={{ margin: 0, width: '80px', height: '30px' }}
                  require
                />
                <hr style={{ margin: '25px 0 20px' }} />
                <div style={{ textAlign: 'center' }}>
                  <Button margin='0 5px' width='150px' bgColor='#5cb85c' borderColor='#4cae4c'>
                    Gửi đi
                  </Button>
                  <Button margin='0 5px' width='150px' bgColor='#f0ad4e' borderColor='#eea236'>
                    Làm mới
                  </Button>
                  <Button margin='0 5px' width='150px' bgColor='#ac2925' borderColor='#d43f3a'>
                    Hủy bỏ
                  </Button>
                </div>
                <br />
                <br />
              </Form>
            </div>
          </>
        ) : (
          <>
            <div className={styles.formGroup}>
              <strong className='name'>Email:</strong>
              <p>{user?.email}</p>
            </div>
            <div className={styles.formGroup}>
              <strong className='name'>Họ và tên:</strong>
              <p>{user?.hoten}</p>
            </div>
            <hr style={{ margin: '10px 0 20px' }} />
            <Select label='Dịch vụ CNTT' require setSlected='---Chọn một dịch vụ CNTT' onChange={handleChangeTopic} />
            {Component(renderComponent)}
            <div style={{ marginBottom: '30px' }}></div>
            <hr />

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <div style={{ textAlign: 'center' }}>
                <Button margin='0 5px' width='150px' bgColor='#5cb85c' borderColor='#4cae4c'>
                  Gửi đi
                </Button>
                <Button margin='0 5px' width='150px' bgColor='#f0ad4e' borderColor='#eea236'>
                  Làm mới
                </Button>
                <Button margin='0 5px' width='150px' bgColor='#ac2925' borderColor='#d43f3a'>
                  Hủy bỏ
                </Button>
              </div>
            </div>
          </>
        )}
      </section>
    </DefaultLayout>
  )
}

export default NewRequest
