import React from 'react';
import Layout from '../components/Layout';
import ListaProductos from '../components/ListaProductos';
import ProductoTipo from '../utils/ProductoTipo';

const key = 'catalogo-pavos';

const CatalogoPavos = () => {
  return (
    <Layout pageKey={key}>
        <ListaProductos tipo={ProductoTipo.PAVOS}/>
    </Layout>
  )
}

export default CatalogoPavos