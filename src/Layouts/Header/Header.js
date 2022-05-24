import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome';
import '../../Styles/Header.scss';
import Contact from '../../Routes/Contact';

const Header = () => {
  const [click, setClick] = useState(false);
  const [switchnav, setswitchnav] = useState(false);
  const [showcontact, setshowcontact] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleContact = () => setshowcontact(true);
  const closeContact = () => setshowcontact(!showcontact);

  const switchNav = () => {
    if (window.scrollY >= 100) {
      setswitchnav(true);
    } else {
      setswitchnav(false);
    }
  };
  useEffect(() => {
    switchNav();
    window.addEventListener('scroll', switchNav);
  }, []);

  return (
    <div className=''>
      <div className='d-flex flex-row position-absolute'>
        <nav className={switchnav ? 'navbarT active' : 'navbarT'}>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <h2>Metrics</h2>
              {/* <img src={'Metrics'} alt='logo.png' /> */}
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <FA icon={click ? 'times' : 'bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className='nav-links'
                  onClick={closeMobileMenu}>
                  ABOUT US
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/blog'
                  className='nav-links'
                  onClick={closeMobileMenu}>
                  BLOG
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/github'
                  className='nav-links'
                  onClick={closeMobileMenu}>
                  Github
                </Link>
              </li>
              <button
                className='rounded-pill align-self-center'
                onClick={handleContact}>
                <Link to='/ ' className='nav-links' onClick={closeMobileMenu}>
                  Contact Us
                </Link>
              </button>
              {showcontact && 
                <Contact closeContact={closeContact}/>
              }
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
