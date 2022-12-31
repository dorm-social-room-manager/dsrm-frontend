import { Footer } from '../templates/Footer/Footer';
import { Grid } from '@mui/material';
import { Header } from '../templates/Header/Header';
import { HeaderProps } from '../templates/Header/Header.types';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

export function LoginPage() {
  const { t } = useTranslation();
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const header = tablet ? t(`loginForm.title`) : t(`loginForm.shortTitle`);

  const headerProps: HeaderProps = {
    dormitory: { url: 'https://samorzad.p.lodz.pl/osiedle-akademickie/iv-dom-studenta', urlName: t('header.buildingName') },
    faculty: { url: 'https://www.p.lodz.pl/', urlName: t('header.faculty') },
    headerTitle: header,
  };
  return (
    <Grid container>
      <Grid
        item
        mobile={12}
        tablet={6}
        desktop={6}
      >
        <Header {...headerProps}></Header>
      </Grid>
      <Grid
        item
        mobile={12}
        tablet={6}
        desktop={6}
      >
        <LoginForm />
      </Grid>
      <Grid
        item
        mobile={12}
        tablet={12}
        desktop={12}
      >
        <Footer></Footer>
      </Grid>
    </Grid>
  );
}
