import { useState } from "react";
import { Link } from "@remix-run/react";

// svgs
import SvgHamburger from "../assets/svg/Hamburger";
import SvgLogo from "../assets/svg/Logo";
import SvgClose from "../assets/svg/Close";

// declaring types for toggle menu state
interface Props{
    isOpen: boolean;
    setIsOpen:  React.Dispatch<React.SetStateAction<boolean>>;
  }

export default function NavBar({isOpen, setIsOpen}: Props) {
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
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/careers">Careers</Link></li>
                                    <li><Link to="/locations">Locations</Link></li>
                                </ul>
                                <button>Get Scootin</button>
                        </div>
                    </div>
                </div>
             
            </nav>
        </div>
    );
  }
  