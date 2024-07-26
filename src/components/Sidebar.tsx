'use client'
import MenuIcon from '@mui/icons-material/Menu'
import { initFlowbite } from 'flowbite'
import { useEffect } from 'react'

export const Sidebar = () => {
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
        <div className="overflow-y-auto py-5 px-3 h-full bg-blue-menu">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="ml-3">Overview</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}
