import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
const WhatWeDo = ({ heading, para }) => {
  return (
    <>
      <div className='themeRight_heading'>
        <h5><AiOutlineCheckCircle />  <strong style={{ color: 'blueViolet' }}>{heading}</strong></h5>
      </div>
      <div className='themeRight_para'>
        <p>{para}</p>
      </div>
    </>
  )
}

export default WhatWeDo;