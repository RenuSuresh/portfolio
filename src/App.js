import "./App.css";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";

function ChatbotPluginLoader() {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.src = "https://ai-bot-renu.netlify.app/chatbot-plugin.js";
    script.async = true;

    // Append the script to the document body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return null; // This component doesn't render anything
}

function App() {
  const [res, setRes] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("./biodata.json");
      setRes(res);
    }
    fetchData();
  });
  import React, { useEffect } from "react";



  return (
    <div className="app">
      <Header data={res.data} />
      <About data={res.data} />
      <Resume data={res.data} />
      <Portfolio data={res.data} />
      <ChatbotPluginLoader />
      {/* {res.data && <About data={res.data} />} */}
    </div>
  );
}

export default App;
