import React from 'react'



const Home = () => {
  

  const home=[
    {
      name:"Anurag",
      age:23
    },
    {
      name:"Puspa Ghimire",
      age:53,
    },
    {
      name:"Sabitri Sedhain",
      age:68,
    },
    {
    name:"Aditya Ghimire",
    age:26,
    },
    {
      name:"Tanka Prasad Ghimire",
      age:57
    },
    {
      name:"Tanka Prasad Ghimire",
      age:57
    },
    {
      name:"Tanka Prasad Ghimire",
      age:57
    },
    {
      name:"Tanka Prasad Ghimire",
      age:57
    },
    {
      name:"Tanka Prasad Ghimire",
      age:57
    },
    {
      name:"Tanka Prasad Ghimire",
      age:57
    },

  ]

  return (
   <div className='bg-green-500  w-screen grid grid-cols-3 p-[125px] lg:gap-y-10 justify-items-center md:gap-8 sm:gap-7 gap-10'>
   
       {
        home.map((data,id)=>(
             <div className='bg-blue-200 border border-black rounded shadow-xl lg:h-[300px] lg:w-[250px] md:h-[200px] md:w-[180px] flex  lg:text-[25px] md:text-[19px] justify-center items-center hover:cursor-pointer hover:bg-red-500 sm:h-[140px] sm:w-[100px] sm:text-[15px] text-black h-[100px] w-[50px] text-[5px]'>
             {data.name}
             <br></br>
             {data.age}

                   
             </div>
        ))
       }
   
   </div>
  )
}

export default Home
