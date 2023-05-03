import React, { Component } from 'react'
import PageHelmet from '../../../component/shared/Pagehelmet'
import Header from '../../../component/commonheader/Header'
import HeadingImage from '../../../component/HeadingImage'
import BestMobileCompany from './BestMobileApplication'
import Build from './Build'
import Work from './Work'
import Footer from '../../../component/shared/Footer'
import SocialButton from '../../../component/SocialButton'
import Accordion from './Accordion'
export default class Appdevelopment extends Component {
    render() {
        return (
            <>
                <PageHelmet pageTitle="H&M Innovance LLP - Best App Development in Delhi NCR" />
                <Header />
                {/* <!-- web design section start --> */}
                <HeadingImage
                    image='assets/image/app_development.webp'
                    title='App Development'
                    previous='Home'
                    next='Software Development'
                />
                {/* <!-- web design section end --> */}
                <SocialButton />
                <BestMobileCompany />
                
                <Build />
                <Accordion />
                {/* <Work /> */}
                <Footer />
            </>
        )
    }
}
