import React, { Component } from 'react'
import PageHelmet from '../../../component/shared/Pagehelmet'
import Header from '../../../component/commonheader/Header'
import HeadingImage from '../../../component/HeadingImage'
import Content from './Content'
import Plaining from './Plaining'
import Testing from './Testing'
import WhatWeDo from './WhatWeDo'
import Footer from '../../../component/shared/Footer'
import SocialButton from '../../../component/SocialButton'
export default class WebDevelopment extends Component {
    render() {
        return (
            <>
                <PageHelmet pageTitle="H&M Innovance LLP - Innovative Web Development Company In Gurgaon" />
                <Header />
                {/* <!-- web design section start --> */}
                <HeadingImage
                    image='assets/image/webDevelpoe.png'
                    title='Web Development'
                    previous='Home'
                    next='App Development'
                />
                {/* <!-- web design section end --> */}
                <SocialButton />
                <Plaining />
                <Content />
                <WhatWeDo />
                <Testing />
                <Footer />
            </>
        )
    }
}
