import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './Blog.css'
import '../all.css'
import BlogCard from '../../components/blogcard/BlogCard'
import bg from './../../images/ocean1.jpg'
import Modal from '../../components/modal/Modal'


function Blog() {
  const [data, setData] = useState([])
  const [dupdata, setDupData] = useState([])
  const [modal, setModal] = useState(false)
  const [id, setId] = useState(null)
  // const [blogId, setBlogId] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = 'https://portfolio-6viw.onrender.com/blog/all'
    try {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      // console.log(data)
      setDupData(data)
    } catch (error) {
      console.log(error)
    }
  }

  const onKeyChange = (e) => {
    // console.log(e.target.value)
    const newData = dupdata.filter((blog) => {
      return blog.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setData(newData)
  }

  const showModal = (id) => {
    console.log("Show Modal")
    setModal(true)
    setId(id)
    // setBlogId(id)
  }
  const hideModal = () => {
    console.log("Test hide Modal")
    setModal(false)
    setId(null)

  }

  return (
    <div className='d-flex flex-column align-items-center' style={{ backgroundImage: `url(${bg})`, backgroundPosition: 'cover', height: '90vh', overflow: 'auto' }}>
      <div className='d-flex flex-column align-items-center p-2'>
        <h1 className='mt-3 '>My Blogs</h1>
        <div>
          <input type='text' onChange={onKeyChange} className='searchbox' placeholder='Search a blog' />
        </div>
      </div>

      <div className='d-flex flex-column align-items-center p-2' style={{width:'800px'}}>
        {data.map((blog) => (
          
          <BlogCard blog={blog} showModal={showModal} />
        ))}
      </div>
      {modal &&
        <Modal  hideModal={hideModal} blogId = {id} />
      }

    </div>
  )
}

export default Blog
