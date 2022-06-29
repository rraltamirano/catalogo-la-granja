// import styles from '../styles/Home.module.css'
import React from 'react';
import Layout from '../components/Layout';
import ListaProductos from '../components/ListaProductos';
import ProductoTipo from '../utils/ProductoTipo';

const key='index';

export default function Home() {

  return (
    <Layout pageKey={key}>
      <ListaProductos tipo={ProductoTipo.POLLOS}/>    
    </Layout>
  )
}
