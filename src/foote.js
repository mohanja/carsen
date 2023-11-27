import React from "react";
import './foote.css'
import { Link } from "react-router-dom";
import Servies from "./Servies";
const Footer =()=>{
    return(
        <div className="footer">
            <div className="imges">
            <img src="https://th.bing.com/th/id/R.d7905f14e43775401e86e4bcb14e7043?rik=%2f51LjI%2bQKweLew&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f12%2faudi-logo-wallpaper-543.png&ehk=OmgmqC2wbjenHbufYVSDHZ1EIuYRLMXDrhGna%2f%2fTupg%3d&risl=&pid=ImgRaw&r=0"/>
            </div>
            <div className="dout">
                <div className="heading">page</div>
                <div  className="botm"><a href="/">Home</a></div>
                <div  className="botm"><a href="/newcars">Cars</a></div>

            </div>
            <div className="dout">
                <div className="heading">detile</div>
                <div className="botm"><a href="/about">About us</a> </div>
                <div  className="botm"><a href="#ra">Reating</a></div>
                <div  className="botm"><a href="#fast">Upcomming</a></div>

            </div>
            <div className="dout">
                <div className="heading">contect</div>
                <div  className="botm"><a href="#serveis">servies</a></div>
                <div className="botm">+91 1234567890</div>
                <div className="botm">audi@gmail.com</div>
            </div>
        </div>
    )
}

export default Footer