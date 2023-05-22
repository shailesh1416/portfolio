import React, { useEffect, useState } from 'react'
import '../all.css'
import ShowHideCard from '../../components/showhideCard/ShowHideCard'

function Photo() {
  const [data, setData] = useState([])
 

  // const [blogId, setBlogId] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = 'https://portfolio-6viw.onrender.com/photo/all'
    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='d-flex flex-column'>
      <h1 className='my-3'>Photos</h1>
      <div class="container mt-3">
        <div class="row">

          {data.map((photo) => (
           <ShowHideCard data={photo} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Photo
