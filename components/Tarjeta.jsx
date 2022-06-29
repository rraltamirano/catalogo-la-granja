import React, { useState } from 'react'
import Image from 'next/image';
import ProductoTipo from '../utils/ProductoTipo';

const Tarjeta = ({data, tipoProducto}) => {

    const [ticket, setTicket] = useState({
        id: data.id,
        type: data.type,
        name: data.name,
        price: data.price,
        weight: data.weight,
        description: data.description,
        image: data.image
    });

    const borderCssRule = tipoProducto == ProductoTipo.POLLOS ? 'border-primary' : tipoProducto == ProductoTipo.PAVOS ? 'border-dark' : 'border-warning';

    return (
        <div className="col-sm-12 col-lg-6 my-4 bg-transparent">
            <div className={['card', 'lgdp-bg-card', borderCssRule].join(' ')}>
                <Image 
                    className="card-img-top" 
                    priority
                    src={ticket.image}
                    height={300}
                    width={300}
                    alt={ticket.name}
                />
                <div className={['card-header', 'text-center', borderCssRule].join(' ')}>
                    <h5 className='card-title'>{ticket.name}</h5>
                </div>
                <div className="card-body bg-transparent">
                    <h6>{ticket.price}</h6>
                    {ticket.weight ? 
                        <div className='row'>
                            <div className='col-2'><h6> Peso:</h6></div> <div className='col-10'> {ticket.weight}</div>
                        </div>
                        :<></>
                    }
                    <h6>Caracteristicas:</h6> 
                    <ul>
                        {ticket.description.map((puntos, index) => (
                            <li key={index}>{puntos}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tarjeta