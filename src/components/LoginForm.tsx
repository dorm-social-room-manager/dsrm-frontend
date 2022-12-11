import { Box, Divider, Grid, useMediaQuery, useTheme } from '@mui/material';
import { ChangeEvent, MouseEventHandler, useState } from 'react';
import { LoginButton } from './LoginButton';
import { LoginInputs } from './LoginInputs';
import { LoginOptions } from './LoginOptions';
import { RegisterButton } from './RegisterButton';

interface buttonFunctions {
  RegisterButtonFunction: MouseEventHandler<HTMLButtonElement>;
  LoginButtonFunction: MouseEventHandler<HTMLButtonElement>;
}

export function LoginForm({ LoginButtonFunction, RegisterButtonFunction }: buttonFunctions) {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('tablet'));
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const handleEmail = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail(e.target.value);
  };
  const handlePass = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPass(e.target.value);
  };
  const minLenght = 1;
  return (
    <>
      <Box
        padding={0}
        boxShadow={'0px 0px 30px #ccc'}
        maxWidth={{
          desktop: 400,
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
            mobile: 6,
            tablet: 8,
          }}
          height={20}
          alignItems='center'
          justifyContent='center'
          spacing={3}
        >
          <Grid
            item
            base={11}
          >
            <LoginInputs
              handleEmail={handleEmail}
              handlePass={handlePass}
            />
          </Grid>
          {!isMobile && (
            <>
              <Grid
                item
                base={11}
              >
                <LoginOptions />
              </Grid>
              <Grid
                item
                base={11}
              >
                <Divider sx={{ width: 1 }} />
              </Grid>
            </>
          )}
          <Grid
            item
            base={8}
          >
            <LoginButton
              LoginButtonFunction={LoginButtonFunction}
              isLoginEnabled={!(email.length < minLenght || pass.length < minLenght)}
            />
          </Grid>
          <Grid
            item
            base={8}
          >
            <RegisterButton
              RegisterButtonFunction={RegisterButtonFunction}
              isRegisterEnabled={true}
            />
          </Grid>

          {isMobile && (
            <>
              <Grid
                item
                base={11}
              >
                <Divider sx={{ width: 1 }} />
              </Grid>

              <Grid
                item
                base={12}
              >
                <LoginOptions />
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </>
  );
}
