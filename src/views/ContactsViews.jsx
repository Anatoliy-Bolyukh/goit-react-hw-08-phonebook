import { useEffect } from 'react';
import { fetchContacts } from 'redux/PhonebookSlice';
import { useSelector, useDispatch } from 'react-redux';
import { getItems } from 'redux/selectors';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import { ContactsBox, DivContacts } from './ContactsView.styled';


export default function ContactsView() {
const contacts = useSelector(getItems);
const {isLoading, error} = useSelector(state => state.contacts);
const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

    return (
   <ContactsBox>     
      <h1>Phonebook</h1>
     <ContactForm />
     
     {isLoading && <h2>Loading...</h2>}
     {error && <h2>An error occurred: {error.message}</h2>}

      {contacts.length > 0 && (
       <DivContacts>
         <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </DivContacts>
     )}     
    </ContactsBox>   
  )

};
