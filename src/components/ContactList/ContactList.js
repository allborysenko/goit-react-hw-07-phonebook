import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Wrapper, List, Button } from './ContactList.styled';
import { filteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContactsList = useSelector(filteredContacts);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Wrapper>
      <ul>
        {filteredContactsList.map(contact => (
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
