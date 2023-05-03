import React, { useState } from "react";
const Form2 = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [errName, setErrName] = useState("")
    const [errEmail, setErrEmail] = useState("")
    const [errPhone, setErrPhone] = useState("")
    const [errMessage, setErrmessage] = useState("")
    const isValidName = function (name) {
        return /^[a-zA-Z ]{2,30}$/.test(name)
    }
    const isValidPhone = function (phone) {
        return /^((?!(0))[0-9]{10})$/.test(phone)
    }
    const isValidEmail = function (Email) {
        return /^(?=.{1,30}$)[a-zA-Z0-9_\.]+\@(([a-z])+\.)+([a-z]{2,4})$/.test(Email)
    }

    const nameValidate = (data) => {
        if (data === "") {
            setName(data)
            setErrName("Required")
        } else if (!isValidName(data)) {
            setName(data)
            setErrName("Invalid Name")
        } else {
            setName(data)
            setErrName("")
        }
    }


    const emailValidate = (data) => {
        if (data === "") {
            setEmail(data)
            setErrEmail("Required")
        } else if (!isValidEmail(data)) {
            setEmail(data)
            setErrEmail("Invalid Email Id")
        } else {
            setEmail(data)
            setErrEmail("")
        }
    }

    const phoneValidate = (data) => {
        if (data === "") {
            setPhone(data)
            setErrPhone("Required")
        } else if (!isValidPhone(data)) {
            setPhone(data)
            setErrPhone("Invalid Phone Number")
        } else {
            setPhone(data)
            setErrPhone("")
        }
    }

    const messageValid = (data) => {
        if (data === "") {
            setMessage(data)
            setErrmessage("Required")
        } else {
            setMessage(data)
            setErrmessage("")
        }
    }



    const func = (e) => {
        e.preventDefault();
        if (name === "" && email === "" && phone === "" && message === "") {
            setErrName("Required")
            setErrEmail("Required")
            setErrPhone("Required")
            setErrmessage("Required")
            return;
        } else if (email === "" && phone === "" && message === "") {
            setErrEmail("Required")
            setErrPhone("Required")
            setErrmessage("Required")
            return;
        } else if (phone === "" && message === "") {
            setErrPhone("Required")
            setErrmessage("Required")
        } else if (message === "") {
            setErrmessage("Required")
            return;
        }
        if (name === "") {
            setErrName("Required")
            return;
        }
        if (!isValidName(name)) {
            setErrName("Invalid Name")
            return;

        } else {
            setErrName("")
        }

        if (email === "") {
            setErrEmail("Required")
            return;

        }
        if (!isValidEmail(email)) {
            setErrEmail("Invalid Email Id")
            return;

        } else {
            setErrEmail("")
        }
        if (phone === "") {
            setErrPhone("Required")
            return;

        }
        if (!isValidPhone(phone)) {
            setErrPhone("Invalid Phone Number")
            return;

        } else {
            setErrPhone("")
        }
        if (message === "") {
            setErrmessage("Required")
            return;
        } else {
            setErrmessage("")
        }

        try {
            fetch("http://localhost:4000/contact/email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name, email, phone, message
                })
            }).then((res) => res.json())
                .then(data => {
                    if (data.status === true) {
                        alert(data.message)
                        setEmail("")
                        setName("")
                        setMessage("")
                        setPhone("")
                    }
                    else {
                        // console.log(data)
                    }
                })
                .catch(error => {
                    alert(error)
                })

        } catch (err) {
            alert(err.message)

        }

    }

    return (
        <>
            {/* <h1 className="mb-3"><strong>Drop a Message</strong> </h1> */}
            <div className="col-12 col-lg-5 p-4 rounded formBtn"> {/*  style={{ backgroundColor: 'rgb(246, 246, 246)' }} */}
                <form action=" " className="mb-3">
                    <div className="row conatctForm">
                        <div className="col-12 p-2">

                            <input className="container-fluid" type="text" id="name" name="name" placeholder="Your Name*" required onChange={(e) => nameValidate(e.target.value)} value={name} />
                        </div>
                        <p style={{ color: 'red', fontSize: 15 }}>{errName}</p>
                        {/* <p style={{ color: 'red', fontSize:15 }}>{name === '' ? "Name must be fullfilled" : '' || !nameRegex.test(name) ? "Name can only contain letters and spaces" : ''}</p> */}

                        <div className="col-12 p-2">

                            <input className="container-fluid" type="email" id="email" name="email" placeholder="Your Email Address*" required onChange={(e) => emailValidate(e.target.value)} value={email} />
                        </div>
                        <p style={{ color: 'red', fontSize: 15 }}>{errEmail}</p>
                        {/* <p style={{ color: 'red', fontSize:15 }}>{email === '' ? "Email must be fullfilled" : '' || !emailRegex.test(email) ? "Email is required and should be a valid email address" : ''}</p> */}

                        <div className="col-12 p-2">

                            <input className="container-fluid" type="tel" id="phone" name="phone" placeholder="Your Phone*" required onChange={(e) => phoneValidate(e.target.value)} maxLength="15" minLength="10" value={phone
                            } />
                        </div>
                        <p style={{ color: 'red', fontSize: 15 }}>{errPhone}</p>
                        {/* <p style={{ color: 'red', fontSize:15 }}>{phone === '' ? "Phone Number must be fullfilled" : '' || !phoneRegex.test(phone) ? "Enter a valid phone number" : ''}</p> */}


                        <div className="col-12 mt-lg-0 p-2">

                            <textarea className="container-fluid" name="message" id="msg" cols="60" rows="5" placeholder="Type Message..." onChange={(e) => messageValid(e.target.value)} value={message}></textarea>
                        </div>
                        <p style={{ color: 'red', fontSize: 15 }}>{errMessage}</p>

                    </div>
                </form>
                <button className="p-2" type="submit" value="Submit" onClick={func}>Submit</button>
            </div>
        </>
    )
}
export default Form2;