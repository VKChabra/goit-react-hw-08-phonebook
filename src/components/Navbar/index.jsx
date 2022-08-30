import { useSelector } from 'react-redux';
import MainNavbar from './mainNav';
import AuthNavbar from './authNav';
import UserMenu from 'components/UserMenu';
import { authSelectors } from 'redux/auth';
import styles from './navbar.module.css';

const Navbar = () => {
  const IsLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header>
      <nav className={styles.navigation}>
        <MainNavbar />
        {IsLoggedIn ? <UserMenu /> : <AuthNavbar />}
      </nav>
    </header>
  );
};

export default Navbar;
