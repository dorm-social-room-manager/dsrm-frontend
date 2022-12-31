import { Box, Grid } from '@mui/material';
import { Footer } from '../templates/Footer/Footer';
import { Header } from '../templates/Header/Header';
import { HeaderProps } from '../templates/Header/Header.types';
import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

export function RegisterPage() {
  const { t } = useTranslation();
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const header = tablet ? t(`registerForm.title`) : t(`registerForm.shortTitle`);

  const marginTopValueForAllItemsWhenTablet = 18;
  const marginTopValueForAllItemsWhenMobile = 0;
  const marginTopValueForAllItems = tablet ? marginTopValueForAllItemsWhenTablet : marginTopValueForAllItemsWhenMobile;

  const paddingTopValueForLoginFormWhenMobile = 10;
  const paddingTopValueForLoginFormWhenTablet = 0;
  const paddingTopValueForLoginForm = tablet ? paddingTopValueForLoginFormWhenTablet : paddingTopValueForLoginFormWhenMobile;

  const marginTopValueForHeaderWhenMobile = 6;
  const marginTopValueForHeaderWhenTablet = 0;
  const marginTopValueForHeader = tablet ? marginTopValueForHeaderWhenTablet : marginTopValueForHeaderWhenMobile;

  const headerProps: HeaderProps = {
    dormitory: { url: 'https://samorzad.p.lodz.pl/osiedle-akademickie/iv-dom-studenta', urlName: t('header.buildingName') },
    faculty: { url: 'https://www.p.lodz.pl/', urlName: t('header.faculty') },
    headerTitle: header,
  };
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'center'}
      marginTop={marginTopValueForAllItems}
    >
      <Grid
        item
        mobile={12}
        tablet={6}
        desktop={6}
        marginTop={marginTopValueForHeader}
      >
        <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
          <Header {...headerProps}></Header>
        </Box>
      </Grid>
      <Grid
        item
        mobile={12}
        tablet={6}
        desktop={6}
      >
        <Box
          paddingTop={paddingTopValueForLoginForm}
          sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
        >
          <RegisterForm />
        </Box>
      </Grid>
      <Box sx={{ bottom: 0, position: 'fixed', width: '100%' }}>
        <Footer></Footer>
      </Box>
    </Grid>
  );
}
