import { FC } from 'react'
import styles from './index.module.scss'
export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <p className={styles.contentFooter}>
          Copyright © 2023 TST A MEMBER OF TC GROUP
          <a href='/scp/' style={{ color: '#ccc' }}>
            - IT Center
          </a>
        </p>
      </div>
    </footer>
  )
}
