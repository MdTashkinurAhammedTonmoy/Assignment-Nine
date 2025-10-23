import React from 'react';
import Navber from '../Component/Navber';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            <header>
                <Navber></Navber>
            </header>
            <main className='w-11/12 mx-auto py-5'>
              <Outlet></Outlet>
            </main>
        </div>
    );
};

export default AuthLayout;