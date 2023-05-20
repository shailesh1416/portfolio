import React, { useEffect, useState } from 'react'

function Modal({hideModal,blogId}) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = `https://portfolio-6viw.onrender.com/blog/${blogId}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data) 
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
  
    <div class="py-3" id="exampleModal" tabindex="-1" style={{position:'absolute',top:'0',left:'0',height:'100vh',backgroundColor:'white',width:'100%',opacity:'.99',overflow:'auto'}}>
 
      <div class="modal-body" >
        <h1>{data.title} </h1>
      <div class="modal-footer d-flex flex-column justify-content-center " >
      <div dangerouslySetInnerHTML={{ __html: data.blog }} className='content mt-4' style={{ fontSize: '1.2rem' }} />

        <button type="button" class="btn btn-secondary mt-2" data-dismiss="modal" onClick={hideModal}>Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
      </div>    
  
    </div>
   
  )
}

export default Modal
