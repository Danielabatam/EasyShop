import React, {useState} from 'react';
import {Link} from  'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faBorderAll} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BsChevronDown} from 'react-icons/bs'
// import {HiBars3  } from 'react-icons/hi'
// import {RxCross1} from 'react-icons/rx'
import {FaBars, FaTimes} from 'react-icons/fa'

// faChevronDown
library.add(faChevronDown, faBorderAll)
const Navbar = () => {
    const [MobileMenu, setMobileMenu] = useState(false)

    return (
        <>
            <header className={"header"}>
                <div className="container d_flex">
                    <div className="categories d_flex">
                        <span className='fa-solid fa-border-all'></span>
                        <h4>
                            Categories <i className='fa fa-chevron-down'></i>
                        </h4>
                    </div>
                        <div className='navlink'>
                            {/*<ul className="nav">*/}
                            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                                {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
                                <li>
                                    <Link to='/'>home</Link>
                                </li>
                                <li>
                                    <Link to='/pages'>pages</Link>
                                </li>
                                <li>
                                    <Link to='/user'>user account</Link>
                                </li>
                                <li>
                                    <Link to='/vendor'>vendor account</Link>
                                </li>
                                <li>
                                    <Link to='/track'>track my order</Link>
                                </li>
                                <li>
                                    <Link to='/contact'>contact</Link>
                                </li>
                            </ul>

                        <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
                            {/*{MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}*/}
                            {/*{MobileMenu ? <i className='fas fa-times close home-bth'></i> : <i className='fa-solid fa-xmark open'></i>}*/}
                            {MobileMenu ? <i className='fas fa-times bars home-bth'></i> : <i className='fa-solid fa-xmark open'></i>}
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export  default Navbar