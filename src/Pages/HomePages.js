import React from 'react'


const page=[
    {
        name:"Anurag",
        age:23
    },
    {
    name:"Sama",
    age:21   
}, {
    name:"Anurag",
    age:23
},
]
const HomePages = () => {
  return (
   <div className='grid gap-6 my-5 sm:grid-cols-9 grid-cols-9'>
   {
    page.map((items,id)=>(
        <div className='rounded shadow-xl bg-yellow-400 min-h-[100px] sm:col-span-3  hidden sm:block'>
        {items.name}
        {items.age}</div>
        
    ))
   }
  
 </div>
  )
}

export default HomePages
