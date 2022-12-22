import * as React from 'react';
import { SvgIconComponent } from '@mui/icons-material';

export interface IconLinkProps {
  link: string;
  description: string;
  icon: React.ReactElement<SvgIconComponent>;
}
