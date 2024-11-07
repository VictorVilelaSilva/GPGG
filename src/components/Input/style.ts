import {TextInput} from 'react-native';
import styled from 'styled-components/native';


export const  Container = styled(TextInput)`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  margin: 5% auto;

  align-items: flex-start;
  padding: 11px 16px;
  gap: 32px;

  width: 247px;
  height: 48px;
  left: 0px;


  /* zinc/900 */

  background: #18181B;
  border-radius: 4px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;