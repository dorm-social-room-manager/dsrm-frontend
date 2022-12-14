import { Box, Button, Divider, Grid, useMediaQuery, useTheme } from '@mui/material';
import { Formik } from 'formik';
import { LoginInputs } from '../LoginInputs/LoginInputs';
import { LoginOptions } from '../LoginOptions/LoginOptions';
import { MouseEventHandler } from 'react';

interface buttonFunctions {
  RegisterButtonFunction: MouseEventHandler<HTMLButtonElement>;
}
type Err = {
  email?: string;
  password?: string;
};
export function LoginForm({ RegisterButtonFunction }: buttonFunctions) {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('tablet'));
  const minLenght = 1;

  const validate = (values: { email: string; password: string }) => {
    const errors: Err = {};
    if (values.email.length < minLenght) {
      errors.email = 'Email is required';
    }
    if (values.password.length < minLenght) {
      errors.password = 'Password is required';
    }
    return errors;
  };

  return (
    <>
      <Formik
        enableReinitialize
        validateOnMount={true}
        validateOnChange={true}
        validateOnBlur={true}
        validate={validate}
        initialValues={{ email: '', password: '' }}
        onSubmit={function () {
          throw new Error('Function not implemented.');
        }}
      >
        {({ isValid }) => {
          return (
            <form>
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
                    <LoginInputs />
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
                    <Button
                      sx={{
                        ':hover': {
                          bgcolor: '#4287f5',
                          color: 'red',
                        },
                        bgcolor: '#4287f5',
                        color: 'white',
                        padding: 1,
                        width: 1,
                      }}
                      type='submit'
                      disabled={!isValid}
                    >
                      Login
                    </Button>
                  </Grid>
                  <Grid
                    item
                    base={8}
                  >
                    <Button
                      sx={{
                        ':hover': {
                          bgcolor: 'purple',
                          color: 'red',
                        },
                        bgcolor: 'purple',
                        color: 'white',
                        padding: 1,
                        width: 1,
                      }}
                      onClick={RegisterButtonFunction}
                      disabled={!true}
                    >
                      Register
                    </Button>
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
            </form>
          );
        }}
      </Formik>
    </>
  );
}
