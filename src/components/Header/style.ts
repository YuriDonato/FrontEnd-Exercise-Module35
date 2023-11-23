import styled from 'styled-components'
import { cores } from '../../styles'
import pattern from '../../assets/images/pattern.svg'

export const HeaderBar = styled.div`
  width: 100%;
  height: 384px;
  background-color: ${cores.begeEscuro};
  background-image: url(${pattern});
  background-repeat: repeat-y;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const HeaderLogo = styled.img`
  min-width: 125px;
  min-height: 57.5px;
  margin-top: 64px;
  margin-bottom: 138px;
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
