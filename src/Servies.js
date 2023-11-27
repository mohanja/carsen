import React from "react";
import './Servies.css'
const Servies=()=>{

    const list=[
        {
            id:"1",
            img:"https://th.bing.com/th/id/R.9cea00c7906362d88e31b12562ee4d31?rik=Jbu6EJ%2bpgDfymA&riu=http%3a%2f%2flapizcontable.com%2fwp-content%2fuploads%2f2020%2f06%2f5327078-businessman-icon-png-man-in-suit-icon-png-transparent-png-businessman-icon-png-840_956_preview.jpg&ehk=uQ2tjXydFkYOTRms3G22LNbEF3AQsMDHlmSR3CEiBvo%3d&risl=&pid=ImgRaw&r=0",
            name:"Manger",
            para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, ducimus quibusdam distinctio quas autem fugit impedit accusamus blanditiis soluta adipisci voluptates, ipsum qui, temporibus dolores harum sapiente Ea, consequuntur obcaecati."
        },
        {
            id:"2",
            img:"https://cdn.dribbble.com/userupload/4402418/file/original-e8bea5268617752f158cbc9ff502703f.jpg?compress=1&resize=800x600&vertical=top",
            name:"Services",
            para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, ducimus quibusdam distinctio quas autem fugit impedit accusamus blanditiis soluta adipisci voluptates, ipsum qui, temporibus dolores harum sapiente Ea, consequuntur obcaecati."
        },
        {
            id:"3",
            img:"https://th.bing.com/th/id/OIP.HWAytpC-upTEaY_2_rFb8gHaHF?pid=ImgDet&rs=1",
            name:"Order",
            para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, ducimus quibusdam distinctio quas autem fugit impedit accusamus blanditiis soluta adipisci voluptates, ipsum qui, temporibus dolores harum sapiente Ea, consequuntur obcaecati."
        },
        {
            id:"4",
            img:"https://th.bing.com/th/id/R.7df8a188fddb8c1771f2c8ff1788309a?rik=6uzh%2flwDajyHow&riu=http%3a%2f%2fgetdrawings.com%2fimages%2fcall-center-drawing-37.jpg&ehk=vns4cIyr%2fUt2Gfc%2f78Z6MtmJqr1rPk8YTECQfIzmW9U%3d&risl=&pid=ImgRaw&r=0",
            name:"Call Center",
            para:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi, ducimus quibusdam distinctio quas autem fugit impedit accusamus blanditiis soluta adipisci voluptates, ipsum qui, temporibus dolores harum sapiente Ea, consequuntur obcaecati."
        }
    ]

    return(
        <section id="serveis">
        <div class="titles"><div className="fist-later">s</div>erveis</div>
        <div class="card-all">
            {list.map((lists)=>
             <div class="cards">
            <img src={lists.img}/>
            <h2>{lists.name}</h2>
            <p>{lists.para}</p>
            <button class="btn btn-primary">view</button>
          </div>
            )}
        </div>
      </section>

    )
}

export default Servies