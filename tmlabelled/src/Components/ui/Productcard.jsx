import React from 'react'
import data from '../../data/data'
import "../ui/productcard.css"
import { Link } from 'react-router'
function Productcard() {
  return (
    <div>
        <div className='productcard-container'>
            {data.map((products)=>
            (<div key={products.id}>
              <div className="product-image-container"> 

                <Link to={`product/${products.id}`}>
                <img src={products.image} className="image front" />
                <img src={products.imageback} className="image back" /></Link>
                
              </div>
                <div className='product-detail'>
                     <p>{products.name}</p>
                     <p>Rs. {products.price}</p>
                </div>




            </div>))}
        </div>
    </div>
  )
}

export default Productcard