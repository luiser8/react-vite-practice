import React from 'react';
import { Alert, AlertTitle, Stack } from '@mui/material';

const AlertCustom = ({ severity, errorMsj, errorMsjContent }) => {
    return (
        <Stack sx={{ minWidth: '41.5%' }} spacing={2} position="fixed" style={{ flexShrink: 0, top: 'auto', bottom: 0 }}>
            <Alert severity={severity} square>
                <AlertTitle>{errorMsj}</AlertTitle>
                <strong>{errorMsjContent}</strong>
            </Alert>
        </Stack>
    )
}

export default AlertCustom;