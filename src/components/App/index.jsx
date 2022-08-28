import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Loader } from 'components/Loader';
import styles from './app.module.css';

const Navbar = lazy(() =>
  import('components/Navbar' /* webpackChunkName: "Navbar" */)
);
const Home = lazy(() =>
  import('components/Home' /* webpackChunkName: "Home" */)
);
const RegistrationForm = lazy(() =>
  import(
    'components/RegistrationForm' /* webpackChunkName: "RegistrationForm" */
  )
);
const Phonebook = lazy(() => import('components/Phonebook'));

export const App = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegistrationForm />} />
          {/* <Route path='/login' element={<LoginForm />} /> */}
          <Route path="/contacts" element={<Phonebook />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
