import Images from 'src/assets/images/404.jpg'
import styles from './index.module.scss'

const NotFoundPage = () => {
  return (
    <section className='container min-height'>
      <div className={styles.notfound} style={{ backgroundImage: `url(${Images})` }}></div>
      <div className={styles.notification}></div>
    </section>
  )
}
export default NotFoundPage
