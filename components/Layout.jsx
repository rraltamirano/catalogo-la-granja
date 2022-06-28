import React from 'react';
import NavBar from  './NavBar';
import Image from 'next/image';

const Layout = ({children}) => {
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
        <NavBar />
        <main className='container my-5'>
            {children}
        </main>
    </div>
  )
}

export default Layout