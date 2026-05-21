
import './App.css'
import TravelSpots from './Pages/TravelSpots'
import Landingpage from './Pages/Landingpage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import data from "./assets/data"
import Navbar from './Components/Navbar'
import { useEffect, useState } from 'react'
function App() {
  const [datal, setDatal] = useState([])

  // Load data from localStorage
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("tours"))

    if (savedData && savedData.length > 0) {
      setDatal(savedData)
    } else {
      setDatal(data)
      localStorage.setItem("tours", JSON.stringify(data))
    }
  }, [])

  function deleteTour(id) {
    const updatedTours = datal.filter((item) => item.id !== id)

    setDatal(updatedTours)

    localStorage.setItem("tours", JSON.stringify(updatedTours))
  }

  function refreshTours() {
    setDatal(data)

    localStorage.setItem("tours", JSON.stringify(datal))
  }


  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Landingpage />} />
          <Route path='/travelspots' element={<TravelSpots data={datal} deleteTour={deleteTour} refreshTours={refreshTours} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
