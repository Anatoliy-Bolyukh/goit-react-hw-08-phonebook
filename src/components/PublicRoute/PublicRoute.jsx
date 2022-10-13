import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

export default function PublicRoute({ children, restricted = false }) {
    const IsLoggedIn = useSelector(getIsLoggedIn);
    const shouldRedirect = IsLoggedIn && restricted;
    return shouldRedirect ? <Navigate to="/contacts"/> : children 
};