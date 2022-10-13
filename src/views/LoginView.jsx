import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import { DivLogin, FormLog, LabelLog, InputLog, ButtonLog } from './LoginView.styled';

export default function LoginView() {
const dispatch = useDispatch();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const { error } = useSelector(state => state.auth);
  
 const handleChange = ({ target: { name, value } }) => {
        switch (name) {
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
        dispatch(authOperations.logIn({email, password}));
        setEmail('');
        setPassword('');
    };

    return (
        <DivLogin>
        <h1>Login page</h1>
          {error && <h2>An error occurred: {error.message}</h2>}
            <FormLog autoComplete="off" onSubmit={handleSubmit}>
          <LabelLog>
            Email
            <InputLog
              type="email"
              name="email"
              value={email}
              required
              onChange={handleChange}
            />
          </LabelLog>
          
          <LabelLog>
            Password
            <InputLog
              type="password"
              name="password"
              value={password}
              required
              onChange={handleChange}
            />
          </LabelLog>
          <ButtonLog type="submit">LOG IN</ButtonLog>
        </FormLog>
        </DivLogin>
    )


}
