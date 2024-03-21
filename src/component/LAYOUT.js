import React from 'react'
import Foot from './Foot'
import NavBars from './NavBars'

const LAYOUT = ({children}) => {
  return (
    <div>
      <NavBars/>
      <div className='container'>{children}</div>
      <Foot/>
    </div>
  )
}

export default LAYOUT
