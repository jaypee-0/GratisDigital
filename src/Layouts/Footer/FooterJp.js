import React from 'react';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

const FooterJp = () => {
  return (
    <footer>
      <div className='container d-flex pb-3 flex-column jsutify-content-center'>
        <div className='icons d-flex col-5 col-md-4 col-lg-2 m-auto justify-content-between'>
          <FA size='2x' icon='fa-brands fa-facebook-square' />
          <FA size='2x' icon='fa-brands fa-linkedin' />
          <FA size='2x' icon='fa-brands fa-twitter-square' />
        </div>
        <div className='conditions col-9 col-sm-6 col-md-5 col-lg-2 m-auto'>
          <figure className='mb-0 mt-3'>
            <p className='text-center'>Made with ❤️ By Jaypee</p>
          </figure>
        </div>
        <p className='text-center'>
          Copyright 2022@ Jaypee. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterJp;
