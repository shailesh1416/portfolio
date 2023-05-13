import React from 'react'
import eps from '../../images/endpoint-security.png'
import netbasic from '../../images/networking-basics.png'
import nidc from '../../images/ndic.png'
import cyberbasics from '../../images/intro-cyber.png'


function BadgeCard() {
    const badges = [
        ["Introduction to Cyber Security","Cisco","November 26, 2022",netbasic,'https://www.credly.com/badges/0f9a9d00-3dbf-49a2-b3b5-3210f5c76f0c/public_url'],
        ["Networking Basics","Cisco","December 25, 2022",nidc,'https://www.credly.com/badges/114e1ca0-e4a4-452f-8b61-02d7d9ae374a/public_url'],
        ["Networking Devices and Initial Configuration","Cisco","January 07, 2023",cyberbasics,'https://www.credly.com/badges/bf5bc8e1-f7e8-4539-805b-51b265f6f975/public_url'],
        ["Endpoint Security","Cisco","April 09, 2023",eps,'https://www.credly.com/badges/50bcf2bd-6dbf-42a3-b122-cc2f4fdb7dc9/public_url'],
    ]

    const badgelist = badges.map((badge)=>(
        <div className='col-sm-5 d-flex p-2 rounded-2 m-2 text-white' style={{border:'1px solid black',backgroundColor:'#222'}}>
            <div className='p-2'>
                <img src={badge[3]} style={{width:'100px'}}/>
            </div>
            <div className='d-flex flex-column mx-3 p-2' style={{textAlign:'left'}}>
                <h4 style={{fontSize:'1.2rem',color:'#9966FF'}}>{badge[0]}</h4>
                <span>Issued by : {badge[1]}</span>
                <span>Date : {badge[2]}</span>
                <a href={badge[4]} className='text-dark btn btn-light' style={{textDecoration:'none',width:'150px'}}>Verify Badge</a>
            </div>

        </div>
    ))
  return (
    <div className='row p-5 d-flex justify-content-center'>

      {badgelist}
    </div>
  )
}

export default BadgeCard
