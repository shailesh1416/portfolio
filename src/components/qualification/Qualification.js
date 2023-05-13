import React from 'react'

function Qualification() {
    const qualifications = [
        ["Bsc Computer Science", '2020', 'Mumbai University'],
        ["HSC", '2017', 'Maharashtra State Board'],
        ["SSC", '2015', 'Maharashtra State Board'],
    ]

    const qlist = qualifications.map((q) => (
        <tr className='p-3'>
            <td>{q[0]}</td>
            <td>{q[1]}</td>
            <td>{q[2]}</td>
        </tr>
    ))
    return (
        <div className='container'> 
            <table className='table table-hover table-bordered rounded-2' 
            style={{border:'1px solid black'}}>
                <thead>
                    <tr className='bg-dark text-white' style={{borderRadius:'20px'}}>
                        <th scope="col">Course</th>
                        <th scope="col">Year Of Passing</th>
                        <th scope="col">Institute</th>
                    </tr>
                </thead>
                <tbody>
                    {qlist}
                </tbody>
            </table>

        </div>
    )
}

export default Qualification
