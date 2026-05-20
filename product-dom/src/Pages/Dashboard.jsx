import Card from "../Components/Card"
import 'bootstrap/dist/css/bootstrap.min.css';
import { products } from "../Data"
export default function Dashboard() {
    return (
        <>
            <h1 className="text-center text-decoration-underline mb-5 text-warning">Our Products</h1>
            <div className="row container mx-auto">
            {products.map((prod,i) => (
                    <Card product={prod} key={i} />
                
            ))}
            </div>

        </>
    )
}