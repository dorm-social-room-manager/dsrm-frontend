import { Grid, Link, Typography } from '@mui/material';
import { HeaderProps } from './Header.types';
import styles from './Header.module.scss';
import { useTheme } from '@mui/material/styles';

export function Header(props: HeaderProps) {
  const theme = useTheme();
  return (
    <header>
      <Grid
        container
        direction='column'
        alignItems='center'
        justifyContent='center'
        spacing={0}
        padding={0}
      >
        <Typography
          sx={{
            borderBottom: 1,
            borderColor: theme.palette.action.disabledBackground,
            fontFamily: 'Roboto Mono',
            fontSize: theme.typography.h2.fontSize,
            fontWeight: (them) => {
              return them.typography.fontWeightMedium;
            },
            letterSpacing: -1.5,
          }}
        >
          {props.headerTitle}
        </Typography>
        <div className={styles.links}>
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
        </div>
      </Grid>
    </header>
  );
}
