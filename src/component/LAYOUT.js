import React from 'react'
import Foot from './Foot'
import Nav from './Nav'

const LAYOUT = ({children}) => {
  return (
    <div>
      <Nav/>
      <div className='container'>{children}</div>
      <Foot/>
    </div>
  )
}

export default LAYOUT
