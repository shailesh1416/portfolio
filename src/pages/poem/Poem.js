import React, { useEffect, useState } from 'react'
import '../all.css'
import './Poem.css'
import bg from './../../images/banner-photo-bg.svg'
import PoemCard from '../../components/poemcard/PoemCard'


function Poem() {
  const [data, setData] = useState([])
  const [dupdata, setDupData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const url = 'https://portfolio-6viw.onrender.com/poem/all'
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

  const onKeyChange = (e) => {
    console.log(e.target.value)
    const newData = dupdata.filter((poem) => {
      return poem.title.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setData(newData)
  }
  return (
    <div style={{ backgroundImage: `url(${bg})`, height: '100vh', overflow: 'auto' }}>
      <div className='d-flex flex-column align-items-center p-2'>

        <h1 className='mt-3 text-light'>My Poems</h1>
        <div>
          <input type='text' onChange={onKeyChange} className='searchbox' placeholder='Search a poem' />
        </div>
      </div>
      <div className='d-flex flex-column align-items-center p-2'>
        {data.map((poem) => (
          <PoemCard poem={poem} />
        ))}
      </div>
    </div>
  )
}

export default Poem
