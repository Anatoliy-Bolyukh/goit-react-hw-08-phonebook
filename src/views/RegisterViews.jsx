import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import { DivRegister, FormReg, LabelReg, InputReg, ButtonReg } from './RegisterView.styled';

export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error } = useSelector(state => state.auth);

  

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({name, email, password}));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <DivRegister>
        <h1>Registration page</h1>
          {error && <h2>An error occurred: {error.message}</h2>}
            <FormReg autoComplete="off" onSubmit={handleSubmit}>
          <LabelReg>
            Name
            <InputReg
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            />
          </LabelReg>

          <LabelReg>
            Email
            <InputReg
              type="email"
              name="email"
              value={email}
              required
              onChange={handleChange}
            />
          </LabelReg>
          
          <LabelReg>
            Password
            <InputReg
              type="password"
              name="password"
              value={password}
              required
              onChange={handleChange}
            />
          </LabelReg>
          <ButtonReg type="submit">SIGN UP</ButtonReg>
        </FormReg>
        </DivRegister>
    )
}