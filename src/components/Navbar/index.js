import React from "react";
import Hamburger from 'hamburger-react'
import {FormattedMessage} from 'react-intl'

import LogoImg from '../../assets/images/eduick-logo.svg';
import { useLocale } from "../../hooks/Locale";
import {Container, LinksNav, Logo, Nav, LeftLinks, RightLinks, ActionButton, LocaleButton} from './styles';

const Navbar = (props) => {

  const { toogleLocale, currentLocale } = useLocale();
  const [isMenuOpen, setMenuOpen] = React.useState();

  return (
    <Container>
      <LinksNav>
        <Hamburger 
          toggled={isMenuOpen} 
          toggle={setMenuOpen} 
          size={24} 
          color="#FFF"
        />
        <Logo src={LogoImg} alt="Eduick Logo"/>
        <Nav showOnMobile={isMenuOpen}>
          <LeftLinks>
            <a href="#aa"><FormattedMessage id="navbar.how"/></a>
            <a href="#bb"><FormattedMessage id="navbar.about"/></a>
          </LeftLinks>
          <RightLinks>
            {currentLocale === 'en-US' ? (
              <LocaleButton onClick={() => toogleLocale("pt-BR")}>
                PT
              </LocaleButton>
            ) : (
              <LocaleButton onClick={() => toogleLocale("en-US")}>
                EN
              </LocaleButton>
            )}
            <ActionButton>
              <FormattedMessage id="navbar.start"/>
            </ActionButton>
          </RightLinks>
        </Nav>
      </LinksNav>
    </Container>
  )
}

export default Navbar;