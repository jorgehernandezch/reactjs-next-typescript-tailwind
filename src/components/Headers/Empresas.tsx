import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { HeaderLayout } from './Layout'
import { Button } from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderEmpresas = () => {
  return (
    <HeaderLayout
      icon={faBuilding}
      title="Gestão de Filiais/Parceiros"
      total={100}
      totalText="Empresas"
      button={
        <Button
          variant="primary"
          text="Cadastrar Empresa"
          starIcon={<FontAwesomeIcon icon={faBuilding} />}
        />
      }
      filters
    />
  )
}
