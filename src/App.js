import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type,
    })
    setTimeout(()=>{
      setAlert(null)
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#0f1012'
      showAlert('Dark Mode enabled', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = '#efefef'
      showAlert('Light Mode enabled', 'success')
    }
  }

  return (
    <>
      
      <Router>
      <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/about">
            <About mode={mode} showAlert={showAlert} />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </div>
      </Router>

    </>
  );
}

export default App;
