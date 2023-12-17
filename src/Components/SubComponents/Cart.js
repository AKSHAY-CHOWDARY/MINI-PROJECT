import React from 'react'


import { useContext } from 'react';
import { productContext } from '../../Contexts/ProductsContext';
function Cart() {



  let [item]=useContext(productContext);
  console.log(item);
  let itemToMap=item.slice(20);

 

 
  
  return (
    <div className='container'>

      <p className='lead fs-3'>Total Items:{item.length-20} </p>
      
      <div className='row row-cols-1'>
        {
          itemToMap.map((product,index)=><div className='col 'key={index}>
            <div className="card mb-3 mx-auto mt-5" style={{maxWidth: "800px"}}>
             
        
        <div className="row g-0">
        <div className="col-md-4 p-5">
        <img src={product.image} className="img-fluid rounded-start w-50"  alt="img not found"/>
         </div>
    <div className="col-md-8">
      <div className="card-body p-5 h-100">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">Rs.{product.price}</p>
        <p className="card-text">{product.category}</p>
        
        </div>
       
      </div>
    </div>    
        </div>
          </div>)
        }
      </div>
      
    </div>
  )
}

export default Cart