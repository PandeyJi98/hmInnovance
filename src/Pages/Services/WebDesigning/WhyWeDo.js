const WhyWeDo = () => {
    return (
        <>
            <div className="container mt-5 bg-dark">
                <h2 className="text-center fs-1 text-white lh-base"><b>What we Do.</b></h2>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 m-auto" data-aos="zoom-in-up">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingOne">
                                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                        Website
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Creating a website often starts with a wireframe, which is a basic outline of the pages and content that will be included on the site. Designers then use this wireframe to create a more detailed mockup of the site.
                                        A website is a collection of online content, including text, images, videos, and more, that is organized into web pages. The website is user-friendly for all types of devices.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Custom Application Development
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Custom application development is the designing of software applications for a specific user or group of users within an organization. This custom software is designed to address specific needs within an organization as opposed to more traditional, standard software used by the masses. <br />
                                        -Custom software is tailor-made for your business and eliminates the need to change your business procedures to fit a pre-developed software product.<br />
                                        -The software fits perfectly with your existing business software ecosystem and usually eliminates the need to use multiple applications for specific business functions.<br />
                                        -You can generally save on hardware acquisition costs as the solution is designed with your infrastructure in mind and does not carry unused features that increase hardware requirements.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                        Content Management System
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">A content management system (CMS) is a software application that enables users to create, edit, collaborate on, publish, and store digital content. CMS'es are typically used for Enterprise Content Management (ECM) and Web Content Management (WCM).</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFour">
                                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                        E-commerce Design
                                    </button>
                                </h2>
                                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">An e-commerce website is a perfect opportunity to reach a significant amount of consumers online and increase your sales. E-commerce typically uses the web for at least a part of a transaction's life cycle although it may also use other technologies such as e-mail. Typical e-commerce transactions include the purchase of products or services. There are three areas of e-commerce: online retailing, electronic markets, and online auctions.

                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingFive">
                                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                        Custom Relationship Management
                                    </button>
                                </h2>
                                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Elements of CRM range from a company's website and emails to mass mailings and telephone calls. Social media is one-way companies adapt to trends that benefit their bottom line. The entire point of CRM is to build positive experiences with customers to keep them coming back so that a company can create a growing base of returning customers. Increasingly, the term CRM is being used to refer to the technology systems companies can engage to manage their external interactions with customers at all points during the customer lifecycle, from discovery to education, purchase, and post-purchase.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingSix">
                                    <button className="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                        Application Maintenace
                                    </button>
                                </h2>
                                <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body">Applications maintenance and support focus on the stabilization of your applications, optimization of provided services, and application improvement.
                                        <br />
                                        <strong>The Service includes 3 levels of support for SharePoint-based applications: </strong><br />
                                        -Requests resolution and problem detection on the 2nd level support;<br />
                                        -Problem root cause analysis on the 3rd level support;<br />
                                        -Application modification, bug fixing, testing, documentation update on the 4th level support.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- accordian end -->
    <!-- hm video section start --> */}
        </>
    )
}
export default WhyWeDo;