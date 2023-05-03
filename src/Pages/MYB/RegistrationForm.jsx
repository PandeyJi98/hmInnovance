import React, { useState } from 'react';
import "./Registration.css"
// import "../../css/style.css"

const Registration = () => {

  const submit = (event) => {
    event.preventDefault();
    console.log("submit", inputFields)
    // Your form submission logic goes here
  };

  const isValidPhone = function (phone) {
    return /^((?!(0))[0-9]{10})$/.test(phone)
  }

  const [inputFields, setInputFields] = useState({
    firstName: "",
    lastName: '',
    fatherName: '',
    phoneNumber: '',
    location: '',
    gender: '',
    educationDetail: '',
    boardDetails: '',
    schoolDetails: '',
    degree: '',
    paymentID: '',
    reference: ''
  });

  const [error, setError] = useState({
    errFirstName: "",
    errLastName: '',
    errFatherName: '',
    errPhoneNumber: '',
    errLocation: '',
    errGender: '',
    errEducationDetail: '',
    errBoardDetails: '',
    errSchoolDetails: '',
    errDegree: '',
    errPaymentID: '',
    errReference: ''
  });
  const isValidName = function (name) {
    return /^[a-zA-Z ]{2,30}$/.test(name)
  }

  const handleInputs = (e) => {
    const { value, name } = e.target;
    if (name === "firstName") {
      if (value === "") {
        setError({
          ...error,
          errFirstName: "Required"
        })
      } else if (!isValidName(value)) {
        setError({
          ...error,
          errFirstName: "Please Enter Valid Name"
        })
      } else {
        setError({
          ...error,
          errFirstName: ""
        })
      }


    }
    if (name === "lastName") {
      if (value === "") {
        setError({
          ...error,
          errLastName: "Required"
        })
      } else if (!isValidName(value)) {
        setError({
          ...error,
          errLastName: "Please Give Valid Name"
        })
      } else {
        setError({
          ...error,
          errLastName: ""
        })
      }

    }
    if (name === "fatherName") {
      if (value === "") {
        setError({
          ...error,
          errFatherName: "Required"
        })
      } else if (!isValidName(value)) {
        setError({
          ...error,
          errFatherName: "Please Give Valid Name"
        })
      } else {
        setError({
          ...error,
          errFatherName: ""
        })
      }

    }

    if (name === "phoneNumber") {
      if (value === "") {
        setError({
          ...error,
          errPhoneNumber: "Required"
        })
      } else if (!isValidPhone(value)) {
        setError({
          ...error,
          errPhoneNumber: "Please Give Valid Phone Number"
        })
      } else {
        setError({
          ...error,
          errPhoneNumber: ""
        })
      }

    }
    if (name === "location") {
      if (value === "") {
        setError({
          ...error,
          errLocation: "Required"
        })
      } else if (!isValidName(value)) {
        setError({
          ...error,
          errLocation: "Please Enter Valid Location"
        })
      } else {
        setError({
          ...error,
          errLocation: ""
        })
      }

    }
    if (name === "gender") {
      if (value === "") {
        setError({
          ...error,
          errGender: "Required"
        })
      } else {
        setError({
          ...error,
          errGender: ""
        })
      }

    }
    if (name === "educationDetail") {
      if (value === "") {
        setError({
          ...error,
          errEducationDetail: "Required"
        })
      } else {
        setError({
          ...error,
          errEducationDetail: ""
        })
      }

    }
    if (name === "boardDetails") {
      if (value === "") {
        setError({
          ...error,
          errBoardDetails: "Required"
        })
      } else if (!isValidName(value)) {
        setError({
          ...error,
          errBoardDetails: "Please Enter Valid Board Name"
        })
      } else {
        setError({
          ...error,
          errBoardDetails: ""
        })
      }
    }
    if (name === "schoolDetails") {
      if (value === "") {
        setError({
          ...error,
          errSchoolDetails: "Required"
        })
      } else if (!isValidName(value)) {
        setError({
          ...error,
          errSchoolDetails: "Please Give Valid School Name"
        })
      } else {
        setError({
          ...error,
          errSchoolDetails: ""
        })
      }




    }
    if (name === "degree") {
      if (value === "") {
        setError({
          ...error,
          errDegree: "Required"
        })
      } else if (!isValidName(value)) {
        setError({
          ...error,
          errDegree: "Please Enter Valid degree"
        })
      } else {
        setError({
          ...error,
          errDegree: ""
        })
      }

    }
    if (name === "paymentID") {
      if (value === "") {
        setError({
          ...error,
          errPaymentID: "Required"
        })
      } else if (!isValidName(value)) {
        setError({
          ...error,
          errPaymentID: "Please Enter Valid Payment Id"
        })
      } else {
        setError({
          ...error,
          errPaymentID: ""
        })
      }

    }

  


  setInputFields({
    ...inputFields,
    [name]: value
  })
}


const submitFunc = (e) => {
  e.preventDefault()

  try {
    if (inputFields.firstName === "" &&
      inputFields.lastName === '' &&
      inputFields.fatherName === '' &&
      inputFields.phoneNumber === '' &&
      inputFields.location === '' &&
      inputFields.gender === '' &&
      inputFields.educationDetail === '' &&
      inputFields.boardDetails === '' &&
      inputFields.schoolDetails === '' &&
      inputFields.degree === '' &&
      inputFields.paymentID === '' ) {
      setError({
        errFirstName: "Require",
        errLastName: 'Require',
        errFatherName: 'Require',
        errPhoneNumber: 'Require',
        errLocation: 'Require',
        errGender: 'Require',
        errEducationDetail: 'Require',
        errBoardDetails: 'Require',
        errSchoolDetails: 'Require',
        errDegree: 'Require',
        errPaymentID: 'Require',
       
      })
return;
    }else if(inputFields.lastName === '' &&
    inputFields.fatherName === '' &&
    inputFields.phoneNumber === '' &&
    inputFields.location === '' &&
    inputFields.gender === '' &&
    inputFields.educationDetail === '' &&
    inputFields.boardDetails === '' &&
    inputFields.schoolDetails === '' &&
    inputFields.degree === '' &&
    inputFields.paymentID === ''){
      setError({
        errLastName: 'Require',
        errFatherName: 'Require',
        errPhoneNumber: 'Require',
        errLocation: 'Require',
        errGender: 'Require',
        errEducationDetail: 'Require',
        errBoardDetails: 'Require',
        errSchoolDetails: 'Require',
        errDegree: 'Require',
        errPaymentID: 'Require',
       
      })
       return;
    }else if(
    inputFields.fatherName === '' &&
    inputFields.phoneNumber === '' &&
    inputFields.location === '' &&
    inputFields.gender === '' &&
    inputFields.educationDetail === '' &&
    inputFields.boardDetails === '' &&
    inputFields.schoolDetails === '' &&
    inputFields.degree === '' &&
    inputFields.paymentID === ''){
      setError({
        
        errFatherName: 'Require',
        errPhoneNumber: 'Require',
        errLocation: 'Require',
        errGender: 'Require',
        errEducationDetail: 'Require',
        errBoardDetails: 'Require',
        errSchoolDetails: 'Require',
        errDegree: 'Require',
        errPaymentID: 'Require',
       
      })
       return;
    }else if(
    inputFields.phoneNumber === '' &&
    inputFields.location === '' &&
    inputFields.gender === '' &&
    inputFields.educationDetail === '' &&
    inputFields.boardDetails === '' &&
    inputFields.schoolDetails === '' &&
    inputFields.degree === '' &&
    inputFields.paymentID === ''){
      setError({
        errPhoneNumber: 'Require',
        errLocation: 'Require',
        errGender: 'Require',
        errEducationDetail: 'Require',
        errBoardDetails: 'Require',
        errSchoolDetails: 'Require',
        errDegree: 'Require',
        errPaymentID: 'Require',
       
      })
       return;
    }
    else if(
     
      inputFields.location === '' &&
      inputFields.gender === '' &&
      inputFields.educationDetail === '' &&
      inputFields.boardDetails === '' &&
      inputFields.schoolDetails === '' &&
      inputFields.degree === '' &&
      inputFields.paymentID === ''){
        setError({
          errLocation: 'Require',
          errGender: 'Require',
          errEducationDetail: 'Require',
          errBoardDetails: 'Require',
          errSchoolDetails: 'Require',
          errDegree: 'Require',
          errPaymentID: 'Require',
         
        })
         return;
      }
      else if(
     
       
        inputFields.gender === '' &&
        inputFields.educationDetail === '' &&
        inputFields.boardDetails === '' &&
        inputFields.schoolDetails === '' &&
        inputFields.degree === '' &&
        inputFields.paymentID === ''){
          setError({
           
            errGender: 'Require',
            errEducationDetail: 'Require',
            errBoardDetails: 'Require',
            errSchoolDetails: 'Require',
            errDegree: 'Require',
            errPaymentID: 'Require',
           
          })
           return;
        }
        else if(
     
        
          inputFields.educationDetail === '' &&
          inputFields.boardDetails === '' &&
          inputFields.schoolDetails === '' &&
          inputFields.degree === '' &&
          inputFields.paymentID === ''){
            setError({
              
              errEducationDetail: 'Require',
              errBoardDetails: 'Require',
              errSchoolDetails: 'Require',
              errDegree: 'Require',
              errPaymentID: 'Require',
             
            })
             return;
          }
          
            else if(
     
        
             
              inputFields.boardDetails === '' &&
              inputFields.schoolDetails === '' &&
              inputFields.degree === '' &&
              inputFields.paymentID === ''){
                setError({
                  
               
                  errBoardDetails: 'Require',
                  errSchoolDetails: 'Require',
                  errDegree: 'Require',
                  errPaymentID: 'Require',
                 
                })
                 return;
              }
              else if(
     
        
               
                inputFields.schoolDetails === '' &&
                inputFields.degree === '' &&
                inputFields.paymentID === ''){
                  setError({
                    
                   
                    errSchoolDetails: 'Require',
                    errDegree: 'Require',
                    errPaymentID: 'Require',
                   
                  })
                   return;
                }
                
                else if(
     
        
          inputFields.educationDetail === '' &&
          inputFields.boardDetails === '' &&
          inputFields.schoolDetails === '' &&
          inputFields.degree === '' &&
          inputFields.paymentID === ''){
            setError({
              
              errEducationDetail: 'Require',
              errBoardDetails: 'Require',
              errSchoolDetails: 'Require',
              errDegree: 'Require',
              errPaymentID: 'Require',
             
            })
             return;
          }
          else if(
     
        
            
            inputFields.paymentID === ''){
              setError({
                errPaymentID: 'Require',
               
              })
               return;
            }
    let details;
    if (inputFields.educationDetail === "twelveth" || inputFields.educationDetail === "eleventh") {
      details = {
        board: inputFields.boardDetails,
        school: inputFields.schoolDetails,
        degree: inputFields.degree
      }
    }
    else {
      details = {
        board: inputFields.boardDetails,
        school: inputFields.schoolDetails,
      }
    }

    fetch("http://localhost:4000/scholarship/contact", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({

        firstName: inputFields.firstName,
        lastName: inputFields.lastName,
        fName: inputFields.fatherName,
        phone: inputFields.phoneNumber,
        address: inputFields.location,
        gender: inputFields.gender,
        reference: inputFields.reference,
        paymentId: inputFields.paymentID,
        standard: inputFields.educationDetail,
        details: details
      })
    }).then((res) => res.json())
      .then(data => {
        if (data.status === true) {
          alert(data.message)

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

  console.log(inputFields)
}


return (

  <div className="container">
    <div className="row d-flex justify-content-center">
      <div>
        <h4 className='text-center mt-4'><strong>MYB Scholarship Registration</strong></h4>
      </div>
      <div className="col-lg-8 col-md-12 ">

        <div style={{ backgroundColor: '', padding: '20px' }}>
          <div className='form-styling m-auto'>

            <form >
              <div className='d-flex'>
                <input style={{ marginRight: '10px' }} type="text" id="firstName" name="firstName" placeholder='First Name' value={inputFields.firstName} onChange={(e) => handleInputs(e)} />
                <p>{error.errFirstName}</p>
                <input type="text" id="lastName" name="lastName" placeholder='Last Name' value={inputFields.lastName} onChange={(e) => handleInputs(e)} />
                <p>{error.errLastName}</p>

              </div>
              <input type="text" id="fatherName" name='fatherName' placeholder="Father's Name" value={inputFields.fatherName} onChange={(e) => handleInputs(e)} />
              <p>{error.errFatherName}</p>

              <input type="tel" id="phoneNumber" name='phoneNumber' placeholder='Phone Number' value={inputFields.phoneNumber} onChange={(e) => handleInputs(e)} />

              <p>{error.errPhoneNumber}</p>

              <input type="text" id="location" name='location' placeholder='Enter Your Permanent Address' value={inputFields.location} onChange={(e) => handleInputs(e)} />
              <p>{error.errLocation}</p>

              <select id="gender" name='gender' value={inputFields.gender} onChange={(e) => handleInputs(e)} >
                <option value="">Select Your Gender Type</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">Others</option>
              </select>
              <p>{error.errGender}</p>

              <div>
                <select id="education-detail-dropdown" name='educationDetail' value={inputFields.educationDetail} onChange={(e) => handleInputs(e)} required >
                  <option value="">Select Your Class</option>
                  <option value="twelveth">12'th </option>
                  <option value="eleventh">11'th </option>
                  <option value="tenth">10'th </option>
                  <option value="nineth">9'th</option>
                  <option value="eight">8'th</option>
                </select>
              </div>

              <p>{error.errEducationDetail}</p>


              {
                inputFields.educationDetail === "twelveth" || inputFields.educationDetail === "eleventh" ?
                  (
                    <>
                      <div className='d-flex'>
                        <input style={{ marginRight: '10px' }} type="text" id="board-name" name='boardDetails' value={inputFields.boardDetails} placeholder='Board Name' required onChange={(e) => handleInputs(e)} />
                        <p>{error.errBoardDetails}</p>

                        <input style={{ marginRight: '10px' }} type="text" id="school-name" name='schoolDetails' value={inputFields.schoolDetails} placeholder='School Name' required onChange={(e) => handleInputs(e)} />
                        <p>{error.errSchoolDetails}</p>

                        <input type='text' placeholder='Stream' id="degree" name='degree' value={inputFields.degree} onChange={(e) => handleInputs(e)} />
                        <p>{error.errDegree}</p>

                      </div>

                    </>
                  ) :
                  (<>

                  </>)
              }
              {inputFields.educationDetail === "tenth" || inputFields.educationDetail === "nineth" || inputFields.educationDetail === "eight" ? <>
                <div className='d-flex'>
                  <input style={{ marginRight: '10px' }} type="text" id="board-name" name='boardDetails' value={inputFields.boardDetails} placeholder='Board Name' required onChange={(e) => handleInputs(e)} />
                  <p>{error.errBoardDetails}</p>

                  <input style={{ marginRight: '10px' }} type="text" id="school-name" name='schoolDetails' value={inputFields.schoolDetails} placeholder='School Name' required onChange={(e) => handleInputs(e)} />
                  <p>{error.errSchoolDetails}</p>

                </div>

              </> : <></>}
              <input type="text" id="patmentID" name='reference' placeholder=" Reference If Any   example:'friend'" value={inputFields.reference} onChange={(e) => handleInputs(e)} />
              <p>{error.errReference}</p>

              <input type="text" id="patmentID" name='paymentID' placeholder="Enter your payment I'D here" value={inputFields.paymentID} onChange={(e) => handleInputs(e)} />
              <p>{error.errPaymentID}</p>

              <div style={{ textAlign: "center" }}>
                <button className="p-2" type="submit" value="Submit" onClick={submitFunc}>SignUp</button>
              </div>

            </form>
          </div>
        </div>


      </div>
      {/* form ends here */}
      <div className="col-lg-4 col-md-12 ">
        <div style={{ width: "100%", height: "100%", background: "" }}>
          <img src="assets/image/QRCode.jpeg" className='QRCode' alt="" />
        </div>
      </div>

    </div>
  </div>

)
};

export default Registration;