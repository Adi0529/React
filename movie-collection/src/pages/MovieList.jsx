import { Link } from "react-router-dom"

const MovieList = ({ movies }) => {
    function handleDelete(id) {

        const storedMovies =
            JSON.parse(localStorage.getItem("movies")) || []

        const filteredMovies =
            storedMovies.filter((m) => m.id !== id)

        localStorage.setItem(
            "movies",
            JSON.stringify(filteredMovies)
        )

        window.location.reload()
    }

    return (
        <>
            <h1 className="text-center p-4 bg-warning ">Movie List</h1>
            <div className="row container mx-auto mt-4">
                {
                    movies.map((m, i) => (
                        <div className="col-12 col-md-6 col-lg-4  mb-3" key={i}>
                            <div className="card" style={{ maxWidth: "20rem", height: "350px" }}>
                                <img src={m.banner} className="card-img-top" alt="... " style={{ heigth: "50%" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{m.title}</h5>
                                    <p className="card-text">{m.description.slice(0, 50)}...</p>
                                    <Link to={`/movies/${m.id}`} className="btn btn-primary">View Details</Link>
                                    <Link to={`/update/${m.id}`}className="btn btn-warning ms-1">Update</Link>
                                    <button className="btn btn-danger ms-1" onClick={() => handleDelete(m.id)}>Delete</button>
                                    
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="d-flex justify-content-center my-3">
                <Link className="btn btn-primary" to="/add">Add New</Link>
            </div>
        </>
    )
}
export default MovieList