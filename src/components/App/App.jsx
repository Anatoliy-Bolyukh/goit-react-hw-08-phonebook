import { useEffect } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { getFetchingCurrentUser } from '../../redux/auth/auth-selectors';
import { lazy, Suspense } from 'react';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import PublicRoute from '../../components/PublicRoute/PublicRoute';
import { Container } from './App.styled';
import { CircularProgress } from '@mui/material';
 
function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getFetchingCurrentUser);

  
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const Layout = lazy(() => import('../Layout'));
  const HomeView = lazy(() => import('../../views/HomeView'));
  const ContactsView = lazy(() => import('../../views/ContactsViews'));
  const RegisterView = lazy(() => import('../../views/RegisterViews'));
  const LoginView = lazy(() => import('../../views/LoginView'));  


  return (
   
    !isFetchingCurrentUser && (
      <Container>
     
     <Suspense fallback={<CircularProgress />}>
         <Routes>
         <Route path="/" element={<Layout />}>
          
           <Route index element={
             <PublicRoute>
               <HomeView />
             </PublicRoute>} />
           
           <Route path="register" element={
             <PublicRoute restricted>
               <RegisterView/>
             </PublicRoute>} />
           
           <Route path="login" element={
             <PublicRoute restricted>
               <LoginView/>
             </PublicRoute>} />
           
           <Route path="contacts" element={
            <PrivateRoute>
               <ContactsView />
            </PrivateRoute>} />
                               
           <Route path="*" element={<Navigate to="/" />} />
        </Route> 
       </Routes>
     </Suspense>   

     
    </Container>
    )
      
  )
};

export default App;