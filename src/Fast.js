import React from "react";
import './Fast.css'
import { useNavigate } from "react-router";

const  Fast=()=>{
const navigate=useNavigate

    const items=[
        {
            id:"1",
            name:"Audi Q3",
            img:"https://performancedrive.com.au/wp-content/uploads/2020/02/2020-Audi-Q3-Sportback-1280x796.jpg",
            amount:"Rs. 42.77 - 51.94 Lakh"
         },
         {
            id:"2",
            name:"Audi A4",
            img:"https://th.bing.com/th/id/OIP.Xifht0apcgg9RO6fbcBunQHaEu?rs=1&pid=ImgDetMain",
            amount:"Rs. 43.85 - 51.85 Lakh"
         },
         {
            id:"3",
            name:"Audi A6",
            img:"https://www.motortrend.com/uploads/sites/5/2015/07/2016-Audi-A6-3-0T-front-three-quarter-in-motion-0211.jpg",
            amount:"Rs. 61.56 - 67.72 Lakh"
         },
         {
            id:"4",
            name:"Audi S5 Sportback",
            img:"https://th.bing.com/th/id/OIP.MJawlPvk_-FRZD1y1l3D7gHaEK?rs=1&pid=ImgDetMain",
            amount:"Rs. 75.75 Lakh"
         }
]

    return(
        <section id="fast">
          <div className="titles">
            <div className="fist-later">U</div>pcommin <div className="second-later">c</div>ars</div>
          <div className="conta">
            {items.map((item)=>
            <div className="cards" key={item.id}>
                <img src={item.img}/>
                <div className="name">{item.name}</div>
                <div className="rate">{item.amount}</div>
                <div className="bts">
                <button className="btn btn-primary">BUY NOW</button>
                <button className="btn btn-primary" onClick={()=> navigate(`/home/${item.id}`)}>DETEILS</button>
                </div>
            </div>
            )}
            
          </div>

        </section >
    )
}

export default Fast