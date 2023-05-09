import { Alert, Box, Divider, Grid, Snackbar, TextField, useMediaQuery, useTheme } from '@mui/material';
import { Field, Formik } from 'formik';
import { CreateUserError } from '../../common/types/CreateUserError.types';
import { CreateUserType } from '../../common/types/OperationTypes.types';
import { LoadingButton } from '@mui/lab';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import styles from './RegisterForm.module.scss';
import { SyntheticEvent } from 'react';
import { useCreateUserMutation } from '../../common/services/UserService/UserService';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function RegisterForm() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { mutate, isLoading, isSuccess, isError } = useCreateUserMutation();

  const onFormSubmit = (values: CreateUserError) => {
    const user: CreateUserType = {
      email: values.email,
      name: values.name,
      password: values.password,
      roomNumber: parseInt(values.roomNumber, 10),
      surname: values.surname,
    };
    setOpen(true);
    mutate(user);
  };

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    if (isSuccess) {
      navigate('/dashboard');
    }
  };

  const minLength = 1;
  const { t } = useTranslation();
  const validate = (values: CreateUserError) => {
    const errors: CreateUserError = {
      email: '',
      name: '',
      password: '',
      roomNumber: '',
      surname: '',
    };
    if (values.email === undefined || values.email.length < minLength) {
      errors.email = t('registerForm.emailEmpty');
    }
    if (values.password === undefined || values.password.length < minLength) {
      errors.password = t('registerForm.passwordEmpty');
    }
    if (values.surname === undefined || values.surname.length < minLength) {
      errors.surname = t('registerForm.lastNameEmpty');
    }
    if (values.name === undefined || values.name.length < minLength) {
      errors.name = t('registerForm.firstNameEmpty');
    }
    if (values.roomNumber === undefined) {
      errors.roomNumber = t('registerForm.roomNumberEmpty');
    }
    return errors;
  };

  const theme = useTheme();
  const isTablet: boolean = useMediaQuery(theme.breakpoints.up('tablet'));
  const mobileGap = 2;
  const tabletGap = 8;

  return (
    <Formik<CreateUserError>
      enableReinitialize
      validateOnMount={true}
      validateOnChange={true}
      validateOnBlur={true}
      validate={validate}
      initialValues={{ email: '', name: '', password: '', roomNumber: '', surname: '' }}
      onSubmit={onFormSubmit}
    >
      {({ isValid, handleSubmit }) => {
        return (
          <form
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
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
                {t('registerForm.successSnackbarRegister')}
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
                {t('registerForm.errorSnackbarRegister')}
              </Alert>
            </Snackbar>
            <Box
              padding={0}
              boxShadow={'0px 0px 30px #ccc'}
              maxWidth={{
                desktop: 560,
                mobile: 330,
                tablet: 400,
              }}
              height={540}
            >
              <Grid
                container
                paddingTop={isTablet ? tabletGap : mobileGap}
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
                        name='name'
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
                        name='surname'
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
                        label={t('registerForm.roomNumber')}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                        type='text'
                        name='roomNumber'
                        required
                      />
                    </Grid>
                    {isTablet && (
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
                  <LoadingButton
                    variant='contained'
                    color='secondary'
                    sx={{
                      padding: 1,
                      width: 1,
                    }}
                    type='submit'
                    loading={isLoading}
                    disabled={!isValid}
                  >
                    {t('registerForm.register')}
                  </LoadingButton>
                </Grid>
              </Grid>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
}
