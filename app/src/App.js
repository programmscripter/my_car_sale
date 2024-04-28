import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import Profile_page from './Pages/Profile_page/Profile_page';
import Register_page from './Pages/Register_page/Register_page';
import Footer from './Components/Footer/Footer';
import './Css/main.css';
import Brand_page from './Pages/Brand_page/Brand_page';
import More_brands_page from './Pages/More_brands_page/More_brands_page';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile page' element={<Profile_page />} />
          <Route path='/register page' element={<Register_page />} />
          <Route path='/brand/:id' element={<Brand_page />} />
          <Route path='/more brands' element={<More_brands_page />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;