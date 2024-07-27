import { faIdCardClip, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { HeaderLayout } from './Layout'
import { Button } from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderConsultores = () => {
  return (
    <HeaderLayout
      icon={faIdCardClip}
      title="Gestão de Consultores"
      total={458}
      totalText="Consultores"
      button={
        <Button
          variant="primary"
          text="Cadastrar Consultar"
          starIcon={<FontAwesomeIcon icon={faUserPlus} />}
        />
      }
      filters
    />
  )
}
