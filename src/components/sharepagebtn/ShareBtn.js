import React from 'react'

function ShareBtn() {
    const share=()=>{
        navigator.share({
         title: document.title, // The title of the webpage
         url: window.location.href // The URL of the webpage
       })
       }
  return (
    <button className='btn btn-success' onClick={()=>share}>Share</button>
  )
}

export default ShareBtn
