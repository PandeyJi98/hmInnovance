import React, { Component } from 'react'
import PageHelmet from '../../../component/shared/Pagehelmet'
import Header from '../../../component/commonheader/Header'
import HeadingImage from '../../../component/HeadingImage'
import Content from './Content'
import Offer from './Offer'
import WhyWeDo from './WhyWeDo'
import Video from './Video'
import Footer from '../../../component/shared/Footer'
import SocialButton from '../../../component/SocialButton'
import SeveralWebDesignAccordion from './SeveralWebDesignAccordion'
export default class WebDesigning extends Component {
    render() {
        return (
            <>
                <PageHelmet pageTitle="H&M Innovance LLP - Best Web Designing in Delhi NCR" />
                <Header />
                {/* <!-- web design section start --> */}
                <HeadingImage
                    image='assets/image/webDesign.webp'
                    title='Web Design'
                    previous='Home'
                    next='Web Development'
                />
                {/* <!-- web design section end --> */}
                <Content />
                <SeveralWebDesignAccordion />
                <SocialButton />
                <Offer />
                <WhyWeDo />
                <Video />
                <Footer />
            </>
        )
    }
}
