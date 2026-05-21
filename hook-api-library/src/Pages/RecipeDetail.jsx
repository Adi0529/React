import { useState } from "react"
import { useLocation } from "react-router-dom"

function RecipeDetail() {
  const location = useLocation()
  const reci = location.state?.recipeData
  const [recipe] = useState(reci || {})

  if (!recipe.name) {
    return (
      <div className="container mt-5 text-center">
        <div className="alert alert-warning d-inline-block px-5 py-4 shadow-sm" role="alert">
          <h5 className="alert-heading mb-0 fw-bold">No Recipe Selected</h5>
        </div>
      </div>
    )
  }

  return (
    <div className="container px-0 min-vh-100 bg-light">
      <div className="row g-0 min-vh-100">
        <div className="col-md-6 col-lg-5 position-relative">
          <img 
            src={recipe.image} 
            className="w-100 h-100 object-fit-cover position-absolute top-0 start-0 d-none d-md-block" 
            alt={recipe.name} 
          />
          <img 
            src={recipe.image} 
            className="w-100 d-block d-md-none object-fit-cover" 
            style={{ height: "400px" }}
            alt={recipe.name} 
          />
        </div>
        
        <div className="col-md-6 col-lg-7 p-4 p-md-5 d-flex align-items-center bg-white">
          <div className="w-100" style={{ maxWidth: "850px", margin: "0 auto" }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <span className="badge bg-primary text-uppercase px-3 py-2 rounded-pill fs-7">
                {recipe.cuisine}
              </span>
              <div className="bg-warning-subtle text-warning-emphasis px-3 py-1.5 rounded-pill fw-bold fs-6 shadow-sm">
                ★ {recipe.rating} <span className="text-muted fw-normal fs-7">({recipe.reviewCount} reviews)</span>
              </div>
            </div>

            <h1 className="display-5 fw-extrabold text-dark mb-4">{recipe.name}</h1>

            <div className="row g-3 text-center mb-4 p-3 bg-light rounded-4 border mx-0 shadow-inner">
              <div className="col-4 border-end">
                <small className="text-uppercase text-muted fw-semibold d-block mb-1">Prep</small>
                <span className="fs-4 fw-bold text-dark">{recipe.prepTimeMinutes}</span>
                <small className="text-muted ms-1">mins</small>
              </div>
              <div className="col-4 border-end">
                <small className="text-uppercase text-muted fw-semibold d-block mb-1">Cook</small>
                <span className="fs-4 fw-bold text-dark">{recipe.cookTimeMinutes}</span>
                <small className="text-muted ms-1">mins</small>
              </div>
              <div className="col-4">
                <small className="text-uppercase text-muted fw-semibold d-block mb-1">Servings</small>
                <span className="fs-4 fw-bold text-dark">{recipe.servings}</span>
              </div>
            </div>

            <div className="row mb-4 fs-6 bg-body border rounded-3 p-3 mx-0 text-muted">
              <div className="col-6">
                Difficulty: <span className="fw-bold text-dark ms-1">{recipe.difficulty}</span>
              </div>
              <div className="col-6 text-end">
                Calories: <span className="fw-bold text-dark ms-1">{recipe.caloriesPerServing} kcal</span>
              </div>
            </div>

            <hr className="my-4 opacity-10" />

            <div className="mb-4">
              <h3 className="h4 mb-3 fw-bold text-dark">Ingredients</h3>
              <ul className="list-group list-group-flush">
                {recipe.ingredients?.map((ingredient, i) => (
                  <li key={i} className="list-group-item px-0 border-0 py-2 d-flex align-items-center bg-transparent fs-6">
                    <span className="text-primary me-2 fw-bold">✓</span>
                    <span className="text-secondary">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="my-4 opacity-10" />

            <div className="mb-4">
              <h3 className="h4 mb-3 fw-bold text-dark">Instructions</h3>
              <ol className="list-group list-group-flush">
                {recipe.instructions?.map((step, i) => (
                  <li key={i} className="list-group-item px-0 border-0 py-3 d-flex align-items-start bg-transparent fs-6">
                    <span className="badge bg-primary-subtle text-primary rounded-circle me-3 mt-1 p-2 d-flex align-items-center justify-content-center" style={{ width: "32px", height: "32px", minWidth: "32px" }}>
                      {i + 1}
                    </span>
                    <div className="text-secondary lh-lg">{step}</div>
                  </li>
                ))}
              </ol>
            </div>

            <hr className="my-4 opacity-10" />

            <div className="d-flex flex-wrap gap-2 mt-2">
              {recipe.mealType?.map((type, i) => (
                <span key={i} className="badge bg-info-subtle text-info-emphasis px-3 py-2 rounded-pill fw-semibold">
                  {type}
                </span>
              ))}
              {recipe.tags?.map((tag, i) => (
                <span key={i} className="badge bg-light text-secondary border px-3 py-2 rounded-pill font-monospace">
                  #{tag.toLowerCase()}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail
