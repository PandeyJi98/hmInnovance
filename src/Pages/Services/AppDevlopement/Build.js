
const Build = () => {
    return (
        <>
          {/* <!-- features start --> */}
          <div className="container mb-3 mt-5">
                <div className="row">
                    <div className="col-12 col-lg-7" data-aos="fade-up-right">
                        <h2 className="mb-4 fs-4"><strong>Some of our Mobile Development feature includes:</strong></h2>
                        <div className="row">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <p><img src="assets/image/feature.gif" alt="App Development" height="60px" width="60px" />&nbsp;&nbsp;<strong>Customization</strong></p>
                                    <p><img src="assets/image/feature1.gif" alt="App Development" height="60px" width="60px" />&nbsp;&nbsp;<strong>User Experience</strong></p>
                                    <p><img src="assets/image/feature2.gif" alt="App Development" height="60px" width="60px" />&nbsp;&nbsp;<strong>Reliability</strong></p>
                                    <p><img src="assets/image/feature3.gif" alt="App Development" height="60px" width="60px" />&nbsp;&nbsp;<strong>Uniqueness</strong></p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p><img src="assets/image/feature4.gif" alt="App Development" height="60px" width="60px" />&nbsp;&nbsp;<strong>Security</strong></p>
                                    <p><img src="assets/image/feature5.gif" alt="App Development" height="60px" width="60px" />&nbsp;&nbsp;<strong>Customer Engagement</strong></p>
                                    <p><img src="assets/image/feature6.gif" alt="App Development" height="60px" width="60px" />&nbsp;&nbsp;<strong>Increase Accessibilty</strong></p>
                                    <p><img src="assets/image/feature7.gif" alt="App Development" height="60px" width="60px" />&nbsp;&nbsp;<strong>Support</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5" data-aos="fade-up-left">
                        <img className="img-fluid" src='./assets/image/app.jpg' alt="Innovative App Devlopment Company In Delhi NCR" />
                    </div>
                </div>
            </div>
            <br /><br />

            {/* <!-- app development text end --> */}
            <div className="container mb-5">
                <h2 className="text-center mb-5"><strong>What We Build</strong></h2>
                <div className="row m-auto d-flex justify-content-evenly">
                    <div className="col-12 col-lg-4 mb-5 mb-lg-0  d-flex justify-content-center" data-aos="flip-right">
                        <div className="card cardShadow container" style={{ width: "18rem" }}>
                            <img src="assets/image/android-logo.png" className="card-img-top appImg" alt=" Best Android Development Company In Gurgaon" />
                            <div className="card-body">
                                <h3 className="card-title text-center">Android</h3>
                                <p className="card-text">Android is a mobile operating system based on a modified version
                                    of the Linux kernel and other open-source software, designed primarily for touchscreen mobile
                                    devices such as smartphones and tablets.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 mb-5 mb-lg-0  d-flex justify-content-center" data-aos="flip-down">
                        <div className="card cardShadow container" style={{ width: "18rem" }}>
                            <img src="assets/image/apple.png" className="card-img-top appImg" alt="iOS Development" />
                            <div className="card-body">
                                <h3 className="card-title text-center">iOS</h3>
                                <p className="card-text">iOS is a mobile operating system created and developed
                                    by Apple Inc. exclusively for its hardware. It is the operating system that powers many of the
                                    company's mobile devices, including the iPhone.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-center" data-aos="flip-left">
                        <div className="card cardShadow container" style={{ width: "18rem" }}>
                            <img src="assets/image/cross-platform.png" className="card-img-top appImg" alt="Cross Platform" />
                            <div className="card-body">
                                <h3 className="card-title text-center">Cross Platform</h3>
                                <p className="card-text">A cross-platform computer product or system is
                                    a product or system that can work across multiple types of platforms or operating environments.
                                    Different kinds of cross-platform systems include both hardware and software systems</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
          
        </>
    )
}
export default Build;