import { Box, Button, Divider, Grid, useMediaQuery, useTheme } from '@mui/material';
import { buttonFunctions, Err } from './LoginForm.types';
import { Formik } from 'formik';
import { LoginInputs } from '../LoginInputs/LoginInputs';
import { LoginOptions } from '../LoginOptions/LoginOptions';

export function LoginForm({ RegisterButtonFunction }: buttonFunctions) {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('tablet'));
  const minLength = 1;

  const validate = (values: { email: string; password: string }) => {
    const errors: Err = {};
    if (values.email.length < minLength) {
      errors.email = 'Email is required';
    }
    if (values.password.length < minLength) {
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
                      variant='contained'
                      color='primary'
                      sx={{
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
                      variant='contained'
                      color='secondary'
                      sx={{
                        padding: 1,
                        width: 1,
                      }}
                      onClick={RegisterButtonFunction}
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
