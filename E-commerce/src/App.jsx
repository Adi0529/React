import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Pages/Dashboard';
import Detail from './Pages/Detail'
import Addtocart from './Pages/Addtocart'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { themeContext } from './Context/Context';
import { useState } from 'react';


function App() {
  const [theme,setTheme]=useState("light")

  function toggleTheme(){
    setTheme(prev=>prev=="light"? "dark":"light")
  }
  return(
    <>
     <themeContext.Provider value={{theme,toggleTheme}} >
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/Product/:ID"  element={<Detail />}></Route>
      <Route path="/cart" element={<Addtocart />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/Register" element={<Register />}></Route>
     </Routes>
     </BrowserRouter>
     </themeContext.Provider>
    </>
  )
}

export default App
