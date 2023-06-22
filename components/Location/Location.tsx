import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const Location = () => {
    const [loc, setLoc] = useState([])

    const {locId} = useParams();

    useEffect(() => {

        async function fetchLoc() {
            const res = await fetch(`https://rickandmortyapi.com/api/location/${locId}`)
            const locdata = await res.json()
            setLoc(locdata)
        }

        fetchLoc()

    })

    return (
        <div>
            <ul style={{color: 'red'}}>
                <li>{loc.name}</li>
                <li>{loc.type}</li>
                <li>{loc.dimension}</li>
            </ul>
        </div>
    )
}
export default Location