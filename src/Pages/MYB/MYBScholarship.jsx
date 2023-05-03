import React from 'react'
import Header from '../../component/commonheader/Header';
import PageHelmet from '../../component/shared/Pagehelmet';
import HeadingImages from '../../component/HeadingImage';
import SocialButton from '../../component/SocialButton';
import Footer from '../../component/shared/Footer';
import Registration from './RegistrationForm';

const MYBScholarship = () => {
  return (
    <>
    <PageHelmet pageTitle="H&M Innovance LLP - is one of the Best IT Solution Comapny in Delhi NCR" />
                <Header />
                <HeadingImages
                    image='assets/image/contactus/contactus.webp'
                    title='MYB Scholarship'
                    previous='Home'
                    next='Contact Us'
                />
                <SocialButton />
                <Registration />
                <Footer />

    </>
  )
}

export default MYBScholarship;