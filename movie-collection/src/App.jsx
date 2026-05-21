
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MovieList from './pages/MovieList'
import Detail from './pages/Detail'
import Addnew from './pages/Addnew'
import {movies} from './assets/data'
import { useEffect, useState } from 'react'

function App() {
  const [mov, setMov] = useState([])

  useEffect(() => {

  const storedMovies =
    JSON.parse(localStorage.getItem("movies"))

  // First time only
  if (!storedMovies) {

    localStorage.setItem(
      "movies",
      JSON.stringify(movies)
    )

    setMov(movies)

  } else {

    setMov(storedMovies)

  }

}, [])
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/"  element={<MovieList movies={mov} />}></Route>
        <Route path="/movies/:id" element={<Detail movies={mov} />} ></Route>
        <Route path="/add" element={<Addnew />}></Route>
        <Route path="/update/:id" element={<Addnew />}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
