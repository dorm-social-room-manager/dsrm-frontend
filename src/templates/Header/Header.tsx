import { Grid, Link, Typography } from '@mui/material';
import styles from './Header.module.scss';
import { useTheme } from '@mui/material/styles';

export function Header() {
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
            fontWeight: (t) => {
              return t.typography.fontWeightMedium;
            },
            letterSpacing: -1.5,
          }}
        >
          Dorm room social manager
        </Typography>
        <div className={styles.graylinks}>
          <Link
            href='https://samorzad.p.lodz.pl/osiedle-akademickie/iv-dom-studenta
'
            color={theme.palette.primary.dark}
            underline='none'
          >
            IV DS
          </Link>
          <Typography>|</Typography>
          <Link
            href='https://p.lodz.pl/'
            color={theme.palette.primary.dark}
            underline='none'
          >
            Politechnika Łódzka
          </Link>
        </div>
      </Grid>
    </header>
  );
}
