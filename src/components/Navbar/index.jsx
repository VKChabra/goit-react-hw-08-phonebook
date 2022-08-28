import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <header>
      <nav className={styles.navigation}>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
        <NavLink to="/contacts" className={styles.navLink}>
          Contacts
        </NavLink>
        <NavLink to="/login" className={styles.navLink}>
          Login
        </NavLink>
        <NavLink to="/register" className={styles.navLink}>
          Register
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
