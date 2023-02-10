import { FC } from 'react'
import Input from 'src/components/Input'
import DefaultLayout from '../../layouts/BaseLayout/DefaultLayout'
import styles from './index.module.scss'
const NewRequest: FC = () => {
  return <DefaultLayout>
    <section className="container">
      <h1>Tạo yêu cầu mới</h1>
      <p>Hãy điền vào bảng dưới đây để mở phiếu yêu cầu mới.</p>
      <div className={styles.infomation}>
        <form action="submit" className={styles.formInfomation}>
          <Input type="text"/>
        </form>
      </div>
    </section>
  </DefaultLayout>
}

export default NewRequest
