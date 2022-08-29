import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'redux/auth/usersApi.js';
import { setCredentials } from 'redux/auth/authSlice.js';
import { BtnLoader } from 'components/Loader';
import styles from './loginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const submitLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const user = {
      email,
      password,
    };

    login(user)
      .then(data => dispatch(setCredentials(data)))
      .catch(error => console.log(error));
  };

  return (
    <form className={styles.userForm} onSubmit={submitLogin}>
      <label className={styles.formLabel}>
        Email
        <input type="email" name="email" required />
      </label>
      <label className={styles.formLabel}>
        Password
        <input type="password" name="password" required />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? BtnLoader() : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
