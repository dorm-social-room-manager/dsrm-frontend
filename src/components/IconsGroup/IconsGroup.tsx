import Grid from '@mui/material/Grid';
import { IconLink } from '../IconLink/IconLink';

interface IconsGroupProps {
  icons: IconLink[];
}

export function IconsGroup(props: IconsGroupProps) {
  const listItems = props.icons.map((ic, idx) => {
    return <li key={idx}>{ic}</li>;
  });

  return (
    <Grid
      container
      item
      alignItems='center'
      justifyContent='center'
      mobile={3}
      tablet={3}
      columnGap={4}
      sx={{ listStyle: 'none', textDecoration: 'none' }}
    >
      {listItems}
    </Grid>
  );
}
