import "./App.css";
import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [biodata, setBioData] = useState([]);
  const [res, setRes] = useState({});

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("./biodata.json");
      setRes(res);
    }
    fetchData();
  });

  console.log("bio data is >>>", res.data);
  return (
    <div className="app">
      <Header data={res.data} />
      {/* {res.data && <About data={res.data} />} */}
    </div>
  );
}

export default App;
