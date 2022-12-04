import '@fontsource/roboto';
import '@fontsource/roboto-mono';
import { Grid, Link, Typography } from '@mui/material';

export function Header() {
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
          sx={{ borderBottom: 1, borderColor: '#0000001F', fontFamily: 'Roboto Mono', fontSize: 64, fontWeight: '500', letterSpacing: -1.5 }}
        >
          Dorm room social manager
        </Typography>
        <div style={{ alignItems: 'center', display: 'flex', fontFamily: 'Roboto Mono', fontSize: 16, gap: 16, letterSpacing: 0.15 }}>
          <Link
            href='https://samorzad.p.lodz.pl/osiedle-akademickie/iv-dom-studenta
'
            color='#1565C0'
            underline='none'
          >
            IV DS
          </Link>
          <Typography>|</Typography>
          <Link
            href='https://p.lodz.pl/'
            color='#1565C0'
            underline='none'
          >
            Politechnika Łódzka
          </Link>
        </div>
      </Grid>
    </header>
  );
}
