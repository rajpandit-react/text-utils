import React, { useState } from "react";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#112335";
      console.log("dark mode");
      showAlert("Dark mode has been enable", "alert");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      console.log("light mode");
      showAlert("light mode has been enable", "alert");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <div className="container">
          <Alert alert={alert} />
        </div>
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Enter The Text To Analyze"
                  mode={mode}
                />
              }
            />
            <Route path="/about/" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
