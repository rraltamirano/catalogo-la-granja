import React from 'react'
import Link from 'next/link';

const NavBar = ({activePage}) => {
  return (
    <nav className="navbar navbar-expand-lg lgdp-bg-color">
        <div className="container-fluid">
            <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                    <li className="nav-item">
                        <Link href='/'>
                            <a className={['nav-link', 'link-light', activePage == 'index' ? 'lgdp-active-page' : ''].join(' ')} aria-current="page">
                                <h5>Pollos</h5>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/catalogo-pavos'>
                            <a className={['nav-link', 'link-light', activePage == 'catalogo-pavos' ? 'lgdp-active-page' : ''].join(' ')}>
                                <h5>Pavos</h5>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/catalogo-huevos'>
                            <a className={['nav-link', 'link-light', activePage == 'catalogo-huevos' ? 'lgdp-active-page' : ''].join(' ')}>
                                <h5>Huevos</h5>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar