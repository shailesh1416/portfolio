import React, { useState } from 'react'
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
    <div className='p-2 mx-2 mt-4 text-dark blog-layout bg-light' style={{ border: '1px solid black', borderRadius: '10px' }}>
      <div className='head row'>
        <div className='col-sm-2 blog-image'>
          <img src={blog.url} style={{width:'50px'}}/>
        </div>
        <div className='col-sm-7 '>
          <h2 className='mt-3 blog-title text-center'>{blog.title}</h2>
        </div>
        <div className='col-sm-3'> 

          {/* <button className='p-2 px-4 m-3 rounded-3 bg-primary border text-white' onClick={changeState}>Read</button> */}
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick={()=>{showModal(blog._id)}}>Read</button>
        </div>
        
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: blog.blog }} className='content mt-4' style={{ fontSize: '1.2rem', display: `${ state }` }} /> */}

    </div>
  )
}

export default BlogCard
