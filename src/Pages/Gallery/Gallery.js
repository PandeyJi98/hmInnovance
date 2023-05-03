import PageHelmet from '../../component/shared/Pagehelmet'
import Header from '../../component/commonheader/Header'
import HeadingImage from '../../component/HeadingImage'
import SocialButton from '../../component/SocialButton'
import Footer from '../../component/shared/Footer'

const Gallery = () => {
    return (
        <>
            {/* pagehelmet */}
            <PageHelmet pageTitle="H&M Innovance LLP - is one of the Best IT Solution Comapny in Delhi NCR" />

            {/* Header */}
            <Header />

            {/* <!-- about section start --> */}
            <HeadingImage
                image="assets/image/gallery/gallery.webp"
                title='Gallery'
                previous='Home'
                next='MYB Scholarship'
            />
            {/* <!-- about section end --> */}

            {/* Social button */}
            <SocialButton />

            <div className="container mt-5">

                <div className="row d-flex justify-content-center align-items-evenly">
                    <div className='text-center mb-4'><h2><strong>Our Team</strong></h2></div>

                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src="./assets/image/gallery/IMG-5433.jpg" style={{height:'350px', width:'400px'}} />
                    </div>
                   
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src="./assets/image/gallery/IMG-5429.jpg" style={{height:'350px', width:'400px'}} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src="./assets/image/gallery/IMG-8471.jpg" style={{height:'350px', width:'400px'}} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src="./assets/image/gallery/IMG-4.jpg" style={{height:'350px', width:'400px'}} />
                    </div>
                    {/* <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src="./assets/image/gallery/IMG-5432.jpg" style={{height:'350px', width:'400px'}} />
                    </div> */}
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src="./assets/image/gallery/IMG_8477.jpg" style={{height:'350px', width:'400px'}} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src="./assets/image/gallery/IMG_8474.jpg" style={{height:'350px' , width:'400px'}}/>
                    </div>
                    {/* <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src="./assets/image/gallery/IMG_8478.jpg" style={{height:'350px' , width:'400px'}} />
                    </div> */}
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src="./assets/image/gallery/IMG_8479.jpg" style={{height:'350px' , width:'400px'}}/>
                    </div>
                    
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src="./assets/image/gallery/IMG-5440.jpg" style={{height:'350px' , width:'400px'}}/>
                    </div>
                    
                    {/* <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src="./assets/image/gallery/IMG_8484.jpg" style={{height:'350px' , width:'400px'}} />
                    </div> */}
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src="./assets/image/gallery/IMG_8485.jpg" style={{height:'350px' , width:'400px'}}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src="./assets/image/gallery/IMG_8494.jpg" style={{height:'350px' , width:'400px'}} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src="./assets/image/gallery/IMG_8498.jpg" style={{height:'350px' , width:'400px'}}/>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
                        <img className='img-fluid' src="./assets/image/gallery/IMG_8482.jpg" style={{height:'350px' , width:'400px'}}/>
                    </div>
                </div>
            </div>

            {/* footer */}
            <Footer />
        </>
    )
}
export default Gallery;