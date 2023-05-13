import React from 'react'

function Footer({copyright}) {
  return (
    <div className='container-fluid d-flex justify-content-center p-3 bg-dark text-white'>
      {copyright}
    </div>
  )
}

export default Footer
