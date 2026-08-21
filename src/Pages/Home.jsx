import React from 'react'
import Productcard from '../Components/ui/Productcard'
import { useState } from 'react'
import data from '../data/data'
function Home() {
  const [search, setSearch]= useState("");

  const filtered=data.filter(p=>p.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()))
  return (
    <div>
      <div className='search-box'>
        <input type='text'
        placeholder='Search product'
        value={search}
        onChange={e=>setSearch(e.target.value)}
        
        ></input>
      </div>
  <div>
    <p><Productcard product={filtered}/></p>
  </div>
    </div>
  )
}

export default Home