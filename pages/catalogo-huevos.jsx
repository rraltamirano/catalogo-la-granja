import React from 'react'
import Layout from '../components/Layout'
import ListaProductos from '../components/ListaProductos';
import ProductoTipo from '../utils/ProductoTipo';

const key = 'catalogo-huevos';

const CatalogoHuevos = () => {
  return (
    <Layout pageKey={key}>
        <ListaProductos tipo={ProductoTipo.HUEVOS}/>
    </Layout>
  )
}

export default CatalogoHuevos