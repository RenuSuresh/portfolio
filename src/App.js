import "./App.css";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import { useEffect, useState } from "react";
function App() {
  const [biodata, setBioData] = useState({});

  async function getData() {
    const res = await fetch("./biodata.json")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setBioData(result);
      });
    console.log("biodata>>>>", biodata);
  }
  useEffect(() => {
    getData();
    return () => {};
  }, []);
  return (
    <div className="app">
      <Header />
      <Banner />
      <About data={biodata.main} />
    </div>
  );
}

export default App;
