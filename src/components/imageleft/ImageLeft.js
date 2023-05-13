import React from 'react'
import './ImageLeft.css'

function ImageLeft({image,comp,imgSide,title}) {
  return (
    <div className='intro-banner row'>
        {title && <h3 className='mt-5 mb-5' style={{fontSize:'2rem',fontWeight:'bolder'}}>{title}</h3>}
        {imgSide==='left' &&
        <div className='col-sm-5 center-all'>
            <img src={image} className='imageStyle rounded-4' alt='Display'/>
        </div>
        }
      <div className='col-sm-7 center-all p-5' >
           {comp}
      </div>
      {imgSide==='right' &&
        <div className='col-sm-5 center-all p-2'>
            <img src={image} className='imageStyle rounded-4'  alt='Display' />
        </div>
        }
    </div>
  )
}

export default ImageLeft
