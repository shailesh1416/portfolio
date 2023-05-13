import React from 'react'

function SimpleCard({items}) {
     const itemList =items.map((item)=>(
        <div class="card mt-4" style={{width: '18rem'}}>
            <img className="card-img-top" src={item[1]} alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title text-center">{item[0]}</h5>
            </div>
        </div>
    ))
  return (
    <div className='container m-2'>
        <div className='row d-flex justify-content-evenly mt-2 mb-2'>
            {itemList}
        </div>
    </div>
    
    )
}
export default SimpleCard
