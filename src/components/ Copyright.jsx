import { Typography,Link } from '@mui/material';
import React from 'react'

    function Copyright({website}) {
        return (
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
              {website}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        );
      }
 

export default  Copyright