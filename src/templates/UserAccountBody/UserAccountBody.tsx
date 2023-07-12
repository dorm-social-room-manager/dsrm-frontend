import { Avatar, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { t } from 'i18next';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

export function UserAccountBody() {
  const [mode, setMode] = useState('Dark');
  const [language, setLanguage] = useState('en');

  const theme = useTheme();
  const { i18n } = useTranslation();
  const isTabletOrHigher = useMediaQuery(theme.breakpoints.up('tablet'));

  const width = isTabletOrHigher ? 150 : 75;
  const height = isTabletOrHigher ? 150 : 75;
  const userAvatar = 'https://www.w3schools.com/howto/img_avatar.png';

  const modes: string[] = ['Dark', 'Light'];
  const languages: string[] = ['pl', 'en'];

  const handleModeChange = (event: SelectChangeEvent) => {
    setMode(event.target.value);
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    localStorage.setItem('lng', event.target.value);
    void i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    const currentLanguage = i18n.language;
    setLanguage(currentLanguage);
  }, [i18n.language]);

  return (
    <Grid
      display={'flex'}
      flexDirection={'column'}
      width={'35rem'}
      alignItems={isTabletOrHigher ? 'normal' : 'center'}
      justifyContent={'center'}
    >
      <Typography
        fontSize={18}
        fontWeight={'700'}
        sx={{ color: 'rgba(0,0,0,0.6)', marginBottom: '1.5rem' }}
      >
        {t('userAccount.userData')}
      </Typography>
      <Grid
        item
        container
        flexDirection={isTabletOrHigher ? 'row' : 'column'}
        wrap={'nowrap'}
        height={isTabletOrHigher ? '10rem' : 'auto'}
        marginBottom={isTabletOrHigher ? '4rem' : '2rem'}
        alignItems={isTabletOrHigher ? 'normal' : 'center'}
      >
        <Avatar
          src={userAvatar}
          sx={{
            height: height,
            marginBottom: isTabletOrHigher ? '0rem' : '2rem',
            marginLeft: '0.5rem',
            marginRight: isTabletOrHigher ? '6rem' : '0',
            width: width,
          }}
        />
        <Grid
          item
          container
          flexDirection={'column'}
          marginLeft={'0.5rem'}
          height={'100%'}
          justifyContent={'space-between'}
          alignItems={isTabletOrHigher ? 'normal' : 'center'}
        >
          <TextField
            label={t('userAccount.firstName')}
            type='text'
            name='name'
            sx={{ marginBottom: isTabletOrHigher ? '0rem' : '2rem', maxWidth: '230px' }}
            disabled
            required
          />
          <TextField
            label={t('userAccount.lastName')}
            type='text'
            name='name'
            sx={{ maxWidth: '230px' }}
            disabled
            required
          />
        </Grid>
      </Grid>
      <Grid
        item
        container
        flexDirection={isTabletOrHigher ? 'row' : 'column'}
        marginLeft={'0.5rem'}
        marginBottom={'1.5rem'}
        width={'100%'}
        justifyContent={'space-between'}
        alignItems={isTabletOrHigher ? 'normal' : 'center'}
      >
        <TextField
          label={t('userAccount.roomNumber')}
          type='text'
          name='name'
          sx={{ marginBottom: isTabletOrHigher ? '0rem' : '2rem', maxWidth: '230px' }}
          disabled
          required
        />
        <TextField
          label={t('userAccount.email')}
          type='text'
          name='name'
          sx={{ maxWidth: '230px' }}
          disabled
          required
        />
      </Grid>
      <Typography
        fontSize={18}
        fontWeight={'700'}
        sx={{ color: 'rgba(0,0,0,0.6)', marginBottom: '1.5rem' }}
      >
        {t('userAccount.otherSettings')}
      </Typography>
      <Grid
        item
        container
        flexDirection={'column'}
        marginLeft={'0.5rem'}
        alignItems={isTabletOrHigher ? 'normal' : 'center'}
      >
        <InputLabel id='language-select-label'>{t('userAccount.language')}</InputLabel>
        <Select
          labelId='language-select-label'
          id='language-select'
          type='text'
          value={language}
          onChange={handleLanguageChange}
          sx={{ marginBottom: '2rem', width: '230px' }}
        >
          {languages.map((elem, index) => {
            return (
              <MenuItem
                value={elem}
                key={index}
              >
                {elem}
              </MenuItem>
            );
          })}
        </Select>
        <InputLabel id='theme-select-label'>{t('userAccount.theme')}</InputLabel>
        <Select
          labelId='theme-select-label'
          id='theme-select'
          type='text'
          value={mode}
          onChange={handleModeChange}
          sx={{ width: '230px' }}
        >
          {modes.map((elem, index) => {
            return (
              <MenuItem
                value={elem}
                key={index}
              >
                {elem}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
    </Grid>
  );
}
