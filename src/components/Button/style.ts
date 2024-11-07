import styled from 'styled-components/native';
import {TouchableOpacity} from 'react-native'


export type ButtonTypeStyleProps = 'PRIMARY' | 'SECUNDARY'

type Props = {
  type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 247px;
  height: 42px;
  margin: 20px;

  background: #8B5CF6;
  border-radius: 6px;

  /* Inside auto layout */

  flex: none;
  order: 3;
  flex-grow: 0;
`;


export const Tittle = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme.FONT_SIZE.TEXTO_BOTAO};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;