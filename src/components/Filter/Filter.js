import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { createFilter } from '../../redux/filterSlice';
import { contactSelectors } from 'redux/index';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(contactSelectors.getFilter);

  const handleInputChange = event => {
    const { value } = event.target;
    dispatch(createFilter(value));
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
    </div>
  );
};
