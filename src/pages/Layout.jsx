import React, { Fragment, useContext } from 'react';
import { Context } from '../context/Context';
import RoutesCustom from '../routes/RoutesCustom';
import Login from './Login';

const Layout = () => {
    const { checkUser } = useContext(Context);
    const user = checkUser().userId;

    return (
        <Fragment>
            {(user !== null) ? 
                <Fragment>
                    <RoutesCustom />
                </Fragment>
                : 
                <Fragment>
                    <Login />
                </Fragment>
            }
        </Fragment>
    )
}

export default Layout;
