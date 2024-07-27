import { Busca } from "./Busca"
import { Select } from "./Select"

export const Filters = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-2 sm:flex-row sm:items-center">
      <p className="font-sf-pro font-bold text-gray-600 text-sm">
        Filtrar por:
      </p>
      <div className="flex flex-row justify-start items-center gap-2 flex-1">
        <Select />
        <Busca />
      </div>
    </div>
  )
}