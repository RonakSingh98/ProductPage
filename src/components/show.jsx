import React from 'react'
import {fresh, look ,photo} from './import';
import './show.css'
export const Show = () => {
  return (
    <div className='show'>
        <div className='left'>
        <img className='show_1' src={fresh} alt="" />
        <img className='show_2' src={look} alt="" />
        </div>
        <div className='right'>
        <img className='show_3' src={photo} alt=""/>
        </div>
    </div>
  )
}
