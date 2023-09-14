import React from 'react'
import { Ass} from './products';
import './blog.css';
export const Blog = () => {
  return (
    <div className='blog'>
    <div className='blog_title'>
       <h1>New Products</h1>
    </div>
    <div className='blog_headings'>
       <a href='' >Apparell</a>
       <a href=''>Accessories</a>
       <a href=''>50% Off</a>
       <a href=''> Bestsellers</a>
    </div>
    {/* <div>
      <Ass/>
    </div> */}

<Ass/>
    </div>
  )
}

export default Blog;