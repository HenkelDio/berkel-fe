import { ReactNode } from "react"

interface IPropsOption {
  icon:  ReactNode
  label: string
}

export function Option({ icon, label }: IPropsOption) {
  return (
    <div
      className="flex items-center gap-5 bg-white p-4 rounded-md cursor-pointer text-gray-900">
      <p className="text-xl">{icon}</p>
      <p className="font-semibold">{label}</p>
    </div>
  )
}