import { FC } from 'react'
import { Link } from 'react-router-dom'
import Logo from 'src/assets/images/logo.png'
import styles from './index.module.scss'
export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <nav className={styles.navMenu}>
        <div className={styles.container}>
          <div className={styles.pathLeft}>Welcome khách</div>
          <div className='partRight'>
            <Link to='/' className={styles.navItem}>
              Trang chủ
            </Link>
            <Link to='/new-request' className={styles.navItem}>
              Tạo yêu cầu mới
            </Link>
            <Link to='/progress-check' className={styles.navItem}>
              Kiểm tra tiến độ
            </Link>
            <Link to='/login' className={styles.navItem}>
              Đăng nhập
            </Link>
          </div>
        </div>
      </nav>
      <div className={styles.banner}>
        <Link to='/'>
          <img src={Logo} alt='Trung tâm hỗ trợ' />
        </Link>
      </div>
    </div>
  )
}
