import React from "react";

function Table() {
  return (
    <div className="w-[70%] bg-white mt-2 px-2 py-2 rounded h-fit">
      <div className="grid grid-cols-7 grid-rows-1">
        <h1 className="font-semibold col-span-2">Descrição</h1>
        <h1 className="font-semibold col-span-2">Valor</h1>
        <h1 className="font-semibold col-span-2">Tipo</h1>
        <h1 className="col-span-1"></h1>
      </div>
    </div>
  );
}

export default Table;
