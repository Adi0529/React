import { BrowserRouter,Routes ,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from "./Pages/Dashboard"
import Login from "./Pages/Login"
import Info from "./Pages/Info"
import Comments from "./Components/Comments";
import Likes from "./Components/Likes"
function App() {

  return (
    <>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login/>}></Route>
          
          <Route path='/product/:ID' element={<Info />}>
          <Route path='comments' element={<Comments />}></Route>
          <Route path='likes' element={<Likes />}></Route>
        </Route>
       </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
