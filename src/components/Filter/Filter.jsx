
import { useDispatch } from 'react-redux';
import {filterContacts} from '../../redux/filterSlice'

import Title from '../Title/Title';
const Filter = ({ filterContact }) => {

const dispatch = useDispatch()

  return (
    <>
      <Title title="Find contacts by name" />
      <label>
        <input type="text" onChange={event => dispatch(filterContacts(event.target.value)) } />
      </label>
    </>
  );
};

export default Filter;