import React from 'react'

const Nav = () => {
  return (
    <div className='bg-red-500 h-[5000px]'>
   
    <div className='bg-black  gap-[150px]   justify-between flex  w-screen fixed '>
 
      {/*yts and description*/}
      <div className='px-[80px] flex items-center'>
      <h1 className='text-4xl p-2 text-green-500' >YTS.MX</h1>
       <p className='2xl:text-xl text-white  2xl:block  lg:hidden md:hidden sm:hidden  hidden  '>HD movies at the smallest file size.</p>
      </div>
      {/*search haru */}
      <div className='flex items-center gap-5 pr-[100px]  '>
      
      
      <input className='bg-black rounded-xl border border-white w-[240px] h-[30px]  md:block hidden' type="text" placeholder='' />
      
      
      
      <ul className='text-green-500 flex gap-5 hover:cursor-pointer  ' >
      <li >Home</li>
      <li >4k</li>
      <li >Browse</li>
      <li >Trending</li>
      <li className='text-white hover:cursor'>Login</li>
      <li className='text-white hover:cursor'>Regsiter</li>
      </ul>
      
      </div>
      </div>
      
      </div>
      
    
  )
}

export default Nav
