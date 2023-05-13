import React, { useState } from 'react'
import './PoemCard.css'


function PoemCard({ poem }) {
  const [state, setState] = useState("none");

  const changeState=()=>{
    if (state==='none'){
      setState('block')
    }else{
      setState('none')
    }
  }

  return (
    <div className='p-2 mx-2 mt-4 text-dark blog-layout bg-light' style={{ border: '1px solid black', borderRadius: '10px' }}>
      <div className='head row'>
        <div className='col-sm-2 blog-image'>
          <img src={`https://drive.google.com/uc?export=view&id=${poem.url}`} style={{width:'100px',borderRadius:'10px'}}/>
        </div>
        <div className='col-sm-7 '>
          <h2 className='mt-3 blog-title text-center'>{poem.title}</h2>
        </div>
        <div className='col-sm-3'> 
        {/* https://drive.google.com/file/d/1Wd0QPaemYHV7GTtczYcPuk5wpPZ9BFln/view?usp=share_link */}
          <button className='p-2 px-4 m-3 rounded-3 bg-primary border text-white' onClick={changeState}>Read</button>
        </div>
        
      </div>
      <div dangerouslySetInnerHTML={{ __html: poem.poem }} className='mt-4 text-left' style={{ fontSize: '1.2rem', display: `${ state }` }} />
      <button className='btn btn-success' onclick={`window.open('whatsapp://send?text=Hey, How are you%0A Read this awesome poem from shailesh ${poem.poem}')`}> Share on Mobile </button>
    </div>
  )
}

export default PoemCard
