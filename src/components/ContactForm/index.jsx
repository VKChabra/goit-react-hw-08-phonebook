import { useAddContactMutation } from 'redux/contactsApi.js';
import { useGetContactsQuery } from 'redux/contactsApi.js';
import { BtnLoader } from 'components/Loader';
import styles from './contactForm.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [addContact, { isLoading }] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const notifyError = text => toast.error(text, { autoClose: 3000 });

  const submitAddContact = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    form.reset();

    //nameCheck
    const normalizedName = name.toLowerCase();
    const contactWithExistingName = contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );
    if (contactWithExistingName) {
      return notifyError(`${name} is already in contacts`);
    }

    //numberCheck
    const contactWithExistingNumber = contacts.find(
      contact => contact.number === number
    );
    if (contactWithExistingNumber) {
      return notifyError(
        `This number already belongs to ${contactWithExistingNumber.name}`
      );
    }

    const contact = {
      name,
      number,
    };

    addContact(contact);
  };

  return (
    <form className={styles.contactForm} onSubmit={submitAddContact}>
      <label className={styles.formLabel}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.formLabel}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? BtnLoader('Adding...') : 'Add contact'}
      </button>
    </form>
  );
};

export default ContactForm;
