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
      title: 'TIẾP NHẬN & PHÂN LOẠI YÊU CẦU',
      content: (
        <p>
          Hệ thống sẽ tự động tiếp nhận yêu cầu, phân loại, gán trách nhiệm cho chuyên viên kỹ thuật chuyên trách. Người
          sử dụng có thể theo dõi trạng thái xử lý yêu cầu, nhận xét, đánh giá về chất lượng dịch vụ.
        </p>
      ),
      txtButton: 'Tạo yêu cầu mới',
      icon: Icon1,
      arrColor: ['#4caf50', '#5cb85c', '#4cae4c'],
      href: user?.hoten ? '/yeu-cau-moi' : '/trang-chu'
    },
    {
      title: ' PHẢN HỒI NHANH CHÓNG',
      content: (
        <p>
          Phòng Công nghệ quản trị luôn sẵn sàng phản hồi các yêu cầu dịch vụ CNTT của cán bộ nhân viên TST nhanh chóng.
          Thời gian phản hồi theo cam kết chất lượng dịch vụ SLA
        </p>
      ),
      txtButton: 'PHẢN HỒI NHANH CHÓNG',
      icon: Icon2,
      arrColor: ['#0473aa', '#337ab7', '#2e6da4'],
      href: user?.hoten ? '/kiem-tra-tien-do' : '/'
    },
    {
      title: 'DỊCH VỤ 24/7',
      content: (
        <p>
          Đội ngũ chuyên viên kỹ thuật của phòng Công nghệ quản trị luôn sẵn sàng hỗ trợ cán bộ nhân viên xử lý yêu cầu,
          sự cố 24/7 qua Phone, Email, TeamViewer, Ultraviiew….
        </p>
      ),
      txtButton: 'BÁO SỰ VIỆC MỌI LÚC, MỌI NƠI',
      icon: Icon3,
      arrColor: ['#0473aa', '#337ab7', '#2e6da4'],
      href: user?.hoten ? '/yeu-cau-moi' : '/trang-chu'
    },
    {
      title: 'CHẤT LƯỢNG DỊCH VỤ & BÁO CÁO ',
      content: (
        <p>
          Phòng Công nghệ quản trị hướng tới dịch vụ hỗ trợ người dùng chuyên nghiệp hơn, làm hài lòng người sử dụng về
          cam kết dịch vụ thời gian – chất lượng. Báo cáo chi tiết, minh bạch và realtime.
        </p>
      ),
      txtButton: 'VIỆC KHÔNG TRÔI, NẮM BẮT KỊP THỜI',
      icon: Icon4,
      arrColor: ['#4caf50', '#5cb85c', '#4cae4c'],
      href: user?.hoten ? '/ticket' : '/'
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
