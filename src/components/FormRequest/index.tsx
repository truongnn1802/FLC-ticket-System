import { Form, Input } from 'antd'

import styles from './index.module.scss'

type PropsHeaderForm = {
  title: string
  desc: string
}
type PropsGroupForm = {
  title: string
  height?: number
}
const FormRequest = () => {
  return (
    <div className='form'>
      <FormHeader
        title='Thông tin về phiếu yêu cầu'
        desc='Nếu tóm tắt nội dung vào phần Tiêu đề trước khi chuyển sang phần kế tiếp'
      />
      <FormGroup title='Tiêu đề' />
      <FormHeader
        title='BÁO TIẾP NHẬN NHÂN SỰ'
        desc='Form này phục vụ Ban Nhân sự gửi thông báo tới Bộ phận Tài sản, Bộ phận Hỗ trợ CNTT để chuẩn bị cấp phát và cài đặt các thiết bị CNTT cho nhân sự mới.'
      />
      <FormGroup title='Nội dung chi tiết' height={100} />
    </div>
  )
}
export default FormRequest

const FormHeader = ({ title, desc }: PropsHeaderForm) => {
  return (
    <div className='form-header'>
      <h3>{title}</h3>
      <p>{desc}</p>
      <hr className={styles.hr}></hr>
    </div>
  )
}
const FormGroup = ({ title, height }: PropsGroupForm) => {
  return (
    <div className={styles.formGroup}>
      <span>
        {title}
        <span className={styles.required}>*</span>
      </span>
      <Input className={styles.inputFormGroup} style={{ height: height }} />
    </div>
  )
}
