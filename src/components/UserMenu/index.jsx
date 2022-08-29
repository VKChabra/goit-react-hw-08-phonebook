import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from 'redux/auth/usersApi.js';
import { setCredentials } from 'redux/auth/authSlice.js';
import { authSelectors } from 'redux/auth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const username = useSelector(authSelectors.getUsername);
  const [logout, { isLoading }] = useLogoutMutation();

  const onLogout = () => {
    logout()
      .then(data => {
        dispatch(setCredentials(data));
      })
      .catch(error => console.log(error));
  };
  return (
    <>
      {username && (
        <>
          <p>Welcome, {username}</p>
          <button type="button" onClick={onLogout} disabled={isLoading}>
            Logout
          </button>
        </>
      )}
    </>
  );
};

export default UserMenu;
