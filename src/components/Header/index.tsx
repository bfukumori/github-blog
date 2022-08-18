import { HeaderContainer, Logo } from './styles'
import logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="" />
      </Logo>
    </HeaderContainer>
  )
}
