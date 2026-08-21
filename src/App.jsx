import React from "react";
import Layouts from "./Layouts/Layouts";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import New from "./Pages/New";
import Classics from "./Pages/Classics";
import tshirt from "./Pages/tshirt";
import pants from "./Pages/pants";
import Shorts from "./Pages/Shorts";
import jackets from "./Pages/jackets";
import hats from "./Pages/hats";
import tops from "./Pages/tops";
import Aboutus from "./pages-terms/Aboutus";
import Policy from "./pages-terms/Policy";
import terms from "./pages-terms/terms";
import contact from "./pages-terms/contact";
import Productcard from "./Components/ui/Productcard";
import Productdetail from "./Product-details/Productdetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layouts/>}>
      <Route index element={<Home/>}/>
      <Route path="new" element={<New/>}/>
      <Route path="classic" element={<Classics/>}/>
      <Route path="tshirt" element={<tshirt/>}/>
      <Route path="pants" element={<pants/>}/>
      <Route path="shorts" element={<Shorts/>}/>
      <Route path="jacket" element={<jackets/>}/>
      <Route path="hats" element={<hats/>}/>
      <Route path="tops" element={<tops/>}/>


      <Route path="aboutus" element={<Aboutus/>}/>
      <Route path="ourpolicy" element={<Policy/>}/>
      <Route path="term" element={<terms/>}/>
      <Route path="contactus" element={<contact/>}/>

      <Route path="/product/:id" element={<Productdetail/>}/>
       

      
      </Route>
    </Routes>
  )
}

export default App