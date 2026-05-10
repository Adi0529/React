import { useLocation, Link } from "react-router-dom";

export default function Detail() {

  const location = useLocation();
  const project = location.state;

  return (
    <div className="min-h-screen bg-[#020617] text-white overflow-hidden">

      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="mt-3  relative z-10 max-w-7xl mx-auto px-5 py-10">

        {/* Back Button */}
        <Link
          to="/projects"
          className="btn btn-outline-success p-2 text-light ms-2 mb-2 inline-flex items-center gap-2 mb-8 text-slate-300 hover:text-cyan-400 transition-all duration-300 text-decoration-none"
        >
          ← Back to Projects
        </Link>


        {/* Hero Section */}
        <div className="mt-3  p-4 rounded-5 relative rounded-[35px] overflow-hidden border border-white/10 shadow-2xl">

          <img
            src={project.image}
            alt={project.title}
            className="mx-auto w-full h-[500px] object-cover"
          />

          <div className="mt-4 absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20"></div>

          <div className="absolute bottom-0 left-0 p-8 md:p-14 w-full">

            <div className="flex flex-wrap gap-3 mb-5">

              <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm fw-semibold shadow-lg">
                {project.category}
              </span>

              <span
                className={`px-4 py-2 rounded-full text-sm fw-semibold ${
                  project.status === "Completed"
                    ? "bg-success bg-opacity-25 text-success border border-success"
                    : "bg-warning bg-opacity-25 text-warning border border-warning"
                }`}
              >
                {project.status}
              </span>

            </div>

            <h1 className="display-3 fw-bold mb-4">
              {project.title}
            </h1>

            <p className="text-light fs-5 max-w-4xl">
              {project.description}
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3 mt-4">

              <button className="btn btn-info px-4 py-3 rounded-4 fw-bold">
                Live Demo
              </button>

              <button className="btn btn-outline-light px-4 py-3 rounded-4 fw-bold">
                Source Code
              </button>

            </div>
          </div>
        </div>


        {/* Main Grid */}
        <div className="row mt-5 g-4">

          {/* Left Side */}
          <div className="col-lg-8">

            {/* About */}
            <div className="bg-white bg-opacity-10 border border-secondary rounded-5 p-4 mb-4 backdrop-blur">

              <h2 className="fw-bold text-info mb-4">
                About Project
              </h2>

              <p className="text-light fs-5 lh-lg">
                {project.detailedDescription}
              </p>

            </div>


            {/* Features */}
            <div className="bg-white bg-opacity-10 border border-secondary rounded-5 p-4 mb-4">

              <h2 className="fw-bold text-info mb-4">
                Key Features
              </h2>

              <div className="row g-3">

                {project.features?.map((feature, index) => (

                  <div className="col-md-6" key={index}>

                    <div className="bg-dark border border-secondary rounded-4 p-4 h-100 hover-shadow">

                      <p className="mb-0 text-light fw-medium">
                        ✅ {feature}
                      </p>

                    </div>

                  </div>
                ))}

              </div>
            </div>


            {/* Modules */}
            <div className="mb-4 bg-white bg-opacity-10 border border-secondary rounded-5 p-4">

              <h2 className="fw-bold text-info mb-4">
                Project Modules
              </h2>

              <div className="d-flex flex-column gap-3">

                {project.modules?.map((module, index) => (

                  <div
                    key={index}
                    className="bg-dark border border-secondary rounded-4 p-4"
                  >
                    <h4 className="text-white mb-0">
                      {module}
                    </h4>
                  </div>

                ))}

              </div>
            </div>
          </div>


          {/* Right Side */}
          <div className="col-lg-4">

            {/* Tech Stack */}
            <div className="bg-white bg-opacity-10 border border-secondary rounded-5 p-4 mb-4">

              <h2 className="fw-bold text-info mb-4">
                Tech Stack
              </h2>

              <div className="d-flex flex-wrap gap-2">

                {project.tech?.map((tech, index) => (

                  <span
                    key={index}
                    className="badge bg-info bg-opacity-25 text-info border border-info px-3 py-2 rounded-pill fs-6"
                  >
                    {tech}
                  </span>

                ))}

              </div>
            </div>


            {/* Challenges */}
            <div className="bg-white bg-opacity-10 border border-secondary rounded-5 p-4 mb-4">

              <h2 className="fw-bold text-info mb-4">
                Challenges
              </h2>

              <p className="text-light lh-lg">
                {project.challenges}
              </p>

            </div>


            {/* Future Scope */}
            <div className="bg-white bg-opacity-10 border border-secondary rounded-5 p-4 mb-4">

              <h2 className="fw-bold text-info mb-4">
                Future Scope
              </h2>

              <p className="text-light lh-lg">
                {project.futureScope}
              </p>

            </div>


            {/* Project Info */}
            <div className="bg-info bg-opacity-10 border border-info rounded-5 p-4">

              <h2 className="fw-bold mb-4">
                Project Info
              </h2>

              <div className="d-flex flex-column gap-4">

                <div className="d-flex justify-content-between border-bottom border-secondary pb-2">
                  <span className="text-secondary">
                    Category
                  </span>

                  <span className="fw-semibold">
                    {project.category}
                  </span>
                </div>

                <div className="d-flex justify-content-between border-bottom border-secondary pb-2">
                  <span className="text-secondary">
                    Technologies
                  </span>

                  <span className="fw-semibold">
                    {project.tech?.length}
                  </span>
                </div>

                <div className="d-flex justify-content-between border-bottom border-secondary pb-2">
                  <span className="text-secondary">
                    Features
                  </span>

                  <span className="fw-semibold">
                    {project.features?.length}
                  </span>
                </div>

                <div className="d-flex justify-content-between ">
                  <span className="text-secondary">
                    Status
                  </span>

                  <span className="text-info fw-semibold">
                    {project.status}
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}