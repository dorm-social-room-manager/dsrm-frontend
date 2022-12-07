import { Box, Divider, Grid } from '@mui/material';
import { MouseEventHandler } from 'react';
import { RegisterButton } from './RegisterButton';
import { RegisterInput } from './RegisterInput';

interface buttonFunctions {
  RegisterButtonFunction: MouseEventHandler<HTMLButtonElement>;
}

export function RegisterForm({ RegisterButtonFunction }: buttonFunctions) {
  return (
    <Box
      padding={0}
      boxShadow={'0px 0px 30px #ccc'}
      maxWidth={{
        desktop: 560,
        mobile: 330,
        tablet: 400,
      }}
      height={540}
      alignItems='center'
      justifyContent='center'
    >
      <Grid
        container
        paddingTop={{
          desktop: 8,
          mobile: 2,
          tablet: 8,
        }}
        alignItems='center'
        justifyContent='center'
        spacing={4}
      >
        <Grid
          item
          mobile={10}
          tablet={11}
        >
          <RegisterInput />
        </Grid>
        <Grid
          item
          mobile={11}
        >
          <Divider sx={{ width: 1 }} />
        </Grid>

        <Grid
          item
          mobile={6}
        >
          <RegisterButton RegisterButtonFunction={RegisterButtonFunction} />
        </Grid>
      </Grid>
    </Box>
  );
}
