import axios from 'axios';

axios.defaults.baseURL = 'https://6508964f56db83a34d9c87ed.mockapi.io';

export const getContact = async () => {
    const response = await axios.get('/contacts');
    console.log('response.data', response.data)
  return response.data;
};
export const createContact = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};
export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
