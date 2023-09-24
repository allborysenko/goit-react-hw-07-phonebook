import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Wrapper, List, Button } from './ContactList.styled';

import { contactSelectors } from 'redux/index';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactSelectors.getContacts);
  const filter = useSelector(contactSelectors.getFilter);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Wrapper>
      <ul>
        {filteredContacts.map(contact => (
          <List key={contact.id}>
            {contact.name}: {contact.phone}
            <Button type="button" onClick={() => handleDelete(contact.id)}>
              Delete
            </Button>
          </List>
        ))}
      </ul>
    </Wrapper>
  );
};
