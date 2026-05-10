import { Link } from "react-router-dom";

export default function Project(props) {
    return (
        <>
            <div className="col col-md-4 col-lg-3 mb-4  ">

                <div className="card" style={{width: "18rem" ,height:"15rem"}}>
                    <div className="card-body">
                        <h5 className="card-title fs-4" style={{height:"4rem"}}>{props.pro.title}</h5>
                        <h6 className="card-subtitle mb-2 text-body-secondary">{props.pro.category.slice(0,15)}...</h6>
                        <p className="card-text">{props.pro.description.slice(0,40)}...</p>
                        <Link to={`/projects/${props.pro.id}`} state={props.pro} className="btn btn-primary sticky-bottom">view details</Link>

                    </div>
                </div>

            </div>
        </>
    )
}