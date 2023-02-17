import { PropsBox } from 'src/types/utils.type'
import styles from './index.module.scss'
const BoxComponent = ({ title, content, icon, arrColor, href }: PropsBox) => {
  return (
    <div className={styles.box} style={{ borderColor: arrColor[0] }}>
      <section className={styles.body}>
        <h2>{title}</h2>
        {content}
      </section>
      <div className={styles.iconBox} style={{ borderTopColor: arrColor[0] }}>
        <img src={icon} alt={title} />
      </div>
      <br />
    </div>
  )
}

export default BoxComponent
