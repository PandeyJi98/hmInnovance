import ReactPlayer from 'react-player'

const Video = () => {
    return (
        <>
            <div className="container mt-5" data-aos="fade-up-left">
                <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                        <video className="video img-fluid" style={{  maxWidth: "100%", height:"calc(.5625 * 80vw)" }} playsInline autoPlay muted loop>
                            <source src="assets/video/video2.mp4" type="video/mp4" />
                            {/* <source src="assets/video/video2.mp4" type="video/mp4" /> */}
                        </video>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Video;

// objectFit: "cover",