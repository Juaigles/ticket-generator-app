import React from 'react'

const Logo = () => {
  return (
    <div className='flex gap-4 items-center' >
        <img src="/logo.svg" alt=""  className='w-[24px] h-[24px]'/>
        <p className='text-[24px] font-bold'>Coding Conf</p>
    </div>
  )
}

export default Logo