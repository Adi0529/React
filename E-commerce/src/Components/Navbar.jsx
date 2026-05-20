import { useContext } from "react"
import { themeContext } from "../Context/Context"
import { Link } from "react-router-dom"
import shop from "../assets/shop.png"
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../CartReducer/CartProvider";

export default function Navbar() {
    
    const {state} = useContext(CartContext)
    const {theme}=useContext(themeContext)
    const {toggleTheme}=useContext(themeContext)
    return (
        <>
            <nav className={`navbar pb-3 fixed-top navbar-expand-lg ${theme=="light"?'bg-light' : 'bg-dark'} `} data-bs-theme={`${theme =='light' ? '' :  'dark'}`}
            data-bs-theme={`${theme =='dark' && 'dark'}`}>
                <div className="container-fluid">
                    <img src={shop}  className="navbar-brand" style={{height:"70px"}} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-outline-success" aria-current="page" href="#">Hi {state.user}</a>
                            </li>

                            <li className="nav-item d-flex gap-3">
                                
                                <Link to="/cart">
                                <FaShoppingCart className="fs-2"/>
                                <span className="position-absolute top-5 start-90 translate-middle badge rounded-pill bg-danger">{state.length} </span>
                                </Link>
                                <div className={`form-check form-switch ms-4 mt-2 ${theme =="light" ? "text-dark":"text-light"}`}>
                                    <input className="form-check-input" onChange={toggleTheme}  type="checkbox" role="switch" id="switchCheckDefault" />
                                    <label className="form-check-label " htmlFor="switchCheckDefault">{theme=="light"?"dark":"light"}</label>
                                </div>

                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}