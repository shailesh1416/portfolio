import React from 'react'
import whatsapp from './../../images/whatsapp.png'
import linkedin from './../../images/linkedin.png'
import gmail from './../../images/gmail.png'
import SmallCard from '../smallcard/SmallCard'

function Connection({items}) {
    const itemList =items.map((social)=>(
        <SmallCard text={social[0]} logo={social[1]}/>
    ))
  return (
    <div className='d-flex justify-content-evenly flex-column mt-5 p-4 container-fluid'>
        <h2 className='mt-4 weight-300'>Connect with me, here</h2>
        <div className='d-flex justify-content-evenly mt-3 row'>
            {itemList}
        </div>
        
    </div>
  )
}

export default Connection
