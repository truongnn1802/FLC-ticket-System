import { useState } from 'react'
import { Portal } from '../Portal'

type ModalProps = {
  onClick?: () => void
}

const Modal = ({ onClick }: ModalProps) => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
    setShowModal(false)
  }
  return (
    <div>
      <div id='modal-root'></div>
      {showModal && (
        <Portal>
          <div
            style={{
              display: 'block',
              height: '50%',
              width: '50%',
              background: 'red',
              zIndex: 99
            }}
          >
            <span> Im a modal</span>
            <button style={{ background: 'papyawhip' }} onClick={handleClick}>
              Đóng
            </button>
          </div>
        </Portal>
      )}
    </div>
  )
}
export default Modal
