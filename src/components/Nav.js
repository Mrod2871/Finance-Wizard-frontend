import {login, logout} from '../services/firebase'
import { Link } from 'react-router-dom'

function Nav(props) {
    return(
        <nav>
            <li onClick={login}>Login</li>
            <li onClick={logout}>Logout</li>
        </nav>
    )
}

export default Nav