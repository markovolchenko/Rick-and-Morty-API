import style from './characters.module.scss'
import {Link} from "react-router-dom";
import StarAnimation from "../Star-Animation/Star-Animation";

function Characters({data}) {
    return (
        <>
            <div className='animation-wrap'>
                <StarAnimation/>
                {data.length ?
                    <div className='main-container'>
                        <div className={style.container}>
                            {data.map((character, i) => {
                                return (
                                    <Link to={`/characters/${character.id}`} key={i}>
                                        <div
                                            className={character.status === 'Alive' ? style.box : character.status === 'Dead' ? style.box_dead : character.status === 'unknown' ? style.box_unknown : style.box}>
                                            <img src={character.image} alt="image"/>
                                            <div className={style.description}>
                                                <div><h2
                                                    className={character.status === 'Alive' ? style.name : character.status === 'Dead' ? style.name_dead : character.status === 'unknown' ? style.name_unknown : style.name}>{character.name}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                            }
                        </div>
                    </div>
                    :
                    null

                }
            </div>
        </>
    )
}

export default Characters
