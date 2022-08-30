import { useDispatch } from 'react-redux';
import { useSignupMutation } from 'redux/auth/authApi.js';
import { setCredentials } from 'redux/auth/authSlice.js';
import { BtnLoader } from 'components/Loader';
import { NavLink } from 'react-router-dom';
import styles from './registrationForm.module.css';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

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
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={submitRegistration}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField required fullWidth type="text" name="name" label="Name" />
          <TextField
            required
            fullWidth
            margin="normal"
            type="email"
            name="email"
            label="Email Address"
          />
          <TextField
            required
            fullWidth
            margin="dense"
            type="password"
            name="password"
            label="Password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            margin="normal"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            {isLoading ? BtnLoader('Signing up') : 'Sign up'}
          </Button>
          <Grid>
            Already have an account?{' '}
            <NavLink to="/login" className={styles.link}>
              Login
            </NavLink>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default RegistrationForm;
