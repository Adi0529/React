import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Addnew = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [image1, setImage1] = useState("")
    const [year, setYear] = useState("")
    const [rating, setRating] = useState("")
    const [dura, setDura] = useState("")
    const [lang, setLang] = useState("")
    const [dir, setDir] = useState("")
    const [pri, setPri] = useState("")
    const [avi, setAvi] = useState("")
    const [gener, setGener] = useState([])
    const [cast, setCast] = useState([])

    const { id } = useParams()

    useEffect(() => {

        if (id) {

            const oldMovies =
                JSON.parse(localStorage.getItem("movies")) || []

            const movie = oldMovies.find(
                (m) => m.id === Number(id)
            )

            if (movie) {

                setTitle(movie.title || "")
                setDescription(movie.description || "")
                setImage(movie.banner || "")
                setImage1(movie.poster || "")
                setRating(movie.rating || "")
                setYear(movie.year || "")
                setDura(movie.duration || "")
                setLang(movie.language || "")
                setDir(movie.director || "")
                setPri(movie.price || "")
                setAvi(movie.available || "")
                setGener(movie.genre || [])
                setCast(movie.cast || [])

            }
        }

    }, [id])

    function handleadd(e) {

        e.preventDefault()

        const newMovie = {

            id: id ? Number(id) : Date.now(),
            title,
            description,
            banner: image,
            poster: image1,
            rating:rating,
            year:year,
            duration: dura,
            language: lang,
            director: dir,
            price: pri,
            cast: cast,
            genre: gener,
            available: avi

        }

        const oldMovies =
            JSON.parse(localStorage.getItem("movies")) || []

        let updatedMovies

        if (id) {

            updatedMovies = oldMovies.map((m) =>

                m.id === Number(id)
                    ? newMovie
                    : m

            )

        } else {

            updatedMovies = [...oldMovies, newMovie]

        }

        localStorage.setItem(
            "movies",
            JSON.stringify(updatedMovies)
        )

        window.location.href = "/"
    }

    return (
        <>
            <div className="container w-50">

                <h2 className="text-center p-4 bg-warning">
                    {id ? "Update Movie" : "Add New"}
                </h2>

                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link
                                to="/"
                                className="ms-2 btn btn-outline-secondary mb-4"
                            >
                                ← Back to movies
                            </Link>
                        </li>
                    </ol>
                </nav>

                <form onSubmit={handleadd}>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingTitle"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        <label htmlFor="floatingTitle">
                            Title
                        </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingDescription"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <label htmlFor="floatingDescription">
                            Description
                        </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingurl"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />

                        <label htmlFor="floatingurl">
                            Banner path
                        </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingurl1"
                            value={image1}
                            onChange={(e) => setImage1(e.target.value)}
                        />

                        <label htmlFor="floatingurl1">
                            Poster path
                        </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingrating"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                        />

                        <label htmlFor="floatingrating">
                            Rating
                        </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingyear"
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                        />

                        <label htmlFor="floatingyear">
                            Year
                        </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingDuration"
                            value={dura}
                            onChange={(e) => setDura(e.target.value)}
                        />

                        <label htmlFor="floatingDuration">
                            Duration
                        </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatinglanguage"
                            value={lang}
                            onChange={(e) => setLang(e.target.value)}
                        />

                        <label htmlFor="floatinglanguage">
                            Language
                        </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingdirector"
                            value={dir}
                            onChange={(e) => setDir(e.target.value)}
                        />

                        <label htmlFor="floatingdirector">
                            Director
                        </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingprice"
                            value={pri}
                            onChange={(e) => setPri(e.target.value)}
                        />

                        <label htmlFor="floatingprice">
                            Price
                        </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatinggenre"
                            value={gener.join(",")}
                            onChange={(e) =>
                                setGener(
                                    e.target.value
                                        .split(",")
                                        .map((g) => g.trim())
                                )
                            }
                        />

                        <label htmlFor="floatinggenre">
                            Genre
                        </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingcast"
                            value={cast.join(",")}
                            onChange={(e) =>
                                setCast(
                                    e.target.value
                                        .split(",")
                                        .map((c) => c.trim())
                                )
                            }
                        />

                        <label htmlFor="floatingcast">
                            Cast
                        </label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="floatingavailable"
                            value={avi}
                            onChange={(e) => setAvi(e.target.value)}
                        />

                        <label htmlFor="floatingavailable">
                            Available
                        </label>
                    </div>

                    <button
                        className="btn btn-primary mb-3"
                        type="submit"
                    >
                        {id ? "Update Movie" : "Create New"}
                    </button>

                </form>

            </div>
        </>
    )
}

export default Addnew