import { Button } from '@mui/material';
import { MouseEventHandler } from 'react';

interface buttonFunctions {
  RegisterButtonFunction: MouseEventHandler<HTMLButtonElement>;
}

export function RegisterButton({ RegisterButtonFunction }: buttonFunctions) {
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
      >
        Register
      </Button>
    </div>
  );
}
