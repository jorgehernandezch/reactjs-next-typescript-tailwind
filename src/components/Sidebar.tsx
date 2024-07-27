'use client'
import { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { initFlowbite } from 'flowbite'
import Image from 'next/image'
import { ItemSidebar } from './ItemSidebar'
import {
  faCalendarPlus,
  faChartLine,
  faCity,
  faCog,
  faIdCardAlt,
  faMobile,
  faSignOut,
  faUsersCog,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors } from '@/styles/colors'

export const Sidebar = () => {
  const [selectedPath, setSelectedPath] = useState('/app')
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Solo ejecuta en el cliente
      initFlowbite()
    }
  }, [])

  return (
    <div className="bg-blue-menu h-14 md:h-0">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-100 rounded-lg md:hidden hover:bg-gray-100 hover:text-blue-menu focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <MenuIcon />
      </button>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-60 md:w-64 h-screen transition-transform -translate-x-full md:translate-x-0"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto p-0 h-full bg-blue-menu">
          <div className=" w-full flex justify-center items-center">
            <Image
              src={require('@/assets/img/sidebar/logotipo.png')}
              alt="Logotipo"
              className="w-auto h-16"
            />
          </div>
          <div className="p-4 flex flex-col justify-between h-[calc(100vh-4rem)]">
            <ul className="space-y-3">
              <ItemSidebar
                isSelected={selectedPath === '/app'}
                icon={faMobile}
                text="Leads do App"
                path="/app"
                onClick={() => {
                  setSelectedPath('/app')
                }}
              />
              <ItemSidebar
                isSelected={selectedPath === '/app/empresas'}
                icon={faCity}
                text="Gestão de Empresas"
                path="/app/empresas"
                onClick={() => {
                  setSelectedPath('/app/empresas')
                }}
              />
              <ItemSidebar
                isSelected={selectedPath === '/app/equipes'}
                icon={faUsersCog}
                text="Go Leads Equipes"
                path="/app/equipes"
                onClick={() => {
                  setSelectedPath('/app/equipes')
                }}
              />
              <ItemSidebar
                isSelected={selectedPath === '/app/consultores'}
                icon={faIdCardAlt}
                text="Gestão de Consultores"
                path="/app/consultores"
                onClick={() => {
                  setSelectedPath('/app/consultores')
                }}
              />
              <ItemSidebar
                isSelected={selectedPath === '/app/eventos'}
                icon={faCalendarPlus}
                text="Go Leads Eventos"
                path="/app/eventos"
                onClick={() => {
                  setSelectedPath('/app/eventos')
                }}
              />
              <ItemSidebar
                isSelected={selectedPath === '/app/analytics'}
                icon={faChartLine}
                text="Analytics"
                path="/app/analytics"
                onClick={() => {
                  setSelectedPath('/app/analytics')
                }}
              />
              <ItemSidebar
                isSelected={selectedPath === '/app/api'}
                icon={faCog}
                text="Api"
                path="/app/api"
                onClick={() => {
                  setSelectedPath('/app/api')
                }}
              />
            </ul>
            <Link
              href="/"
              className="flex flex-row justify-start items-center bg-blue-950 py-3 px-5 rounded-lg gap-2"
            >
              <FontAwesomeIcon icon={faSignOut} color={colors.white} />
              <p className="font-sf-pro font-Medium text-white text-sm">
                Sair da conta
              </p>
            </Link>
          </div>
        </div>
      </aside>
    </div>
  )
}
