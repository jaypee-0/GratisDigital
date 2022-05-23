import React from 'react'
import "../Styles/About.scss"
import Header from '../Layouts/Header/Header'
import Footer from '../Layouts/Footer/Footer'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const AboutUs = () => {
  return (
    <div id="about" className='background'>
      <Header />
      <div className="mx-auto vh-75 d-flex flex-column justify-content-center ">
        <div className="purple-card" />
        <div className="purple-card-1" />
          <div className="d-flex flex-column position-relative align-items-center">
              <div className="blue-circle" />
              <div className='col-4'>
              <div className="d-flex align-items-center mb-3">                
                <hr style={{color: 'white', width: '3rem', zIndex: '6'}} className='me-2 my-0'/>
                <p className='mb-0 fs-3'>About Us</p>
              </div>
          </div>
          <h1 className='fs-1 ms-md-4 mb-5'>Built for Saas <br />and E-commerce</h1>                         
          </div>
            <p className='ms-auto col-8 col-md-4 mt-5 me-2 me-md-5'>
              Our tools are easy to set up and use with a user friendly
              dashboard that enables you to set up, launch, automate and manage
              multi-affiliate campaigns in 5 minutes.
            </p>
      </div>
        <h1 className='container col-10 col-md-7 mx-auto my-5'>
          Metricks was developed because just like you, we needed a product that
          could give us good value.
        </h1>
        <div className="d-flex container flex-column flex-md-row my-5">
            <div className="col-12 col-md-6 mb-4">
                <p className='mb-0'>01</p>
                <div className="d-flex align-items-center flex-row">
                    <hr style={{color: 'white', width: '3rem'}} className='me-2 my-0 text-light'/>
                    <p className='mb-0'>WHY US? </p>
                </div>
                <p className='mt-2 col-md-9'>We pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touchpoints between advertisers and affiliates.</p>
            </div>
            <div className="col-12 col-md-6 mb-4">
                <p className='mb-0'>02</p>
                <div className="d-flex align-items-center flex-row">
                    <hr style={{color: 'white', width: '3rem'}} className='me-2 my-0 text-light'/>
                    <p className='mb-0'>GROWING WITH YOU </p>
                </div>
                <p className='mt-2'>Leveraging the best technology, we have developed an all-in-one affiliate marketing tracking software, a genius tool to help you track, automate and optimize your influencer campaigns, all from one dashboard.</p>
                <p className='mt-4'>Our team of experts are constantly brainstorming, testing and developing new solutions with only one thing in mind - your business growth. Your success is our success and by giving you the tools you need to scale, we grow as well.</p>
            </div>
        </div>
        {/* Question */}
        <div className="contact-card w-100 bg-dark py-4 my-5">
            <div className="container py-5 px-5 text-light">
                <h3>Got a Question?</h3>
                <p>See how Metricks can help your business grow with best affiliatem marketing tracking software.</p>
                <p className='contactP'>Contact Us<FA className='ms-2' icon="fa-solid fa-arrow-right-long" /></p>
            </div>
        </div>
      <Footer />
    </div>
  );
}

export default AboutUs