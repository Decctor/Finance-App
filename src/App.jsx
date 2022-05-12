import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Stats from "./components/Stats";
import CreationInput from "./components/CreationInput";
import Table from "./components/Table";
import "./fonts.css";
function App() {
  const [finances, setFinances] = useState([]);
  const [liquidTotal, setLiquidTotal] = useState(0);
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const currentMonth = new Date().getMonth() + 1;
  function getFinances() {
    axios
      .get("http://localhost:3001/finance/get")
      .then((res) => setFinances(res.data));
  }
  function getLiquidTotal() {
    axios
      .get(`http://localhost:3001/finance/get/total/liquid/${currentMonth}`)
      .then((res) => setLiquidTotal(res.data[0].total));
  }
  function getIncomeTotal() {
    axios
      .get(`http://localhost:3001/finance/get/total/income/${currentMonth}`)
      .then((res) => setIncomeTotal(res.data[0].total));
  }
  function getExpenseTotal() {
    axios
      .get(`http://localhost:3001/finance/get/total/expenses/${currentMonth}`)
      .then((res) => {
        res.data[0] ? setExpenseTotal(res.data[0].total) : setExpenseTotal(0);
      });
  }
  function handleUpdate() {
    getLiquidTotal();
    getIncomeTotal();
    getExpenseTotal();
  }
  useEffect(() => {
    getLiquidTotal();
    getIncomeTotal();
    getExpenseTotal();
  }, []);
  console.log(expenseTotal);
  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <div className="flex flex-col items-center bg-slate-200 self-center w-full h-full">
        <Stats
          incomeTotal={incomeTotal}
          expenseTotal={expenseTotal}
          liquidTotal={liquidTotal}
        />
        <CreationInput getFinances={getFinances} handleUpdate={handleUpdate} />
        <Table
          handleUpdate={handleUpdate}
          finances={finances}
          getFinances={getFinances}
        />
      </div>
    </div>
  );
}

export default App;
