import DefaultLayout from 'src/layouts/BaseLayout'
import styles from './index.module.scss'
import Images from 'src/assets/images/404.jpg'

const NotFoundPage = () => {
  return (
    <section className='container min-height'>
      <div className={styles.notfound} style={{ backgroundImage: `url(${Images})` }}></div>
      <div className={styles.notification}>
        {/* <h2>Rất tiếc chúng tôi không tìm thấy nội dung của trang này !</h2> */}
      </div>
    </section>
  )
}
export default NotFoundPage