import React from 'react'

const facebookLink = 'https://www.facebook.com/La-Granja-de-Prolagra-SRL-182454632260256';
const instagramLink = 'https://www.instagram.com/la_granja_de_prolagra/ ';

const Footer = () => {

    const toSocialNetwok = (url) => {
        window.open(url)
    }

    return (
        <footer className='lgdp-footer text-white align-middle'>
            <div className='container row align-items-center h-100'>
                <div className='col-lg-6 col-sm-12'>
                    <div>
                        <h6 className='mb-0'>Contactos:</h6>
                        <div className='mx-2'>
                            77423073 - 69423400
                        </div>
                    </div>
                    <div>
                        <h6 className='mb-0'>Direccion:</h6>
                        <div className='mx-2'>
                            Av. Centenario S/N urbanizacion el bosque norte
                        </div> 
                    </div>
                </div>
                <div className='col-lg-6 col-sm-12 mt-2'>
                    <h6>Visita nuestras redes sociales:</h6>
                    <div className='mx-2'>
                        <i className="fab fa-facebook lgdp-footer-icon" onClick={() => {toSocialNetwok(facebookLink)}}></i>
                        <i className="fab fa-instagram mx-2 lgdp-footer-icon" onClick={() => {toSocialNetwok(instagramLink)}}></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer