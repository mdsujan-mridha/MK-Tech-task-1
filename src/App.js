import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import "swiper/css/bundle";
function App() {
  return (
    <div>
      <Header />
      <Routes>
           <Route path='/' element={<Home></Home>}></Route>
           <Route path='home' element={<Home></Home>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
