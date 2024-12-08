import axios from 'axios'
import React, { useState } from 'react'

function useFetch() {
    const [data, setData] = useState(null)
    const [error, serError] = useState(null)
    const [loading, setLoading] = useState(false)

    const dataFetch = (url) => {
        axios.get(url).then(res => setData(res.data))
        .catch(err => BiSolidCommentError(err.message))
        .finally(() => setLoading(false))
        }

        return [data,dataFetch, loading, error]

}

export  {useFetch}
