import { Footer } from '../../templates/Footer/Footer';
import { Grid } from '@mui/material';
import { Header } from '../../templates/Header/Header';
import { HeaderProps } from '../../templates/Header/Header.types';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { StyledBox } from '../../common/utils/Page.styled';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

export function LoginPage() {
  const { t } = useTranslation();
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.up('tablet'));
  const header = tablet ? t(`loginForm.title`) : t(`loginForm.shortTitle`);

  const paddingTopValueForLoginFormWhenTablet = 0;
  const paddingTopValueForLoginFormWhenMobile = 10;
  const paddingTopValueForLoginForm = tablet ? paddingTopValueForLoginFormWhenTablet : paddingTopValueForLoginFormWhenMobile;

  const paddingLeftRightValueForContainer = 2;
  const paddingTopValueForFooterHeader = 2;
  const headerProps: HeaderProps = {
    dormitory: { url: 'https://samorzad.p.lodz.pl/osiedle-akademickie/iv-dom-studenta', urlName: t('header.buildingName') },
    faculty: { url: 'https://www.p.lodz.pl/', urlName: t('header.faculty') },
    headerTitle: header,
  };
  return (
    <Grid
      container
      justifyContent={'center'}
      alignItems={'flex-end'}
      height={'100vh'}
    >
      <Grid
        item
        container
        justifyContent={'center'}
        alignItems={'center'}
        paddingLeft={paddingLeftRightValueForContainer}
        paddingRight={paddingLeftRightValueForContainer}
        paddingTop={paddingTopValueForFooterHeader}
      >
        <Grid
          item
          mobile={12}
          tablet={6}
          desktop={6}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <StyledBox>
            <Header {...headerProps}></Header>
          </StyledBox>
        </Grid>
        <Grid
          item
          mobile={12}
          tablet={6}
          desktop={6}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <StyledBox paddingTop={paddingTopValueForLoginForm}>
            <LoginForm />
          </StyledBox>
        </Grid>
      </Grid>

      <Grid
        item
        mobile={12}
        tablet={12}
        desktop={12}
        alignSelf={'flex-end'}
        paddingTop={paddingTopValueForFooterHeader}
      >
        <Footer></Footer>
      </Grid>
    </Grid>
  );
}
