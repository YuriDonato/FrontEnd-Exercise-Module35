import { HeaderBar, HeaderLogo, HeaderText } from './style'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <HeaderBar>
    <HeaderLogo src={logo} alt="Logo" />
    <HeaderText>
      Viva experiências gastronômicas no conforto da sua casa
    </HeaderText>
  </HeaderBar>
)

export default Header
