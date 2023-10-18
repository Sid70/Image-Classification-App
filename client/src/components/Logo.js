import React from 'react'
import Brain from '../img/brain.png';

export default function Logo() {
  return (
    <div className='m-4'>
      <div className="card p-3" style={{'width': '9rem','background': 'linear-gradient(89deg, #e339c1 0%, #1ecbde 100%)'}}>
        <img src={Brain} className="card-img-top" alt="logo" />
      </div>
    </div>
  )
}

