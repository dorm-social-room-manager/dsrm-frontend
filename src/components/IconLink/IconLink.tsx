import * as React from 'react';
import { Link } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface IconLinkProps {
  link: string;
  icon: React.ReactElement<SvgIconComponent>;
}

export type IconLink = React.ReactElement<IconLinkProps>;

export function IconLink(props: IconLinkProps): IconLink {
  return (
    <Link
      target='_blank'
      href={props.link}
      color='inherit'
    >
      {props.icon}
    </Link>
  );
}
