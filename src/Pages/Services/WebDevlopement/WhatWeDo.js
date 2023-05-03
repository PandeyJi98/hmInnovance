const WhatWeDo = () => {
    return (
        <>
            <div className="container mt-5 mb-5">   
                {/* <!-- 1st row --> */}
                <div className="conatiner">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-center fs-2"><b>What We Do</b></h3>
                            <p className="text-center">Deliver a great website that proudly represents you and your business.</p>
                            <hr className="bg-primary m-auto" style={{ width: "200px", height: "2px" }} />
                        </div>
                    </div>
                    <div className="row mt-4">
                    <div className="col-12 col-lg-6 order-lg-2" data-aos="fade-up-right">
                            {/* .../public/image/webgif.gif" */}
                            <h4><strong>Design and Development</strong></h4>
                            <p>
                                A website typically consists of several web pages that are interconnected and reside on a single web server. A website may also contain additional resources such as images, videos, and files. <br />
                                Websites are typically created and maintained by individuals, organizations, or firms. Websites can be created and maintained using a variety of web development approaches, including hand-coding, automated tools, and content management systems. <br />
                                Some common features of websites include text, images, hyperlinks, and multimedia. Websites can also include interactive features such as forms, surveys, and polls. <br />
                            </p>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center order-lg-1" data-aos="fade-up-left">
                            <img className="img-fluid" src="assets/image/WebDesignandDevelopment.gif" alt="Innovative Web Development Company In Gurgaon"   />
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    )
}
export default WhatWeDo;