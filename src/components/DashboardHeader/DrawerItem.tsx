import { Link, ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIcon } from '@mui/material';
import { DashboardItem } from '../DashboardCard/DashboardCard.types';
import { Link as RouterLink } from 'react-router-dom';
export function DrawerItem(props: DashboardItem) {
  return (
    <Link
      component={RouterLink}
      to={props.url}
      underline='none'
      color='inherit'
    >
      <ListItem
        key={props.title}
        disablePadding
      >
        <ListItemButton>
          <ListItemIcon>
            <SvgIcon
              color={'inherit'}
              component={props.icon}
            />
          </ListItemIcon>
          <ListItemText primary={props.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
}
