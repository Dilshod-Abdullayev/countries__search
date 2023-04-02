import React, { useEffect, useState } from 'react'

export default function Coutnies() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json())
            .then(js => setData(js))
    }, []);
    return (
        <div>

        </div>
    )
}
