import { Divider, Grid, Link, Typography } from '@mui/material';
import { HeaderProps } from './Header.types';
import styles from './Header.module.scss';
import { useTheme } from '@mui/material/styles';

export function Header(props: HeaderProps) {
  const theme = useTheme();
  return (
    <div className={styles.container}>
      <Typography
        sx={{
          fontFamily: 'Roboto Mono',
          fontSize: theme.typography.h2.fontSize,
          fontWeight: (them) => {
            return them.typography.fontWeightMedium;
          },
          letterSpacing: -1.5,
          maxWidth: 560,
        }}
      >
        {props.headerTitle}
      </Typography>
      <Divider
        sx={{ backgroundColor: theme.palette.action.disabledBackground }}
        className={styles.divider}
      />
      <Grid
        item
        className={styles.links}
      >
        <Link
          href={props.dormitory.url}
          color={theme.palette.primary.dark}
          underline='none'
        >
          {props.dormitory.urlName}
        </Link>
        <Typography>|</Typography>
        <Link
          href={props.faculty.url}
          color={theme.palette.primary.dark}
          underline='none'
        >
          {props.faculty.urlName}
        </Link>
      </Grid>
    </div>
  );
}
