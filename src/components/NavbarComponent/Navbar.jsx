import {Link} from 'react-router-dom'
import "./navbar.css"
import { useState } from 'react';
import logo from '../../assets/images/image.png';
export default function Navbar(){
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return(
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            <nav className='navbar'>
                <Link to="/monsters" className="navbar-logo" onClick={closeMobileMenu}>
                    <img src={logo} alt="logo"/>
                    MonsterSanctuary
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}>
                    </i>
                </div>
                    <ul className={click?'nav-menu active':'nav-menu'}>
                        <li className='nav-item'>
                            <Link className='nav-links' to="/monsters" onClick={closeMobileMenu}>Home</Link>
                        </li>
                        {/* <li>
                            <Link to="/about">About</Link>
                        </li> */}
                    </ul>
            </nav>
        </>
    )
}