import React from 'react'

import Navigation from './SubComponents/Navigation'
import Footer from './SubComponents/Footer'
import {Outlet} from 'react-router-dom'

function RouteLayout() {
  return (
    <div>
      <div className='navi p-4'>
      <Navigation/>
      </div>
      <div style={{ minHeight: "75vh" }}>
        <Outlet />
      </div>
      <Footer/>
     
        
    </div>
  )
}

export default RouteLayout