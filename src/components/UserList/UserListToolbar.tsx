import { alpha, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { UserListToolbarProps } from './UserList.types';
import { useTranslation } from 'react-i18next';

export function UserListToolbar(props: UserListToolbarProps) {
  const { selected, rows } = props;
  const numSelected = selected.length;
  const selectedRows = rows.filter((row) => {
    return selected.includes(row.id);
  });
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
          {selectedRows.some((row) => {
            return row.userType === 'Pending';
          }) ? (
            <Tooltip title={t('userList.accept')}>
              <IconButton>
                <CheckIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <></>
          )}
          {selectedRows.some((row) => {
            return row.userType !== 'Admin';
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
