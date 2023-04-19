import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './scenes/Home.jsx';
import About from './scenes/About.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <>
    <Header />
    
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />        
        <Route path="/"      element={<Home />} />
      </Routes>    
    </BrowserRouter>

    <Footer />
    </>
  );
}

export default App;
