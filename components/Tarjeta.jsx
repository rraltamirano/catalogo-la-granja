import React, { useState } from 'react'
import Image from 'next/image';

const Tarjeta = ({data}) => {

    const [ticket, setTicket] = useState({
        id: data.id,
        type: data.type,
        name: data.name,
        precio: data.precio,
        description: data.description,
        image: data.image
    });

    return (
        <div className="col-sm-12 col-lg-6 my-2 bg-transparent">
            <div className="card border-primary lgdp-bg-card">
                <Image 
                    className="card-img-top" 
                    priority
                    src={ticket.image}
                    height={300}
                    width={300}
                    alt={ticket.name}
                />
                <div className="card-header border-primary text-center">
                    <h5 className='card-title'>{ticket.name}</h5>
                </div>
                <div className="card-body bg-transparent">
                    <h6>{ticket.precio}</h6>
                    <p className="card-text">{ticket.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Tarjeta