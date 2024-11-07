import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';



export const Container1 = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;


export const Logo1 = styled.Image`
  width: 100%;
  height: 140px;
`;

export const Container2 = styled.View`
  /* Perfil Topo */
  flex:1;


  width: 360px;
  height: 210px;
  background-color: red; 


  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0; 
`;
export const ContainerInicial = styled.View`


`;

export const Header2 = styled.View`
  width: 100%;
  height: 210px;

   
`;

export const Banner = styled.ImageBackground`
  width:100%;
  height:100%;
  justify-content: flex-end;
  align-items: center;



`;
export const styles = StyleSheet.create({
  image: {
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  icone: {
    width: 73,
    height: 66,
    borderColor: 'gray',
    borderWidth: 3,
    borderRadius: 50,
  },
  text: {

    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: 10,
  },
});





