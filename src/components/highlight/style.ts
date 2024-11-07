import styled from 'styled-components/native';


export const Container = styled.View `
height: 32px;
width: 327px;
left: 0px;

border-radius: nullpx;


`;


export const Tittle = styled.Text`
  line-height: 32px;
  /* identical to box height, or 114% */

  text-align: center;
  letter-spacing: -0.4px;


  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};

`;

export const SubTittle = styled.Text`
  text-align: center;

  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};

`;

