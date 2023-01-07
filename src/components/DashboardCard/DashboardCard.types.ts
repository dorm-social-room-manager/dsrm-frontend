import * as React from 'react';
import { SvgIconComponent } from '@mui/icons-material';

export interface DashboardItem {
  icon: SvgIconComponent;
  title: string;
  url: string;
}
export type DashboardCard = React.ReactElement<DashboardItem>;
