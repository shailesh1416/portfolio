import React from 'react'
import '../../pages/all.css'
import './Intro.css'
import cca from './../../images/security.png'
import coding from './../../images/coding.png'
import edu from './../../images/education.png'
import bike from './../../images/bike.svg'


import SmallCard from '../smallcard/SmallCard'

function Intro() {
    const works=[['Cyber security Analyst',cca], ['Web Developer',coding], ['Educator',edu]]
    const list =works.map((work)=>(
        <SmallCard text={work[0]} logo={work[1]}/>
    ))


  return (
    <div className='row d-flex flex-column rounded-3 p-3' >
            <h1 className='mt-5 heading'>
                Shailesh Yadav
            </h1> 
            <div style={{position:'relative',top:'-70px',display:'inline-block',textAlign:'left'}}>
                <img src={bike} style={{width:'50px'}} className='bike'/>
                {/* <img src={bike} style={{width:'50px'}} className='bike2'/> */}
            </div>
            <div className='d-flex justify-content-evenly row'>
                {list}
            </div>
            <div className='p-3 my-4' style={{fontSize:'1.5rem'}}>
                Hello 🙏, I am Shailesh a computer science graduate 🧑‍💻. I love programming and web development. You can approach me if you want to create a website🌐 for your business. I can help you develop your business or ecommerce🛒 website in the best possible way. 
                <br/>
            </div>
            
    </div>
  )
}

export default Intro
