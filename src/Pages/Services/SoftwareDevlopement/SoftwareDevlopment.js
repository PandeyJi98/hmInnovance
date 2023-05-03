import React, { Component } from 'react'
import PageHelmet from '../../../component/shared/Pagehelmet'
import Header from '../../../component/commonheader/Header'
import HeadingImage from '../../../component/HeadingImage'
import BestSoftware from './BestSoftware'
import Provide from './Provide'
import DevelopmentServices from './DevelopmentServices'
import Footer from '../../../component/shared/Footer'
import SocialButton from '../../../component/SocialButton'
export default class SoftwareDevlopement extends Component {
    render() {
        return (
            <>
                <PageHelmet pageTitle="H&M Innovance LLP - Best Software Development in Gurgaon" />
                <Header />
                {/* <!-- web design section start --> */}
                <HeadingImage
                    image='assets/image/software.png'
                    title='Software Development'
                    previous='Home'
                    next='Digital Marketing'
                />
                {/* <!-- web design section end --> */}
                <SocialButton />
                <BestSoftware />
                <Provide />
                <DevelopmentServices />
                <Footer />
            </>
        )
    }
}
