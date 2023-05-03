import React from 'react'

const Numbers = ({ number, about }) => {
  return (
    <>
      <div className='themeleftSection_lowerContainer'>
        <div className='leftSectionlower_upper'>
          <p><b>{number}</b></p>
        </div>
        <div className='leftSectionlower_lower'>
          <p>{about}</p>
        </div>
      </div>
    </>
  )
}

export default Numbers