// import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Tarjeta from '../components/Tarjeta';

const key='index';

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
    <Layout pageKey={key}>
      <div className='row col-lg-12'>
        {productos.length > 0 ?
          (
            productos.map((producto) =>
              (
                <Tarjeta key={producto.id} data={producto}/>
              ))
            
          ):(
            <div>
              <h1>Loading...</h1>
            </div>
          )
        }
      </div>  
    </Layout>
  )
}
