import { FC, useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from 'src/assets/images/logo.png'
import { GlobalContext } from 'src/useContext/GlobalContext'
import styles from './index.module.scss'
export const Header: FC = () => {
  const { user } = useContext(GlobalContext)
  return (
    <div className={styles.header}>
      <nav className={styles.navMenu}>
        <div className={styles.container}>
          <div className={styles.pathLeft}>Welcome {user.isLogin ? user.hoten : 'Khách'}</div>
          <div className='partRight'>
            <Link to='/trang-chu' className={styles.navItem}>
              Trang chủ
            </Link>
            {/* {user.isLogin && (
              <Link to='/document' className={styles.navItem}>
                Tài liệu nội bộ
              </Link>
            )} */}
            <Link to='/yeu-cau-moi' className={styles.navItem}>
              Tạo yêu cầu mới
            </Link>
            {user.isLogin && (
              <Link to='/phieu' className={styles.navItem}>
                Phiếu
              </Link>
            )}
            {user.isLogin && (
              <Link to='/thong-tin-ca-nhan' className={styles.navItem}>
                Thông tin cá nhân
              </Link>
            )}
            {!user.isLogin && (
              <Link to='/kiem-tra-tien-do' className={styles.navItem}>
                Kiểm tra tiến độ
              </Link>
            )}
            {!user.isLogin && (
              <Link to='/' className={styles.navItem}>
                Đăng nhập
              </Link>
            )}
            {user.isLogin && (
              <Link to='/dang-xuat' className={styles.navItem}>
                Đăng xuất
              </Link>
            )}
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
