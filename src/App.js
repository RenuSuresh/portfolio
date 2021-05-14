import "./App.css";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import About from "./Components/About/About";
import Resume from "./Components/Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";
function App() {
  const [res, setRes] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("./biodata.json");
      setRes(res);
    }
    fetchData();
  });

  return (
    <div className="app">
      <Header data={res.data} />
      <About data={res.data} />
      <Resume data={res.data} />
      <Portfolio data={res.data} />
      {/* {res.data && <About data={res.data} />} */}
    </div>
  );
}

export default App;
