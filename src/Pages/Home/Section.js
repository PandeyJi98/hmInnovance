import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default class Section extends Component {
    render() {
        return (
            <section className='sectionImg'>
                    
                <img src='assets/image/Section.png' alt='section-image' className="img-fluid h-75" width='100%' style={{ opacity: '0.4' }}/> 
                <div className='scroll-text'>
                <marquee direction="left" scrollamount="13">
                      <p className='marque_text'>MYB - Scholarship Program for 8 to 12 class student. Stay tuned for more update</p>
                   </marquee>
                </div>
             
                <div className='centered'>
                    <h1 className='section_text'>𝐼𝐹 𝒴𝒪𝒰 𝒞𝒜𝒩 𝒯𝐻𝐼𝒩𝒦 𝐼𝒯, 𝒲𝐸 𝒞𝒜𝒩 𝒞𝑅𝐸𝒜𝒯𝐸 𝐼𝒯.</h1>
                    <NavLink to='/contactUs'><button className='section_btn container'>Meet With Us</button ></NavLink>
                </div>
            </section >
        )
    }
}


