import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';



export const ContainerAll = styled.View`
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 125px;
  background: #2A2634
  margin-top: 2%;
;
`;
export const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 125px;
  background: #2A2634
  
;
`;

export const ContainerTexto = styled.View`
  display: flex;
  flex-direction: column;  
  width: 25px;
  height: 150px;
  justify-content: flex-start; 
  
;
`;


export const FundoContaierVerde= styled.View`
  width: 362px;
  background: #89F96D;
;
`;

export const Informacoes = styled.View`

  flex-direction: row;
  margin-bottom: 3%;

`;

export const HeroiRunas = styled.View`
  flex-direction: row;
`;


export const Heroi = styled.Image`
  width: 74px;
  height: 61px;

  background: #D9D9D9;
  border-radius: 30px;
`;
export const Runa = styled.Image`

  width: 33px;
  height: 26px;
  background: #D9D9D9;
  border-radius: 30px;
  margin-top: 13%; 

`;

export const Runas = styled.View`
  flex-direction: column;
  
`;

export const Score = styled.Text`
  color: #ffffff;
  font-size: 33px;
  letter-spacing: 5px;
  
 
`;

export const Win = styled.Text`
  color: #38EB1B;
  font-size: 30px;
  font-family: Coda Caption;
  justify-content: center;
  text-align: center;
 
`;

export const Lose = styled.Text`
  color: #CA0303;
  font-family: Coda Caption;
  font-size: 25px;
  justify-content: center;
  text-align: center;

 
 
`;

export const Itens = styled.View`
  flex-direction: row;
  

`;

export const Item = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 2%;


  background: #111111;
  border-radius: 5px;
`;









