import seal from '../assets/seal1.jpg'
import './Seal.css'

export default function Seal() {
    return(
        <>
        <h1 className="mt-0 text-center fw-bolder p-4 text-warning text-decoration-underline">Seal</h1>
        <div className='d-flex flex-row justify-content-center'>
        <img src={seal} alt="Shivaji's Seal" />
        </div>
        <div className="container d-flex flex-column justify-content-center align-items-center text-center">
            <p className="text-light content"><b>Shivaji's seal:</b> The seal of Shivaji was a symbol of his authority and power. It was used to authenticate documents and to signify his approval.</p>
            <p className="text-light content"><b>Design:</b> The seal featured a lion, which was a symbol of strength and courage. The lion was depicted in a rampant position, with its front paws raised and its tail curled.</p>
            <p className="text-light content"><b>Inscriptions:</b> The seal also contained inscriptions in the Marathi language, which were written in the Devanagari script. The inscriptions included the name of Shivaji and his title, "Chhatrapati," which means "Lord of the Parasol."</p>
            <p className="text-light content"><b>Significance:</b> The seal was an important symbol of Shivaji's authority and legitimacy as a ruler. It was used to authenticate official documents, such as letters and decrees, and to signify his approval of various actions and decisions.</p>
        </div>
        </>
    )
}