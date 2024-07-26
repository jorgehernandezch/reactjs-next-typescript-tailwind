import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { type IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { colors } from '@/styles/colors'
import Link from 'next/link'

interface ItemSidebarProps {
  isSelected?: boolean
  icon: IconDefinition
  text: string
  path: string
  onClick: () => void
}

export const ItemSidebar = ({
  isSelected,
  icon,
  text,
  path,
  onClick,
}: ItemSidebarProps) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <li
      // eslint-disable-next-line prettier/prettier
      className={`${!isSelected ? 'bg-transparent' : 'bg-gradient-to-r from-[#52EFB2] from-50% to-[#007EEF]'}
        rounded-md hover:bg-gray-600 
      `}
    >
      <Link
        href={path}
        className="flex items-center gap-2 p-2 rounded-lg"
        onMouseEnter={() => {
          setIsHovered(true)
        }}
        onMouseLeave={() => {
          setIsHovered(false)
        }}
        onClick={onClick}
      >
        {isSelected ? (
          <FontAwesomeIcon icon={icon} color={colors.blue[900]} />
        ) : (
          <FontAwesomeIcon
            icon={icon}
            color={isHovered ? colors.white : colors.green.A300}
          />
        )}
        <p
          className={` ${isSelected ? 'text-blue-900' : 'text-white'} 
          text-sm font-medium font-sf-pro`}
        >
          {text}
        </p>
      </Link>
    </li>
  )
}
