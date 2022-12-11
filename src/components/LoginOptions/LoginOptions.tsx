import { Checkbox, FormControlLabel, Grid, Link } from '@mui/material';

export function LoginOptions() {
  return (
    <Grid
      container
      direction={{
        desktop: 'row',
        mobile: 'column',
        tablet: 'row',
      }}
      alignItems='center'
      justifyContent='center'
      spacing={1}
    >
      <Grid
        item
        mobile={7}
        base={8}
      >
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label='Remeber me'
        />
      </Grid>
      <Grid
        item
        mobile={5}
        base={8}
      >
        <Link href='#'>Forgot Password</Link>
      </Grid>
    </Grid>
  );
}
