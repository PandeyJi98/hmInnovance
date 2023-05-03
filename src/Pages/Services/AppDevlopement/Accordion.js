import React from 'react'

const Accordion = () => {
    return (
        <>
            <div className='container mt-5 mb-5' style={{background:'rgb(246, 246, 246)'}}>
               
                <div className='row pt-3'>
                    <div className='col-12 col-lg-7' data-aos="fade-up-right">
                     <div className='container tp-3'>
                      <p>
                        Application (App) development is the process of creating software applications that run on various
                        platforms such as smartphones, tablets, and computers. <strong style={{fontWeight:'bold'}}> The process of app development involves various steps, including the following:</strong>
                      </p>
                     </div>
                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        <strong>Ideation</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body">
                                        The first step in app development is to come up with an idea for an app that solves
                                        a particular problem or addresses a specific need.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                        <strong>Requirements Gathering</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body">
                                        Once you have an idea, the next step is to gather requirements
                                        and determine the features that the app should have. This involves considering the target
                                        audience, their needs, and the platforms the app will run on.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                        <strong>Design</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                    <div className="accordion-body">
                                        The next step is to create the design and user interface of the app. This involves
                                        creating wireframes and prototypes that provide a visual representation of the app&#39;s
                                        functionality and look and feel.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                        <strong>Development</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                    <div className="accordion-body">
                                        After the design is complete, the app is developed. This involves writing the
                                        code that implements the app&#39;s features and functionality.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingFive">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                        <strong>Testing</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                    <div className="accordion-body">
                                        Once the app is developed, it needs to be tested to ensure that it works as intended
                                        and that there are no bugs or performance issues.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingSix">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                                        <strong>Deployment</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                                    <div className="accordion-body">
                                        After the app has been tested and any issues have been resolved, it is deployed
                                        to app stores such as the Apple App Store or Google Play Store for distribution to users.
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingSeven">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                                        <strong>Maintenance</strong>
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
                                    <div className="accordion-body">
                                        Finally, the app requires ongoing maintenance to ensure that it continues to
                                        work properly and to address any issues that arise over time.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-12 col-lg-5 mt-4 mt-lg-0 d-flex justify-content-center align-items-center flex-column' data-aos="fade-up-left">
                            <img className='img-fluid' src='assets/image/Appdevelopment.gif' alt="Best App Devlopment Company In Delhi NCR"/>
                        <div className='mt-5'>
                            <p className='mt-3'>
                                App development can be a complex and time-consuming process, but the end result can be a
                                valuable tool for solving problems and providing services to users.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Accordion;