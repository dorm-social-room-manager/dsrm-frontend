import { Box, Button, Divider, Grid } from '@mui/material';
import { Formik } from 'formik';
import { RegisterInput } from '../RegisterInput/RegisterInput';

export function RegisterForm() {
  const minLenght = 1;
  type Err = {
    email?: string;
    password?: string;
    lname?: string;
    fname?: string;
    phone?: string;
  };
  const validate = (values: { email: string; password: string; lname: string; fname: string; phone: string }) => {
    const errors: Err = {};
    if (values.email.length < minLenght) {
      errors.email = 'Email is required';
    }
    if (values.password.length < minLenght) {
      errors.password = 'Password is required';
    }
    if (values.lname.length < minLenght) {
      errors.lname = 'Last Name is required';
    }
    if (values.fname.length < minLenght) {
      errors.fname = 'First Name is required';
    }
    if (values.phone.length < minLenght) {
      errors.phone = 'Phone is required';
    }
    return errors;
  };

  return (
    <Formik
      enableReinitialize
      validateOnMount={true}
      validateOnChange={true}
      validateOnBlur={true}
      validate={validate}
      initialValues={{ email: '', fname: '', lname: '', password: '', phone: '' }}
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
                    type='submit'
                    disabled={!isValid}
                  >
                    Register
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
}