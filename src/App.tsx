import React,{ FC, useState } from 'react'

const App: FC = () => {
  const [fullname, setFullname] = useState('hello')
  console.log(fullname)
  return (
    <div>
      <h1 className='text-gray-200'>{fullname}</h1>
    </div>
  )
}

export default App
