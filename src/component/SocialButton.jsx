import React from 'react'

const SocialButton = () => {
    return (

        <>
            <div style={{ zIndex: "1" }} className="btn2">
                <p className="text-white">&nbsp;Contact Us</p>
                <div style={{ zIndex: "1"}} className="form" id="contactUs">
                    <form className="container-fluid " action=""  >
                        <h4 style={{ color: "blueviolet" }}>Contact Us</h4>
                        <input className="container-fluid" type="text" id="name2" name="name" placeholder="Name*" autoComplete="off" required /><br /><br />
                        <input className="container-fluid" type="text" name="phone" id="phone2" placeholder="Phone*" autoComplete="off" required /><br /><br />
                        <input className="container-fluid" type="text" name="email" id="email2" placeholder="Email*" autoComplete="off" required /><br /><br />
                        <input className="container-fluid" type="text" name="message" id="message2" placeholder="Message" autoComplete="off" /><br /><br />
                    </form>
                    <input className="container-fluid" style={{ backgroundColor: "blueviolet" }} type="submit" value="Submit" onClick='hello()' />
                </div>
            </div>
            <div style={{ zIndex: "1", paddingTop:'6px'}} className="btn3 bg-success">
                <a target='_blank' href="https://wa.me/8059465353"><img className="logo" src="./assets/icons/whatsapp.png" alt="Innovative Web Devlopment Company In Delhi NCR" height="25px" width="25px" /></a>
            </div>
            <div style={{ zIndex: "1", paddingTop:'6px' }} className="btn4 bg-primary">
                <a target='_blank' href="tel:8059465353"><img className="logo" src="./assets/icons/phone.png" alt="Innovative Web Devlopment Company In Delhi NCR" height="22px" width="22px" /></a>
            </div>
        </>
    )
}

export default SocialButton