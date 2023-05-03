import Form2 from "./Form2";


const Adress = () => {
    return (
        <>
            <div className="container p-5" data-aos="zoom-in">
                <h2 className="text-center mb-5"><strong>GET IN TOUCH</strong></h2>
                <div className="row">
                    {/* <!-- column first --> */}
                    <Form2 />

                    {/* <!-- column 2nd --> */}
                    <div className="col-12 pt-5 pt-lg-0 col-lg-5 m-auto">
                        <div className="col-12 d-flex flex-row">
                            <p className="fs-1 mx-3"><img src="assets/image/contactus/location.png" alt=" office address" height="35px"
                                width="40px" /></p>
                            <p><strong style={{ fontWeight: 'bold' }}>Our Address:</strong> <br /> UG-21, First Floor, Bestech City Center Mall, Dharuhera, 123106</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-12 d-flex flex-row">
                            <p className="fs-1 mx-3"><img src="assets/image/contactus/smartphone.png" alt="contact" height="40px"
                                width="42px" /></p>
                            <p><strong style={{ fontWeight: 'bold' }}>Telephone number:</strong><br />+91-8059465353 <br /> +91-8979287631</p>
                        </div>
                        <div className="w-100"></div>
                        <div className="col-12 pt-2 d-flex flex-row">
                            <p className="fs-1 mx-3"><img src="assets/image/contactus/mail-inbox-app.png" alt="email" height="35px"
                                width="40px" /></p>
                            <p><strong style={{ fontWeight: 'bold' }}>Email address:</strong> <br /> contact@hminnovance.com
                                </p>
                        </div>

                        <div className="w-100"></div>
                        <div className="col-12 pt-2 d-flex flex-row">
                        <p className="fs-1 mx-3"><img src="assets/image/wall-clock.png" alt="email" height="38spx"
                                width="37px" /></p>
                            <p> <strong style={{ fontWeight: 'bold' }} >Open hours:</strong>
                            <br /> Mon-Sat: 9:30 am - 6 pm, <br /> Sunday: CLOSED</p>
                        </div>
                    </div>
                    
                   
                </div>
            </div>
        </>
    )
}
export default Adress;