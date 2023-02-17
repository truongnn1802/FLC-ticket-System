import { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { GlobalContext } from 'src/useContext/GlobalContext'
import { Modal } from 'antd'
const Logout = () => {
  const { handleLogout } = useContext(GlobalContext)

  useEffect(() => {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
      closable: true
    })
    handleLogout()
  }, [])
  return <Navigate to='/dang-nhap' />
}

export default Logout
