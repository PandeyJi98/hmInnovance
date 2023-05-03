import React, { Component } from 'react'
import PageHelmet from '../../component/shared/Pagehelmet'
import Header from '../../component/commonheader/Header'
// import ContactUs from './ContactSection'
import HeadingImage from '../../component/HeadingImage'
import Adress from './Adress'
import Footer from '../../component/shared/Footer'
import Map from './Map'
import SocialButton from '../../component/SocialButton'
import ContactSection from './ContactSection'

export default class ContactUs extends Component {
    render() {
        return (
            <>
                <PageHelmet pageTitle="H&M Innovance LLP - is one of the Best IT Solution Comapny in Delhi NCR" />
                <Header />
                {/* <!-- about section start --> */}
                <HeadingImage
                    image='assets/image/contactus/contactus.webp'
                    title='Contact Us'
                    previous='Home'
                    next='About'
                />
                {/* <!-- about section end --> */}
                {/* <!-- social buttons start --> */}
                <SocialButton />
                {/* <!-- about text start --> */}
                <ContactSection />
                <Adress />
                <Map />
                <Footer />
            </>
        )
    }
}
