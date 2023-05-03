import React, { Component } from 'react'

export default class Whyhm extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="col-12 d-flex justify-content-center">
                            <img src="https://i.gifer.com/6HLG.gif" alt="hmlogo" height="250px" width="200px" />
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <h2 className="text-center mb-3"><b>Why Choose HM Innonvance LLP</b></h2>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7  m-lg-auto  d-flex justify-content-center">
                        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button className='bg-dark' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button className='bg-dark' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button className='bg-dark' type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner pb-4">
                                <div className="carousel-item active" data-bs-interval="4000">
                                    <p style={{ textAlign: "justify" }}>It’s our attention to the small stuff, scheduling of timelines and keen project management that makes us stand out from the rest. We are creative, while keeping a close eye on the calendar and your budget.</p>
                                </div>
                                <div className="carousel-item" data-bs-interval="3000">
                                    <p style={{ textAlign: "justify" }}> We bring our diverse background of advertising, design, branding, public relations, research and strategic planning to work for your company. Not only will your materials look great – they will get results.</p>
                                </div>
                                <div className="carousel-item" data-bs-interval="3000">
                                    <p style={{ textAlign: "justify" }}>Our prices are competitive and fair. There are no surprise bills. Any unexpected or additional expenses must be pre-approved by you. That’s how we would like to be treated, and that is how our clients are treated.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
