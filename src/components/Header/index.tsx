import { HeaderBar, HeaderLink, HeaderLogo, HeaderText } from './style'
import logo from '../../assets/images/logo.svg'

export type Props = {
  page: 'home' | 'perfil'
}

const Header = ({ page }: Props) => (
  <HeaderBar page={page}>
    {page === 'home' ? (
      <>
        <HeaderLogo page={page} src={logo} alt="Logo" />
        <HeaderText>
          Viva experiências gastronômicas no conforto da sua casa
        </HeaderText>
      </>
    ) : (
      <div>
        <HeaderLink to={'/'}>Restaurantes</HeaderLink>
        <HeaderLogo page={page} src={logo} alt="Logo" />
        <HeaderLink to={'/'} align="right">
          0 produto(s) no carrinho
        </HeaderLink>
      </div>
    )}
  </HeaderBar>
)

export default Header
