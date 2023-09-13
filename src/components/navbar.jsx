import React from "react";
import './navbar.css';


const navbar = [
    { name: 'Home', id: 'home'},
    { name: 'About', id: 'about' },
    { name: 'Our Products', id: 'product', child: [
    { name: 'Product 1', id: 'p1'},
    { name: 'Product 2', id: 'p2' },
    { name: 'Product 3', id: 'p3'},
    { name: 'Product 4', id: 'p4' },
    ] },
    { name: 'Contact Us', id: 'contact'},
    ];

    export const Navbar =()=>{
   return(
    <div className="nav">
      <div className="title">
      <a href="/home">ShopKart</a>
      </div>
      <div className="nav_links">
          <p><a href="/home">Home</a></p>
          <p><a href="/about">About</a></p>
          <div className="drop">
          <a href="/products">Our Products</a>
          <div className="drop_content">
            <a href="" >Electronics</a>
            <a href="" >Jewelry</a>
            <a href="" >Men's Clothing</a>
            <a href="" > Women's Clothing</a>
           </div>
          </div>
          <p><a href="/contactus">Contact Us</a></p>
        </div>
        </div>
   )};

   
    export default navbar;