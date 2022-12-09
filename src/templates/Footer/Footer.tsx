import '@fontsource/roboto';
import { Grid, Typography } from '@mui/material';

export function Footer() {
  return (
    <footer>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        bgcolor='#1976D2'
        spacing={0}
        padding={0}
        height={158}
      >
        <Grid
          style={{ textAlign: 'center' }}
          color='#ffffff'
        >
          <div style={{ alignItems: 'center', display: 'flex', gap: 4 }}>
            <Typography sx={{ fontWeight: '500' }}>Copyright © 2022 </Typography>
            <Typography sx={{ fontWeight: '700' }}>DSRM Team. </Typography>
            <Typography sx={{ fontWeight: '700', textDecoration: 'underline' }}>Policy terms</Typography>
          </div>
        </Grid>
      </Grid>
    </footer>
  );
}
