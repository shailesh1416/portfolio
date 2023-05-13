import React from 'react'
// import './ScoreCard.css'

function ScoreCard({level,text,logo}) {
  return (
    < div className='row d-flex justify-content-evenly  text-white mt-3' style={{borderRadius:"10px"}}>
        <div className='col-3 d-flex bg-dark justify-content-center align-items-center' style={{borderRadius:"10px 0 0 10px"}}>
            <img  src={logo} alt={level} className='p-1' style={{width:'50px', height:'50px',borderRadius:'5px',margin:'auto'}} />
        </div>
        <div className='col-6 d-flex justify-content-center  text-dark align-items-center' style={{backgroundColor:'#eee',fontWeight:'bold'}}>
            <span style={{fontSize:'1.2rem'}}>{text}</span>
        </div>
        <div className='col-3 d-flex justify-content-center align-items-center bg-dark ' style={{borderRadius:"0px 10px 10px 0"}}>
          <span style={{fontSize:'1rem'}}>{level}</span>
        </div>
    </div>
  )
}

export default ScoreCard
