import React from 'react'
import "../imgWrapper.css"
import '../Portfolio.css';

export default function ImgWrapper(props) {
  return (
    <a href ={props.link}>
  <div className={`container`}>
  <img src={props.imgSrc} alt="Avatar" className={'image'} />
  <div className='overlay'>
    <div className="text">View Repository</div>
  </div>
</div>
</a>
  )
}
