import React from 'react'

const Navbar = () => {
  return (
    <div className='flex  justify-between items-center py-3 px-2 bg-blue-400 '>
     {/* logo haru*/}
     <div className='flex items-center gap-5'> 
        <h1 className='font-bold text-4xl'>Logo</h1>
        <p className='text-4xl'>Image</p>
     </div>
       {/*content haru */}
       <div>
       <ul className='hidden md:flex gap-10 font-bold cursor-pointer '>
       <li>HOME</li>
       <li>HOME</li>
       <li>HOME</li>
       <li>HOME</li>
       </ul>
       <ul className=' md:hidden flex flex-col gap-2 font-bold cursor-pointer '>
       <li className='hover:bg-red-300'>HOME</li>
       <li className='hover:bg-red-300'>HOME</li>
       <li className='hover:bg-red-300'>HOME</li>
       <li className='hover:bg-red-300'>HOME</li>
       </ul>
       
       </div>
       
    </div>
  )
}

export default Navbar
