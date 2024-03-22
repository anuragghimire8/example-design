import React from 'react'

const NavBars = () => {
  return (
    <div className=' bg-black grid grid-cols-2 fixed left-0 right-0 top-0'>

    <div className='text-white flex  gap-5 px-10 py-2 hover:cursor-pointer text-2xl'>
    <p>Logo</p>
    <p>Image</p>
    </div>
      <div className=' text-white flex justify-center items-center '>
      <ul className='flex lg:gap-9 md:gap-9 lg:text-[24px] md:text-[14px] sm:text-[10px]sm:gap-2 gap-3 text-[14px] hover:cursor-pointer
      '>
      <li>Home</li>
      <li>Contact Us</li>
      <li>Details</li>
      <li>Thank You !</li>
      </ul></div>
    </div>
  )
}


export default NavBars