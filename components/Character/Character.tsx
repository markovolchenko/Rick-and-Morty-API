import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react";


const Character = () => {
    const [char, setChar] = useState([])

    // const {userId} = useParams();
    const {userId} = useParams();

    useEffect(() => {

        async function fetchInfo() {
            const res = await fetch(`https://rickandmortyapi.com/api/character/${userId}`)
            const data = await res.json()
            setChar(data)
        }

        fetchInfo()

    })


    return (
        <div>{char.name}</div>
    )
}
export default Character
