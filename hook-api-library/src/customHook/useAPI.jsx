import axios from "axios"
import { useEffect, useState } from "react"

const useAPI = (initialURL) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState(null)

    async function fetchAPI() {
        if (!initialURL) {
            setLoading(false)
            return
        }

        try {
            const res = await axios.get(initialURL)
            setData(res.data)
            setLoading(false)
        } catch (error) {
            setErr(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchAPI()
    }, [initialURL])

    return { data, loading, err }
}
export default useAPI