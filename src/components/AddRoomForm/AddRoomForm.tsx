import { AddRoomFormErrors, AddRoomFormValues } from './AddRoomForm.types';
import { AddRoomQueryType, RoomTypeDTO, UserDTO } from '../../common/types/OperationTypes.types';
import { Alert, Box, Button, Grid, MenuItem, Snackbar, TextField } from '@mui/material';
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { Field, Formik } from 'formik';
import { useAddRoomMutation, useReadRoomTypesMutation } from '../../common/services/RoomService/RoomService';
import styles from './AddRoomForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useReadUsersMutation } from '../../common/services/UserService/UserService';
import { useTranslation } from 'react-i18next';

export function AddRoomForm() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const validate = (values: AddRoomFormValues) => {
    const errors: AddRoomFormErrors = {};
    const requiredFields = Object.keys(values) as (keyof AddRoomFormValues)[];
    requiredFields
      .filter((field) => {
        return !values[field];
      })
      .forEach((field) => {
        errors[field] = t(`addRoom.${field}Required`) || undefined;
      });
    if (values.closingTime < values.openingTime) {
      errors.closingTime = t(`addRoom.closingTimeBeforeOpeningTime`);
    }
    return errors;
  };
  const [users, setUsers] = useState<UserDTO[]>([]);
  const handleUserInputData = (userData: UserDTO[]) => {
    setUsers(userData);
  };
  const [roomTypes, setRoomTypes] = useState<RoomTypeDTO>([]);
  const handleRoomTypeInputData = (roomTypeData: RoomTypeDTO) => {
    setRoomTypes(roomTypeData);
  };
  const mutateUsers = useReadUsersMutation(handleUserInputData).mutate;
  const mutateRoomTypes = useReadRoomTypesMutation(handleRoomTypeInputData).mutate;
  const { mutate, isSuccess, isError } = useAddRoomMutation();
  useEffect(() => {
    mutateUsers({});
    mutateRoomTypes();
  }, [mutateUsers, mutateRoomTypes]);
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
    <Formik
      enableReinitialize
      validateOnMount={true}
      validateOnChange={true}
      validateOnBlur={true}
      validate={validate}
      initialValues={{
        closingTime: '',
        floor: '',
        keyOwner: '',
        maxCapacity: '',
        openingTime: '',
        roomName: '',
        roomNumber: '',
        roomType: '',
      }}
      onSubmit={(values) => {
        const room: AddRoomQueryType = {
          closingTime: `${values.closingTime}:00`,
          floor: Number(values.floor),
          keyOwner: values.keyOwner,
          maxCapacity: Number(values.maxCapacity),
          name: values.roomName,
          number: Number(values.roomNumber),
          openingTime: `${values.openingTime}:00`,
          type: values.roomType,
        };
        console.log(room);
        mutate(room);
      }}
    >
      {({ isValid, handleSubmit, setFieldValue, values }) => {
        const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          const fieldName = event.target.name;
          const fieldValue = event.target.value;
          setFieldValue(fieldName, fieldValue);
        };
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
                {t('addRoom.successSnackbarRegister')}
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
                {t('addRoom.errorSnackbarRegister')}
              </Alert>
            </Snackbar>
            <Box
              margin={'auto'}
              padding={0}
              boxShadow={'0px 0px 30px #ccc'}
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
                    value={values.roomType}
                    className={styles.input}
                    onChange={handleInputChange}
                    name='roomType'
                    select
                    required
                  >
                    {roomTypes &&
                      roomTypes.map((selectableRoomType) => {
                        return (
                          <MenuItem
                            key={selectableRoomType.id}
                            value={selectableRoomType.id}
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
                  <TextField
                    label={t('addRoom.keyOwner')}
                    className={styles.input}
                    value={values.keyOwner}
                    onChange={handleInputChange}
                    name='keyOwner'
                    select
                    required
                  >
                    {users.map((selectableUser) => {
                      return (
                        <MenuItem
                          key={selectableUser.id}
                          value={selectableUser.id}
                        >
                          {selectableUser.name} {selectableUser.surname}
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
                    label={t('addRoom.roomNumber')}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    type='number'
                    name='roomNumber'
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
                    label={t('addRoom.roomName')}
                    name='roomName'
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
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    type='number'
                    name='floor'
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
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    type='number'
                    name='maxCapacity'
                    required
                  />
                </Grid>
                <Grid
                  item
                  mobile={12}
                >
                  <Field
                    as={TextField}
                    InputLabelProps={{ shrink: true }}
                    className={styles.input}
                    label={t('addRoom.openingTime')}
                    type='time'
                    name='openingTime'
                    required
                  />
                </Grid>
                <Grid
                  item
                  mobile={12}
                >
                  <Field
                    as={TextField}
                    InputLabelProps={{ shrink: true }}
                    className={styles.input}
                    label={t('addRoom.closingTime')}
                    type='time'
                    name='closingTime'
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
