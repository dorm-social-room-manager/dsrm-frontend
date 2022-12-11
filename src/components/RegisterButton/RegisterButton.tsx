import { Button } from '@mui/material';
import { MouseEventHandler } from 'react';

interface buttonFunctions {
  RegisterButtonFunction: MouseEventHandler<HTMLButtonElement>;
  isRegisterEnabled: boolean;
}

export function RegisterButton({ RegisterButtonFunction, isRegisterEnabled }: buttonFunctions) {
  return (
    <div>
      <Button
        sx={{
          ':hover': {
            bgcolor: 'purple',
            color: 'red',
          },
          bgcolor: 'purple',
          color: 'white',
          padding: 1,
          width: 1,
        }}
        onClick={RegisterButtonFunction}
        disabled={!isRegisterEnabled}
      >
        Register
      </Button>
    </div>
  );
}
