import React, { Component } from 'react'
import PageHelmet from '../../../component/shared/Pagehelmet'
import Header from '../../../component/commonheader/Header'
import HeadingImage from '../../../component/HeadingImage'
import SocialMedia from './SocialMedia'
import BusinessOverall from './BusinessOverall'
import EnhancedEngagement from './EnhancedEngagement'
import Footer from '../../../component/shared/Footer'
import SocialButton from '../../../component/SocialButton'
export default class SocialMediaMarketing extends Component {
    render() {
        return (
            <>
                <PageHelmet pageTitle="H&M Innovance LLP - Best Social Media Marketing in Gurgaon" />
                <Header />
                {/* <!-- web design section start --> */}
                <HeadingImage
                    image='assets/image/dgtm.png'
                    title='Social Marketing'
                    previous='Home'
                    next='Gallery'
                />
                {/* <!-- web design section end --> */}
                <SocialButton />
                <SocialMedia />
                <BusinessOverall />
                <EnhancedEngagement />
                <Footer />
            </>
        )
    }
}
