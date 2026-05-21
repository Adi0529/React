import hero1 from "../assets/hero1.png"
import { useNavigate } from "react-router-dom"

const Landingpage = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="pt-5 container-fluid bg-info bg-opacity-10 min-vh-100 d-flex align-items-center">

                <div className="pt-5 container">

                    <div className="pt-5 row align-items-center gy-5">
                        <div className="col-lg-6">

                            <h1
                                className="fw-bold"
                                style={{
                                    fontSize: "4rem",
                                    lineHeight: "1.1"
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "Blackadder ITC",
                                        fontSize: "5rem"
                                    }}
                                >
                                    Discover
                                </span>

                                <br />

                                The World
                            </h1>

                            <p
                                className="text-secondary mt-4"
                                style={{
                                    fontSize: "1.2rem",
                                    maxWidth: "80%"
                                }}
                            >
                                Let's embark on a global journey,
                                immersing ourselves in diverse cultures
                                and creating unforgettable memories as we
                                travel the world.
                            </p>

                            {/* BUTTONS */}

                            <div className="d-flex gap-3 mt-4 flex-wrap">

                                <button
                                    className="btn btn-primary rounded-pill px-4 py-2"
                                    onClick={() => navigate("/travelspots")}
                                >
                                    Explore More
                                </button>

                                <button
                                    className="btn btn-light border rounded-pill px-4 py-2"
                                >
                                    <i className="fa-regular fa-circle-play me-2"></i>

                                    Watch Demo
                                </button>

                            </div>

                        </div>

                        {/* RIGHT SIDE */}

                        <div className="col-lg-6 d-flex justify-content-center">

                            <div
                                className="bg-white position-relative rounded-4 shadow"
                                style={{
                                    width: "100%",
                                    maxWidth: "500px",
                                    height: "320px",
                                    transform: "skewX(-20deg)",
                                    padding: "20px"
                                }}
                            >

                                <div
                                    className="bg-primary rounded-4 h-100 w-100 position-relative overflow-visible"
                                    style={{
                                        boxShadow:
                                            "10px 10px 20px rgba(0,0,0,0.2)"
                                    }}
                                >

                                    <img
                                        src={hero1}
                                        alt="Hero"
                                        className="position-absolute"
                                        style={{
                                            width: "500px",
                                            height: "500px",
                                            top: "-180px",
                                            right: "40px",
                                            transform: "skewX(20deg)"
                                        }}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* STATS */}

                    <div className="row justify-content-center mt-5 g-4">

                        <div className="col-md-3 col-6">

                            <div
                                className="bg-primary text-white rounded-4 p-4"
                            >

                                <h2 className="fw-bold mb-0">
                                    64+
                                    <i className="fa-solid fa-arrow-right ms-2"></i>
                                </h2>

                                <p className="mb-0 fs-5">
                                    Countries
                                </p>

                            </div>

                        </div>

                        <div className="col-md-3 col-6">

                            <div
                                className="bg-primary text-white rounded-4 p-4"
                            >

                                <h2 className="fw-bold mb-0">
                                    24M
                                    <i className="fa-solid fa-arrow-right ms-2"></i>
                                </h2>

                                <p className="mb-0 fs-5">
                                    Yearly
                                </p>

                            </div>

                        </div>

                        <div className="col-md-3 col-6">

                            <div
                                className="bg-primary text-white rounded-4 p-4"
                            >

                                <h2 className="fw-bold mb-0">
                                    3K+
                                    <i className="fa-solid fa-arrow-right ms-2"></i>
                                </h2>

                                <p className="mb-0 fs-5">
                                    Experiences
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Landingpage