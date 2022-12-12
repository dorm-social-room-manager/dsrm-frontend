import { GitHub, ImportContacts } from '@mui/icons-material';
import { Grid } from '@mui/material';

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
      <ImportContacts></ImportContacts>
      <GitHub></GitHub>
    </Grid>
  );
}
