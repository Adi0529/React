import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'
import { Link } from 'react-router-dom';
export default function Card({product}){
    return(
        <>
        <div className="col-12 col-md-4 mb-3 main">
        <div className="card " style={{width: "23rem",height:"500px"}}>
            <img src={product.image} className="card-img-top" alt="..."/>
                <div className="card-body crd-body">
                    <h2>{product.name}</h2>
                    <p className="card-title"><i>{product.category}</i> </p>
                    <p className="card-text">{product.description}</p>
                    <p className="fs-2 fw-bolder">${product.price}</p>
                    <p>{product.rating}</p>
                    <Link to={`/product/${product.id}`} className="btn btn-primary">Explore</Link>
                </div>
        </div>
        </div>
        </>    
    )
}