import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Componenets/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from "./Componenets/Products"
import Fruits from "./Componenets/Fruits"
import Users from "./Componenets/Users"
import RecipeDetail from './Pages/RecipeDetail'

function App() {

  return (
    <>
      
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/fruits" element={ <Fruits />}></Route>
        <Route path="/user" element={<Users/>}></Route>
        <Route path="/recipedetail" element={<RecipeDetail />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
