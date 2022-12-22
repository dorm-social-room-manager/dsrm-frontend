import * as React from 'react';
import { IconLinkProps } from './IconLink.types';
import { Link } from '@mui/material';

export function IconLink(props: IconLinkProps): IconLink {
  return (
    <Link
      target='_blank'
      href={props.link}
      aria-label={props.description}
      color='inherit'
    >
      {props.icon}
    </Link>
  );
}
export type IconLink = React.ReactElement<IconLinkProps>;
