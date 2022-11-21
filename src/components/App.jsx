import { useSelector } from 'react-redux';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';


export const App = () => {
  
 
    return (
      <div>
        <Section title={'Phonebook'}>
          <ContactForm  />
        </Section>
  
        <Section title={'Contacts'}>
          {/* <Filter value={filter} onChange={handleFilterChange} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContact} */}
          {/* /> */}
        </Section>
      </div>
    );
  };
