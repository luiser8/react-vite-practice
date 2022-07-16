import React, { useContext } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { Context } from '../context/Context';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Error from '../pages/Error';

export default function RoutesCustom() {
    const { checkUser } = useContext(Context);
    return useRoutes([
        {
            path: '/', element: checkUser().userId !== null ? <Home /> : <Login />,
        },
        {
            path: '/404', element: <Error />,
        },
        {
            path: '*', element: <Navigate to="/404" replace />
        },
    ]);
}