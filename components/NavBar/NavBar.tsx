import style from './navbar.module.scss'
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={style.wrap}>
            <ul className={style.list}>
                <li>
                    <Link to='/' className={style.item}><span className={style.text}>Home</span></Link>
                </li>
                <li>
                    <Link to='/characters' className={style.item}><span className={style.text}>Characters</span></Link>
                </li>
                <li>
                    <Link to='/locations' className={style.item}><span className={style.text}>Locations</span></Link>
                </li>
            </ul>
        </nav>
    )
}
export default NavBar