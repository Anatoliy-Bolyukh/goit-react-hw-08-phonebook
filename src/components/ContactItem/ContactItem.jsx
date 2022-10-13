import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/PhonebookSlice';
import PropTypes from 'prop-types';
import { LiContact, ButtonDelete } from './ContactItem.styled';

const ContactItem = ({ name, id, number }) => {
  const {error} = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  

  return (
    <>
      {error && <h2>Can\'t delete task. Server error.</h2>}
      <LiContact>
      {name}: {number} 
      <ButtonDelete type="button" onClick={() => dispatch(removeContact(id))}>
        Delete
      </ButtonDelete>
      </LiContact>
    </>    
  )
};

export default ContactItem;


ContactItem.propTypes = {
  name: PropTypes.string.isRequired,  
  id: PropTypes.string.isRequired,
  number: PropTypes.string,
  };