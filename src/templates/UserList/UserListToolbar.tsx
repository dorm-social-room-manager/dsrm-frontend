import { alpha, IconButton, Toolbar, Tooltip, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { CustomTableToolbarProps } from '../../components/CustomTable/CustomTable.types';
import DeleteIcon from '@mui/icons-material/Delete';
import { User } from '../../common/types/componentTypes.types';
import { useTranslation } from 'react-i18next';

export function UserListToolbar(props: CustomTableToolbarProps<User>) {
  const { selected, allRows } = props;
  const numSelected = selected.length;
  const selectedRows = allRows.filter((row, index) => {
    return allRows.indexOf(row) === Number(selected[index]);
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
          {selectedRows.every((row) => {
            return row.roles?.includes({ id: '0', name: 'admin' });
          }) ? (
            <Tooltip title={t('userList.accept')}>
              <IconButton>
                <CheckIcon />
              </IconButton>
            </Tooltip>
          ) : (
            <></>
          )}
          {selectedRows.every((row) => {
            return row.roles?.includes({ id: '1', name: 'user' });
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