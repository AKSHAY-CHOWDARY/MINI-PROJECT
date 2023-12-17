import React from 'react'

import { useContext } from 'react'

import './Shop.css'
import { productContext } from '../../Contexts/ProductsContext'
import { useNavigate } from 'react-router-dom'

function Shop() {

  let [user,setUser]=useContext(productContext);

  let navigate=useNavigate();

  return (
    <div className='mt-5'>

     
      <div className='container'>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>

      {
        user.map((product,index)=><div className='col mb-4' key={index}>

          <div className='card h-100 g-4'>
          
          
            <div className="imgg">
            <img src={product.image}  ></img>
            </div>
          
            <div className='card-body '>
              <div style={{minHeight:"250px"}}>

              
              <p className='lead'>{product.id}</p>
              <h5 className=''>{product.title}</h5>
              <p className='lead'>{product.category}</p>
              </div>
              <button className='btn button w-100' onClick={()=>navigate("/shop/details",{state:product})} >Buy now</button>
              </div>


            </div>
          
          
          </div>)
      }
           
          
        </div>
      </div>
    
    
    </div>
  )
}

export default Shop