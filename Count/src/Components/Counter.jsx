import { useState } from "react"
export default function Counter(){
    const[total,settotal]=useState(10)
    return(
        <>
        <h1 className="p-3 Fs-2 text-center bg-dark text-light">Counter</h1>
        <p className="text-center fs-1 mt-5"><span className="py-3 px-5 fs-1 bg-warning">{total}</span></p>
        <div className="d-flex flex-row justify-content-center mt-5">
        <button className="btn btn-primary fs-4" onClick={()=>settotal(total+1)}>Increment</button>
        <button className="btn btn-danger ms-3 fs-4" onClick={()=>settotal(total-1)}>Decrement</button>
        <button className="btn btn-success ms-3 fs-4" onClick={()=>settotal(0)} >Reset</button>
        </div>
        </>
    )
}