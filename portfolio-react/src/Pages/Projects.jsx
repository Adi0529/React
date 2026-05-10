import {getPortfolioData} from '../data'
import  Project from '../Components/Project'
export default function Projects(){
    return(
        <>

            <div className="row container mx-auto  mt-4 mb-5">
                <h1 className='text-center text-light text-decoration-underline mb-5'>Projects</h1>
                {
                    getPortfolioData.projects.map((p,i)=>(
                      <Project pro={p} key={i} />
                    ))
                }
            </div>
        </>
    )
}