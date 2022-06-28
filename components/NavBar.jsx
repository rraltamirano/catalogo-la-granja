import React from 'react'
import Link from 'next/link';

const NavBar = () => {
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
                            <a className="nav-link link-light" aria-current="page">
                                <h5>Home</h5>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/catalogo2'>
                            <a className="nav-link link-light">
                                <h5>Catalogo 2</h5>
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/catalogo2'>
                            <a className="nav-link link-light">
                                <h5>Catalogo 3</h5>
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