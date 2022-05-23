import React from 'react'
import "../Styles/Contact.scss"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
      <div className="contact container">
      <div className="d-flex flex-column col-6">
        <Link to="/"><button className='rounded-pill bg-light'><FA icon='fa-arrow-left-long'/></button></Link>
        <h4 className='text-center'>Hey, we are still in the works,<br /> but you can send us a message!</h4>
        <form className='d-flex flex-column'>
          <label>First name</label>
          <input type="text" placeholder="Enter your First name" />
          <label>Last name</label>
          <input type="text" placeholder="Enter your Last name" />
          <label>Email address</label>
          <input type="text" placeholder="Enter your Email Address" />
          <label>Tell us what you need help with:</label>
          <textarea cols="30" rows="10" className='px-3 py-3'></textarea>
          <button className='my-3 me-auto py-2 px-3 text-light'>SEND NOW</button>          
        </form>
      </div>
      </div>
  );
}

export default Contact