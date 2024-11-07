import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
// export const MatchList = styled(FlatList).attr({
//   contentContainerStyle: {
//     padding: 24
//   },
//   showsVerticalScrollIndicator : false
// })``;


export const Formulario = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 40px;
  width: 327px;
  background: #2A2634;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

`;

export const ContainerInput = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 3% auto;
  padding: 0px;
  gap: 8px;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
`;


export const Container2 = styled.View`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 40px;

  width: 327px;


  background: #2A2634;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;


export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;

`;


export const Tittle = styled.
Text`
  color:#fff;
  font-size:30px;

`;



export const Texto1 = styled.Text`

 
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  text-align: center;
  letter-spacing: -0.18px;
  color: #BF94FF;



`;

export const Texto2 = styled.Text`


  /* Cadastre-se */


  width: 247px;
  height: 48px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  text-align: center;
  letter-spacing: -0.18px;
  text-decoration-line: underline;

  color: #DCC6FD;


  /* Inside auto layout */

  flex: none;
  order: 3;
  align-self: stretch;
  flex-grow: 0;

`;

export const Texto3 = styled.Text`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  /* identical to box height, or 144% */

  letter-spacing: -0.18px;

  color: #FFFFFF;

`;

export const styles = StyleSheet.create({
  container:{
    overflow:'scroll',
  }
});