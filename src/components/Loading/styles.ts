import styled from 'styled-components/native';

//estilizacao tela de loading

export const Container = styled.View`
  flex: 1;
  justify-content:center;
  allign-items: center;

 background-color:${({ theme }) => theme.COLORS.FUNDO};

`


export const LoadIndicator = styled.ActivityIndicator.attrs(({theme})=> ({
  color: theme.COLORS.LARANJA,
  size: theme.FONT_SIZE.Large
})) ` `;