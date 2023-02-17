import { MenuOutlined } from '@ant-design/icons'
import { FC, useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Logo from 'src/assets/images/logo.png'
import { GlobalContext } from 'src/useContext/GlobalContext'
import styles from './index.module.scss'
export const Header: FC = () => {
  const { user } = useContext(GlobalContext)

  const selectBtnRef = useRef<HTMLDivElement>(null)
  const itemListRef = useRef<HTMLUListElement>(null)
  useEffect(() => {
    selectBtnRef?.current?.addEventListener('click', () => {
      const arrClass = selectBtnRef?.current?.classList
      console.log(selectBtnRef?.current, 'click')
      if (arrClass?.value.split(' ').some((e) => e === 'open')) {
        selectBtnRef?.current?.classList?.remove('open')
        itemListRef?.current?.classList?.remove('show')
      } else {
        selectBtnRef?.current?.classList?.add('open')
        itemListRef?.current?.classList?.add('show')
      }
    })
  }, [])

  return (
    <div className={styles.header}>
      <nav className={styles.navMenu}>
        <div className={styles.container}>
          <div className={styles.pathLeft}>Welcome {user.isLogin ? user.hoten : 'Khách'}</div>
          <div className='partRight'>
            <Link to='/trang-chu' className={styles.navItem}>
              Trang chủ
            </Link>
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
          <div ref={selectBtnRef} className={styles.selectMenu}>
            <span>
              <MenuOutlined />
            </span>
          </div>
        </div>
      </nav>

      <ul ref={itemListRef} className={styles.listItem}>
        <hr className={styles.line}></hr>
        <li className={styles.item}>
          <Link style={{ display: 'block' }} to='/trang-chu' className={styles.navItem}>
            Trang chủ
          </Link>
        </li>
        <li className={styles.item}>
          <Link style={{ display: 'block' }} to='/yeu-cau-moi' className={styles.navItem}>
            Tạo yêu cầu mới
          </Link>
        </li>
        {user.isLogin && (
          <li className={styles.item}>
            <Link style={{ display: 'block' }} to='/phieu' className={styles.navItem}>
              Phiếu
            </Link>
          </li>
        )}
        {user.isLogin && (
          <li className={styles.item}>
            <Link style={{ display: 'block' }} to='/thong-tin-ca-nhan' className={styles.navItem}>
              Thông tin cá nhân
            </Link>
          </li>
        )}
        <li className={styles.item}>
          {!user.isLogin ? (
            <Link style={{ display: 'block' }} to='/' className={styles.navItem}>
              Đăng nhập
            </Link>
          ) : (
            user.isLogin && (
              <Link style={{ display: 'block' }} to='/dang-xuat' className={styles.navItem}>
                Đăng xuất
              </Link>
            )
          )}
        </li>
      </ul>

      <div className={styles.banner}>
        <Link to='/'>
          <img src={Logo} alt='Trung tâm hỗ trợ' />
        </Link>
      </div>
    </div>
  )
}
