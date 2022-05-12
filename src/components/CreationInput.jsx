import React, { useRef, useState } from "react";
import axios from "axios";
function CreationInput({ getFinances }) {
  const ref = useRef();
  const currentDate = new Date();
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("expense");
  const [date, setDate] = useState(currentDate.toLocaleDateString());
  function handleCreation() {
    console.log(date.split("-")[1]);
    let fixedDate = new Date(
      date.split("-")[0],
      date.split("-")[1] - 1,
      date.split("-")[2]
    );
    console.log(fixedDate);
    let obj = { description, value, type, date: fixedDate.toISOString() };
    axios.post("http://localhost:3001/finance/create", obj).then((res) => {
      resetState();
      getFinances();
    });
  }
  function resetState() {
    setDescription("");
    setValue("");
    setType("expense");
    setDate(currentDate.toLocaleDateString());
  }
  return (
    <div className="grid grid-cols-5 gap-4 grid-rows-1 mt-4 bg-white h-32 w-[70%] px-6 py-4">
      <div className="flex flex-col gap-2 items-center h-full">
        <label htmlFor="description">Descrição</label>
        <input
          value={description}
          id="description"
          name="description"
          type="text"
          className="w-full py-2 px-4 border border-gray-200 rounded"
          placeholder="Digite a descrição..."
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 items-center h-full">
        <label htmlFor="value">Valor</label>
        <input
          value={value}
          type="number"
          className="w-full py-2 px-4 border border-gray-200 rounded"
          placeholder="Digite o valor..."
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 items-center h-full">
        <label htmlFor="type">Tipo</label>
        <select
          value={type}
          className="w-full py-2 px-4 border border-gray-200 rounded"
          name="type"
          id="type"
          onChange={(e) => setType(e.target.value)}
        >
          <option value="expense">Despesa</option>
          <option value="income">Receita</option>
        </select>
      </div>
      <div className="flex flex-col gap-2 items-center h-full">
        <label htmlFor="datepicker">Selecione uma data</label>
        <input
          value={date}
          ref={ref}
          className="w-full py-[0.4rem] px-4 border border-gray-200 rounded"
          type="text"
          onChange={(e) => setDate(e.target.value)}
          onFocus={() => (ref.current.type = "date")}
          onBlur={() => (ref.current.type = "text")}
          placeholder={"DD/MM/AA"}
        />
      </div>
      <div className="flex justify-center items-center h-full">
        <button
          onClick={handleCreation}
          className="bg-cyan-900 hover:bg-cyan-700 px-4 py-3 rounded text-white font-semibold"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default CreationInput;
