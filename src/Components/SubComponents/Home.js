import React from 'react'

import './Home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
    
    <div className='home' style={{minHeight:"80vh"}} >

    <div className='info'>
      <p className=' display-5'>Find All The Latest Brands Here!</p>
      <h1 className=' display-4 mb-5'>SHOP NOW!</h1>
      <div className='forLink'>
      <Link className='link p-4 ' to='/shop'>SHOP NOW</Link>
      </div>
    </div>


    </div>
    
  )
}

export default Home