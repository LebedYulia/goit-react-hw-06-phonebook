import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'components/redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  console.log(contacts)

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  

  return (
    <ul>
      {visibleContacts.map(visibleContact => (
        <ContactItem key={visibleContact.id} {...visibleContact}></ContactItem>
      ))}
    </ul>
  );
};
