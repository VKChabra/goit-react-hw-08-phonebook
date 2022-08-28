import { useSignupMutation } from 'redux/auth/usersApi.js';
import { BtnLoader } from 'components/Loader';
import styles from './registrationForm.module.css';

const RegistrationForm = () => {
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

    signup(user);
    //setCredentials??
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
