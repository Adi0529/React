import { useLocation, Link} from "react-router-dom"

export default function Detail(){
    const location = useLocation();
    const product = location.state;
    const p = product
    return(
       <>
        <div className="container py-5">
      {/* Navigation & Breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/" className="btn btn-outline-secondary mb-4">← Back to Products</Link></li>
        </ol>
      </nav>

      <div className="row g-5">
        {/* Left: Product Images & Tech Specs */}
        <div className="col-md-5">
          <div className="card shadow-sm mb-4">
            <img src={p.images[0]} className="card-img-top p-3" alt={p.title} />
          </div>
          
          <div className="p-3 border rounded bg-light">
            <h5>📐 Physical Specs</h5>
            <ul className="list-unstyled small">
              <li><strong>Weight:</strong> {p.weight}g</li>
              <li><strong>Dimensions:</strong> {p.dimensions.width} x {p.dimensions.height} x {p.dimensions.depth} cm</li>
              <li><strong>SKU:</strong> {p.sku}</li>
              <li><strong>Barcode:</strong> {p.meta.barcode}</li>
            </ul>
            <div className="text-center mt-3">
              <p className="mb-1">Scan for Info:</p>
              <img src={p.meta.qrCode} alt="QR Code" width="80" />
            </div>
          </div>
        </div>

        {/* Right: Purchase Info */}
        <div className="col-md-7">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <span className="badge bg-primary mb-2">{p.brand}</span>
              <h1 className="fw-bold">{p.title}</h1>
            </div>
            <div className="text-end">
              <span className="badge bg-warning text-dark">⭐ {p.rating}</span>
              <p className="small text-muted">{p.reviews.length} Reviews</p>
            </div>
          </div>

          <div className="my-4">
            <h2 className="text-success d-inline">₹{p.price}</h2>
            <span className="ms-3 text-muted text-decoration-line-through">₹{(p.price * 1.1).toFixed(2)}</span>
            <span className="ms-2 badge bg-danger">-{p.discountPercentage}%</span>
          </div>

          <p className="lead">{p.description}</p>

          {/* Logistics Box */}
          <div className="row my-4 g-2">
            <div className="col-6">
              <div className="p-3 border rounded shadow-sm h-100">
                <h6>🚚 Shipping & Return</h6>
                <p className="small mb-1">{p.shippingInformation}</p>
                <p className="small text-danger fw-bold">{p.returnPolicy}</p>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 border rounded shadow-sm h-100">
                <h6>🛡️ Security</h6>
                <p className="small mb-1"><strong>Warranty:</strong> {p.warrantyInformation}</p>
                <p className="small mb-0"><strong>Min. Order:</strong> {p.minimumOrderQuantity} units</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <span className={`fw-bold ${p.stock > 0 ? 'text-success' : 'text-danger'}`}>
              ● {p.availabilityStatus} ({p.stock} units available)
            </span>
          </div>

          <div className="d-grid gap-2 d-md-flex">
            <Link to={'/cart'} state={p} className="btn btn-primary btn-lg flex-grow-1">Add to cart</Link>
            <button className="btn btn-outline-dark btn-lg flex-grow-1">Wishlist</button>
          </div>
          
          <div className="mt-4">
            {p.tags.map(tag => <span key={tag} className="me-2 text-muted small">#{tag}</span>)}
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-5 pt-5 border-top">
        <h3 className="mb-4 text-center">Customer Feedback</h3>
        <div className="row">
          {p.reviews.map((rev, i) => (
            <div key={i} className="col-md-4">
              <div className="card mb-3 border-0 bg-light p-3">
                <div className="d-flex justify-content-between">
                  <strong>{rev.reviewerName}</strong>
                  <span className="text-warning">{"★".repeat(rev.rating)}</span>
                </div>
                <p className="small text-muted">{new Date(rev.date).toLocaleDateString()}</p>
                <p className="mb-0 italic">"{rev.comment}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
       </>
    )
}