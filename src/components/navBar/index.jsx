import React from "react";
import {useState} from 'react';
import {FaBars, FaDesktop} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import {Link} from 'react-router-dom';
import './styles.scss';

const data = [
    {
        label: "Home",
        to : "/"
    },
    {
        label: "About Me",
        to : "/about" 
    },
    {
        label: "Resume",
        to : "/resume" 
    },
    
    {
        label: "Portfolio",
        to : "/portfolio" 
    },  
    
    {
        label: "Skills",
        to : "/skills" 
    },
    {
        label: "Contact",
        to : "/contact" 
    },


]
const NavBar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
setToggleIcon(!toggleIcon);
    }
    return(
        <div>
            <nav className ="navbar">
                <div className= "navbar__container">
<Link to={'/'} className="navbar__container__logo"> 
<FaDesktop size ={30} />
<span className="navbar__logo-text">Aq Developer</span>
</Link>
                </div>
                <ul 
                className={`navbar__container__menu ${toggleIcon ? "active" : "" }`}
                >
                    
                        {data.map((item, key) => (
                            <li key={key} className="navbar__container__menu__item">
                                <Link to={item.to} className="navbar__container__menu__item__links"> 
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }

                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
{
    toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
}
                </div>
            </nav>
        </div>
    )
}
export default NavBar;
