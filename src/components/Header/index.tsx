import React from 'react';

// import { NavLink } from 'react-router-dom';

import { Container, NavLnk } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        <NavLnk exact to="/">
          Listagem
        </NavLnk>
        <NavLnk to="/import">Importar</NavLnk>
      </nav>
    </header>
  </Container>
);

export default Header;
