import { useDispatch } from 'react-redux';
import { useLoginMutation } from 'redux/auth/authApi.js';
import { setCredentials } from 'redux/auth/authSlice.js';
import { BtnLoader } from 'components/Loader';
import { NavLink } from 'react-router-dom';
import styles from './loginForm.module.css';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

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
    <>
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
            onSubmit={submitLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              required
              fullWidth
              type="email"
              name="email"
              label="Email Address"
            />
            <TextField
              required
              fullWidth
              margin="normal"
              type="password"
              name="password"
              label="Password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoading}
            >
              {isLoading ? BtnLoader() : 'Sign in'}
            </Button>
            <Grid>
              Don't have an account?{' '}
              <NavLink to="/register" className={styles.link}>
                Register
              </NavLink>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LoginForm;
