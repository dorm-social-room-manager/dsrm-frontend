import { Grid, TextField, useMediaQuery, useTheme } from '@mui/material';

export function RegisterInput() {
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
          label='Password'
          type='password'
          name='password'
          required
        />
      </Grid>
    </Grid>
  );
}
