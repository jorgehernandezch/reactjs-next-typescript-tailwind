'use client'

import { HeaderEmpresas } from '@/components/Headers/Empresas'
import { TableLeads } from '@/components/Tables/Leads'
import { TemplateApp } from '@/components/Template'

export default function App() {
  return <TemplateApp header={<HeaderEmpresas />} table={<TableLeads />} />
}
