import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const MainNavbar = () => {
  return (
    <>
      <NavLink to="/" className={styles.navLink}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={styles.navLink}>
        Contacts
      </NavLink>
    </>
  );
};

export default MainNavbar;
