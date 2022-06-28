import React from 'react';
import NavBar from  './NavBar';
import Image from 'next/image';

const numero = '70386627';
const whatsappUrl = `https://wa.me/591${numero}?text=Me+gustaria+hacer+un+pedido`;

const Layout = ({pageKey, children}) => {

  const makeAnOrder = () => {
    window.open(whatsappUrl);
  }

  return (
    <div>
        <div className='text-center lgdp-bg-color'>
            <Image
                priority
                src="/img/la_granja_portada_2.jpg"
                height={400}
                width={1500}
                alt='La granja'
            />
        </div>
        <NavBar activePage={pageKey}/>
        <main className='container my-5'>
            {children}
        </main>
        <button className='lgdp-btn-pedido' onClick={makeAnOrder}>
          <i className="fab fa-whatsapp"></i>Realiza tu pedido
        </button>
    </div>
  )
}

export default Layout