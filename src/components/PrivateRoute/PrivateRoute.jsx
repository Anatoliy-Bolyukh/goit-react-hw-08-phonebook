import { useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { getIsLoggedIn } from 'redux/auth/auth-selectors';


export default function PrivateRoute({ children }) {
    const IsLoggedIn = useSelector(getIsLoggedIn);
    return IsLoggedIn ? children : <Navigate to="/login" />
};