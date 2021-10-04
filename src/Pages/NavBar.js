import { NavLink } from 'react-router-dom';
import Header from './Header';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/Missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/MyProfile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="navBar">
      <Header />
      <ul className="navLinks">
        {links.map((link) => (
          <li key={link.id} className="navLink">
            <NavLink
              to={link.path}
              exact={`${true}`}
              className="link"
              activeClassName="activeLink"
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
