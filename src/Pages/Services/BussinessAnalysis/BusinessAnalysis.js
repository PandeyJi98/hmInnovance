import React, { Component } from 'react'
import PageHelmet from '../../../component/shared/Pagehelmet'
import Header from '../../../component/commonheader/Header'
import HeadingImage from '../../../component/HeadingImage'
import AnalysisService from './AnalysisService'
import Benefit from './Benefit'
import Footer from '../../../component/shared/Footer'
import SocialButton from '../../../component/SocialButton'
export default class BusinessAnalysis extends Component {
    render() {
        return (
            <>
                <PageHelmet pageTitle="H&M Innovance LLP - Innovative Business Analysis in Delhi NCR" />
                <Header />
                {/* <!-- web design section start --> */}
                <HeadingImage
                    image='assets/image/business.png'
                    title='Business Analysis'
                    previous='Home'
                    next='Social Media Marketing'
                />
                {/* <!-- web design section end --> */}
                <SocialButton />
                <AnalysisService />
                <Benefit />
                <Footer />
            </>
        )
    }
}
