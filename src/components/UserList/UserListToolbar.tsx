import { alpha, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { UserListToolbarProps } from './UserList.types';
import { useTranslation } from 'react-i18next';

export function UserListToolbar(props: UserListToolbarProps) {
  const { numSelected } = props;
  const { t } = useTranslation();
  return (
    <Toolbar
      sx={{
        ...(numSelected > 0 && {
          bgcolor: (theme) => {
            return alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity);
          },
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color='inherit'
          variant='subtitle1'
          component='div'
        >
          {numSelected} selected
        </Typography>
      ) : (
        <></>
      )}
      {numSelected > 0 ? (
        <Tooltip title={t('userList.accept')}>
          <IconButton>
            <CheckIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <></>
      )}
    </Toolbar>
  );
}
