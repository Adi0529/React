import { useEffect, useState } from "react"
import useAPI from "../customHook/useAPI"

export default function Products() {
    const [search, setSearch] = useState("")
    const [prod, setProd] = useState([])
    const { data } = useAPI("https://fakestoreapi.com/products")

    useEffect(() => {
        if (Array.isArray(data)) {
            setProd(data)
        }
    }, [data])
    const filteredprod = prod.filter((f) =>
        f.title.toLowerCase().includes(search.toLowerCase())
    )

    console.log(prod)
    return (
        <>
            <h1 className="text-center test-decoration-underline">Products</h1>
            <form className="d-flex w-50  mx-auto justify-content-center" role="search">
                <input className="form-control  w-50" type="search" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} aria-label="Search" />
            </form>
            <div className="row container-fluid d-flex justify-content-center">
                {filteredprod?.map((p, i) => (
                    <div className="card col-3 m-3" key={i} style={{ width: "20rem" }}>
                        <img src={p.image} className="card-img-top" style={{ height: "20rem" }} alt={p.title} />
                        <div className="card-body">
                            <h5 className="card-title">{p.title}</h5>
                            <p className="card-text">{p.description.slice(0, 100)}...</p>
                            <p><b>price:₹{p.price}</b></p>
                            <a href="#" className="btn btn-primary">Buy Now</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}