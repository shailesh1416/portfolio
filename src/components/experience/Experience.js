import React from 'react'

function Experience({company,role,responsibility,start,end,companyLink}) {
  return (
    <div className='d-flex flex-column p-2'>
      <div> 
        <h4 className='display-5 mb-3' style={{color:'#A483C3',fontWeight:'500'}}>{company}</h4>
        <div className='mb-3' style={{fontSize:'1.5rem'}}>
            <strong>Role :</strong><span>{role}</span>
        </div>
        <p className='mb-3' style={{fontSize:'1.2rem'}}>
            <strong>Responsibilities: </strong> <span>{responsibility}</span>
        </p>
        <div className='container'>

        <div className='row'>
            <div className='col-sm-5 p-3 m-2 bg-dark text-white rounded-1' >
                <strong>From : </strong><span>{start} to {end}</span>
            </div>
            <div className='col-sm-5 p-3 m-2 bg-dark text-white rounded-1' >
                <strong>{companyLink}</strong>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
