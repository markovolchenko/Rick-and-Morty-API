import style from "../Locations/locations.module.scss";

function Locations({data}) {
    return (
        <>
            <div className='main-container'>
                <div className={style.container}>
                    {data.map((location, i) => {
                        return (
                            <div key={i}>
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
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Locations