
import { Link } from "react-router-dom";
const HeadingImages = ({ image, title, previous, next }) => {
  return (
    <>
      <div className="container-fluid aboutSecImg " style={{
        backgroundImage: `linear-gradient(rgba(0, 5, 5, 0.8), rgba(8, 5, 0, 0.8)),
        url("${image}")`
      }}>

        <div className="row contactSec" >
          <div className="col-12  d-flex justify-content-center text-white">
            <h1>{title}</h1>
          </div>
          <div className="col-12 d-flex justify-content-center text-white fs-4">
            <Link to="/home"><h6 className="fs-5 text-warning">{previous}&nbsp;&nbsp;&nbsp;</h6></Link>
            <p className="text-white"><img src="assets/image/right-arrow.png" alt=" right-arrow" height="25px" width="25px" />&nbsp;&nbsp;&nbsp;</p>
          <Link to={`/${next.replace(/ +/g, "")}`}><p className="fs-5">{next}</p></Link>  
          </div>
        </div>
      </div>
    </>
  )
}
export default HeadingImages;