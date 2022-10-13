
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/requestServer'



const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch();

  const filterContacts = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filterContacts?.map(({ id, name, number }) => {
          return (
            <li key={id}>
                <p>{name}: {number}</p>
                
            <button onClick={() =>{dispatch(removeContact(id))} }>delete</button>
          </li>
        )
        })}
      </ul>
    </div>
  );
};

export default ContactList;
