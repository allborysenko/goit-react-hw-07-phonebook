import { Label, Input, Total } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { createFilter } from 'redux/filterSlice';
import { contactSelectors } from 'redux/index';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactSelectors.getFilter);
  const totalContacts = useSelector(contactSelectors.totalContacts);

  const handleInputChange = event => {
    dispatch(createFilter(event.target.value));
  };

  return (
    <div>
      <Label>Find contacts by name</Label>
      <Input
        type="text"
        name="filter"
        placeholder="Enter filter"
        value={filter}
        onChange={handleInputChange}
      />
      <Total>You have {totalContacts} contacts </Total>
    </div>
  );
};
