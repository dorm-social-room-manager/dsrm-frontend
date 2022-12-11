import { Button } from '@mui/material';
import { MouseEventHandler } from 'react';

interface buttonFunctions {
  LoginButtonFunction: MouseEventHandler<HTMLButtonElement>;
  isLoginEnabled: boolean;
}

export function LoginButton({ LoginButtonFunction, isLoginEnabled }: buttonFunctions) {
  return (
    <Button
      sx={{
        ':hover': {
          bgcolor: '#4287f5',
          color: 'red',
        },
        bgcolor: '#4287f5',
        color: 'white',
        padding: 1,
        width: 1,
      }}
      onClick={LoginButtonFunction}
      disabled={!isLoginEnabled}
    >
      Login
    </Button>
  );
}
