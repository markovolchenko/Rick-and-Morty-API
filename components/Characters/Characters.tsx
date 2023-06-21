import style from './characters.module.scss'
import {Link} from "react-router-dom";

function Characters({data}) {
    return (
        <>
            <div className='main-container'>
                <div className={style.container}>
                    {data.map((character, i) => {
                        return (
                            <Link to={`/characters/${character.id}`} key={i}>
                                <div className={style.box}>
                                    <img src={character.image} alt="image"/>
                                    <div className={style.description}>
                                        <ul>
                                            <li>
                                                <div className={style.text_box}><h2
                                                    className={style.name}>{character.name}</h2></div>
                                            </li>
                                            <li>
                                                <div className={style.text_box}><span>Status:</span>
                                                    <p>{character.status}</p></div>
                                            </li>
                                            <li>
                                                <div className={style.text_box}><span>Species:</span>
                                                    <p>{character.species}</p></div>
                                            </li>
                                            <li>
                                                <div className={style.text_box}><span>Gender:</span>
                                                    <p>{character.gender}</p></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Characters
