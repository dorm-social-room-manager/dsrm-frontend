import '../../i18n/i18n';
import { Box, Button, Divider, Grid, TextField, useMediaQuery, useTheme } from '@mui/material';
import { Field, Formik } from 'formik';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { RegisterFormErrors } from './RegisterForm.types';
import styles from './RegisterForm.module.scss';
import { useTranslation } from 'react-i18next';

export function RegisterForm() {
  const minLength = 1;
  const { t } = useTranslation();
  const validate = (values: { email: string; password: string; lname: string; fname: string; phone: string }) => {
    const errors: RegisterFormErrors = {};
    if (values.email.length < minLength) {
      errors.Email = t('registerForm.emailEmpty');
    }
    if (values.password.length < minLength) {
      errors.Password = t('registerForm.passwordEmpty');
    }
    if (values.lname.length < minLength) {
      errors.LastName = t('registerForm.lastNameEmpty');
    }
    if (values.fname.length < minLength) {
      errors.FirstNme = t('registerForm.firstNameEmpty');
    }
    if (values.phone.length < minLength) {
      errors.Phone = t('registerForm.phoneEmpty');
    }
    return errors;
  };

  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('tablet'));
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
                  <Grid
                    container
                    alignItems='center'
                    justifyContent='center'
                    spacing={{
                      desktop: 4,
                      mobile: 2,
                      tablet: 4,
                    }}
                  >
                    <Grid
                      item
                      tablet={6}
                      mobile={12}
                    >
                      <Field
                        as={TextField}
                        className={styles.input}
                        label={t('registerForm.firstName')}
                        type='text'
                        name='fname'
                        required
                      />
                    </Grid>
                    <Grid
                      item
                      tablet={6}
                      mobile={12}
                    >
                      <Field
                        as={TextField}
                        className={styles.input}
                        label={t('registerForm.lastName')}
                        type='text'
                        name='lname'
                        required
                      />
                    </Grid>
                    <Grid
                      item
                      tablet={6}
                      mobile={12}
                    >
                      <Field
                        as={TextField}
                        className={styles.input}
                        label={t('registerForm.phone')}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        type='text'
                        name='phone'
                        required
                      />
                    </Grid>
                    {!isMobile && (
                      <Grid
                        item
                        tablet={6}
                        mobile={0}
                      ></Grid>
                    )}

                    <Grid
                      item
                      tablet={6}
                      mobile={12}
                    >
                      <Field
                        as={TextField}
                        className={styles.input}
                        label={t('registerForm.email')}
                        type='email'
                        name='email'
                        required
                      />
                    </Grid>
                    <Grid
                      item
                      tablet={6}
                      mobile={12}
                    >
                      <PasswordInput />
                    </Grid>
                  </Grid>
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
                    {t('registerForm.register')}
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
