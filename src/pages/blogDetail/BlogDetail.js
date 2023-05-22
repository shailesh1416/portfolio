import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ShareBtn from '../../components/sharepagebtn/ShareBtn';

function BlogDetail() {
    const [data, setData] = useState([])

    const { id } = useParams();

    useEffect(() => {
      fetchData()
    }, [])
  
    const fetchData = async () => {
      const url = `https://portfolio-6viw.onrender.com/blog/${id}`
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
        <h3>{data.place}</h3>
      <div class="modal-footer d-flex flex-column justify-content-center p-3" >
        <img src={`https://drive.google.com/uc?export=view&id=${data.url}`} alt='Blog'className='blogImage'/>
      <div dangerouslySetInnerHTML={{ __html: data.blog }} className='content mt-4' style={{ fontSize: '1.2rem' }} />
      </div>
      <ShareBtn />
      </div>    
  
    </div>
   
  )
}

export default BlogDetail
