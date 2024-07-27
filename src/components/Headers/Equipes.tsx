import { faUsersCog } from '@fortawesome/free-solid-svg-icons'
import { HeaderLayout } from './Layout'
import { Button } from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderEquipes = () => {
  return (
    <HeaderLayout
      icon={faUsersCog}
      title="Gestão de Equipes"
      total={100}
      totalText="Equipes"
      button={
        <Button
          variant="primary"
          text="Cadastrar Equipe"
          starIcon={<FontAwesomeIcon icon={faUsersCog} />}
        />
      }
    />
  )
}
