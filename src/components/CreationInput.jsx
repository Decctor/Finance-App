import React from "react";

function CreationInput() {
  return (
    <div className="grid grid-cols-4 gap-4 grid-rows-1 mt-4 bg-white h-32 w-[70%] px-6 py-4">
      <div className="flex flex-col gap-2 items-center h-full">
        <label htmlFor="description">Descrição</label>
        <input
          id="description"
          name="description"
          type="text"
          className="w-full py-2 px-4 border border-gray-200 rounded"
          placeholder="Digite a descrição..."
        />
      </div>
      <div className="flex flex-col gap-2 items-center h-full">
        <label htmlFor="value">Valor</label>
        <input
          type="number"
          className="w-full py-2 px-4 border border-gray-200 rounded"
          placeholder="Digite o valor..."
        />
      </div>
      <div className="flex flex-col gap-2 items-center h-full">
        <label htmlFor="type">Tipo</label>
        <select
          className="w-full py-2 px-4 border border-gray-200 rounded"
          name="type"
          id="type"
        >
          <option value="expense">Despesa</option>
          <option value="income">Receita</option>
        </select>
      </div>
      <div className="flex justify-center items-center h-full">
        <button className="bg-cyan-900 hover:bg-cyan-700 px-4 py-3 rounded text-white font-semibold">
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default CreationInput;
