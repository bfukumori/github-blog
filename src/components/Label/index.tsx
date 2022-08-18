import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import { LabelContainer } from './styles'

interface LabelProps {
  text: string | number
  icon: FontAwesomeIconProps['icon']
}

export function Label({ text, icon }: LabelProps) {
  return (
    <LabelContainer>
      <FontAwesomeIcon icon={icon} style={{ width: 18, height: 18 }} />
      <span>{text}</span>
    </LabelContainer>
  )
}
