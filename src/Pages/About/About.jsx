import React from 'react'
import HeadingImage from '../../component/HeadingImage'
import SocialButton from '../../component/SocialButton'
import PageHelmet from '../../component/shared/Pagehelmet'
import Header from '../../component/commonheader/Header'
import Footer from '../../component/shared/Footer'

const About = () => {
    return (
        <>
            {/* <!-- pagehelmet start --> */}
            <PageHelmet pageTitle="H&M Innovance LLP - Best Web Design And Development Company In Gurgaon" />
            {/* <!-- pagehelmet end --> */}

            {/* <!-- header start --> */}
            <Header />
            {/* <!-- header end --> */}

            {/* <!-- about section start --> */}
            <HeadingImage
                image='assets/image/About/about.png'
                title='About'
                previous='Home'
                next='Web Designing'
            />
            {/* <!-- about section end --> */}

            {/* <!-- social buttons start --> */}
            <SocialButton />
            {/* <!-- about text start --> */}
            <div className="container pt-5">
                <div className="row">
                    <h3 className='mb-3'><strong>Who We Are</strong></h3>
                    <div className="col-12 col-lg-6 justify-content-center align-items-center">
                        <div>
                            <p>H&M INNOVANCE LLP is a leading brand in web design and software development. Founded in 2022. H&M INNOVANCE is a global provider of web designing, web development, app development, digital marketing, automated system, software development, and business analysis services. We help businesses increase their online presence and reach their target audiences through our innovative and cutting-edge solutions.

                                We have a team of highly skilled and experienced professionals who are dedicated to delivering quality services that meet the unique needs of our clients. We work closely with our clients to understand their requirements and provide customized solutions that are aligned with their business goals.

                                Our goal is to help businesses grow and succeed in the ever-changing digital landscape. We are committed to providing quality services that are affordable and scalable so that businesses can stay ahead of the competition.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                        <img style={{ maxWidth: "100%", height: "24.563rem" }} src="assets/image/WhoAreWe.png" alt="About Hm Image" />
                    </div>
                </div>
            </div>

            <div className="container pt-3">
                <div className="row">
                
                    
                   
                    <div className="col-12 col-lg-6 order-lg-2 justify-content-center align-items-center" data-aos="zoom-in">
                        <div>
                        <h3 className='mb-3 text-primary'><strong>Why Choose Us</strong></h3>
                            <p>We at H&M INNOVANCE work with a wide range of clients, from small businesses to large corporations. No matter the size or scope of the project, our team is dedicated to providing the best possible service. We believe that our clients deserve the highest quality products and services available, and we work tirelessly to make sure that they get it.
                            Innovation is at the heart of everything we do. We are constantly exploring new ways to improve our products and services, and we are always looking for better ways to serve our clients. We believe that innovation is the key to success, and we are always looking for new ways to improve our business.We are proud of the work we do, and we are committed to providing the best possible service to our clients.
                             We believe that our work makes a difference in the world, and we are committed to making a positive impact on the lives of our clients.</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-lg-1 d-flex justify-content-center align-items-center pb-2" data-aos="zoom-out">
                        <img style={{ maxWidth: "100%", height: "24.563rem" }} src="assets/image/WhyChooseUs.png" alt="About Hm Image" />
                    </div>

                </div>
            </div>
            {/* <!-- about gallry --> */}

            <div className="container mt-5">
            <div className='text-center mb-4'><h2><strong>Our Team</strong></h2></div>

                <div className="row d-flex justify-content-center align-items-evenly">
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex flex-column">
                        <div>
                           <img className='img-fluid' src="./assets/image/gallery/IMG_8472.jpg" style={{height:'350px', width:'400px'}} />
                        </div>
                       <div>
                         < h3 className='pt-2'><strong>Manish Choudhary</strong></h3>
                         <p>Co-Founder M.Tech Data Science, PGDM A.I & M.L. with 8+ Years Experience</p>
                        </div>
                    </div>
                   
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex flex-column">
                        <div>
                           <img className='img-fluid' src="./assets/image/gallery/IMG-8471.jpg" style={{height:'350px', width:'500px'}} />
                        </div>
                        <div>
                         < h3 className='pt-2'><strong>Hemant</strong></h3>
                         <p>Co-Founder M.Tech Data Science</p>
                        </div>
                       {/* <div>
                           < h3 className='mt-0 p-0'><strong>Hemant</strong></h3>
                          <p>Co-Founder M.Tech Data Science</p>
                       </div> */}
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex flex-column">
                        <div>
                             <img className='img-fluid' src="./assets/image/gallery/IMG_8505.jpg" style={{height:'350px', width:'400px'}} />
                        </div>
                        <div className='fs-0' >
                          < h3 className='pt-2'><strong>Sandeep Sharma</strong></h3>
                          <p>2+ Years Experience as a Full Stack Developer using MERN.</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex flex-column">
                          <div>
                          <img className='img-fluid' src="./assets/image/gallery/satish.jpg" style={{height:'350px', width:'400px'}} />

                         </div>
                          <div>
                              < h3 className='pt-2'><strong>Satish Yadav</strong></h3>
                              <p>B.Tech in Computer Science, having 8 years of Experience in Server & Networking</p>
                          </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex flex-column">
                        <div>
                          <img className='img-fluid' src="./assets/image/gallery/Geetika.webp" style={{height:'350px', width:'400px'}} />
                        </div>
                       <div>
                           < h3 className='pt-2'><strong>Geetika Oberoi</strong></h3>
                            <p>5+ Years Experience in Digital Marketing</p>
                       </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex flex-column">
                        <div>
                           <img className='img-fluid' src="./assets/image/gallery/Harsha.JPG" style={{height:'350px', width:'400px'}} />
                        </div>
                       <div>
                          < h3 className='pt-2'><strong>Harsha</strong></h3>
                          <p>Digital Marketing</p>
                       </div>
                    </div>
                   

                </div>
            </div>


            {/* footer start */}
            <Footer />
            {/* footer end */}
        </>
    )
}

export default About