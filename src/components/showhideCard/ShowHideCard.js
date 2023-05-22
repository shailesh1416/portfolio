import React, { useState } from 'react'
import resize from './../../images/resize.png'
import { Link } from 'react-router-dom'

function ShowHideCard({ data }) {
    const [show, setShow] = useState({
        imgopcity: '1',
        imgdisplay: 'none'
    })

    const showDescription = () => {
        setShow({
            imgopcity: '.5',
            imgdisplay: 'inline-block'
        })
    }
    const hideDescription = () => {
        setShow({
            imgopcity: '1',
            imgdisplay: 'none'
        })
    }
    return (
        <div class="col-sm-4" >
            <div style={{
                backgroundImage: `url(https://drive.google.com/uc?export=view&id=${data.url})`,
                width: '100%',
                height: '250px',
                borderRadius: '10px',
                backgroundSize: 'cover',
                opacity: show.imgopcity,
            }}
            //   onMouseOver={showDescription}
            //   onMouseOut={hideDescription}


            >
            </div>
            {/* <img src={`https://drive.google.com/uc?export=view&id=${photo.url}`} 
     alt={photo.title}  
     style={{width:'100%'}}
     /> */}
            {/* <div dangerouslySetInnerHTML={{ __html:description }} */}
            {/* className='p-3' 
    style={{ fontSize: '1.2rem',position:'relative',display:show.imgdisplay }} /> */}
            <div className='d-flex justify-content-center rounded-2 mt-1 px-2 align-items-center bg-danger'>
                <h5 className='my-1 p-2  text-white' style={{width:'100%'}}>{data.title}
                </h5>
                <Link to={`/photos/${data._id}`} class="btn mx-1 py-2 btn-link" target="_blank">
                <img src={resize} alt='new tab' style={{ width: '25px',height:'25px'}} />
                </Link>
            </div>
        </div>
    )
}

export default ShowHideCard
