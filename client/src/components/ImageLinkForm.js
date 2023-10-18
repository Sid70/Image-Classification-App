import React from 'react'

export default function ImageLinkForm(props) {

    return (
        <>
            <div>
                <p className="des">This Magic Brain will classify your pictures. </p>
            </div>
            <div className='d-flex justify-content-center img-background my-5'>
                <div className="input-group img-link">
                    <input type="text" className="form-control" onChange={props.onInputChange} />
                    <button className="input-group-text button" onClick={props.onButtonSubmit}>Detect</button>
                </div>
            </div>
            <div className='my-5 p-1 w-75 m-auto'>
                <img id='img' src="" className="img-fluid mx-auto d-block data-mdb-lazy-offset" alt="" />
                <>
                    <h1 className='text-center pt-3' style={{ 'color': 'navy', 'fontWeight': 'bold' }}>Your Result: </h1>
                    <h2 id='result' className='pt-2 text-center text-white'> </h2>
                    <h3 id='confidence' className='py-2 text-center text-white'> </h3>
                </>
            </div>
        </>
    )
}