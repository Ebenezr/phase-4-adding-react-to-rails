import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    axios.get("http://127.0.0.1:3000/movies").then((resp) => {
      console.log(resp.data);
    });
  }, []);
  return <div className="App"></div>;
}

export default App;
