import React from 'react'

const Test = () => {
    return (
        <>
            {/* <!-- reviews start --> */}
            <div className="container p-5">
                <div className="row d-flex flex-column-reverse flex-lg-row ">
                    <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center mt-4 mt-lg-0" data-aos="slide-up">
                        <img className='img-fluid' src="assets/image/feedback.png" alt="Best Software Devlopment Company In Delhi NCR" />
                    </div>
                    <div className="col-12 col-lg-8 text-dark"  data-aos="slide-right">
                        <h5>Testimonials</h5>
                        <h2><b>Few of Our Client’s feedback of users!</b></h2>
                        <p>Clients Reviews:</p>
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner p-3">
                                <div style={{ backgroundColor: "#f6f6f6" }} className="carousel-item active pb-5" data-bs-interval="3000">
                                    <p className="mb-3 p-2">It's remarkable how you have managed to keep everything running smothly. I really apperciate your smart work and perserverance.</p>
                                    <div className="row">
                                        <div className="col-12 col-md-4 d-flex mb-4 mb-md-0 justify-content-center justify-content-md-end">
                                            <img src="./assets/image/review/client_1.jpg" className="d-block" style={{ width: "100px", height: "80px", borderRadius: '50%' }} alt="Innovative Web Design and Development Company In Delhi NCR" />
                                        </div>
                                        <div className="col-12 col-md-8 d-flex">
                                            <h5><strong>Bhagwan Singh<p>Compnay Name: Goodwill homz</p></strong></h5>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "#f6f6f6" }} className="carousel-item pb-5" data-bs-interval="2000">
                                    <p className="mb-3 p-2">Your work looks great! It is clear that you care about your work, and I appreciate that you asked the client about their design preferences before creating their website.</p>
                                    <div className="row">
                                        <div className="col-12 col-md-4 d-flex mb-4 mb-md-0 justify-content-center justify-content-md-end">
                                            <img src="./assets/image/review/client_2.jpg" className="d-block" style={{ width: "100px", height: "80px", borderRadius: '50%' }} alt="image3" />
                                        </div>
                                        <div className="col-12 col-md-8 d-flex">
                                            <h5><strong>Neeraj Singh<p>Company Name: Jobsmart HR Solutions</p></strong></h5>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "#f6f6f6" }} className="carousel-item pb-5" data-bs-interval="2000">
                                    <p className="mb-3 p-2">I am pleased with your determination to finish this project. Your helpful attitude shows you are ready to take on new challenges and grow with the company.</p>
                                    <div className="row">
                                        <div className="col-12 col-md-4 d-flex mb-4 mb-md-0 justify-content-center justify-content-md-end">
                                            <img src="./assets/image/review/client_1.jpg" className="d-block" style={{ width: "100px", height: "80px", borderRadius: '50%' }} alt="image3" />
                                        </div>
                                        <div className="col-12 col-md-8 d-flex">
                                            <h5><strong>Bhagwan Singh <p>Compnay Name: Syndicate Realtors</p></strong></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev nextSlider" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next prevSlider" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- reviews end --> */}
        </>
    )
}

export default Test;


