import { lazy, Suspense, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from 'components/Routes/PrivateRoute.js';
import PublicRoute from 'components/Routes/PublicRoute.js';
import { ToastContainer } from 'react-toastify';
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
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegistrationForm />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginForm />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Phonebook />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
};
