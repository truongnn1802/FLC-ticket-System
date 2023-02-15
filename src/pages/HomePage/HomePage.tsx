import { FC, useContext } from 'react'
import DefaultLayout from 'src/layouts/BaseLayout/DefaultLayout'
import styles from './index.module.scss'
import Logo from 'src/assets/images/bannner.png'
import Icon1 from 'src/assets/images/new_ticket_icon.png'
import Icon2 from 'src/assets/images/check.png'
import Icon3 from 'src/assets/images/notification.png'
import Icon4 from 'src/assets/images/people.png'
import BoxComponent from './components/BoxComponents'
import { PropsBox } from 'src/types/utils.type'
import { GlobalContext } from 'src/useContext/GlobalContext'

const HomePage: FC = () => {
  const { user } = useContext(GlobalContext)

  const listBox: PropsBox[] = [
    {
      title: 'Tạo yêu cầu mới',
      content: (
        <p>
          Với người dùng sử dụng email <b>@tst.vn</b>, các anh/chị đăng nhập bằng email và mật khẩu của mình để tạo
          phiếu yêu cầu hỗ trợ. Đối với các email khác, vui lòng tạo, kích hoạt tài khoản lần đầu để bắt đầu sử dụng.
        </p>
      ),
      txtButton: 'Tạo yêu cầu mới',
      icon: Icon1,
      arrColor: ['#4caf50', '#5cb85c', '#4cae4c'],
      href: user?.hoten ? '/new-request' : '/login'
    },
    {
      title: 'Kiểm tra tiến độ',
      content: (
        <p>
          Hệ thống lưu lại lịch sử các lần giao tiếp của anh/chị với các Ban, Phòng, Bộ phận chức năng, vui lòng chuẩn
          bị sẵn email và số phiếu yêu cầu của anh/chị để kiểm tra tiến độ phối hợp xử lý sự việc.
        </p>
      ),
      txtButton: 'Kiểm tra tiến độ',
      icon: Icon2,
      arrColor: ['#0473aa', '#337ab7', '#2e6da4'],
      href: user?.hoten ? '/progress-check' : '/login'
    },
    {
      title: 'Các vấn đề tương tác',
      content: (
        <p>
          - Báo hỗ trợ về CNTT (v2.0)<br></br>- Đăng ký quảng cáo WIFI Marketing/Màn hình TV<br></br>- Đăng ký tài khoản
          Polycom/Email/Thẻ Từ<br></br>- Đặt lịch họp/Báo hỏng Tài sản/Thiết bị<br></br>
          <b>* SẮP RA MẮT *</b>
          <br></br>- Báo nguy cơ về an ninh, PCCC
          <br></br>- Báo hỗ trợ nghiệp vụ HiStaff và giải đáp các vấn đề pháp chế/nhân sự.
        </p>
      ),
      txtButton: 'BÁO SỰ VIỆC MỌI LÚC, MỌI NƠI',
      icon: Icon3,
      arrColor: ['#0473aa', '#337ab7', '#2e6da4'],
      href: user?.hoten ? '/new-request' : '/login'
    },
    {
      title: 'Đơn vị tiếp nhận',
      content: (
        <p>
          Tương ứng với các vấn đề mà anh/chị phản ánh/đề xuất/yêu cầu hỗ trợ, Hệ thống Support Ticket này sẽ chuyển nội
          dung tới các Ban, Phòng, Bộ phận tương ứng.<br></br>Đối với các công việc cần xử lý gấp, vui lòng liên hệ qua
          điện thoại, tin nhắn sms/viber...Tuy nhiên, Hỗ trợ viên sẽ tạo phiếu bổ sung cho vấn đề/sự việc đã được hỗ trợ
          xong.
        </p>
      ),
      txtButton: 'VIỆC KHÔNG TRÔI, NẮM BẮT KỊP THỜI',
      icon: Icon4,
      arrColor: ['#4caf50', '#5cb85c', '#4cae4c'],
      href: user?.hoten ? '/ticket' : '/login'
    }
  ]

  return (
    <DefaultLayout>
      <div className={styles.body}>
        <section className={styles.support}>
          <div className={styles.banner} style={{ backgroundImage: `url(${Logo})` }}></div>
        </section>
        <section>
          <div className='container'>
            <div className={styles.boxList}>
              {listBox?.map((box, index) => (
                <BoxComponent
                  key={index}
                  title={box.title}
                  content={box.content}
                  txtButton={box.txtButton}
                  href={box.href}
                  icon={box.icon}
                  arrColor={box.arrColor}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  )
}

export default HomePage
