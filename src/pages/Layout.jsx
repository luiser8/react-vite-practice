import React, { Fragment, useContext } from 'react';
import { Context } from '../context/Context';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Theme from '../../theme';
import RoutesCustom from '../routes/RoutesCustom';
import Login from './Login';

const Layout = () => {
    const { checkUser } = useContext(Context);
    const user = checkUser().userId;

    return (
        <ThemeProvider theme={Theme().theme}>
        <CssBaseline />
            {(user !== null) ? 
                <Fragment>
                    <RoutesCustom />
                </Fragment>
                : 
                <Fragment>
                    <Login />
                </Fragment>
            }
        </ThemeProvider>
    )
}

export default Layout;
