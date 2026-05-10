export default function Contactme(){
    return(
        <>
        <div className="p-5 d-flex flex-column align-items-center gap-4 w-50 mx-auto" id="Contacts">
            <h2 className="fs-1 border-bottom border-warning d-inline-block border-3 mb-3">Contact</h2>
            <input type="text" className="ps-4 p-2 fs-5 w-50 rounded-pill" placeholder="Your Name" /> 
            <input type="email" className="ps-4 p-2 fs-5 w-50 rounded-pill" placeholder="Email" />
            <input type="textarea" className="ps-4 p-2 fs-5 w-50 rounded-pill h-300" placeholder="Message" />
            <button className="btn border border-3 rounded-5 py-2 px-3  bg-warning text-light mt-3">Submit</button>

        </div>

        <div className="pt-0 p-4 d-flex flex-row justify-content-center gap-3">
            <span className="fs-1"><i className="fa-brands fa-square-instagram" ></i></span>
            <span className="fs-1"><i className="fa-brands fa-square-linkedin"></i></span>
            <span className="fs-1"><i className="fa-solid fa-envelope"></i></span>

        </div>
        
        </>
    )
}