import { Link, useParams } from "react-router-dom"

const Detail = ({ movies }) => {
    const { id } = useParams()
    const movie = movies.find((m) => m.id === Number(id))

    if (!movie) {
        return <h1 className="text-center mt-5">Movie not found</h1>
    }
    return (
        <>
            <div className="container py-5">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/" className="btn btn-outline-secondary mb-4">← Back to movies</Link></li>
                    </ol>
                </nav>

                <div className="row g-5">
                    <div className="col-md-5">
                        <div className="card shadow-sm mb-4">
                            <img src={movie.banner} className="card-img-top p-3" alt={movie.title} />
                        </div>

                        <div className="p-3 border rounded bg-light">
                            <h5 className="text-center">Key Spes.</h5>
                            <ul className="list-unstyled small">
                                <li><strong>Director:</strong>{movie.director}</li>
                                <li><strong>Language:</strong>  x {movie.language}</li>
                                <li><strong>Duration:</strong>{movie.duration}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <span className="badge bg-primary mb-2">{movie.year}</span>
                                <h1 className="fw-bold">{movie.title}</h1>
                            </div>
                            <div className="text-end">
                                <span className="badge bg-warning text-dark">⭐ {movie.rating}</span>
                            </div>
                        </div>

                        <div className="my-4">
                            <h2 className="text-success d-inline">₹{movie.price}</h2>
                        </div>

                        <p className="lead">{movie.description}</p>

                        {/* Logistics Box */}
                        <div className="row my-4 g-2">
                            <div className="col-6">
                                <div className="p-3 border rounded shadow-sm h-100">
                                    <h6>Gener</h6>
                                    {
                                        movie.genre.map((m)=>(
                                            <p className="small mb-1">{m}</p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="p-3 border rounded shadow-sm h-100">
                                    <h6>Description</h6>
                                    <p className="small mb-1">{movie.description}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <span className={`fw-bold ${movie.available ? 'text-success' : 'text-danger'}`}>
                                {movie.available? <p> ● avaliable</p>:<p> ● Not avaliable</p>}
                            </span>
                        </div>

                        <div className="d-grid gap-2 d-md-flex">
                            <button to={'/cart'} className="btn btn-primary btn-lg flex-grow-1">book a Show</button>
                            <button className="btn btn-outline-dark btn-lg flex-grow-1">Wishlist</button>
                        </div>

                        <div className="mt-4">
                            {movie.cast.map(tag => <span key={tag} className="me-2 text-muted small">#{tag}</span>)}
                        </div>
                    </div>
                </div>

                
            </div>

        </>
    )
}
export default Detail