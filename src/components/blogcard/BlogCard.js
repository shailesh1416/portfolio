import React, { useState } from 'react'
import { Link } from "react-router-dom";
import resize from './../../images/resize.png'
import './BlogCard.css'


function BlogCard({ blog ,showModal}) {
  // const [state, setState] = useState("none");
// console.log(blog)
  // const changeState=()=>{
  //   if (state==='none'){
  //     setState('block')
  //   }else{
  //     setState('none')
  //   }
  // }

  return (
    <div className='p-2 mx-2 mt-4 text-dark blog-layout bg-light'>
      <div className='head row' >
        {/* <div className='col-sm-2 blog-image'>
          <img src={blog.url} style={{width:'50px'}}/>
        </div> */}
        <div className='col-sm-7 '>
          <h2 className='mt-3 blog-title text-center'>{blog.title}</h2>
        </div>
        <div className='col-sm-5 read-buttons'> 

          <button type="button" class="btn mx-1 btn-link" data-toggle="modal" data-target="#exampleModal" onClick={()=>{showModal(blog._id)}}>Read Here</button>
          <Link to={`/blogs/${blog._id}`} class="btn mx-1 py-2 btn-link" target="_blank">
            <img src={resize} alt='new tab' />
          </Link>
        </div>
        
      </div>

    </div>
  )
}

export default BlogCard
