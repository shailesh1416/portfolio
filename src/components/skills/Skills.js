import React from 'react'
import ScoreCard from '../scoreCard/ScoreCard'
import './Skill.css'

function Skills({skills,title} ) {
    const skillList = skills.map((skill)=>(
        <ScoreCard level={skill[1]} text={skill[0]} logo={skill[2]} />
    ))
  return (
      <div className='skill-list p-2'>
       {skillList}
    </div>
  )
}

export default Skills
