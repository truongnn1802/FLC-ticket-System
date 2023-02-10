import { FC } from 'react'
import styles from './index.module.scss'
export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <p className={styles.contentFooter}>
          Copyright © 2023 FLC Ticket System <a href='/scp/'> - IT Centre</a>
        </p>
      </div>
    </footer>
  )
}
