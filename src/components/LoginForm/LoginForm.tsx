import { Box, Divider, Grid, TextField, useMediaQuery, useTheme } from '@mui/material';
import { LoginFormButtonStyled, LoginFormInputStyled } from './LoginForm.styled';
import { Formik } from 'formik';
import { LoginFormErrors } from './LoginForm.types';
import { LoginOptions } from './LoginOptions';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function LoginForm() {
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
                    <LoginFormInputStyled
                      as={TextField}
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
                    <LoginFormButtonStyled
                      variant='contained'
                      color='primary'
                      type='submit'
                      disabled={!isValid}
                    >
                      {t('loginForm.login')}
                    </LoginFormButtonStyled>
                  </Grid>
                  <Grid
                    item
                    mobile={8}
                  >
                    <LoginFormButtonStyled
                      variant='contained'
                      color='secondary'
                      onClick={() => {
                        navigate('/register');
                      }}
                    >
                      {t('loginForm.register')}
                    </LoginFormButtonStyled>
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
