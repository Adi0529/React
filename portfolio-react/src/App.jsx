import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 
import Header from './Components/Header'
import Homepage from './Pages/Homepage'
import Projects from './Pages/Projects'
import Aboutme from './Pages/Aboutme'
import Detail from './Pages/Detail'
import Contactme from './Pages/Contactme'
import Footer from './Components/Footer'
function App() {
   const containerStyle = {
    background: 'linear-gradient(to bottom, black, aqua)',
    minHeight: '100vh',
    width: '100%',
    margin: 0,
    padding: 0
  }

  return (
    <>
      <div className='pt-4' style={containerStyle}>
      <div className='main m-5 rounded-4 ' style={{backgroundColor:"black",color:"white"}}>
        <BrowserRouter>
          <Header />
          <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutme />} />
          
          <Route path="/projects" element={<Projects />} />
          
          <Route path="projects/:id" element={<Detail />} />
          <Route path="/contact" element={<Contactme />} />
        </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      </div>
    </>
  )
}

export default App
