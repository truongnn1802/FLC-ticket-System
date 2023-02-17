import { faCheck, faEnvelope, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import Button from 'src/components/Button'
import Form from 'src/components/Form'
import InputIcon from 'src/components/InputIcon'
import DefaultLayout from '../../layouts/BaseLayout/DefaultLayout'
import styles from './index.module.scss'
const ProgressCheck: FC = () => {
  return (
    <DefaultLayout>
      <section className='container'>
        <h2 className={styles.title}>Kiểm tra tiến độ</h2>
        <p style={{ margin: '0 0 10px' }}>
          Hãy cung cấp địa chỉ email và mã số của phiếu để xem trạng thái xử lý. Có thể anh/chị sẽ phải đăng nhập để xem
          nội dung phiếu.
        </p>

        <hr style={{ marginBottom: '20px' }} />
        <div className={styles.ProgressCheck}>
          <Form action=''>
            <InputIcon label={<FontAwesomeIcon icon={faEnvelope} />} placeHolder='Địa chỉ Email' type='text' />
            <div className='mb-15' />
            <InputIcon label={<FontAwesomeIcon icon={faTicketAlt} />} placeHolder='Ticket' type='text' />
            <div style={{ textAlign: 'center', marginTop: '25px' }}>
              <Button  bgColor='#337ab7' borderColor='#2e6da4' >Xem phiếu</Button>
            </div>
          </Form>
          <div className={styles.partRight}>
            <ul className='list-unstyled'>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Anh/chị đã có tài khoản chưa? <Link to='/'>Đăng nhập</Link> hoặc
                <Link to='/dang-ky'> đăng ký để tạo tài khoản </Link> để truy cập tất cả các phiếu yêu cầu.
              </li>

              <li>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Đây là lần đầu anh/chị truy cập hệ thống? hoặc anh/chị quên mã số phiếu đã tạo, hãy{' '}
                <Link to='/phieu'>mở phiếu yêu cầu (ticket) mới</Link>.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default ProgressCheck
