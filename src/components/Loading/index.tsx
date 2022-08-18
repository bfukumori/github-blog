import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'styled-components'
import { Container } from './styles'

export function Loading() {
  const { colors } = useTheme()
  return (
    <Container>
      <FontAwesomeIcon
        icon={faSpinner}
        size="8x"
        color={colors.span}
        spinPulse={true}
      />
    </Container>
  )
}
