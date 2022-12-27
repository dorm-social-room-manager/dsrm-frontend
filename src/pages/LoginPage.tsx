import { Header } from '../templates/Header/Header';
import { HeaderProps } from '../templates/Header/Header.types';
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
  return <Header {...headerProps} />;
}
