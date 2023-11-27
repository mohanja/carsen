import React from "react";

const Rateing=()=>{
    const items=[
        {
            id:"1",
            name:"Audi S5 Sportback",
            img:"https://cdn.motor1.com/images/mgl/OV1lM/s1/2020-audi-s5-sportback.jpg",
            amount:"Rs. 42.77 - 51.94 Lakh",
            rate:"Rateing:4.9/5"
         },
         {
            id:"2",
            name:"Audi Q3 Sportback",
            img:"https://th.bing.com/th/id/OIP.C-5nRwmjqD9hpWEq5irg6AHaEK?rs=1&pid=ImgDetMain",
            amount:"Rs. 43.85 - 51.85 Lakh",
            rate:"Rateing:4.8/5"
         },
         {
            id:"3",
            name:"Audi A6",
            img:"https://www.motortrend.com/uploads/sites/5/2015/07/2016-Audi-A6-3-0T-front-three-quarter-in-motion-0211.jpg",
            amount:"Rs. 61.56 - 67.72 Lakh",
            rate:"Rateing:4.7/5"
         },
         {
            id:"4",
            name:"Audi S3 Sportback",
            img:"https://th.bing.com/th/id/OIP.MJawlPvk_-FRZD1y1l3D7gHaEK?rs=1&pid=ImgDetMain",
            amount:"Rs. 75.75 Lakh",
            rate:"Rateing:4.6/5"
         }
]
    return(
        <section id="ra">
        <div className="rateing">
                      <div className="titles">
            <div className="fist-later">R</div>ATING
            </div>
          <div className="conta">
            {items.map((item)=>
            <div className="cards" key={item.id}>
                <img src={item.img}/>
                <div className="name">{item.name}</div>
                <div className="rate">{item.amount}</div>
                <div className="rate">{item.rate}</div>
                <div className="bts">
                <button className="btn btn-primary">BUY NOW</button>
                <button className="btn btn-primary">DETEILS</button>
                </div>
            </div>
            )}
            
          </div>
        </div>
        </section>
    )
}

export default Rateing