import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Service extends Component {
    render() {
        return (
            <div className="container pb-lg-5 mt-4" >
                <h2 className="mb-5 text-center"><strong>Our Services</strong></h2>
                <div className="row" >
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-md-5 mb-xl-0" data-aos="zoom-out-up">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/web_design.webp' className="card-img-top" alt="web designing" height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Web Designing</strong></h2>
                                <p className="card-text">Web design is the process of creating the visual and functional elements of a website, with the goal
                                    of making the site easy to use, visually appealing, and accessible to a wide range of users. A web
                                    designer....</p>
                                <NavLink to="/WebDesigning" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-md-5 mb-xl-0" data-aos="zoom-out-down">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/web_development.webp' className="card-img-top" alt="Web Development" height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Web Development</strong></h2>
                                <p className="card-text">Web development is the process of creating and maintaining websites. It
                                    includes everything from planning and designing the website to coding and
                                    creating the content. Web developers use a variety.....</p>
                                <NavLink to="/WebDevelopment" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-md-5 mb-xl-0"data-aos="zoom-out-left">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/digital_marketing.webp' className="card-img-top" alt="Digital Marketing" height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Digital Marketing</strong></h2>
                                <p className="card-text">Digital Marketing is a form of marketing that uses digital channels to promote and sell products or
                                    services. It can be used to reach a wide variety of customers in a short period of time. Digital
                                    marketing....</p>
                                <NavLink to="/DigitalMarketing" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3  mb-5 mb-md-5 mb-xl-0" data-aos="zoom-out-right">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/software_development.webp' className="card-img-top" alt="Software Development" height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Software Development</strong></h2>
                                <p className="card-text">Software development refers to the process of designing, writing, testing, and maintaining software.
                                    It is a multi-step process that involves gathering requirements, creating a design, writing code......</p>
                                <NavLink to="/SoftwareDevelopment" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-lg-5">
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-md-5 mb-xl-0" data-aos="zoom-in-right">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/automated_system.webp' className="card-img-top" alt="Automated System" height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Automated System</strong></h2>
                                <p className="card-text ">Automated systems are used in a variety of industries, including manufacturing,
                                    transportation, and finance, to increase efficiency, reduce costs, and and improve accuracy. They......</p>
                                <NavLink to="/AutomatedSystem" className="btn btn-primary ">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-md-5 mb-xl-0" data-aos="zoom-in-up">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/business_analysis.webp' className="card-img-top" alt="Business Analysis" height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Business Analysis</strong></h2>
                                <p className="card-text">Business analysis refers to the practice of identifying and defining business requirements and
                                    determining solutions to business problems. The goal of business analysis is to align...</p>
                                <NavLink to="/BusinessAnalysis" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-5 mb-xl-0" data-aos="zoom-in-down">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/social_media.webp' className="card-img-top" alt="Business Analysis" height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>Social Marketing Media</strong></h2>
                                <p className="card-text">Social media marketing is a form of digital marketing that involves promoting products, services, or
                                    brands through social media platforms. It involves creating and sharing content, such as text....</p>
                                <NavLink to="/SocialMediaMarketing" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-xl-3 mb-md-5 mb-xl-0" data-aos="zoom-in-left">
                        <div className="card m-auto h-100">
                            <img src='assets/image/services/App_development.webp' className="card-img-top" alt="Business Analysis" height="210" width="210" />
                            <div className="card-body">
                                <h2 className="card-title fs-4"><strong>App Development</strong></h2>
                                <p className="card-text">App development is the process of creating software applications that run on various platforms such
                                    as smartphones, tablets, and computers. This process involves the design, coding, testing....</p>
                                <NavLink to="/AppDevelopment" className="btn btn-primary">Read More</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
