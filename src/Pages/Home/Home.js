import React, { Component } from 'react'
import PageHelmet from '../../component/shared/Pagehelmet'
import Header from '../../component/commonheader/Header'
import SocialButton from '../../component/SocialButton'
import Section from './Section'
import Footer from '../../component/shared/Footer'
import About from './About'
// import Whyhm from './Whyhm'
import Test from './Test'
import Service from './Service'
import Sample from './Sample/Sample'
import Hmprocess from './Hmprocess'
export default class Home extends Component {
    render() {
        return (
            <>
                <PageHelmet pageTitle="H&M Innovance LLP - Is One of the Best IT Solution Company in Delhi NCR" />
                <Header />
                <Section />
                <SocialButton />
                <About />
                {/* <Whyhm /> */}
                <Service />
                <Sample />
                <Hmprocess />
                <Test />
                <Footer />
            </>
        )
    }
}
