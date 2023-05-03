const Offer = () => {
    return (
        <>
            <div className="container mt-4 ">
                <h2 className="text-center fs-1 lh-base"><b>What We offer?</b></h2>
            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-12 col-lg-5 mb-5 d-flex justify-content-center align-items-center" data-aos="zoom-out-up">
                        <img className="img-fluid pt-4" src="assets/image/WhatWeOffer.gif" alt="Best Web Development Company In Gurgaon" />
                    </div>
                    <div className="col-12 col-lg-7" data-aos="zoom-out-down">
                        <div className="row mt-4 d-flex justify-content-evenly">
                            <div style={{ backgroundColor: "blueviolet" }} className="col-5">
                                <p className="py-4 fs-5 text-center text-white fw-bold">Website Maintenace Service</p>
                            </div>
                            <div style={{ backgroundColor: "blueviolet" }} className="col-5">
                                <p className="py-4 fs-5 text-center text-white fw-bold">Website ReDesign Service</p>
                            </div>
                        </div>
                        <div className="row mt-4 d-flex justify-content-evenly">
                            <div style={{ backgroundColor: "blueviolet" }} className="col-5">
                                <p className="py-4 fs-5 text-center text-white fw-bold">Banner Design Service</p>
                            </div>
                            <div style={{ backgroundColor: "blueviolet" }} className="col-5">
                                <p className="py-4 fs-5 text-center text-white fw-bold"> Responsive Website</p>
                            </div>
                        </div>
                        <div className="row  mt-4 d-flex justify-content-evenly">
                            <div style={{ backgroundColor: "blueviolet" }} className="col-5">
                                <p className="py-4 fs-5 text-center text-white fw-bold">Flash Design Service</p>
                            </div>
                            <div style={{ backgroundColor: "blueviolet" }} className="col-5">
                                <p className="py-4 fs-5 text-center text-white fw-bold">E-commerce Website</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Offer;