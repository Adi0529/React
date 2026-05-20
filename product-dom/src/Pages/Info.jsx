import { products } from '../Data'
import { Link, Outlet, useParams} from 'react-router-dom'

const Info = () => {
    const {ID} = useParams()

    let productDetails = products.find((p)=>p.id == ID)
    console.log(productDetails)
  return (
    <>
    <div className='bg-dark p-4 text-center text-warning text-decoration-underline fs-3'>ProductDetails</div>
    <div className='container mt-5'>
    
    <img src={productDetails.image}  className="mx-auto" alt="" style={{width:"300px"}}/>
    <h1 className='mt-4'>{productDetails.name}</h1>
    <p><i>{productDetails.category}</i></p>
    <p>{productDetails.description}</p>
    <h4>Price : <i>{productDetails.price}</i></h4>
    <Link to={`/product/${productDetails.id}/comments`} className='btn'>Show Comments</Link>
    <Link to={`/product/${productDetails.id}/likes`} className='btn ms-5'>Likes</Link>
    </div>
    <hr />
<Outlet />
    </>
  )
}

export default Info