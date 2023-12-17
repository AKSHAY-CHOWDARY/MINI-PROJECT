import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './ProductDescription.css'
import { useContext } from 'react';
import { productContext } from '../../Contexts/ProductsContext';

function ProductDescription() {
  let [items,setItem]=useContext(productContext)
  let loc=useLocation();
  let product=loc.state;
  
  

 
   

  return (
    <div >
        <div class="card mb-3 mx-auto mt-5" style={{maxWidth: "1000px"}}  >
        <div class="row g-0">
        <div class="col-md-4 p-5">
        <img src={product.image} class="img-fluid rounded-start" alt="img not found"/>
         </div>
    <div class="col-md-8">
      <div class="card-body p-5 h-100">
        <h5 class="card-title">{product.title}</h5>
        <p class="card-text">Rs.{product.price}</p>
        <p class="card-text">{product.category}</p>
        <p class="card-text">{product.description}</p>
        
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <p class="card-text">Rating:{product.rating.rate} Count:{product.rating.count}</p>
        <div className='card-end d-flex justify-content-between'>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
        <button    data-bs-toggle="modal" data-bs-target="#exampleModal"    onClick={()=>setItem([...items,product])} >Add to cart</button>

        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header bg-secondary">
       
        <button type="button" className="btn-close bg-light " data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <p className="lead text-dark">Item added to cart!!</p>
          </div>
          
         </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  </div>
</div>
     </div>
    
  )
}

export default ProductDescription