import React from 'react';
import '../Styles/Contact.scss';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

const Contact = ({ closeContact }) => {
  return (
    <div className='contact container px-3 py-3'>
      <div className='d-flex flex-column'>
        <button
          className='position-absolute py-2 rounded-pill bg-light'
          onClick={closeContact}>
          <FA icon='fa-arrow-right-long' />
        </button>
        <h3 className='text-center mb-4'>
          Hey, we are still in the works,
          <br /> but you can send us a message!
        </h3>
        <form className='d-flex flex-column'>
          <label>First name</label>
          <input type='text' placeholder='Enter your First name' />
          <label>Last name</label>
          <input type='text' placeholder='Enter your Last name' />
          <label>Email address</label>
          <input type='text' placeholder='Enter your Email Address' />
          <label>Tell us what you need help with:</label>
          <textarea className='px-2 py-2'></textarea>
          <button className='my-3 me-auto  py-2 px-3 text-light'>
            SEND NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
