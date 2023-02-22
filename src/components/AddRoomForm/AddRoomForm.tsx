import { Box, Button, Grid, MenuItem, TextField } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { Field, Formik } from 'formik';
import { RegisterFormErrors, RoomTypeProps } from './AddRoomForm.types';
import styles from './AddRoomForm.module.scss';
import { useTranslation } from 'react-i18next';

export function AddRoomForm({ roomTypes }: RoomTypeProps) {
  const [selectedRoomType, setSelectedRoomType] = useState('');
  const minLength = 1;
  const { t } = useTranslation();
  const validate = (values: { email: string; password: string; lname: string; fname: string; phone: string }) => {
    const errors: RegisterFormErrors = {};
    if (values.email.length < minLength) {
      errors.email = t('registerForm.emailEmpty');
    }
    if (values.password.length < minLength) {
      errors.password = t('registerForm.passwordEmpty');
    }
    if (values.lname.length < minLength) {
      errors.lastName = t('registerForm.lastNameEmpty');
    }
    if (values.fname.length < minLength) {
      errors.firstNme = t('registerForm.firstNameEmpty');
    }
    if (values.phone.length < minLength) {
      errors.phone = t('registerForm.phoneEmpty');
    }
    return errors;
  };

  const handleRoomTypeChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSelectedRoomType(event.target.value);
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
      {({ isValid, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Box
              margin={'auto'}
              padding={0}
              boxShadow={'0px 0px 30px #ccc'}
              height={632}
              maxWidth={640}
            >
              <Grid
                direction='row'
                alignItems='center'
                justifyContent='center'
                spacing={2}
                padding={4}
                container
              >
                <Grid
                  item
                  mobile={12}
                >
                  <TextField
                    label={t('addRoom.roomType')}
                    className={styles.input}
                    value={selectedRoomType}
                    onChange={handleRoomTypeChange}
                    name='fname'
                    select
                    required
                  >
                    {roomTypes.map((selectableRoomType) => {
                      return (
                        <MenuItem
                          key={selectableRoomType.id}
                          value={selectableRoomType.name}
                        >
                          {selectableRoomType.name}
                        </MenuItem>
                      );
                    })}
                  </TextField>
                </Grid>
                <Grid
                  item
                  mobile={12}
                >
                  <Field
                    as={TextField}
                    className={styles.input}
                    label={t('addRoom.keyOwner')}
                    type='text'
                    name='lname'
                    required
                  />
                </Grid>
                <Grid
                  item
                  mobile={12}
                >
                  <Field
                    as={TextField}
                    className={styles.input}
                    label={t('addRoom.roomNumber')}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    type='number'
                    name='phone'
                    required
                  />
                </Grid>
                <Grid
                  item
                  mobile={12}
                >
                  <Field
                    as={TextField}
                    className={styles.input}
                    label={t('addRoom.floor')}
                    type='number'
                    name='email'
                    required
                  />
                </Grid>
                <Grid
                  item
                  mobile={12}
                >
                  <Field
                    as={TextField}
                    className={styles.input}
                    label={t('addRoom.maxCapacity')}
                    type='number'
                    name='email'
                    required
                  />
                </Grid>
                <Grid
                  item
                  mobile={12}
                >
                  <Field
                    as={TextField}
                    className={styles.input}
                    label={t('addRoom.openingTime')}
                    type='email'
                    name='email'
                    required
                  />
                </Grid>
                <Grid
                  item
                  mobile={12}
                >
                  <Field
                    as={TextField}
                    className={styles.input}
                    label={t('addRoom.closingTime')}
                    type='email'
                    name='email'
                    required
                  />
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
                    {t('addRoom.create')}
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
