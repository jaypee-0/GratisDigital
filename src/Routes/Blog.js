import React from 'react'
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import blogs from '../Data/blogs.json';
import articles from '../Data/article.json';
import Header from '../Layouts/Header/Header';
import Footer from '../Layouts/Footer/Footer';

const Blog = () => {

  return (
    <div>
    <Header />
    <div id='blog'>
        {/* Heading Card */}
        <div className="heading-card w-100 pb-4 mb-5">
            <div className="container pb-5 ptt px-5 text-light">
                <div className="d-flex">
                <hr className='align-self-center my-0' style={{ width: 40, marginRight: '0.75rem'}}/>
                <p className='my-0'>BLOG</p>
                </div>
                <h5 className='ms-5'>Articles and News</h5>
            </div>
        </div>
        <div className='container'>
            <h2>Latest From The Blog</h2>
            <div className="d-flex flex-column flex-md-row">
                <div className="col-12 col-md-7">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus distinctio itaque perspiciatis dolores dolor repellat facere excepturi vero, unde ipsum!</p>
                </div>
                <div className='col-12 col-md-5 me-auto'>
                    <form className='d-flex position-relative'>
                        <input type="text" className='ms-auto px-3 py-3 rounded-pill' placeholder='Search here'/>
                        <button className='border-0 bg-none position-absolute' style={{ top: 10, right: 5, background: 'inherit'}}><FA size='2x' className='me-2' icon="fa-search" /></button>
                    </form>
                </div>
            </div> 
            {/* Blogs */}
            <div className="blogs d-flex flex-wrap my-5">
                {blogs && blogs.map(data => {
                return (                
                    <div key={data.id} className="col-6 py-2 col-lg-4 mb-3 carding border px-3">
                        <img className='img-fluid mb-2 w-100' src={data.img} alt="" />
                        <div className='d-flex flex-column'>
                            <h5>{data.dateTitle}</h5>
                            <h3>{data.captionTitle}</h3>
                            <h3>{data.captionTitlee}</h3>
                            <p className='mb-0'>{data.captionText}</p>
                        </div>                      
                        <p className="title fw-bold w-90">{data.title}</p>
                        <div className='d-flex flex-row'>
                            <hr className='my-0 me-2 align-self-center w-25'/>
                            <p className='mb-0'>READ MORE</p>
                        </div>
                    </div> 
                )})}
            </div>
            {/* Articles */}
            <div>
                <h2>Recent Articles</h2>
                <p className='col-10 col-md-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat molestias delectus temporibus vero perspiciatis dolorem, tempore ipsum corrupti quod inventore?</p>
                <div className="articles d-flex flex-wrap my-4">
                {articles && articles.map(data => {
                return (                
                    <div key={data.id} className="col-6 py-2 col-lg-4 mb-3 carding border px-3">
                        <img className='img-fluid mb-2 w-100' src={data.img} alt="" />
                        <div className='d-flex flex-column'>
                            <h5>{data.dateTitle}</h5>
                            <h3>{data.captionTitle}</h3>
                            <h3>{data.captionTitlee}</h3>
                            <p className='mb-0'>{data.captionText}</p>
                        </div>                      
                        <p className="title fw-bold w-90">{data.title}</p>
                        <div className='d-flex flex-row'>
                            <hr className='my-0 me-2 align-self-center w-25'/>
                            <p className='mb-0'>READ MORE</p>
                        </div>
                    </div> 
                )})}
            </div>
            <div className='d-flex justify-content-center my-5'>
                <button className="loadmore border-0 text-center text-light rounded-pill px-4 py-2">LOAD MORE</button>
            </div>
            
            </div>       
        </div>
        {/* Contact Card */}
        <div className="contact-card w-100 bg-dark py-4 mb-5">
            <div className="container py-5 px-5 text-light">
                <h5>What to Know About More Metrics?</h5>
                <p>Learn who we are and what drives us.</p>
                <p className='contactP'>Contact Us<FA className='ms-2' icon="fa-solid fa-arrow-right-long" /></p>
            </div>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default Blog