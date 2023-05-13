import React from 'react'
import './Certificate.css'
import cert from '../../images/Certification.gif'


function Certificates() {
  return (
    <div>
      <div className=' d-flex align-items-center text-dark rounded-4 cert-background'>
        <img src={cert} className='cert-image' alt='certificate'/>
      </div>
        <h3 style={{position:'relative',top:'-50px'}}>Certificates Comming Soon</h3>
    </div>
  )
}

export default Certificates
