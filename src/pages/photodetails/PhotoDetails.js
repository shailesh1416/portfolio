import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ShareBtn from '../../components/sharepagebtn/ShareBtn';

function PhotoDetails() {
    const [data, setData] = useState([])

    const { id } = useParams();

    useEffect(() => {
      fetchData()
    }, [])
  
    const fetchData = async () => {
      const url = `https://portfolio-6viw.onrender.com/photo/${id}`
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
    <div class="py-3" id="exampleModal" tabindex="-1" style={{height:'100vh',backgroundColor:'white',width:'100%',opacity:'.99',overflow:'auto'}}>
 
      <div class="modal-body" >
        <h1 className='mt-4 mb-4' >{data.title} </h1>
        <h5 className='mt-4 mb-4 text-success' >{data.place} </h5>

      <div class="d-flex flex-column justify-content-center p-3" style={{width:'100%'}}>
        <img src={`https://drive.google.com/uc?export=view&id=${data.url}`} alt='Nature' style={{width:'100%'}} className='photoStyle'/>
      <div dangerouslySetInnerHTML={{ __html: data.description }} className='content mt-4' style={{ fontSize: '1.2rem' }} />
      <ShareBtn />
      </div>
      </div>    
  
    </div>
  )
}

export default PhotoDetails
