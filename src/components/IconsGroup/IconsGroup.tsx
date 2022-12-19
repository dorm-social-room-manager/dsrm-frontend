import * as React from 'react';
import { Grid } from '@mui/material';
import { Link } from '@mui/material';
import { SvgIconComponent } from '@mui/icons-material';

interface IconsGroupProps {
  icons: React.ReactElement<SvgIconComponent>[];
  links: string[];
}

export function IconsGroup(props: IconsGroupProps) {
  const elements = [];
  if (props.icons.length !== props.links.length) {
    throw new Error('IconsGroup: icons and links arrays must be the same length');
  } else {
    for (let i = 0; i < props.icons.length; i++) {
      elements.push(
        <Link
          target='_blank'
          href={props.links[i]}
          color='inherit'
        >
          {props.icons[i]}
        </Link>
      );
    }
  }

  return (
    <Grid
      container
      item
      alignItems='center'
      justifyContent='center'
      mobile={3}
      tablet={3}
      columnGap={4}
    >
      {elements}
    </Grid>
  );
}
