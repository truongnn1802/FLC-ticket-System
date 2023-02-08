import { FC, useState } from 'react'

export const Header: FC = () => {
  const [fullname] = useState('hello')
  console.log(fullname)
  return (
    <div>
      <h1 className='text-gray-200'>{fullname}</h1>
    </div>
  )
}
