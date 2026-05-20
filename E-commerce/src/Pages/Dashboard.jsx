import { useState, useEffect, useContext } from "react";
import './Dashboard.css'
import Vertical from "../Components/Vertical";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { themeContext } from "../Context/Context";
import { CartContext } from "../CartReducer/CartProvider";

export default function Dashboard() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "all",
    rating: 0,
    price: 0,
    inStock: false,
  });
  const { theme } = useContext(themeContext)

  // Both apply at the same time on the displayed list
  const filteredProducts = product
    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(p => filters.category === "all" || p.category === filters.category)
    .filter(p => p.rating >= filters.rating)
    .filter(p => p.price >= filters.price)
    .filter(p => !filters.inStock || p.stock > 0);


  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json(); // .json() is a method
        setProduct(data.products);
      } catch (error) {
        setErr(true);
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (err) return <div>Error loading data.</div>;

  const {dispatch } = useContext(CartContext)

  return (
    <>
      <Navbar />
      <div className="m-0 pt-5">
        <div className="row g-0">

          <div className="col-3 m-0 bg-warning sticky-top" style={{ height: 'calc(100vh - 56px)', top: '56px' }}>
            <Vertical setSearchTerm={setSearchTerm} setFilters={setFilters} />
          </div>

          <div className={`pt-5 col-9 p-0 ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`} style={{ minHeight: '100vh' }}>

            <h1 className="text-center border-bottom border-3 p-3 m-0 bg-info sticky-top" style={{ top: '56px', zIndex: 1020 }}>
              Products
            </h1>

            <div className="d-flex flex-wrap justify-content-center gap-5 mt-4 mb-3">
              {filteredProducts.map((p) => (
                <div className={`card border-${theme === "light" ? "dark" : "light"} ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`} style={{ width: "18rem" }} key={p.id}>
                  <img src={p.thumbnail} className="card-img-top" alt={p.title} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text">{p.description.slice(0, 60)}...</p>
                    <p className="fw-bold">Price: ₹{p.price}</p>
                    <Link to={`/product/${p.id}`} state={p} className="btn btn-primary btn-sm">View Details</Link>
                    <button
                      className="btn btn-warning btn-sm ms-2"
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: p
                        })
                      }
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

