import { NavLink } from 'react-router-dom';
import { Timer, Scroll } from 'phosphor-react';

import { HeaderContainer } from './styles';
import igniteLogo from '../../assets/ignite-logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img
        src={igniteLogo}
        alt="Dois triângulos que representam o logotípo do Ignite"
      />
      <nav>
        <NavLink end to="/" title="Visualizar cronômetro">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Visualizar Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
