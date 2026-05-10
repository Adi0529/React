import { Link } from "react-router-dom";
import './Header.css'

export default function Header(){
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid">
            <Link className="navbar-brand ms-4" >Protfolio-Aditya</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto me-5">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact" aria-disabled="true">Contactme</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        </>
    )
}