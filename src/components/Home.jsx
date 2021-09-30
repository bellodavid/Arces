import React, {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Home() {
    
    
    return (
        <div>
            <header>
                <h1 className="">Arces</h1>
            </header>
            <section>
                <div className="home_container">
                    <Link to="/contract">
                <button className="signup">Sign Up</button>
                </Link>
                
                </div>
            </section>
        </div>
    )
}

export default Home
