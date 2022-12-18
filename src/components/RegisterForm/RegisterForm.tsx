import '../../i18n';
import { Box, Button, Divider, Grid } from '@mui/material';
import { Err } from './RegisterForm.types';
import { Formik } from 'formik';
import { RegisterInput } from '../RegisterInput/RegisterInput';
import { useTranslation } from 'react-i18next';

export function RegisterForm() {
  const minLength = 1;
  const { t } = useTranslation();
  const validate = (values: { email: string; password: string; lname: string; fname: string; phone: string }) => {
    const errors: Err = {};
    if (values.email.length < minLength) {
      errors.email = t('email_empty');
    }
    if (values.password.length < minLength) {
      errors.password = t('password_empty');
    }
    if (values.lname.length < minLength) {
      errors.lname = t('last_name_empty');
    }
    if (values.fname.length < minLength) {
      errors.fname = t('first_name_empty');
    }
    if (values.phone.length < minLength) {
      errors.phone = t('phone_empty');
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
                    variant='contained'
                    color='secondary'
                    sx={{
                      padding: 1,
                      width: 1,
                    }}
                    type='submit'
                    disabled={!isValid}
                  >
                    {t('register')}
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
