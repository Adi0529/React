import { useEffect, useState } from "react"
import useAPI from "../customHook/useAPI"
import { Link } from "react-router-dom"

function Fruits() {
  const [fruit, setFruit] = useState([])
  const [search,setSearch]=useState("")
  const { data } = useAPI("https://dummyjson.com/recipes")

  useEffect(() => {
    if (data?.recipes) {
      setFruit(data.recipes)
    }
  }, [data])
  const filteredFruits = fruit.filter((f) => 
    f.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <>
      <h2 className="my-2 fw-bolder text-center text-decoration-underline">Recipes</h2>
      <form className="d-flex w-50  mx-auto justify-content-center" role="search">
        <input className="form-control  w-50" type="search" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} aria-label="Search" />
      </form>
      <div className="container-fluid my-3 row d-flex justify-content-center">
        {
          filteredFruits.map((f, i) => {
            return (
              <div className="col-3 m-2">
                <div className="card" key={i} style={{ width: "20rem" }}>
                  <img src={f.image} className="card-img-top" alt={f.name} />
                  <div className="card-body">
                    <h5 className="card-title">{f.name}</h5>
                    <p className="card-text">
                      mealtype: {f.mealType?.map((e, index) => <span key={index}>{e} </span>)}
                    </p>
                    <Link to="/recipedetail" state={{ recipeData: f }} href="#" className="btn btn-primary">View Details</Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Fruits
