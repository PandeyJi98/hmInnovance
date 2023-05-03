import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
// get our fontawesome imports

export default class Footer extends Component {
    render() {
        return (
            <>
                {/* contact footer  */}
                <div style={{ backgroundColor: "#f6f6f6" }} className="container-fluid pt-3 pt-3 pb-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 ps-5 text-dark">
                                <h4><b>Looking for the Best IT Business Solutions?</b></h4>
                                <p className="fs-5">H&M Innovance LLP is here, We will help you.</p>
                            </div>
                            <div className="col-12 col-md-6 text-center d-flex justify-content-center align-items-center ">
                                <NavLink to="/ContactUs"><button className="contactbtn">Get a quote</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer */}
                <div className="container-fluid bg-dark">
                    <div className="container p-5 text-white ">
                        <div className="row justify-content-around">
                            <div className="col-12 col-lg-4">
                                <h4>Contact Details</h4>
                                <hr className="container" style={{ height: "5px", backgroundColor: "blueviolet", color: "blueviolet", }} />
                                <ul className="list-unstyled">
                                    <li className="pb-2">UG-21, First Floor, Bestech City Center Mall, Dharuhera, 123106</li>
                                    <li className="pb-2">+91-8059465353</li>
                                    <li className="pb-2">+91-8979287631</li>
                                    <li><h5 className="text-warning">Open hours:</h5>
                                        <p>Mon-Sat: 9:30am - 6pm, <br /> Sunday: CLOSED</p></li>
                                </ul>
                            </div>
                            <div className="col-12 col-lg-4">
                                <h4>Services</h4>
                                <hr className="container" style={{ height: "5px", backgroundColor: "blueviolet", color: "blueviolet", }} />
                                <ul className="list-unstyled">
                                    <li className="pb-1"><NavLink className="text-white" to="/webDesigning">Web Designing</NavLink></li>
                                    <li className="pb-1"><NavLink className="text-white" to="/webDevelopment">Web Development</NavLink></li>
                                    <li className="pb-1"><NavLink className="text-white" to="/appDevelopment">App Development</NavLink></li>
                                    <li className="pb-1"><NavLink className="text-white" to="/digitalMarketing">Digital Marketing</NavLink></li>
                                    <li className="pb-1"><NavLink className="text-white" to="/automatedSystem">Automated System</NavLink></li>
                                    <li className="pb-1"><NavLink className="text-white" to="/softwareDevelopment">Software Development</NavLink></li>
                                    <li className="pb-1"><NavLink className="text-white" to="/businessAnalysis">Business Analysis</NavLink></li>
                                    <li><NavLink className="text-white" to="/socialMediaMarketing">Social Media Marketing</NavLink></li>
                                </ul>
                            </div>
                            <div className="col-12 col-lg-4">
                                <h4>Social Media</h4>
                                <hr className="container" style={{ height: "5px", backgroundColor: "blueviolet", color: "blueviolet",}} />
                                <ul className="list-unstyled">
                                    <li className="pb-2"><a className="text-white" target='_blank' href="https://wa.me/8059465353"><img src='assets\image\SociaI_Icons/Whatsapp.png' style={{height:'25px', width:'26px'}}/>&nbsp;+91-8059465353</a></li>
                                    <li className="pb-2"><a className="text-white" target='_blank' href="mailto:conatct@hminnovance.com"><img src='assets\image\SociaI_Icons/Gmail.png' style={{height:'25px', width:'25px'}} />&nbsp;<span style={{fontSize:'17px'}}>contact@hminnovance.com</span></a></li>
                                    <li className="pb-2"><a className="text-white" target='_blank' href="https://www.facebook.com/profile.php?id=100089962367692"><img src='assets\image\SociaI_Icons/Facebook.png' style={{height:'25px', width:'25px'}} />&nbsp;www.facebook.com</a></li>
                                    <li className="pb-2"><a className="text-white" target='_blank' href="https://www.linkedin.com/company/90863549/admin/"><img src='assets\image\SociaI_Icons/Linkedin.png' style={{height:'25px', width:'25px'}} />&nbsp;www.linkedin.com</a></li>
                                    <li className="pb-2"><a className="text-white" target='_blank' href="https://twitter.com/HMInnovanceLLP"><img src='assets\image\SociaI_Icons/Twitter.png' style={{height:'30px', width:'30px'}} />&nbsp;www.twitter.com</a></li>
                                    <li className="pb-2"><a className="text-white" target='_blank' href="https://www.instagram.com/hminnovancellp/"><img src='assets\image\SociaI_Icons/Instagram.png' style={{height:'33px', width:'30px'}} />&nbsp;www.instagram.com</a></li>
                                    <li className="pb-2"><a className="text-white" target='_blank' href="https://in.pinterest.com/HMINNOVACE/"><img src='assets\image\SociaI_Icons/Pintrest.png'style={{height:'30px', width:'30px'}} />&nbsp;www.pinterest.com</a></li>
                                </ul>
                               
                            </div>
                        </div>
                    </div>
                </div>
                {/* copyright */}
                <div style={{ backgroundColor: 'blueviolet' }} className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-white d-flex justify-content-center">
                            <p className="text-center pt-2">&copy;&nbsp;Copyright All Right Reserved {(new Date().getFullYear())}, H&M Innovance LLP | <a className="text-white" href="#">T&C</a></p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
