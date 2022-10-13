import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authOperations from 'redux/auth/auth-operations';
import { getUserEmail, getIsLoggedIn } from 'redux/auth/auth-selectors';
import { BoxMenu, Span, LogoutStyled } from './UserMenu.styled';
import { ImUser } from "react-icons/im";
import { Avatar } from '@mui/material';


export default function UserMenu() {
    const email = useSelector(getUserEmail);
    const IsLoggedIn = useSelector(getIsLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    return (
        <BoxMenu>
            {IsLoggedIn && (
        <>
            <Avatar style={{marginRight: '4px'}}>
                <ImUser style={{width: '32px', color: "black"}}/>
            </Avatar>
            <Span>Welcome, {email}</Span>
                    <LogoutStyled type='button' onClick={() => dispatch(authOperations.logOut(navigate('/')))}>Logout</LogoutStyled>
        </>            
            )}            
        </BoxMenu>
    )
};