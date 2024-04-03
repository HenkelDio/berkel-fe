import { Option } from "./Option"
import { FaChartBar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { Outlet } from "react-router-dom";



export function Sidebar() {
  return (
    <div className="absolute h-full w-56 bg-indigo-900 pt-4 pb-4">

      <div className="mb-5">
        <h1 className="text-3xl text-white text-center font-bold">Berkel</h1>
      </div>

      <div className="h-[2px] bg-gray-500 mx-2"></div>

      <div className="p-3 flex flex-col gap-4 mt-5">
        <Option icon={<FaChartBar />} label="Dashboard" />
        <Option icon={<FaUsers />} label="Usuários" />
        <Option icon={<IoMdSettings />} label="Configurações" />
      </div>

      <Outlet />

    </div>
  )
}