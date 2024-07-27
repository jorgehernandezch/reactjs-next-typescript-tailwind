'use client'

import { HeaderLeads } from '@/components/Headers/Leads'
import { TableLeads } from '@/components/Tables/Leads'
import { TemplateApp } from '@/components/Template'

export default function App() {
  return <TemplateApp header={<HeaderLeads />} table={<TableLeads />} />
}
