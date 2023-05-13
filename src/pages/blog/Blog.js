import React, { useEffect, useState } from 'react'

import './Blog.css'
import '../all.css'
import BlogCard from '../../components/blogcard/BlogCard'
import bg from './../../images/ocean1.jpg'


function Blog() {
  const [data, setData] = useState([])
  const [dupdata, setDupData] = useState([])

  useEffect(() => {
      fetchData()
  }, [])

  const fetchData = async () => {
      const url = 'https://portfolio-6viw.onrender.com/blog/all'
      try {
          const response = await fetch(url)
          const data = await response.json()
          setData(data)
          console.log(data)
          setDupData(data)
      } catch (error) {
          console.log(error)
      }
  }

  const onKeyChange=(e)=>{
    console.log(e.target.value)
    const newData = dupdata.filter((blog)=>{
      return blog.title.toLowerCase().includes(e.target.value.toLowerCase()) 
  })
  setData( newData)
  }

  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'cover', height: '100vh', overflow: 'auto' }}>
      <h1 className='mt-3'>My Blogs</h1>
      <div>
        <input type='text' onChange={onKeyChange} className='searchbox' placeholder='Search a blog' />
      </div>
      <div className='d-flex flex-column align-items-center p-2'>
       {data.map((blog) => (
         <BlogCard blog={blog} />
        ))}
      </div>

    </div>
  )
}

export default Blog
