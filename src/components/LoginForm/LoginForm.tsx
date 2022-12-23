import '../../i18n/i18n.ts';
import { Box, Button, Divider, Grid, TextField, useMediaQuery, useTheme } from '@mui/material';
import { Field, Formik } from 'formik';
import { Err } from './LoginForm.types';
import { Link } from 'react-router-dom';
import { LoginOptions } from '../LoginOptions/LoginOptions';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import styles from './LoginForm.module.scss';
import { useTranslation } from 'react-i18next';

export function LoginForm() {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('tablet'));
  const minLength = 1;
  const { t } = useTranslation();
  const validate = (values: { email: string; password: string }) => {
    const errors: Err = {};
    if (values.email.length < minLength) {
      errors.Email = t('loginForm.emailEmpty');
    }
    if (values.password.length < minLength) {
      errors.Password = t('loginForm.passwordEmpty');
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
                    <Field
                      as={TextField}
                      className={styles.input}
                      label={t('loginForm.email')}
                      type='email'
                      name='email'
                      required
                    />
                  </Grid>
                  <Grid
                    item
                    base={11}
                  >
                    <PasswordInput />
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
                      {t('loginForm.login')}
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
                      component={Link}
                      to='/register'
                    >
                      {t('loginForm.register')}
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
