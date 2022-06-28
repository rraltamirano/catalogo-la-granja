import React, { useState } from 'react'
import Image from 'next/image';

const Tarjeta = () => {

    const [ticket, setTicket] = useState({
        id:'123',
        type:'embutidos',
        name:'salchichas de pollo',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        image:'/img/prueba1.jpeg'
    });

    return (
        <div className="col-sm-12 col-lg-6 ">
            <div className="card">
                <Image 
                    className="card-img-top" 
                    priority
                    src={ticket.image}
                    height={300}
                    width={300}
                    alt={ticket.name}
                />
                <div className="card-header">
                    <h5 className='card-title'>{ticket.name}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text">{ticket.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Tarjeta