import React from 'react'
import './newsletter.css'
import { connect } from './import'
export const Newsletter = () => {
  return (
    <div className='main'>
      <h1>Newsletter</h1>
      <img src={connect}></img>
      <h3>Get news about articles and info in your inbox</h3>
      <form className='form'>
        <input className='a' type ='text' placeholder='Enter your name'></input>
        <input className='a' type='email' placeholder='Enter Email'></input>
        <input className='a' type='text' placeholder='Enter message'></input>
      </form>
    </div>
  )
}
