import { NavLink } from 'react-router-dom';
import styles from './navbar.module.css';

const AuthNavbar = () => {
  return (
    <div>
      <NavLink to="/login" className={styles.navLink}>
        Login
      </NavLink>
      <NavLink to="/register" className={styles.navLink}>
        Register
      </NavLink>
    </div>
  );
};

export default AuthNavbar;
