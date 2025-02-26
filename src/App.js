import Alert from "./Alert";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {
   setAlert({
    msg:message,
    type:type
   })
   setTimeout(() => {
    setAlert(null);
   }, 1500);
}

  const toggleMode = () => {
    if (mode === "light") { 
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = `TextUtils - Dark Mode`;
      // setInterval(() => {
      //   document.title = `TextUtils is Amazing Mode`;
      // }, 2000);

      // setInterval(() => {
      //   document.title = `Install TextUtils Now`;
      // }, 1500);  
    } 
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success"); 
      document.title = `TextUtils - Light Mode`;
    }
  };
  return (
    <>
      {/* <Navbar title = "TextUtils" aboutText = "About TextUtils"/> */}
      {/* <Navbar />  */}
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes>   Insted of Switch we can use Routes because Routes is newest version 6 and switch is old version 5  and exact is used to find component exact path eg) /user--component 1 or /user./home--component 2  */}
          {/* <Route exact path="/about"
            element={<About />}/> */}
          
          {/* <Route exact path="/" */}
          {/* element={
          } */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          {/* /> */}
      {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;

