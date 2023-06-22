import style from "../Locations/locations.module.scss";
import {Link} from "react-router-dom";
import StarAnimation from "../Star-Animation/Star-Animation";

function Locations({locdata}) {
    return (
        <>
            <div className='animation-wrap'>
                <StarAnimation/>
                <div className='main-container'>
                    <div className={style.container}>
                        {locdata.map((location, i) => {
                            return (
                                <Link to={`/locations/${location.id}`} key={i}>
                                    <div className={style.box}>
                                        <div className={style.description}>
                                            <ul>
                                                <li>
                                                    <div><h2 className={style.name}>{location.name}</h2></div>
                                                </li>
                                                <li>
                                                    <div className={style.text_box}>
                                                        <span>type:</span>
                                                        <p>{location.type}</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className={style.text_box}>
                                                        <span>dimension:</span>
                                                        <p>{location.dimension}</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className={style.text_box}>
                                                        <span>Created:</span>
                                                        <p>{location.created}</p>
                                                    </div>
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
            </div>
        </>
    )
}

export default Locations