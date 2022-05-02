// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
//This Is Routerr
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  //This State  For Dark Mode.
  const [mode, setmode] = useState("normal")//Whether Dark Mode Is Enable Or Not

  //Dark Mode Funtion.
  const toggleMode = () => {
    if (mode === "normal") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Hase Been On.", "Success");
      //This Is Title it is a optional 
      document.title = "TextUtils - DarkMode";
    }
    else {
      setmode("normal");
      document.body.style.backgroundColor = "white";
      showAlert("Normal Mode Hase Been On.", "Success");
      //This Is Title it is a optional.
      document.title = "TextUtils - LightMode";

    }
  }

  //This State For The Alert.
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type

    })

    //It IS Besically Remove The Alert After The 1.5 Sec.
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  return (
    <>
      <Router>

        <Navbar title="Kamlesh" aboutText="About Us" modeType={mode} toggleModefun={toggleMode} />
        <div className="container">
          <Alert alertpo={alert} />
          {/* This IS a Part of Router To Raute the Page  */}
          <Switch>
            {/* This Exact Is Use To Exact That Page Not other */}
            <Route exact path="/about">
              <About mode={mode} />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter The Text :)" modeType={mode} />
            </Route>
          </Switch>
        </div>
      </Router>


    </>
  );
}


export default App;
