import { Alert, Box, Button, Divider, Grid, Snackbar, TextField, useMediaQuery, useTheme } from '@mui/material';
import { Field, Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { SyntheticEvent, useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { LoginDetailsRequestDTO } from '../../common/types/OperationTypes.types';
import { LoginFormErrors } from './LoginForm.types';
import { LoginOptions } from './LoginOptions';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import styles from './LoginForm.module.scss';
import { useLoginUserMutation } from '../../common/services/UserService/UserService';
import { useTranslation } from 'react-i18next';

export function LoginForm() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const minLength = 1;
  const { t } = useTranslation();
  const validate = (values: { email: string; password: string }) => {
    const errors: LoginFormErrors = {};
    if (values.email.length < minLength) {
      errors.email = t('loginForm.emailEmpty');
    }
    if (values.password.length < minLength) {
      errors.password = t('loginForm.passwordEmpty');
    }
    return errors;
  };
  const mobileGap = 8;
  const tabletGap = 6;

  const { mutate, isLoading, isSuccess, isError } = useLoginUserMutation();
  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    if (isSuccess) {
      navigate('/dashboard');
    }
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
        onSubmit={(values) => {
          const loginInfo: LoginDetailsRequestDTO = {
            password: values.password,
            username: values.email,
          };
          mutate(loginInfo);
          setOpen(true);
        }}
      >
        {({ isValid, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <Snackbar
                anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
                open={isSuccess && open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity='success'
                  sx={{ width: '100%' }}
                >
                  {t('loginForm.successSnackbarLogin')}
                </Alert>
              </Snackbar>

              <Snackbar
                anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
                open={isError && open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity='error'
                  sx={{ width: '100%' }}
                >
                  {t('loginForm.errorSnackbarLogin')}
                </Alert>
              </Snackbar>
              <Box
                padding={0}
                boxShadow={'0px 0px 30px #ccc'}
                maxWidth={{
                  desktop: 400,
                  mobile: 330,
                  tablet: 400,
                }}
                height={540}
              >
                <Grid
                  container
                  paddingTop={isTablet ? mobileGap : tabletGap}
                  height={20}
                  alignItems='center'
                  justifyContent='center'
                  spacing={3}
                >
                  <Grid
                    item
                    mobile={11}
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
                    mobile={11}
                  >
                    <PasswordInput />
                  </Grid>
                  {isTablet && (
                    <>
                      <Grid
                        item
                        mobile={11}
                      >
                        <LoginOptions />
                      </Grid>
                      <Grid
                        item
                        mobile={11}
                      >
                        <Divider sx={{ width: 1 }} />
                      </Grid>
                    </>
                  )}
                  <Grid
                    item
                    mobile={8}
                  >
                    <LoadingButton
                      variant='contained'
                      color='primary'
                      sx={{
                        padding: 1,
                        width: 1,
                      }}
                      type='submit'
                      loading={isLoading}
                      disabled={!isValid}
                    >
                      {t('loginForm.login')}
                    </LoadingButton>
                  </Grid>
                  <Grid
                    item
                    mobile={8}
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

                  {!isTablet && (
                    <>
                      <Grid
                        item
                        mobile={11}
                      >
                        <Divider sx={{ width: 1 }} />
                      </Grid>

                      <Grid
                        item
                        mobile={12}
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
