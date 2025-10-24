import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import Prodect from '../Pages/Prodect/Prodect';
import { Navigate } from 'react-router';
import Loding from '../Pages/Loding';

const PrivateRoute = ({children}) => {

    const {user,loading} = use(AuthContext);

    
    
    if(loading){
        return <Loding></Loding>
    }

    if(user && user?.email){
        return children;
    }
    return <Navigate to="/auth/login"></Navigate>
    
};

export default PrivateRoute;