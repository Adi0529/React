import { useEffect, useState } from "react"
import useAPI from "../customHook/useAPI"

export default function Users() {
    const [user, setUser] = useState([])
    const { data } = useAPI("https://fakestoreapi.com/users")

    useEffect(() => {
        if (Array.isArray(data)) {
            setUser(data)
        }
    }, [data])

    return (
        <>
            <h1 className="mb-2 text-center text-decoration-underline">Users</h1>
            <div className="container">
                {user.map((u, i) => (
                    <div key={i} className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">{u.name.firstname} {u.name.lastname}</h5>
                            <p className="card-text">{u.username}</p>
                            <p className="card-text">{u.email}</p>
                            <p className="card-text">{u.address.street} {u.address.city}</p>
                            <button className="btn btn-primary">View Profile</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}