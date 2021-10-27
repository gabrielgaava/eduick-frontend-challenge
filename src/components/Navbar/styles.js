import styled from 'styled-components';
import colors from '../../styles/colors';
import { Row, Button } from '../../styles/basicStyles';

export const Container = styled(Row)`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;

  @media only screen and (min-width: 320px) and (max-width: 800px)  {
    padding: 0px 20px;
    max-width: 100vw;
  }
`;

export const LinksNav = styled(Row)`
  width: 100%;
`;

export const LeftLinks = styled(Row)`
  gap: 20px;
`;

export const RightLinks = styled(Row)``;

export const Logo = styled.img`
  @media only screen and (min-width: 320px) and (max-width: 800px)  {
    margin-left: 8px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-left: 40px;
  width: 100%;

  @media only screen and (min-width: 320px) and (max-width: 800px)  {

    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background: #00000090;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 200;
    transform: ${props => props.showOnMobile 
      ? "translateX(-10%)" 
      : "translateX(-200%)"
    };
    transition: transform 0.3s ease-out;
  }

`;

export const LocaleButton = styled(Button)`
  min-height: 32px;
  min-width: 32px;
  margin-right: 20px;
  background: #FFFFFF20;
  border-radius: 4px;
  color: #FFFFFF;
`;

export const ActionButton = styled(Button)`
  background: ${colors.secundary};
  min-height: 48px;
  min-width: 120px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: ${colors.primaryDark};
  border-radius: 4px;
`;