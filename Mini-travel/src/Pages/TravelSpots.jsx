import Card from "../Components/Card"

const TravelSpots = ({ data, deleteTour, refreshTours }) => {

  if (data.length === 0) {
    return (
      <div className="text-center mt-5">
        <h1>No Tours Left</h1>

        <button
          className="btn btn-primary mt-3"
          onClick={refreshTours}
        >
          Refresh Tours
        </button>
      </div>
    )
  }

  return (
    <>
      <h1 className="text-center p-4 bg-primary text-white mb-4">
        Travel Spots
      </h1>

      <div className="container">
        <div className="row justify-content-center">

          {
            data.map((item) => {
              return (
                <div className="col-md-4 mb-4" key={item.id}>
                  <Card
                    data={item}
                    deleteTour={deleteTour}
                  />
                </div>
              )
            })
          }

        </div>
      </div>
    </>
  )
}

export default TravelSpots