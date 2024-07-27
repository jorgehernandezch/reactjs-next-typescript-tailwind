import { faMobile } from '@fortawesome/free-solid-svg-icons'
import { HeaderLayout } from './Layout'

export const HeaderLeads = () => {
  return (
    <HeaderLayout
      icon={faMobile}
      title="Leads do App"
      total={458}
      totalText="Leads"
      filters
    />
  )
}
