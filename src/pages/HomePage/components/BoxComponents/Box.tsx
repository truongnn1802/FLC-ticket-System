import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { PropsBox } from 'src/types/utils.type'
import styles from './index.module.scss'
const BoxComponent = ({ title, content, txtButton, icon, arrColor, href }: PropsBox) => {
  return (
    <div className={styles.box} style={{ borderColor: arrColor[0] }}>
      <section className={styles.body}>
        <h2>{title}</h2>
        {content}
        <Link to={href} className={classnames(styles.button, 'btn')} style={{ backgroundColor: arrColor[1] }}>
          {txtButton}
        </Link>
      </section>
      <div className={styles.iconBox} style={{ borderTopColor: arrColor[0] }}>
        <img src={icon} alt={title} />
      </div>
      <br />
    </div>
  )
}

export default BoxComponent
