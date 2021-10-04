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
      path: '/My Profile',
      text: 'My Profile',
    },
  ];

  return (
    <nav className="navBar">
      <Header />
      <ul className="navLinks">
        {links.map((link) => (
          <li key={link.id} className="navLink">
            {link.text}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
