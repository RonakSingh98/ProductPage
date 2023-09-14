import React from "react";
import { Navbar } from "./components/navbar";
import {Blog} from "./components/blog";
import {Newsletter} from "./components/newsletter";


const App=()=>(
  <div>
    <Navbar/>
    <Blog/>
    <Newsletter/>
    
  </div>
)

export default App;