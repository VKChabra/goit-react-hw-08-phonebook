import { lazy, Suspense, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import styles from './app.module.css';
import { useUserInfoQuery } from 'redux/auth/authApi.js';
import { authSelectors } from 'redux/auth';
import { refetchUser } from 'redux/auth/authSlice.js';
import { Loader } from 'components/Loader';
import Navbar from 'components/Navbar';
const Home = lazy(() =>
  import('components/Home' /* webpackChunkName: "Home" */)
);
const LoginForm = lazy(() =>
  import('components/LoginForm' /* webpackChunkName: "LoginForm" */)
);
const RegistrationForm = lazy(() =>
  import(
    'components/RegistrationForm' /* webpackChunkName: "RegistrationForm" */
  )
);
const Phonebook = lazy(
  () => import('components/Phonebook') /* webpackChunkName: "Phonebook" */
);

export const App = _ => {
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(true);
  const response = useUserInfoQuery(_, { skip });
  const username = useSelector(authSelectors.getUsername);
  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    if (!token) {
      return;
    } else {
      setSkip(false);
      if (response.status === 'fulfilled' && !username) {
        dispatch(refetchUser(response.data));
      }
    }
  }, [dispatch, response, token, username]);

  return (
    <>
      <Navbar />
      <div className={styles.wrapper}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/contacts" element={<Phonebook />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};
