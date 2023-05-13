import React from 'react'
import ScoreCard from '../scoreCard/ScoreCard'

function Skills({skills,title} ) {
    const skillList = skills.map((skill)=>(
        <ScoreCard level={skill[1]} text={skill[0]} logo={skill[2]} />
    ))
  return (
      <div style={{minWidth:'400px'}}>
       {skillList}
    </div>
  )
}

export default Skills
