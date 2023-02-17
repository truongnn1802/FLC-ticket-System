import { FC, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from 'src/assets/images/logo.png'
import { GlobalContext } from 'src/useContext/GlobalContext'
import styles from './index.module.scss'
import { Modal } from 'antd'

export const Header: FC = () => {
  const { user, handleLogout } = useContext(GlobalContext)
  const navigate = useNavigate()
  const onLogout = () => {
    Modal.warning({
      title: 'Bạn muốn đăng xuất?',
      closable: true,
      className: 'styleModal',
      onOk: () => {
        handleLogout()
        navigate('/dang-nhap')
      }
    })
  }
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
              <Link to='/dang-nhap' className={styles.navItem}>
                Đăng nhập
              </Link>
            )}
            {user.isLogin && (
              <Link to='' className={styles.navItem} onClick={onLogout}>
                Đăng xuất
              </Link>
            )}
          </div>
        </div>
      </nav>
      <div className={styles.banner}>
        <Link to='/trang-chu'>
          <img src={Logo} alt='Trung tâm hỗ trợ' />
        </Link>
      </div>
    </div>
  )
}
