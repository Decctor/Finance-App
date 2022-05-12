import React, { useEffect, useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import axios from "axios";
function Table({ getFinances, finances }) {
  useEffect(() => {
    getFinances();
  }, []);
  function deleteFinance(id) {
    axios.delete(`http://localhost:3001/finance/delete/${id}`).then((res) => {
      getFinances();
    });
  }
  return (
    <div className="w-[70%] bg-white mt-2 px-4 py-2 rounded h-fit">
      <div className="grid grid-cols-9 grid-rows-1">
        <h1 className="font-semibold col-span-2">Descrição</h1>
        <h1 className="font-semibold col-span-2">Valor</h1>
        <h1 className="font-semibold col-span-2">Tipo</h1>
        <h1 className="font-semibold col-span-2">Data</h1>
        <h1 className="col-span-1"></h1>
      </div>
      {finances?.map((finance) => (
        <div
          key={finance._id}
          className="grid grid-cols-9 mt-2 pt-2 border-t border-gray-200 grid-rows-1"
        >
          <h1 className=" text-sm col-span-2">{finance.description}</h1>
          <h1 className=" text-sm col-span-2">R${finance.value.toFixed(2)}</h1>
          {finance.type == "expense" ? (
            <h1 className="text-sm col-span-2 text-red-400">Despesa</h1>
          ) : (
            <h1 className="text-sm col-span-2 text-green-500">Receita</h1>
          )}
          <h1 className="text-sm col-span-2">
            {new Date(finance.date).toLocaleDateString()}
          </h1>
          <div
            onClick={() => deleteFinance(finance._id)}
            className="col-span-1 cursor-pointer"
          >
            <BsFillTrashFill className="fill-red-600" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Table;
