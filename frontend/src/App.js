import {Routes, Route} from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';
function App() {
  return (
  <>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/categories' element={<Categories/>} />
          <Route path='/category/:category_slug/:category_id' element={<CategoryProducts/>} />

        </Routes>
      <Footer/>
      </>
      
  );
}

export default App;
