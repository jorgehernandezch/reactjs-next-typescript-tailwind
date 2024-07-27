import { colors } from '@/styles/colors'
import { type IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Filters } from '../Filters'

interface HeaderLayoutProps {
  icon: IconDefinition
  title: string
  total: number
  totalText: string
  button?: JSX.Element
  filters?: boolean
}

export const HeaderLayout = ({
  icon,
  title,
  total,
  totalText,
  button,
  filters,
}: HeaderLayoutProps) => {
  return (
    <div className="flex flex-col p-4 gap-3">
      <div className="flex flex-col justify-start items-start sm:flex-row sm:justify-between sm:items-center gap-2">
        <div className="flex flex-row justify-start items-center gap-3">
          <FontAwesomeIcon icon={icon} color={colors.gray[600]} />
          <h4 className="font-bold font-montserrat text-gray-600 text-lg">
            {title}
          </h4>
        </div>
        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
          <div className="flex flex-row justify-start items-center gap-3 bg-blue-50 px-2 py-1 rounded-md">
            <h4 className="font-sf-pro font-bold text-xs text-blue-800">
              Total de resultados
            </h4>
            <p className="font-sf-pro font-regular text-xs text-blue-800">
              {total} {totalText}
            </p>
          </div>
          {button ?? button}
        </div>
      </div>
      {filters && <Filters />}
    </div>
  )
}
