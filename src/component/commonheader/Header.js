import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <>
                {/* navbar */}
                <nav className="navbar navbar-expand-md sticky-top nav-shadow" style={{ height: "81px", backgroundColor: "#e7dae0" }}> 
                    <div className="container-fluid" style={{ width: "100%", backgroundColor: '#e7dae0' }}>
                        <NavLink className="navbar-brand" to='/'><img src='assets/image/logoHM.png' alt="logo" style={{ height: "60px", width: "80px", }} /></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-3" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" aria-current="page" to="/Home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" to="/About">About</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" role="button" data-bs-toggle="dropdown" aria-expanded="false">Services</NavLink>
                                     <div>
                                     <ul className="dropdown-menu  text-dark fs-6" style={{backgroundColor:'#FFFFFF'}}>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/WebDesigning">Web Designing</NavLink></li>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/WebDevelopment">Web Development</NavLink></li>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/AppDevelopment">App Development</NavLink></li>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/SoftwareDevelopment">Software Development</NavLink></li>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/DigitalMarketing">Digital Marketing</NavLink></li>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/AutomatedSystem">Automated System</NavLink></li>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/BusinessAnalysis">Business Analysis</NavLink></li>
                                        <li><NavLink style={{ fontWeight: "500" }} className="dropdown-item" to="/SocialMediaMarketing">Social Media Marketing</NavLink></li>
                                    </ul>
                                     </div>
                                   
                                </li>
                                <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" aria-current="page" to="/Gallery">Gallery</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" aria-current="page" to="/MYBScholarship">MYB Scholarship</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="active text-dark nav-link ms-3 colorEffect" aria-current="page" to="/ContactUs">Contact us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

