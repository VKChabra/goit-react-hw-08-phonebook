import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loader } from 'components/Loader';
import styles from './app.module.css';
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

export const App = () => {
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
