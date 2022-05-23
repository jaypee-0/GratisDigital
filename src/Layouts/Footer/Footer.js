import React from 'react'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer>
      <div className="container d-flex pb-3 flex-column jsutify-content-center">
        <div className="icons d-flex col-8 col-sm-6 col-md-5 col-lg-3 m-auto justify-content-between">
          <FA size='2x' icon="fa-brands fa-youtube" />
          <FA size='2x' icon="fa-brands fa-facebook-square" />
          <FA size='2x' icon="fa-brands fa-linkedin" />
          <FA size='2x' icon="fa-brands fa-instagram-square" />
          <FA size='2x' icon="fa-brands fa-twitter-square" />
        </div>
        <div className="conditions col-9 col-sm-6 col-md-5 col-lg-2 m-auto">
          <figure className='mb-0 mt-3 d-flex flex-row justify-content-between'>
            <p>Terms of services</p>
            <p>Privacy policy</p>
          </figure>
        </div>
        <p className="text-center">
          Copyright 2021@ Peddle Technologies. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer