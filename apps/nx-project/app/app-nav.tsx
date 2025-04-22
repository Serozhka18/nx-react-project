import { NavLink } from 'react-router';

export function AppNav() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to={{ pathname: 'about' }} end>
        About
      </NavLink>
      <NavLink to={{ pathname: 'products' }} end>
        Products
      </NavLink>
    </nav>
  );
}
