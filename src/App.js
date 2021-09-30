import React from 'react'
import Home from './components/Home'
import './App.css';
import Content from './components/Content';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
    <Router>
    <div className="app">
    
    <Switch>
    <Route path="/contract">
        <Content />

      </Route>
      <Route path="/">
        <Home />

      </Route>
      
    </Switch>
   

    </div>
   
 

  </Router>

  )
}

export default App
