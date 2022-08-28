import { lazy } from 'react';

const ContactForm = lazy(() =>
  import('components/ContactForm' /* webpackChunkName: "ContactForm" */)
);
const Filter = lazy(() =>
  import('components/Filter' /* webpackChunkName: "Filter" */)
);
const Contacts = lazy(() =>
  import('components/Contacts' /* webpackChunkName: "Contacts" */)
);

const Phonebook = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </>
  );
};

export default Phonebook;
