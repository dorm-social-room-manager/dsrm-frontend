import { styled } from '@mui/material';

export const IconsListStyled = styled('ul')(() => {
  return {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',

    gap: '2rem',
    justifyContent: 'center',
    listStyleType: 'none',

    marginBlockEnd: '0px',
    marginBlockStart: '0px',

    paddingInlineStart: '0px',
    textDecoration: 'none',
  };
});

export const IconsListItemStyled = styled('li')(() => {
  return { display: 'inline' };
});
