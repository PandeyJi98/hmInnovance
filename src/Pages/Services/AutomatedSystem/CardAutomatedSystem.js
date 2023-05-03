import React from 'react'
import {FaIndustry} from 'react-icons/fa';
import {MdEmojiTransportation, MdBusinessCenter, MdHealthAndSafety} from 'react-icons/md'
import {BiBuildingHouse} from 'react-icons/bi'
import {AiTwotoneHome} from 'react-icons/ai'
const CardAutomatedSystem = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
                
                <div className="row m-auto d-flex justify-content-evenly">
                  <div className='mb-3' ><h3  style={{textAlign:'center'}}><strong>There are many different types of automated systems, but here are a few common
                    categories</strong></h3></div>
                    <div className=" col-12 col-md-6 col-lg-4 d-flex mb-2 mt-4 mb-lg-0 justify-content-center" data-aos="fade-down-right">
                        <div className='card dgtm_card cardShadow'>
                        <div className="mt-3 mb-0 m-auto">
                        <FaIndustry style={{height:'70px', width:'60px'}} />
                        </div>
                        <div className='card-body'>
                        <h4 className='mt-3' style={{ textAlign: 'center ' }}><strong>Industrial Automation Systems</strong></h4>
                        <p >These systems are used in manufacturing plants and
                            factories to automate processes such as assembly, testing, and packaging. Examples include
                            assembly line robots and automated material handling systems.</p>
                      </div>
                    </div>
                    </div>
                    
                    <div className="col-12 col-md-6 col-lg-4 d-flex mb-2 mt-4  mb-lg-0 justify-content-center" data-aos="fade-down">
                     <div className='card dgtm_card cardShadow'>
                    <div className="mt-3 mb-0 m-auto">
                        <MdBusinessCenter style={{height:'70px', width:'60px'}} />
                        </div>
                        <div className='card-body'>
                        <h4 className='mt-3' style={{ textAlign: 'center' }}><strong>Business Automation Systems</strong></h4>
                        <p >These systems are used to automate various business
                            processes, such as invoicing, scheduling, and data management. Examples include customer
                            relationship management (CRM) software and enterprise resource planning (ERP) systems.</p>
                      </div>
                    </div>
                    </div>
                   
                    <div className="col-12 col-md-6 col-lg-4 d-flex mb-2 mt-4 mb-lg-0 justify-content-center" data-aos="fade-down-left">
                     <div className='card dgtm_card cardShadow'>
                    <div className="mt-3 mb-0 m-auto">
                        <BiBuildingHouse style={{height:'70px', width:'60px'}} />
                        </div>
                        <div className='card-body'>
                            <h4 className='mt-3' style={{ textAlign: 'center' }}><strong>Building Automation Systems</strong></h4>
                            <p>These systems are used to control and monitor various
                                aspects of buildings, such as lighting, temperature, and security. Examples include smart
                                building systems that use IoT technology to control various functions.</p>
                            </div>
                        </div>
                    </div>

                    <div className=" col-12 col-md-6 col-lg-4 d-flex mb-2 mt-4 mb-lg-0 justify-content-center" data-aos="fade-up-right">
                     <div className='card dgtm_card cardShadow'>
                    <div className="mt-3 mb-0 m-auto">
                        <AiTwotoneHome style={{height:'70px', width:'60px'}} />
                        </div>
                        <div className='card-body'>
                        <h4 className='mt-3' style={{ textAlign: 'center ' }}><strong>Home Automation Systems</strong></h4>
                        <p >These systems are used to automate various functions in
                            homes, such as lighting, temperature, and security. Examples include smart home devices
                            such as thermostats and security systems that can be controlled via a smartphone..</p>
                    </div>
                    </div>
                    </div>

                  

                    <div className=" col-12 col-md-6 col-lg-4 d-flex mb-2 mt-4  mb-lg-0 justify-content-center" data-aos="fade-up">
                     <div className='card dgtm_card cardShadow'>
                             <div className="mt-3 mb-0 m-auto">
                                 <MdEmojiTransportation style={{height:'70px', width:'70px'}} />
                                     </div>
                        <div className='card-body'>
                        <h4 className='mt-3' style={{ textAlign: 'center' }}><strong>Transportation Automation Systems</strong></h4>
                        <p >These systems are used to automate various aspects of
                            transportation, such as self-driving cars, drones, and automated shipping systems.</p>
                     </div>
                    </div>
                    </div>
                    

                    <div className=" col-12 col-md-6 col-lg-4 d-flex mb-2 mt-4  mb-lg-0 justify-content-center" data-aos="fade-up-left">
                     <div className='card dgtm_card cardShadow'>
                    <div className="mt-3 mb-0 m-auto">
                        <MdHealthAndSafety style={{height:'70px', width:'60px'}} />
                        </div>
                        <div className='card-body'>
                        <h4 className='mt-3' style={{ textAlign: 'center' }}><strong>Healthcare Automation Systems</strong></h4>
                        <p>These systems are used to automate various processes in
                            the healthcare industry, such as medical records management, appointment scheduling, and
                            drug dispensing.</p>
                     </div>
                    </div>
                    </div>

                    
                </div>
            </div>
        </>
    )
}

export default CardAutomatedSystem;