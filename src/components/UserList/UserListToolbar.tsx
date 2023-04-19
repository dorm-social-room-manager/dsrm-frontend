import { alpha, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import { UserListToolbarProps, UserTypesId } from './UserList.types';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from 'react-i18next';

export function UserListToolbar(props: UserListToolbarProps) {
  const { selected } = props;
  const numSelected = selected.length;
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
        <>
          {selected.every((row) => {
            /*back doesn't have a pending type yet, this will need to be changed later*/
            return row.roles?.at(0)?.id === UserTypesId.PENDING;
          }) ? (
            <Tooltip title={t('userList.accept')}>
              <IconButton>
                <CheckIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <></>
          )}
          {selected.every((row) => {
            return row.roles?.at(0)?.id !== UserTypesId.ADMIN;
          }) ? (
            <Tooltip title={t('userList.del')}>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </Toolbar>
  );
}
