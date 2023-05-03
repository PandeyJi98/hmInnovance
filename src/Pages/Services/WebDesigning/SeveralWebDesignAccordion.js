import React from 'react'

const SeveralWebDesignAccordion = () => {
    return (
        <>
            <div className='container mt-5' style={{ background: 'rgb(246, 246, 246)' }}>

                <div className='row pt-3'>
                    <div className='col-12 col-lg-7' data-aos="zoom-out-left">
                        <div className='tp-3'>
                            <p>
                                There are several types of web design, each with its own approach and focus. <strong style={{ fontWeight: 'bold' }}>Some of the most
                                    common types of web design include:</strong>
                            </p>
                        </div>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        <strong>Static Web Design</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        A simple type of web design that uses HTML, CSS, and sometimes
                                        JavaScript to create a basic, fixed-layout website.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        <strong>Dynamic Web Design</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body">
                                        A type of web design that uses database-driven content to create
                                        websites that can be updated frequently and easily.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        <strong>Responsive Web Design</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body">
                                        A type of web design that uses flexible layouts and images to create
                                        websites that adapt to the size and orientation of different devices, such as desktop
                                        computers, laptops, tablets, and smartphones.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                        <strong>Parallax Web Design</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                    <div className="accordion-body">
                                        A type of web design that uses scrolling effects to create a 3D illusion
                                        and a more immersive user experience.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                        <strong>Material Design</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body">
                                        A type of web design that is based on Google&#39;s Material Design principles
                                        and uses flat, 2D elements and a limited color palette to create a clean, modern look and
                                        feel.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                        <strong>Minimalist Web Design</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                                    <div className="accordion-body">
                                        A type of web design that uses a minimalist approach to create
                                        clean, uncluttered websites that focus on simplicity and user experience.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                                        <strong>Microinteractions Design</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
                                    <div className="accordion-body">
                                        A type of web design that focuses on the small, interactive details
                                        that make a website feel alive and responsive to user input.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-12 col-lg-5 mt-4 mt-lg-0 d-flex justify-content-center align-items-center flex-column' data-aos="zoom-out-right">
                            <img src='assets/image/webDesign.gif' className='img-fluid' ></img>
                        <div className='mt-lg-3'>
                            <p className='m-3'>
                                These are just a few of the many types of web design, and many designers will use elements from
                                multiple types to create unique and effective websites that meet the needs of their clients. The type
                                of web design used will depend on the goals of the website and the target audience.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SeveralWebDesignAccordion;