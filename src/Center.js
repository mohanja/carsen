import React from "react";
import './Center.css'
import Footer from "./foote";
import Header from "./Header";

const Center=()=>{

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
         ,
         {
            id:"5",
            name:"Audi Q3",
            img:"https://performancedrive.com.au/wp-content/uploads/2020/02/2020-Audi-Q3-Sportback-1280x796.jpg",
            amount:"Rs. 42.77 - 51.94 Lakh"
         },
         {
            id:"6",
            name:"Audi Q5",
            img:"https://mediacloud.carbuyer.co.uk/image/private/s--VN5KMuHT--/v1595111349/carbuyer/2020/06/_dsc2405ts.jpg",
            amount:"Rs. 62.35 - 69.72 Lakh"
         },
         {
            id:"7",
            name:"Audi Q8",
            img:"https://www.carscoops.com/wp-content/uploads/2020/10/Audi-Q8-PHEV-EQuattro-00.jpg",
            amount:"Rs. 1.07 - 1.43 Crore"
         },
         {
            id:"8",
            name:"Audi e-tron GT",
            img:"https://mediacloud.carbuyer.co.uk/image/private/s--EWQwXfy9--/v1612879978/carbuyer/2021/02/Audi%20e-tron%20GT%20electric%20coupe%20official%20reveal-10.jpg",
            amount:"Rs. 1.70 - 1.94 Crore"
         },

         {
            id:"9",
            name:"Audi A8 L            ",
            img:"https://th.bing.com/th/id/OIP.Bgalee799HEjH8YlEww1FwHaFP?rs=1&pid=ImgDetMain",
            amount:"Rs. 1.34 - 1.63 Crore"
         },
         {
            id:"10",
            name:"Audi RS Q8",
            img:"https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https:%2f%2fcdni.autocarindia.com%2fExtraImages%2f20200827110023_Audi-RS-Q8-Image-6.jpg&h=795&w=1200&c=0",
            amount:"Rs. 2.22 Crore"
         },
         {
            id:"11",
            name:"Audi RS5            ",
            img:"https://th.bing.com/th/id/OIP.BFEMVCPppl9ZGULCRSVgYgHaFX?rs=1&pid=ImgDetMain",
            amount:"Rs. 1.13 Crore"
         },
         {
            id:"12",
            name:"Audi e-tron",
            img:"https://media.wired.com/photos/5bfdc1c6e80cd16006551353/191:100/pass/images-original-5118-EtronGT00000024-2.jpg",
            amount:"Rs. 1.02 - 1.25 Crore"
         }
]

function detiel(id){
console.log(id)


}
    return(
    <div>

<div className="titles">
             <div className="second-later">c</div>ars</div>
          <div className="conta">
            {items.map((item)=>
            <div className="cards" key={item.id}>
                <img src={item.img}/>
                <div className="name">{item.name}</div>
                <div className="rate">{item.amount}</div>
                <div className="bts">
                <button className="btn btn-primary">BUY NOW</button>
                <button className="btn btn-primary" onClick={()=>detiel(item.id)}>DETEILS</button>
                </div>
            </div>
            )}
            
          </div>

    </div>
    )
}

export default Center