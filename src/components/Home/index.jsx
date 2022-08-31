import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from 'redux/auth';
import styles from './home.module.css';

const Home = () => {
  const userName = useSelector(authSelectors.getUsername);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <div className={styles.wrapper}>
      <h1>Welcome!</h1>
      <h2>
        {isLoggedIn
          ? `Dear ${userName}, you may proceed to `
          : 'Dear user, please login first in order to get access to phonebook'}
        {isLoggedIn && (
          <NavLink to="/contacts" className={styles.link}>
            Contacts
          </NavLink>
        )}
      </h2>
    </div>
  );
};

export default Home;
