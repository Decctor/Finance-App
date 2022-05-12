import React from "react";
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
function Stats({ liquidTotal, incomeTotal, expenseTotal }) {
  return (
    <div className="grid w-[70%] mt-[-40px] gap-4 grid-cols-3 grid-rows-1 bg-transparent">
      <div className="h-28 bg-white p-2 rounded">
        <div className="flex font-oswald justify-around pb-3 items-center">
          <h2>Entradas</h2>
          <BsFillArrowUpCircleFill />
        </div>
        <div className="h-[1px] w-full bg-slate-200"></div>
        <div className="py-4 flex justify-center items-center">
          <h1 className="text-2xl font-oswald">
            R$ {incomeTotal.toFixed(2).replace(".", ",")}
          </h1>
        </div>
      </div>
      <div className="h-28 bg-white p-2 rounded ">
        <div className="flex font-oswald justify-around pb-3 items-center">
          <h2>Saidas</h2>
          <BsFillArrowDownCircleFill />
        </div>
        <div className="h-[1px] w-full bg-slate-200"></div>
        <div className="py-4 flex justify-center items-center">
          <h1 className="text-2xl font-oswald">
            {expenseTotal < 0
              ? `- R$${Math.abs(expenseTotal).toFixed(2)}`
              : `RS${expenseTotal.toFixed(2)}`}
          </h1>
        </div>
      </div>
      <div className="h-28 bg-white p-2 rounded ">
        <div className="flex font-oswald justify-around pb-3 items-center">
          <h2>Líquido</h2>
          <MdAttachMoney />
        </div>
        <div className="h-[1px] w-full bg-slate-200"></div>
        <div className="py-4 flex justify-center items-center">
          <h1 className="text-2xl font-oswald">
            R$ {liquidTotal.toFixed(2).replace(".", ",")}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Stats;
