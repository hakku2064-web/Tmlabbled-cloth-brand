import React, { use } from 'react'
import data from '../data/data'
import { useParams } from 'react-router-dom'
import "../Product-details/productdetail.css"
function Productdetail() {
  const {id}=useParams();
  const product=data.find((item)=>item.id.toString()===id)
  
  return (
    <div>
       <div >
          <img src={product.image} alt={product.name}/>
       </div>
       <div className='info'>
        <p>{product.name}</p>
        <p>{product.price}</p>

       </div>

    </div>
  )
}

export default Productdetail