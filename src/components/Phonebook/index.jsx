import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';

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
