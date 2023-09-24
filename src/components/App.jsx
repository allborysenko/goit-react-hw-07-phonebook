import React, { useEffect } from 'react';
import { Contact } from './Contact/Contact';
import { Section } from './Section/Section';
import { Loader } from './Loader/Loader';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getContact } from 'redux/operations';
import { getIsLoading, getError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <Contact />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <Loader />}
        <ContactList />
      </Section>
    </>
  );
};
