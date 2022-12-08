import { useState } from "react";
import { Link } from "@remix-run/react";


// svgs
import SvgHamburger from "../assets/svg/Hamburger";
import SvgLogo from "../assets/svg/Logo";
import SvgClose from "../assets/svg/Close";



// declaring types for toggle menu state
interface MenuProps{
    isOpen: boolean;
    setIsOpen:  React.Dispatch<React.SetStateAction<boolean>>;
  }

  interface LinkProps{
    to: string;
    text: string;
  }

  function NavLink({to, text}: LinkProps){
    return(
        <li>
        <Link to={to}>{text}</Link>
        </li>
    )
  }

export default function NavBar({isOpen, setIsOpen}: MenuProps) {
    // const [isOpen, setIsOpen]= useState(false)

    const toggleMenu = () => {
        console.log('start',isOpen)
         setIsOpen(isOpen =>!isOpen)
     
     }
    
    return (
        <div>
            <nav className="nav bg-white">
                <div className="nav_bar">
                    <div
                        className="flex-row align-center nav_icons"
                    >
                            {isOpen && <i className="mobile-only nav_icon" onClick={toggleMenu}>
                            <SvgClose/>
                            </i> }
                            {!isOpen &&<i className="mobile-only nav_icon"onClick={toggleMenu}>
                            <SvgHamburger/>
                            </i>}
                        <div className="nav_logo">
                            <i>
                                <SvgLogo/>
                            </i>
                        </div>
                    </div>
                    <div  className={isOpen? ".overlay": ""}>
                        <div
                            id="nav-links" 
                            className={isOpen? "show nav_links": "hide nav_links"}>
                                <ul >
                                    <NavLink 
                                    to="/about"
                                    text="About"
                                    />
                                    <NavLink 
                                    to="/careers"
                                    text="Careers"
                                    />
                                    <NavLink 
                                    to="/locations"
                                    text="Locations"
                                    />
                                </ul>
                                <button>Get Scootin</button>
                        </div>
                    </div>
                </div>
             
            </nav>
        </div>
    );
  }
  