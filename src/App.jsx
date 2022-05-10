import { useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import CreationInput from "./components/CreationInput";
import Table from "./components/Table";
import "./fonts.css";
function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <div className="flex flex-col items-center bg-slate-200 self-center w-full h-full">
        <Stats />
        <CreationInput />
        <Table />
      </div>
    </div>
  );
}

export default App;
