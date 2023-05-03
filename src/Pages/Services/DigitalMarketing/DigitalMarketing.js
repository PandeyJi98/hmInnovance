import React, { Component } from 'react'
import PageHelmet from '../../../component/shared/Pagehelmet'
import Header from '../../../component/commonheader/Header'
import HeadingImage from '../../../component/HeadingImage'
import BestDigital from './BestDegital'
import DigitalServices from './DigitalServices'
import DigitalAgency from './DigitalAgency'
import WhyChoose from './WhyChoose'
import Footer from '../../../component/shared/Footer'
import SocialButton from '../../../component/SocialButton'
export default class DigitalMarketing extends Component {
    render() {
        return (
            <>
                <PageHelmet pageTitle="H&M Innovance LLP - Best Digital Marketing in Delhi NCR" />
                <Header />
                {/* <!-- web design section start --> */}
                <HeadingImage
                    image='assets/image/dgtm.png'
                    title='Digital Marketing'
                    previous='Home'
                    next='Automated System'
                />
                {/* <!-- web design section end --> */}
                <SocialButton />
                <BestDigital />
                <DigitalServices />
                {/* <DigitalAgency /> */}
                <WhyChoose />
                <Footer />
            </>
        )
    }
}
