import styled from 'styled-components'
import { cores } from '../../styles'
import pattern from '../../assets/images/pattern.svg'
import { Props } from '.'
import { Link } from 'react-router-dom'

type PropLink = {
  align?: string
}

export const HeaderBar = styled.div<Props>`
  width: 100%;
  height: ${(props) => (props.page === 'home' ? '384px' : '186px;')};
  background-color: ${cores.begeEscuro};
  background-image: url(${pattern});
  background-repeat: repeat-y;
  display: flex;
  align-items: center;
  flex-direction: ${(p) => (p.page === 'home' ? 'column' : 'row')};
  justify-content: center;

  div {
    width: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    margin-left: 171px;
    margin-right: 171px;
    justify-items: center;
  }
`

export const HeaderLogo = styled.img<Props>`
  min-width: 125px;
  min-height: 57.5px;
  margin-top: ${(p) => (p.page === 'home' ? '64px' : '0px')};
  margin-bottom: ${(p) => (p.page === 'home' ? '138px' : '0px')};
`

export const HeaderText = styled.h1`
  color: ${cores.vermelho};
  text-align: center;
  font-size: 36px;
  line-height: normal;
  font-weight: bold;
  max-width: 539px;
  margin-bottom: 40px;
`

export const HeaderLink = styled(Link)<PropLink>`
  color: ${cores.vermelho};
  font-size: 18px;
  font-weight: bold;
  text-align: ${(p) => p.align};
  text-decoration: none;
`
