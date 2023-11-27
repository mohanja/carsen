import React from "react";
import './About.css'
import Header from "./Header";
import Footer from "./foote";
const About=()=>{

    const blog=[
        {
            id:"1",
            img:"https://th.bing.com/th/id/OIP._17cmoWz61VrEvAg_HhYmgHaE8?rs=1&pid=ImgDetMain",
            name:" Brett Foote | October 31, 2023",
            small:"Siddharth Vinayak PatankarNov 13, 2023",
            para:"The Q8 facelift looks largely similar to the previous model, so have the changes been under the skin?"
        },
        {
            id:"2",
            img:"https://images.hdqwalls.com/wallpapers/audi-r8-v10-car-kr.jpg",
            name:"Supercharged Audi R8 V10 Performance Cranks Out Over 900 Raging HP",
            small:"By: Brett Foote | October 26, 2023",
            para:"This glorious-sounding Audi R8 V10 Performance is the perfect example of why people are so passionate about ICE."
        }
        ,
        {
            id:"3",
            img:"https://th.bing.com/th/id/OIP.LDvGkADiII2nuCRu5kdILgHaEK?rs=1&pid=ImgDetMain",
            name:"The Best & Worst Part of Every 2024 Audi RS Model",
            small:"By: Joe Kucinski | October 25, 2023",
            para:"Slideshow: Best and worst attributes of every 2024 Audi RS model."
        },
        {
            id:"4",
            img:"https://i.ytimg.com/vi/mpBqPzoeczI/maxresdefault.jpg",
            name:"Audi R8 RWS vs C8 Corvette Z06: Which One Is Better to Actually Own?",
            small:"By: Brett Foote | October 18, 2023",
            para:"The owner of this 2018 Audi R8 RWS has loved it for years now, but after acquiring a new Z06, he’s having a change of heart."
        }
        ,   {
            id:"5",
            img:"https://media.wired.com/photos/5bfdc1c6e80cd16006551353/191:100/pass/images-original-5118-EtronGT00000024-2.jpg",
            name:"2023 Audi e-tron RS GT Now Comes With $20,000 Discount",
            small:"By: Joe Kucinski | October 11, 2023",
            para:"Audi sent a bulletin to dealers informing them of massive discounts available on e-tron GT models."
        }
        ,   {
            id:"6",
            img:"https://th.bing.com/th/id/OIP.Z8JFr5bWi7r-DyGQrz3VfQHaE8?rs=1&pid=ImgDetMain",
            name:"Audi R8 Designer Reveals Unusual Inspirations Behind Supercar’s Style",
            small:"By: Brett Foote | October 11, 2023",
            para:"The Audi R8 has a truly memorable design, one that was inspired by not only other cars, but also birds and a tennis ball."
        }
    ]
    return(
    <div>
   
        <div className="container">
{blog.map((blogs)=>
<div className="articals">
            <img src={blogs.img}/>
            <div className="title">{blogs.name}</div>
            <div className="small">{blogs.small}</div>
            <p>{blogs.para}</p>
             </div>
)}
         
        </div>
    
        </div>
    )
}

export default About