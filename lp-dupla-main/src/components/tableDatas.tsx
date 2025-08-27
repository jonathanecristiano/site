import { MdDelete } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";

export const TableDatas = () => {
    return(
        <>
        <div>
  <table className="w-full border-collapse border border-gray-300 ">
    <thead>
      <tr className="bg-gray-200 text-black">
        <th className="border border-gray-300 p-2">Dia</th>
        <th className="border border-gray-300 p-2">Mês</th>
        <th className="border border-gray-300 p-2">Local</th>
        <th className="border border-gray-300 p-2">Cidade</th>
        <th className="border border-gray-300 p-2">Ingresso Online</th>
        <th className="border border-gray-300 p-2">Ações</th>
      </tr>
    </thead>
    <tbody>
      {[{ dia: "05", mes: "JAN" }, { dia: "10", mes: "FEV" }, { dia: "22", mes: "DEZ" }, { dia: "30", mes: "JAN" }].map((evento, index) => (
        <tr key={index}>
          <td className="border border-gray-300 p-2">{evento.dia}</td>
          <td className="border border-gray-300 p-2">{evento.mes}</td>
          <td className="border border-gray-300 p-2">Expocrato</td>
          <td className="border border-gray-300 p-2">Crato</td>
          <td className="border border-gray-300 p-2">
            <a href="https://www.ingresso.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Acessar Link</a>
          </td>
          <td className="border border-gray-300 p-2 flex space-x-2">
            <button className="text-yellow-200 cursor-pointer">
              <MdOutlineEdit size={25}/>

            </button>
            <button className="text-red-500 cursor-pointer">
              <MdDelete size={25}/>

            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


        </>
    )
}