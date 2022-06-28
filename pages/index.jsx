// import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Tarjeta from '../components/Tarjeta';

export default function Home() {

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
        setProductos(data);
      }); 
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getData();
  },[]);

  return (
    <Layout>
      <div className='row col-lg-12'>
        {productos.length > 0 ?
          (
            productos.map((producto) =>
              (
                <Tarjeta key={producto.id}/>
              ))
            
          ):(
            <div>
              <h1>No hay productos disponibles</h1>
            </div>
          )
        }
      </div>  
    </Layout>
  )
}
