import React from 'react'
import './Navbar.css'
import logo from '../accets/shiv_studio.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary header_class">
                <div class="container-fluid">
                    <div className='divofbrand_class'>
                        <img className='navlogo_class' src={logo}></img>
                        <div className='header_div_class'>
                        <h1 className="brandname_class" href="/">Fillmmaker</h1>
                        <h4 className="ownername_class">Goswami Karan</h4>
                        </div>
                    </div>
                    <button class="navbar-toggler buttonline_class" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon threeline_class"></span>
                    </button>
                    <div class="collapse navbar-collapse divofmenu_class" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 divofmenu_class">
                            <li class="nav-item">
                                <Link class="nav-link active options_class" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link options_class" to="/Teaser">Teaser</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link options_class" to="/Highlights">Highlights</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link options_class" to="/Aboutus">About us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
