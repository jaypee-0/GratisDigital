import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Header from './Layouts/Header/Header';
//import Footer from './Layouts/Footer/Footer';
import ComingSoon from './Routes/ComingSoon';
import AboutUs from './Routes/AboutUs';
import Blog from './Routes/Blog';
import Github from './Routes/Github';
import Contact from './Routes/Contact';

function App() {  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ComingSoon />}></Route>
        <Route exact path='/comingsoon' element={<ComingSoon />}></Route>
        <Route exact path='/about' element={<AboutUs />}></Route>
        <Route exact path='/blog' element={<Blog />}></Route>
        <Route exact path='/github' element={<Github />}></Route>
        <Route exact path='/contact' element={<Contact />}></Route>

      </Routes>
    </Router>
  );
}

export default App;
