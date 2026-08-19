import React from 'react'
import Header from '../Components/Nav/Header'
import Footer from '../components/Footer/footer'
import { Outlet } from 'react-router-dom'

function Layouts() {
  return (
    <div>
       <div className='layouts'>
         <Header/>
        <div className='main-content'>
            <Outlet/>
        </div>
        <Footer/>
       </div>
    </div>
  )
}

export default Layouts