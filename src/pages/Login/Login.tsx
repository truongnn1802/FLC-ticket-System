import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Modal } from 'antd'
import { FC, useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'src/components/Button'
import Form from 'src/components/Form'
import InputIcon from 'src/components/InputIcon'
import DefaultLayout from 'src/layouts/BaseLayout/DefaultLayout'
import { GlobalContext } from 'src/useContext/GlobalContext'
import styles from './index.module.scss'

const Login: FC = () => {
  const [isLoading] = useState<boolean>(false)
  const formRef = useRef<HTMLFormElement>(null)
  const { handleAddUser } = useContext(GlobalContext)
  const navigate = useNavigate()

  useEffect(() => {
    // const res = axios.post('http://103.11.199.96:8069/api/auth/token', {
    //   headers: {
    //     login: 'admin',
    //     password: 1,
    //     db: 'HRM'
    //   }
    // })
    const response = fetch('http://103.11.199.96:8069/api/auth/token', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
        login: 'admin',
        password: '1',
        db: 'HRM'
      },
      body: JSON.stringify({})
    })
    response.then((res) => {
      console.log(res.json())
    })
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const dataInput: any = {}
    let listInput: NodeListOf<HTMLInputElement>
    if (formRef.current?.querySelectorAll('.itemForm')) {
      listInput = formRef.current?.querySelectorAll('.itemForm')
      for (const input of listInput) {
        dataInput[input.name] = input.value
      }
    }

    const accountList = window.localStorage.getItem('listAccount')
    const account =
      accountList &&
      JSON.parse(accountList).find(
        (account: any) => account.hoten === dataInput.username && account.password === dataInput.password
      )
    if (account) {
      handleAddUser(account)
      navigate('/trang-chu')
      return
    } else {
      Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
        className: 'styleModal'
      })
    }
  }
  return (
    <DefaultLayout>
      <section className='container min-height'>
        <h2 className={styles.title}>H??? th???ng IT Helpdesk</h2>
        <div className={styles.loginForm}>
          <Form action='' ref={formRef} onSubmit={handleSubmit}>
            <InputIcon
              label={<FontAwesomeIcon icon={faUser} />}
              placeHolder='T??n ????ng nh???p'
              type='text'
              name='username'
            />
            <div className='mb-15' />
            <InputIcon
              label={<FontAwesomeIcon icon={faLock} />}
              placeHolder='M???t kh???u'
              type='password'
              name='password'
            />
            <div style={{ textAlign: 'center', marginTop: '25px' }}>
              <Button bgColor='#337ab7' borderColor='#2e6da4' width='100%' isLoading={isLoading} disabled={isLoading}>
                ????ng nh???p
              </Button>
              <div className={styles.createAccount}>
                <Link className={styles.link} to='/dang-ky'>
                  <span> T???o t??i kho???n m???i!</span>
                </Link>
                <Link className={styles.link} to='/yeu-cau-moi'>
                  <span> M??? phi???u y??u c???u (ticket) m???i</span>
                </Link>
              </div>
            </div>
          </Form>
          {/* <div className={styles.partRight}>
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Anh/ch??? ch??a ????ng k???{' '}
                <Link className={styles.link} to='/dang-ky'>
                  H??y t???o t??i kho???n m???i!
                </Link>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>{' '}
                ????y l?? l???n ?????u anh/ch??? truy c???p h??? th???ng? ho???c anh/ch??? qu??n m?? s??? phi???u ???? t???o, h??y{' '}
                <Link className={styles.link} to='/yeu-cau-moi'>
                  m??? phi???u y??u c???u (ticket) m???i
                </Link>
                .
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                </span>{' '}
                <b>T??i l?? m???t H??? tr??? vi??n</b> -
                <Link className={styles.link} to='/dang-nhap'>
                  H??y ????ng nh???p t???i ????y!
                </Link>
              </li>
            </ul>
          </div> */}
        </div>
      </section>
    </DefaultLayout>
  )
}

export default Login
