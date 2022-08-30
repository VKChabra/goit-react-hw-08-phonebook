import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from 'redux/auth/authApi.js';
import { clearCredentials } from 'redux/auth/authSlice.js';
import { authSelectors } from 'redux/auth';
import styles from './userMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(authSelectors.getUsername);
  const [logout, { isLoading }] = useLogoutMutation();

  const onLogout = () => {
    logout()
      .then(response => {
        dispatch(clearCredentials());
      })
      .catch(error => console.log(error));
  };
  return (
    <>
      {username && (
        <div className={styles.userMenu}>
          <p>Welcome, {username}</p>
          <button type="button" onClick={onLogout} disabled={isLoading}>
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default UserMenu;
