import { Grid, TextField, useMediaQuery, useTheme } from '@mui/material';
import { ChangeEvent } from 'react';
import { PasswordInput } from '../PasswordInput/PasswordInput';

interface registerInputHandlers {
  handleEmail: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handlePass: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleFName: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleLName: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleRoomNr: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export function RegisterInput({ handleEmail, handleFName, handleLName, handlePass, handleRoomNr }: registerInputHandlers) {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('tablet'));

  return (
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
        <TextField
          className='input'
          label='First Name'
          type='text'
          name='fname'
          onChange={(e) => {
            handleFName(e);
          }}
          required
        />
      </Grid>
      <Grid
        item
        tablet={6}
        mobile={12}
      >
        <TextField
          className='input'
          label='Last Name'
          type='text'
          name='lname'
          onChange={(e) => {
            handleLName(e);
          }}
          required
        />
      </Grid>
      <Grid
        item
        tablet={6}
        mobile={12}
      >
        <TextField
          className='input'
          label='Room Number'
          type='number'
          name='room'
          onChange={(e) => {
            handleRoomNr(e);
          }}
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
        <TextField
          className='input'
          label='e-mail'
          type='email'
          name='email'
          onChange={(e) => {
            handleEmail(e);
          }}
          required
        />
      </Grid>
      <Grid
        item
        tablet={6}
        mobile={12}
      >
        <PasswordInput handlePass={handlePass} />
      </Grid>
    </Grid>
  );
}
