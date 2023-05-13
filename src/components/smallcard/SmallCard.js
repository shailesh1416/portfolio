import React from 'react'
import './SmallCard.css'

function SmallCard({text,logo}) {
  return (
    <div className='col-sm-3 p-2 my-1 rounded-2 border overflow-hidden smallCard'>
           <img  src={logo} alt={text} style={{width:'50px', height:'50px'}} />
           <div>{text}</div> 
    </div>
  )
}

export default SmallCard
