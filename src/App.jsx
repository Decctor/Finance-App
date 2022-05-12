import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Stats from "./components/Stats";
import CreationInput from "./components/CreationInput";
import Table from "./components/Table";
import "./fonts.css";
function App() {
  const [finances, setFinances] = useState([]);
  function getFinances() {
    axios
      .get("http://localhost:3001/finance/get")
      .then((res) => setFinances(res.data));
  }
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <div className="flex flex-col items-center bg-slate-200 self-center w-full h-full">
        <Stats />
        <CreationInput getFinances={getFinances} />
        <Table finances={finances} getFinances={getFinances} />
      </div>
    </div>
  );
}

export default App;
