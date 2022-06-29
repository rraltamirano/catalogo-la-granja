import React, { useState, useEffect }from 'react'
import Tarjeta from './Tarjeta';

const ListaProductos = ({tipo}) => {

    const [productos, setProductos] = useState([]);

    const getData = () => {
        try {
            fetch('datos.json', {
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                }
            }).then((response) => {
                return response.json();
            }).then((data) => {
                let datosFiltrados = data.filter((producto) => (
                    producto.type == tipo
                ));
                setProductos(datosFiltrados);
            }); 
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getData();
    },[]);

    return (
        <div className='row col-lg-12'>
            {productos.length > 0 ?
                (
                    productos.map((producto) =>
                    (
                        <Tarjeta key={producto.id} data={producto} tipoProducto={tipo}/>
                    ))
                    
                ):(
                    <div>
                        <h1>Loading...</h1>
                    </div>
                )
            }
        </div>
    )
}

export default ListaProductos