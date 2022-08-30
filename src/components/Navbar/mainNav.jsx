import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const MainNavbar = () => {
  return (
    <div>
      <NavLink to="/" className={styles.navLink}>
        Home
      </NavLink>
      <NavLink to="/contacts" className={styles.navLink}>
        Contacts
      </NavLink>
    </div>
  );
};

export default MainNavbar;
