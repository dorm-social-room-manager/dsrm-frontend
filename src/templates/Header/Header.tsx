import { Divider, Grid, Link, Typography } from '@mui/material';
import { HeaderProps } from './Header.types';
import styles from './Header.module.scss';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export function Header(props: HeaderProps) {
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const MOBILE_PADDING = 3;
  const NON_MOBILE_PADDING = 0;
  const linksClassName = tablet ? styles.links : styles.linksMobile;
  return (
    <div className={styles.container}>
      <Typography
        variant='h2'
        component='h2'
        sx={{
          maxWidth: 480,
        }}
      >
        {props.headerTitle}
      </Typography>
      <Divider
        sx={{ backgroundColor: theme.palette.action.disabledBackground, marginBottom: 1, marginTop: 1 }}
        className={styles.divider}
      />
      <Grid
        item
        className={linksClassName}
        paddingRight={tablet ? NON_MOBILE_PADDING : MOBILE_PADDING}
        paddingLeft={tablet ? NON_MOBILE_PADDING : MOBILE_PADDING}
      >
        <Link
          href={props.dormitory.url}
          color={theme.palette.primary.dark}
          underline='none'
          variant='body1'
        >
          {props.dormitory.urlName}
        </Link>
        <Typography>|</Typography>
        <Link
          href={props.faculty.url}
          color={theme.palette.primary.dark}
          underline='none'
          variant='body1'
        >
          {props.faculty.urlName}
        </Link>
      </Grid>
    </div>
  );
}
