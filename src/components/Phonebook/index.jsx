import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import Contacts from 'components/Contacts';
import styles from './phonebook.module.css';

const Phonebook = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
};

export default Phonebook;
