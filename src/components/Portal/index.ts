import { useEffect, useRef, ReactNode } from 'react'
import { createPortal } from 'react-dom'

type ModalProps = {
  children: ReactNode
}

export function Portal({ children }: ModalProps) {
  // create div element only once using ref
  const elRef = useRef<HTMLDivElement | null>(null)
  if (!elRef.current) elRef.current = document.createElement('div')
  const modalRoot = document.querySelector('#modal-root') as HTMLElement
  useEffect(() => {
    const el = elRef.current! // non-null assertion because it will never be null
    console.log(modalRoot)
    modalRoot.appendChild(el)

    return () => {
      modalRoot.removeChild(el)
    }
  }, [])

  return createPortal(children, elRef.current)
}
