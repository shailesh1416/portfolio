import React from 'react'
import './Banner.css'
import '../../pages/all.css'
import Photo from '../image/Photo'
import Intro from '../intro/Intro'
function Banner() {
  return (
    <div className='intro-banner row'>
      <div className='col-sm-7 center-all'>
        <Intro />
      </div>
      <div className='col-sm-5 center-all' >
            <Photo />
      </div>

    </div>
  )
}

export default Banner
