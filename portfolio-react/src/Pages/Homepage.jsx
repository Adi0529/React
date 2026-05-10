import {getPortfolioData} from '../data'
import './Homepage.css'
import Svg from '../Components/Svg'
export default function Homepage(){
    return(
        <>
            <div className='container row mt-3 ps-5 pt-5 ms-2 '>
                <div className='col-8 mt-4'>
                    <h4>Hello it's me</h4>
                    <h1 className='fs-1 fw-bolder'>{getPortfolioData.personal.name}</h1>
                    <p className='fs-5' style={{color:"aqua"}}><i>{getPortfolioData.personal.role}</i></p>
                    <p className='fs-5'>And I'm a<b className='ms-2' style={{color:"aqua"}}>{getPortfolioData.about.experience}</b></p>
                    <p className='mt-3'> {getPortfolioData.about.description}</p>
                    <div className='d-flex flex-row gap-3'>
                        <i class="fa-brands fa-linkedin fs-1"></i>
                        <i class="fa-brands fa-facebook fs-1"></i>
                        <i class="fa-brands fa-github fs-1"></i>
                        <i class="fa-brands fa-instagram fs-1"></i>
                    </div>
                    <button className='fs-6 btn btn-primary mt-5 rounded-pill px-3 py-2'>View Resume</button>
                </div>
                <div className='col-3 mt-3 me-5'>
                    <div className=' ms-4 w-100'>
                        <Svg />
                    </div>
                </div>
            </div>
        
        </>
    )
}