
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Addtocart() {
    const location = useLocation();
    const navigate = useNavigate();
    
    // 1. Initialize state with the product from navigation
    const [cartItem, setCartItem] = useState(location.state);
    const [quantity, setQuantity] = useState(1);

    // 2. Function to remove item
    const handleRemove = () => {
        // Clear the local state
        setCartItem(null);
        // Optional: You could also show a "Removed" toast here
    };

    // 3. Handle Empty State (No product or removed)
    if (!cartItem) {
        return (
            <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
                <div className="text-center p-5 shadow rounded-4 bg-white border-top border-5 border-primary">
                    <div className="display-1 mb-3">🛍️</div>
                    <h2 className="fw-bold text-dark">Your cart is empty</h2>
                    <p className="text-muted">Looks like you removed your items.</p>
                    <button className="btn btn-primary rounded-pill px-5 py-2 shadow-sm mt-3" onClick={() => navigate('/')}>
                        Return to Shop
                    </button>
                </div>
            </div>
        );
    }

    const subtotal = cartItem.price * quantity;
    const tax = Math.round(subtotal * 0.18);

    return (
        <div className="min-vh-100 py-5" style={{ backgroundColor: "#f4f7f6" }}>
            <div className="container">
                <h2 className="fw-bold mb-4" style={{ color: "#2d3436" }}>
                    <span className="text-primary">Review</span> Your Cart
                </h2>
                
                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-3">
                            <div className="card-body p-4 bg-white">
                                <div className="row align-items-center">
                                    <div className="col-4 col-md-3">
                                        <div className="p-2 rounded-3" style={{ backgroundColor: "#f8f9fa" }}>
                                            <img src={cartItem.thumbnail} alt={cartItem.title} className="img-fluid rounded-3" />
                                        </div>
                                    </div>

                                    <div className="col-8 col-md-5">
                                        <span className="badge rounded-pill mb-2" style={{ backgroundColor: "#e8f0fe", color: "#1a73e8" }}>
                                            {cartItem.category}
                                        </span>
                                        <h5 className="fw-bold text-dark mb-1">{cartItem.title}</h5>
                                        
                                        {/* REMOVE BUTTON Logic Added Here */}
                                        <button 
                                            className="btn btn-sm btn-link text-danger p-0 text-decoration-none fw-semibold mt-2"
                                            onClick={handleRemove}
                                        >
                                            🗑️ Remove Item
                                        </button>
                                    </div>

                                    <div className="col-6 col-md-2 mt-3 mt-md-0">
                                        <div className="d-flex align-items-center justify-content-between border rounded-pill p-1 bg-light">
                                            <button className="btn btn-sm btn-white shadow-sm rounded-circle fw-bold" onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                                            <span className="fw-bold mx-2">{quantity}</span>
                                            <button className="btn btn-sm btn-white shadow-sm rounded-circle fw-bold" onClick={() => setQuantity(quantity + 1)}>+</button>
                                        </div>
                                    </div>

                                    <div className="col-6 col-md-2 mt-3 mt-md-0 text-end">
                                        <h5 className="fw-bold text-primary mb-0">₹{subtotal.toLocaleString()}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Summary Section */}
                    <div className="col-lg-4">
                        <div className="card border-0 shadow-lg rounded-4 bg-white p-4">
                            <h4 className="fw-bold mb-4 border-bottom pb-2">Price Details</h4>
                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-muted">Price ({quantity} item)</span>
                                <span className="fw-semibold text-dark">₹{subtotal.toLocaleString()}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3">
                                <span className="text-muted">Delivery</span>
                                <span className="text-success fw-bold">FREE</span>
                            </div>
                            <div className="d-flex justify-content-between mb-4 border-bottom pb-3">
                                <span className="text-muted">Tax (GST)</span>
                                <span className="fw-semibold text-dark">₹{tax.toLocaleString()}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-4">
                                <span className="h5 fw-bold mb-0">Total</span>
                                <span className="h5 fw-bold mb-0 text-primary">₹{(subtotal + tax).toLocaleString()}</span>
                            </div>
                            <Link to='/Register' className="btn btn-primary w-100 py-3 rounded-3 fw-bold shadow">
                                SECURE CHECKOUT
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
