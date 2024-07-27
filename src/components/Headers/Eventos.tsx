import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import { HeaderLayout } from './Layout'
import { Button } from '../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HeaderEventos = () => {
  return (
    <HeaderLayout
      icon={faCalendarPlus}
      title="Gestão de Eventos"
      total={122}
      totalText="Eventos"
      button={
        <Button
          variant="primary"
          text="Cadastrar Evento"
          starIcon={<FontAwesomeIcon icon={faCalendarPlus} />}
        />
      }
    />
  )
}
