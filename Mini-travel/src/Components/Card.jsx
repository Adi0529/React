const Card = ({ data, deleteTour }) => {

    return (
        <>
            <div className="card" style={{ width: "22rem" }}>

                <img
                    src={data.image}
                    className="card-img-top"
                    style={{ height: "260px", objectFit: "cover" }}
                    alt={data.name}
                />

                <div className="card-body">

                    <h5 className="card-title">
                        {data.name}
                    </h5>

                    <p className="card-text">
                        {data.info.slice(0, 150)}...
                    </p>

                    <p className="card-text">
                        <i>price:</i> ₹{data.price}
                    </p>

                    <button
                        className="btn btn-danger w-100"
                        onClick={() => deleteTour(data.id)}
                    >
                        Delete
                    </button>

                </div>
            </div>
        </>
    )
}

export default Card