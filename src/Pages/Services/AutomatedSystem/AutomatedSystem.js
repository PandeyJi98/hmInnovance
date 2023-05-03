import React, { Component } from 'react'
import PageHelmet from '../../../component/shared/Pagehelmet'
import Header from '../../../component/commonheader/Header'
import HeadingImage from '../../../component/HeadingImage'
import Footer from '../../../component/shared/Footer'
import SocialButton from '../../../component/SocialButton'
import CardAutomatedSystem from './CardAutomatedSystem'
import AutomatedCompany from './AutomatedCompany'
export default class AutomatedSystem extends Component {
    render() {
        return (
            <>
                <PageHelmet pageTitle="H&M Innovance LLP - Best Automated System in Gurgaon" />
                <Header />
                {/* <!-- web design section start --> */}
                <HeadingImage
                    image='assets/image/automated.png'
                    title='Automated System'
                    previous='Home'
                    next='Business Analysis'
                />
                {/* <!-- web design section end --> */}
                <SocialButton />
                <AutomatedCompany />
                <CardAutomatedSystem />
                <Footer />
            </>
        )
    }
}
