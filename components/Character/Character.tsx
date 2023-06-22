import {useParams} from 'react-router-dom'
import {useEffect, useState} from "react";
import style from '../Character/character.module.scss'


const Character = () => {
    const [char, setChar] = useState([])

    const {charId} = useParams();

    useEffect(() => {

        async function fetchInfo() {
            const res = await fetch(`https://rickandmortyapi.com/api/character/${charId}`)
            const data = await res.json()
            setChar(data)
        }

        fetchInfo()
    })

    return (
        <>
            {
                char ?
                    <div className={style.container}>
                        <img src={char.image} alt="image" className={style.image}/>
                        <div className={style.description}>
                            <h1 className={style.name}>{char.name}</h1>
                            <ul className={style.list}>
                                <li className={style.item}>Status: <span
                                    className={char.status === 'Alive' ? style.item_data : char.status === 'Dead' ? style.item_data__red : char.status === 'unknown' ? style.item_data__blue : style.item_data}>{char.status}</span>
                                </li>
                                <li className={style.item}>Species: <span
                                    className={style.item_data}>{char.species}</span>
                                </li>
                                <li className={style.item}>Gender: <span
                                    className={style.item_data}>{char.gender}</span>
                                </li>
                                <li className={style.item}>Created: <span
                                    className={style.item_data}>{char.created}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    :
                    null
            }
        </>

    )
}
export default Character
