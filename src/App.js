import React from "react";
import { Navbar } from "./components/navbar";
import {Blog} from "./components/blog";
import {Newsletter} from "./components/newsletter";
import { Show } from "./components/show";


const App=()=>(
  <div>
    <Navbar/>
    <Show/>
    <Blog/>
    <div>
    <Newsletter/>
    </div>
    
  </div>
)

export default App;