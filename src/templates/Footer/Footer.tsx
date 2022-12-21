import { GitHub, ImportContacts } from '@mui/icons-material';
import { Grid, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import { IconLink } from '../../components/IconLink/IconLink';
import { IconsGroup } from '../../components/IconsGroup/IconsGroup';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const customTheme = useTheme();
  const tablet: boolean = useMediaQuery(customTheme.breakpoints.up('mobile'));
  const mobileGap = 4;
  const tabletGap = 0;
  const { t } = useTranslation();
  const githubIcon = <GitHub />;
  const wikiIcon = <ImportContacts />;
  const pics = [githubIcon, wikiIcon];
  const links = ['https://github.com/dorm-social-room-manager/dsrm-frontend/wiki', 'https://github.com/dorm-social-room-manager'];
  const icons = [];
  for (let i = 0; i < pics.length && i < links.length; i++) {
    icons.push(
      <IconLink
        link={links[i]}
        icon={pics[i]}
      ></IconLink>
    );
  }
  return (
    <footer>
      <Grid
        container
        justifyContent='center'
        alignItems='center'
        height={158}
        bgcolor={customTheme.palette.primary.main}
        color={customTheme.palette.common.white}
        direction={tablet ? 'row' : 'column'}
        gap={tablet ? tabletGap : mobileGap}
        marginTop={0}
      >
        <div>
          <Typography
            sx={{
              display: 'inline',
              fontWeight: (theme) => {
                return theme.typography.fontWeightMedium;
              },
            }}
          >
            {t('footer.copyright')}
          </Typography>
          <Typography
            sx={{
              display: 'inline',
              fontWeight: (theme) => {
                return theme.typography.fontWeightBold;
              },
            }}
          >
            {` ${t('footer.authors')} `}
          </Typography>
          <Typography
            sx={{
              display: 'inline',
              fontWeight: (theme) => {
                return theme.typography.fontWeightBold;
              },
              textDecoration: 'underline',
            }}
          >
            <Link
              href='https://github.com/dorm-social-room-manager/dsrm-frontend/blob/master/LICENSE.MD'
              target='_blank'
              color='inherit'
            >
              {t('footer.policy')}
            </Link>
          </Typography>
        </div>
        <IconsGroup icons={icons}></IconsGroup>
      </Grid>
    </footer>
  );
}
