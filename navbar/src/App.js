import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Navbar2 from './component/Navbar2';
import { Route, Routes } from 'react-router-dom';
import About from './component/About';
import Home from './component/Home';
import Contact from './component/Contact';
import Blog from './component/Blog';
import Nav from './component/Nav';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Nav/> */}
      {/* <Navbar2/> */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blog' element={<Blog/>} />
      </Routes>
    </div>
  );
}

export default App;
