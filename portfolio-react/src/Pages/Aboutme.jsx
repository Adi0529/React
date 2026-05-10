import {getPortfolioData} from "../data"
import adi from "../assets/adi.png"
export default function Abomeut() {
  const personal= getPortfolioData.personal
  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden position-relative">

      {/* Background Blur Effects */}
      <div
        className="position-absolute top-0 start-0 rounded-circle"
        style={{
          width: "350px",
          height: "350px",
          background: "rgba(6,182,212,0.15)",
          filter: "blur(120px)"
        }}
      ></div>

      <div
        className="position-absolute bottom-0 end-0 rounded-circle"
        style={{
          width: "350px",
          height: "350px",
          background: "rgba(59,130,246,0.15)",
          filter: "blur(120px)"
        }}
      ></div>

      <div className="container py-5 position-relative">

        {/* Main Card */}
        <div className="row align-items-center g-5">

          {/* Left Side */}
          <div className="col-lg-5 text-center">

            <div className="position-relative d-inline-block">

              {/* Glow */}
              <div
                className="position-absolute top-50 start-50 translate-middle rounded-circle"
                style={{
                  width: "320px",
                  height: "320px",
                  background: "rgba(6,182,212,0.25)",
                  filter: "blur(80px)",
                  zIndex: 0
                }}
              ></div>

              {/* Image */}
              <img
                src={adi}
                alt={personal.name}
                className="pt-1 img-fluid rounded-circle border border-4 border-info shadow-lg position-relative"
                style={{
                  width: "400px",
                  height: "400px",
                  objectFit: "cover",
                  zIndex: 2
                }}
              />

            </div>
          </div>


          {/* Right Side */}
          <div className="col-lg-7">

            {/* Badge */}
            <span className="badge bg-info text-dark px-4 py-2 fs-6 rounded-pill mb-4">
              Welcome To My Portfolio
            </span>

            {/* Name */}
            <h1
              className="fw-bold display-2 mb-3"
              style={{
                background: "linear-gradient(to right,#06b6d4,#3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              {personal.name}
            </h1>

            {/* Role */}
            <h2 className="text-info fw-semibold mb-4">
              {personal.role}
            </h2>

            {/* Tagline */}
            <p className="fs-4 text-light-emphasis lh-lg mb-5">
              {personal.tagline}
            </p>


            {/* Info Cards */}
            <div className="row g-4">

              <div className="col-md-6">
                <div className="bg-dark border border-secondary rounded-4 p-4 h-100 shadow">

                  <h5 className="text-info mb-3">
                    📧 Email
                  </h5>

                  <p className="mb-0 text-light">
                    {personal.email}
                  </p>

                </div>
              </div>


              <div className="col-md-6">
                <div className="bg-dark border border-secondary rounded-4 p-4 h-100 shadow">

                  <h5 className="text-info mb-3">
                    📱 Phone
                  </h5>

                  <p className="mb-0 text-light">
                    {personal.phone}
                  </p>

                </div>
              </div>


              <div className="col-md-6">
                <div className="bg-dark border border-secondary rounded-4 p-4 h-100 shadow">

                  <h5 className="text-info mb-3">
                    📍 Location
                  </h5>

                  <p className="mb-0 text-light">
                    {personal.location}
                  </p>

                </div>
              </div>


              <div className="col-md-6">
                <div className="bg-dark border border-secondary rounded-4 p-4 h-100 shadow">

                  <h5 className="text-info mb-3">
                    🌐 Portfolio
                  </h5>

                  <a
                    href={personal.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none text-light"
                  >
                    Visit Portfolio
                  </a>

                </div>
              </div>
            </div>


            {/* Social Buttons */}
            <div className="d-flex flex-wrap gap-3 mt-5">

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-info px-4 py-3 rounded-4 fw-bold"
              >
                GitHub
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn btn-info px-4 py-3 rounded-4 fw-bold"
              >
                LinkedIn
              </a>

              <a
                href={`mailto:${personal.email}`}
                className="btn btn-light px-4 py-3 rounded-4 fw-bold"
              >
                Contact Me
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}