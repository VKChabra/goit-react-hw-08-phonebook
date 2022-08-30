import { useDispatch } from 'react-redux';
import { useSignupMutation } from 'redux/auth/authApi.js';
import { setCredentials } from 'redux/auth/authSlice.js';
import { BtnLoader } from 'components/Loader';
import styles from './registrationForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [signup, { isLoading }] = useSignupMutation();

  const submitRegistration = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const user = {
      name,
      email,
      password,
    };

    signup(user)
      .then(data => dispatch(setCredentials(data)))
      .catch(error => console.log(error));
  };

  return (
    <form className={styles.userForm} onSubmit={submitRegistration}>
      <label className={styles.formLabel}>
        Name
        <input type="text" name="name" required />
      </label>
      <label className={styles.formLabel}>
        Email
        <input type="email" name="email" required />
      </label>
      <label className={styles.formLabel}>
        Password
        <input type="password" name="password" required />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? BtnLoader('Registering...') : 'Register'}
      </button>
    </form>
  );
};

export default RegistrationForm;
