import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Views/Home/Home';
import Menu from './Views/Menu/Menu';
import Events from './Views/Events/Events';
import Footer from './Components/Footer/Footer';
import Servives from './Views/Services/Services';


function App() {

  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/events" element={<Events />} />
          <Route path="/services" element={<Servives />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
