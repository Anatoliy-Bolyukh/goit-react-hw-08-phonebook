import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header, Nav, LinkStyled, Div } from './Layout.styled';
import UserMenu from '../UserMenu';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';


export default function Layout() {
const IsLoggedIn = useSelector(getIsLoggedIn);
    return (
        <>
            {IsLoggedIn ? (
                <Header>
            <Nav>
                <Div>
                <LinkStyled to="/">Main</LinkStyled>
                <LinkStyled to="/contacts">Contacts</LinkStyled>                    
                </Div>                
                <><UserMenu/></>    
            </Nav>
        </Header>
            ) : (
                <Header>
            <Nav>
                <Div>
                <LinkStyled to="/">Main</LinkStyled>
                </Div>
                <Div>
                <LinkStyled to="/register">SIGN UP</LinkStyled>
                <LinkStyled to="/login">LOG IN</LinkStyled>      
                </Div>                   
            </Nav>
        </Header>    
        )}    
        
        <Outlet/>           
            </>
    )
};
