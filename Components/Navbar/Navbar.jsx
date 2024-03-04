import React from 'react'
import './Navbar.css'
import logo from '../accets/logo.jpg'
import AnchorLink from "react-anchor-link-smooth-scroll";

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary header_class">
                <div class="container-fluid">
                    <div className='divofbrand_class'>
                        <img className='navlogo_class' src={logo}></img>
                        <a className="brandname_class" href="/">Fillmmaker</a>
                    </div>
                    <button class="navbar-toggler buttonline_class" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon threeline_class"></span>
                    </button>
                    <div class="collapse navbar-collapse divofmenu_class" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 divofmenu_class">
                            <li class="nav-item">
                                <a class="nav-link active options_class" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link options_class" href="/Reels">Reels</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link options_class" href="/Teaser">Teaser</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link options_class" href="/Highlights">Highlights</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link options_class" href="/Aboutus">About us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
