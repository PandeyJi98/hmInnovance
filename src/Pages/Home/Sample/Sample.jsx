import React from 'react'
import Numbers from './Numbers'
import WhatWeDo from './WhatWeDo'

const Sample = () => {
    return (
        <>
            <div className='theme_Section'>
                <div className='theme_container'>
                    <div className='theme_leftSection' data-aos="fade-down">
                        <div className='themeleftSection_upper'>
                            <h2 style={{fontSize:'calc(1.375rem + 1.5vw)'}}>How we transform</h2>
                            <h2 style={{fontSize:'calc(1.375rem + 1.5vw)'}}>your business <span style={{ color: "orange" }}>digitally</span> .</h2>
                        </div>
                        <div className='themeleftSection_middle'>
                            <img style={{ height: "150px", marginTop: "20px" }} src="./assets/image/handShake.png" alt="hansShake_logo" />
                        </div>
                        <div className='themeleftSection_lowerSection'>
                            <Numbers number="97%" about="Success Rate" />
                            <Numbers number="25+" about="Product Developed" />
                            <Numbers number="20+" about="Happy Clients" />
                        </div>
                    </div>
                    <div className='theme_rightSection md-' data-aos="fade-up">
                        <div className='theme_rightContainer'>
                            <WhatWeDo heading="We solve problems" para="We are voracious problem solvers, you can dump a heap of problems upon us and we'll devise a solution." />
                            <WhatWeDo heading="Full Responsibilty of Technology to offload you" para="Founders want to grow their businesses and can't manage tech themselves, they need a team they can rely on, so we are here to help them manage and explore new ways to grow their businesses." />
                            <WhatWeDo heading="Range of Solutions" para="From Mobile to Desktop applications, Software Development, IoT, and Data Science, we help you with several tools we have in our toolbox." />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sample