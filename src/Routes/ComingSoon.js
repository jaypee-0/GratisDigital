import React from 'react'
import Header from '../Layouts/Header/Header'
import Footer from '../Layouts/Footer/Footer'
import '../Styles/ComingSoon.scss'
import data from '../Data/comingSoon.json'

const ComingSoon = () => {
  return (
    <div className='background'>
        <Header />
        <div id='comingsoon' className='container d-flex flex-column justify-content-center position-relative'>
            <h1 className='fs-1 fw-bolder'> SOMETHING AWESOME IS<br/>COMING SOON </h1>
            <div className="magenta-circle"></div>
            <div className="blue-circle"></div>
            <p className='p-text'> Your all-in-one affiliate marketing tracking software track, automate and<br />optimize your campaigns </p>
        <div className='cardex d-flex my-5 flex-row mx-auto col-12 col-lg-6 justify-content-between'>
          {data.map((data) => {
              return (
                  <div className='d-flex bg-light flex-column col-2 mx-auto col-lg-2 py-4 rounded border border-1 ' key={data.id}>
                      <h4 className="numbers text-dark">{data.number}</h4>
                      <h4 className="period text-dark">{data.period}</h4>
                  </div>
              )
          })}
        </div>

        <div className='deets'>
            <div className="deets1 d-flex col-12 col-md-5  mx-auto justify-content-between">
                <input type='text' className='w-100 py-2 px-2 me-2' placeholder='First Name.' />
                <input type='text' className='w-100 py-2 px-2 ms-2' placeholder='Last Name.' /> 
            </div>  

            <div className='deets2 d-flex col-12 col-sm-10 col-md-7 my-4 mx-auto justify-content-between position-relative'>
                <input type='text' className='border-0 w-100 rounded-pill py-2 py-sm    -3 py-md-3 px-4' placeholder='Enter your email address...' />
                <button className='position-absolute waiting py-md-3 border-0 w-60 rounded-pill py-2 py-sm  -3 px-1 px-md-1'>JOIN OUR WAITING LIST </button>                 
            </div>
        
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ComingSoon