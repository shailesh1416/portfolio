import React, { useState } from 'react'
import './PoemCard.css'


function PoemCard({ poem }) {
  const [state, setState] = useState("none");
  const [language, setLanguage] = useState({
    previous:null,
    language:'hindi'
  });
  const [color,setColor] = useState({
    bg:'#000',
    fg:'#fff'
  })

  const changeState=(curLang)=>{
    if (state==='none'){
      setState('block')
      setLanguage({previous:null,language:curLang})
    }else if(curLang===language.language){
      setState('none')
      setLanguage({previous:null,language:'hindi'})
    }else if(curLang!==language.language){
      setLanguage({previous:language.language,language:curLang})
    }else{
      setState('none')
    }
  }

  const changeColor=(bg,fg)=>{
    setColor({
      bg:bg,
      fg:fg
    })
  }

  return (
    <div className='p-2 mx-2 mt-4 text-dark blog-layout bg-light' style={{ border: '1px solid black', borderRadius: '10px' }}>
      <div className='head row'>
        {/* <div className='col-sm-2 blog-image'>
          <img src={`https://drive.google.com/uc?export=view&id=${poem.url}`} style={{width:'100px',borderRadius:'10px'}}/>
        </div> */}
        <div className='col-8 d-flex justify-content-left '>
          <h2 className='mt-3 blog-title px-2'>{poem.title}</h2>
        </div>
        <div className='col-4 d-flex justify-content-end'> 
        {/* https://drive.google.com/file/d/1Wd0QPaemYHV7GTtczYcPuk5wpPZ9BFln/view?usp=share_link */}
          <button className='p-2 px-4  rounded-3 bg-primary border text-white' onClick={()=>changeState('hindi')}>
ह</button>
          <button className='p-2 px-4  rounded-3 bg-primary border text-white' onClick={()=>changeState('hinglish')}>H</button>
        </div>
      </div>
      <div style={{display: `${ state }`,}}>
      <div className='d-flex justify-content-evenly'>
        <button className='colorBtn' style={{backgroundColor:'#FDA492'}} onClick={()=>changeColor('#FDA492','white')}></button>
        <button className='colorBtn' style={{backgroundColor:'#FED18D'}} onClick={()=>changeColor('#FED18D','black')}></button>
        <button className='colorBtn' style={{backgroundColor:'#E3D896'}} onClick={()=>changeColor('#E3D896','black')}></button>
        <button className='colorBtn' style={{backgroundColor:'#51BA69'}} onClick={()=>changeColor('#51BA69','white')}></button>
        <button className='colorBtn' style={{backgroundColor:'#FFFD55'}} onClick={()=>changeColor('#FFFD55','black')}></button>
        <button className='colorBtn' style={{backgroundColor:'#AB44FF'}} onClick={()=>changeColor('#AB44FF','white')}></button>
        <button className='colorBtn' style={{backgroundColor:'#CCBEE2'}} onClick={()=>changeColor('#CCBEE2','black')}></button>
        <button className='colorBtn' style={{backgroundColor:'#B4A79F'}} onClick={()=>changeColor('#B4A79F')}></button>
        <button className='colorBtn' style={{backgroundColor:'#1E1E1E',color:'white'}} onClick={()=>changeColor('#1E1E1E','white')}></button>
      </div>
      <div>
      </div>
      {language.language==='hindi' &&
      <div dangerouslySetInnerHTML={{ __html: poem.hindi }} className='mt-4 text-left rounded-3 py-5 px-4 poemContent' style={{   backgroundColor:`${color.bg}`,color:`${color.fg}` }} />}
      {language.language==='hinglish' &&<div dangerouslySetInnerHTML={{ __html: poem.hinglish }} className='mt-4 text-left rounded-3 py-5 px-4' style={{ fontSize: '1.2rem',  backgroundColor:`${color.bg}`,color:`${color.fg}` }} />}
      </div>
      {/* <button className='btn btn-success' onclick={`window.open('whatsapp://send?text=Hey, How are you%0A Read this awesome poem from shailesh ')`}> Share on Mobile </button> */}
    </div>
  )
}

export default PoemCard
