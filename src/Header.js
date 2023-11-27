import React from "react";
import './Header.css'
import { Link, Route, Routes} from 'react-router-dom'
import About from './About';
import Center from "./Center";
import Main from "./Mani";

const Header=()=>{
    return(
       
<header>
<div className="title"><img src="https://th.bing.com/th/id/R.d7905f14e43775401e86e4bcb14e7043?rik=%2f51LjI%2bQKweLew&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f12%2faudi-logo-wallpaper-543.png&ehk=OmgmqC2wbjenHbufYVSDHZ1EIuYRLMXDrhGna%2f%2fTupg%3d&risl=&pid=ImgRaw&r=0"/></div>
    <div  className="nav">
        <div className="linkname"><Link to="/">Home</Link></div>
        <div className="linkname"><Link to="/newcars">Cars</Link></div>
        <div className="linkname"><Link to="/about">Blog</Link></div>
      
    </div>
    <Routes>
<Route path='/' element={<Main/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/newcars' element={<Center/>}/>
 </Routes>
</header>




    )
}

export default Header