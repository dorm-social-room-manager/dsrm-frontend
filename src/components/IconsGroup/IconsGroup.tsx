import { GitHub, ImportContacts } from '@mui/icons-material';
import { Grid, Link } from '@mui/material';

export function IconsGroup() {
  return (
    <Grid
      container
      item
      alignItems='center'
      justifyContent='center'
      mobile={3}
      tablet={3}
      columnGap={4}
    >
      <Link
        target='_blank'
        href='https://github.com/dorm-social-room-manager/dsrm-frontend/wiki'
        color='inherit'
      >
        <ImportContacts> </ImportContacts>
      </Link>

      <Link
        target='_blank'
        href='https://github.com/dorm-social-room-manager'
        color='inherit'
      >
        <GitHub></GitHub>
      </Link>
    </Grid>
  );
}
