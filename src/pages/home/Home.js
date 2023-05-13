import React from 'react'
import '../all.css'
import Banner from '../../components/banner/Banner'
import Connection from '../../components/connections/Connection'
import ImageLeft from '../../components/imageleft/ImageLeft'
import Skills from '../../components/skills/Skills'
import wd from '../../images/webdeveloper.svg'
import programmer from '../../images/programming.svg'

// --skills
import html from '../../images/html.png'
import css from '../../images/css.png'
import js from '../../images/js.png'
import bootstrap from '../../images/bootstrap.png'
import react from '../../images/react.png'
import flask from '../../images/flask.png'
import django from '../../images/django.png'
import python from '../../images/snakes.png'
import mongoDB from '../../images/mongodb.png'
import mysql from '../../images/mysql.png'
import threatmodelling from '../../images/security.png'
import cyber from '../../images/cyber.png'
import network from '../../images/network.png'
import endpoint from '../../images/endpoint.png'
import cyber2 from '../../images/cyber.svg'
import analyst from '../../images/analyst.jpg'
import educator from '../../images/educator.svg'
import marketing from '../../images/marketing.svg'

import whatsapp from './../../images/whatsapp.png'
import linkedin from './../../images/linkedin.png'
import gmail from './../../images/gmail.png'

// hobby
import cycling from '../../images/Road cycling-rafiki.svg'
import travel from './../../images/travel selfie.gif'
import reading from './../../images/reading.svg'
import pen from './../../images/pen.gif'



import Experience from '../../components/experience/Experience'
import BadgeCard from '../../components/badgecard/BadgeCard'
import Certificates from '../../components/certificates/Certificates'
import certificate from './../../images/certificates.svg'
import education from './../../images/Learning-bro.svg'
import Qualification from '../../components/qualification/Qualification'
import SimpleCard from '../../components/simpleCard/SimpleCard'
import Footer from '../../components/footer/Footer'


function Home() {

  const sociallinks = [['+91 8806639043',whatsapp],['shaileshyadav1416    ',gmail],['shailesh007',linkedin]]

  const webSkills = [
    ['HTML5', "Expert", html],
    ['CSS', "Expert", css],
    ['Bootstrap', "Expert", bootstrap],
    ['Javascript', "Intermediate", js],
    ['React', "Expert", react],
    ['Flask', "Beginner", flask],
    ['Django', "Intermediate", django]]

  const programmingSkills = [
    ['Python', "Intermediate", python],
    ['Javascript', "Intermediate", js],
    ['MySQL', "Intermediate", mysql],
    ['MongoDB', "Beginner", mongoDB]]

  const cyberSkills = [
    ['Threat Modelling', "Beginner", threatmodelling],
    ['Networking Basics', "Beginner", network],
    ['Endpoint Security', "Intermediate", endpoint],
    ['Risk Management', "Beginner", cyber]]

  const experience = [
    ['Network Intelligence Pvt Ltd', "Threat Modelling, Security Architecture Review", 'Understanding different security controls, identifying vulnerabilities and risk of that control and model into threat modelling tool. Also I have experience of reviwing application for security Aechitecture for one of the top Investment Bank in wold', '1st Dec 2023', "Now", "linkedIN", analyst],
    ['Safetech Business Solutions', "Computer Teacher", 'Teachhing basic compuyter skills, Assisting in tally and advance Excel training, Independent classes for AutoCAD and programming', '1st Nov 2020', "30 Oct 2022", "Safetech Websitw", educator],
    ['Tally Academy', "Marketing", 'Distributed phanplates from door to door for the advertisement of computer classes. Explaining people about the courses. ', ' May 2017', "Oct 2020", "Tally Academy", marketing]
  ]

  const hobbies = [["Cycling",cycling],["Reading",reading],["Travelling",travel],["Writing",pen]]

  let counter = 2;
  const expList = experience.map((exp) => (
    <ImageLeft image={exp[6]} comp={<Experience company={exp[0]} role={exp[1]} responsibility={exp[2]} start={exp[3]} end={exp[4]} companyLink={exp[5]} />} imgSide={counter++ % 2 === 0 ? "left" : "right"} />
  ))
  return (
    <div className='center-all d-flex flex-column'>
      <Banner />
      <Connection items={sociallinks} />
      <h2 className='mt-5 display-1' style={{ color: '#9966FF' }}>My Skills</h2>
      <ImageLeft image={wd} comp={<Skills skills={webSkills} />} title="Web Development Skills" imgSide="left" />
      <ImageLeft image={programmer} comp={<Skills skills={programmingSkills} />} title="Programming and Database Skills" imgSide="right" />
      <ImageLeft image={cyber2} comp={<Skills skills={cyberSkills} />} title="Cyber Security Skills" imgSide="left" />
      <h2 className='mt-3 mb-5 display-1' style={{ color: '#9966FF' }}>My Experience</h2>
      {
        expList
      }
      <h2 className='mt-3 display-1' style={{ color: '#9966FF' }}>Badges Achieved</h2>
      <BadgeCard />
      {/* <ImageLeft image={certificate} comp={<Certificates/>} imgSide="left" /> */}
      <h2 className='mt-3 display-1' style={{ color: '#9966FF' }}>Qualification</h2>
      <ImageLeft image={education} comp={<Qualification/>} imgSide="left" />
      <h2 className='mt-3 display-1' style={{ color: '#9966FF' }}>Certifications</h2>
      <Certificates />
      <h2 className='mt-3 display-1' style={{ color: '#9966FF' }}>Hobby</h2>
      <SimpleCard items={hobbies}/>
      <Footer copyright="Copyright &#169; 2023  Shailesh Yadav " />

    </div>
  )
}

export default Home
